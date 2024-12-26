import { useState } from "react";
import SignInForm from "../pages/SignInForm";
import SignUpForm from "../pages/SignUpForm";
import img1 from "../assets/loginimage.png"

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light ">
        <img src={img1} className="pe-5"></img>
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        {isSignIn ? (
          <SignInForm toggleForm={toggleForm} />
        ) : (
          <SignUpForm toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
