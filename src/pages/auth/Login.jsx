import { useNavigate } from "react-router-dom";
import React from "react";

function Login() {
  const navigate = useNavigate();
  function handleLogin (){
    // user outh system
    navigate("/admin")
  }
  function handleBackHome (){
    navigate("/")
  }

  return (
    <div>
      <div>
        <h2>Login Page</h2>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleBackHome}>← Back Home</button>
      </div>
    </div>
  );
}

export default Login;
