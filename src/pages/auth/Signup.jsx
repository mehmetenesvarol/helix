import { useNavigate } from "react-router-dom";
import React from "react";

function Signup() {
  const navigate = useNavigate();
  function handleSignup (){
    //checking inputs for empty
    //api auth db
  }
  function handleBackHome (){
    navigate("/")
  }
  return (
    <div>
      <div>Signup Page</div>
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleBackHome}>← Back Home</button>
    </div>
  );
}

export default Signup;
