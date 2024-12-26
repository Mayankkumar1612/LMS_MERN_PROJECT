import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ toggleForm }) => {
  const [user, setUser] = useState({
    userType: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("register successfully");
        setUser({ userType: "", username: "", email: "", password: "" });
        navigate("/signinform");
      } else {
        alert("invalid credential");
        console.log("invalid credential");
      }

      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">NIELIT HARIDWAR</h2>
        <h2 className="h5 mb-4 text-center fw-bold">Sign Up</h2>
        <div className="mb-3">
          <label htmlFor="userType" className="form-label">
            Select User
          </label>
          <input
            type="text"
            className="form-control"
            list="browsers"
            id="userType"
            name="userType"
            placeholder="Select User"
            value={user.userType}
            onChange={handleInput}
          />
          <datalist id="browsers">
            <option value="Admin" />
            <option value="Staff" />
            <option value="Student" />
          </datalist>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
        <div className="text-center mt-3">
          <p className="text-muted">Already have an account?</p>
          <button type="button" className="btn btn-link" onClick={toggleForm}>
            Sign in here
          </button>
        </div>
      </form>
    </>
  );
};

SignUpForm.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default SignUpForm;
