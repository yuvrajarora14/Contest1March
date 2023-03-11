import React, { useState } from "react";
import './App.css';

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setEmailError("invalid email format");
      setIsValid(false);
    } else {
      setEmailError("");
      setIsValid(true);
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      setIsValid(false);
    } else {
      setPasswordError("");
      setIsValid(true);
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      setIsValid(false);
    } else {
      setConfirmPasswordError("");
      setIsValid(true);
    }

    if (emailError === "" && passwordError === "" && confirmPasswordError === "") {
      alert("Form submitted successfully!");
    }
    else {
      alert("Form cannot be submitted!");
    }
  };


  const inputStyle = {
    border: '2px solid',
    borderColor: isValid ? 'green' : 'red'
  };

  return (
    <>
    <div className="main">
    <form onSubmit={handleSubmit}>
<div className="field">
        <label>Email:</label> <br />
        <input type="text" value={email} onChange={handleEmailChange} style={inputStyle} /> <br />
        {emailError !== "" && <span id="error">{emailError}</span>}
      <br />

        <label>Password:</label> <br />
        <input type="password" value={password} onChange={handlePasswordChange} style={inputStyle} /> <br />
        {passwordError !== "" && <span id="error">{passwordError}</span>}
      <br />

        <label>Confirm Password:</label> <br />
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} style={inputStyle} /> <br />
        {confirmPasswordError !== "" && <span id="error">{confirmPasswordError}</span>}
      <br /> <br />
      <button id="signUp" type="submit">Sign Up</button>
      </div>
      
    </form>
    </div>
    </>
  );
};

export default Form;
