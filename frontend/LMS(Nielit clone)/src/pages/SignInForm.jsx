import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = ({ toggleForm }) => {
  const [user, setUser] = useState({
    userType: "",
    username: "",
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
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("login successfully");
        setUser({ userType: "", username: "", password: "" });
        navigate("/");
      } else {
        alert("invalid credential");
        console.log("invalid credential");
      }

      console.log(response);
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">NIELIT HARIDWAR</h2>
        <h2 className="h5 mb-4 text-center fw-bold">Sign In</h2>
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
          Login
        </button>
        <div className="text-center mt-3">
          <p className="text-muted">Don not have an account?</p>
          <button type="button" className="btn btn-link" onClick={toggleForm}>
            Sign up here
          </button>
        </div>
      </form>
    </>
  );
};

SignInForm.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default SignInForm;
