require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const signupSchema = require("./validators/auth-validator");
const validate = require("./middlewares/validate-middlewares");
const errorMiddleware = require("./middlewares/error-middleware");
const Centre = require("./models/Centre.models.js");
const ExamCentre = require("./models/Examcentre.model.js");
const ExamSupritendent = require("./models/ExamSupritendent.models.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(errorMiddleware);

// Connect to MongoDB
const URI = process.env.MONGODB_URI;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Secret key for JWT
const JWT_SECRET = "Mayankkumar";

// Registration API
app.post("/register", validate(signupSchema), async (req, res) => {
  const { userType, username, email, password } = req.body;

  if (!userType || !username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userExits = await User.findOne({ email });

    if (userExits) {
      return res.status(409).json({ message: "email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      userType,
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user", error });
  }
});

// Login API
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, userType: user.userType },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

// Centre API
app.post("/centre", async (req, res) => {
  const { centreCode, centreName, centreCity, centerState, centerCountry } =
    req.body;
  console.log(req.body);
  const newCentre = new Centre({
    centreCode,
    centreName,
    centerCountry,
    centerState,
    centreCity,
  });
  const result = await newCentre.save();

  res.send({ message: `data received ${result}` });
});

// ExamCentre API
app.post("/examCentre", async (req, res) => {
  const { esCode, centreName, examDate, cityName, stateid, countryid } = req.body;

  try {
    const newExamCentre = new ExamCentre({
      esCode,
      centreName,
      examDate,
      cityName,
      stateid,
      countryid,
    });

    const result = await newExamCentre.save();
    res.status(201).send({ message: "Data saved successfully", result });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send({ message: "Error saving data", error });
  }
});

// ExamSupritendent API
app.post("/examSupritendent", async (req, res) => {
  const {
    esCode,
    esName,
    esSex,
    email,
    mobile,
    education,
    experience,
    jobType,
    address,
    countryId,
    stateId,
    city,
  } = req.body;
  console.log(req.body);
  const newExamSupritendent = new ExamSupritendent({
    esCode,
    esName,
    esSex,
    email,
    mobile,
    education,
    experience,
    jobType,
    address,
    countryId,
    stateId,
    city,
  });
  const result = await newExamSupritendent.save();

  res.send({ message: `data received ${result}` });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
