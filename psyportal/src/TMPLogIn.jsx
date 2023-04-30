import React, { useState } from "react";

import "./components/styles.css";
import { Outlet } from "react-router-dom";



var uData = ''


function TMPLogIn() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  // User Login info
  const database = [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "student",
      password: "student"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    uData = pass.value
    
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
      uData = userData
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="m-auto w-96 shadow-2xl p-5 flex justify-center">
    <div className="form">
        
        <div className="title">Sign In</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container ">
          <input type="submit" className="rounded"/>
        </div>
      </form>
    </div>
    </div>
  );

  return (
    <div className="">
        <div className="app">
      <div className="login-form">
        {isSubmitted ? <Outlet /> : renderForm}
      </div>
    </div>
    </div>
    
  );
}

export default TMPLogIn;