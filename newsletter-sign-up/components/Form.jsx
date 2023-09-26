"use client";

import { useState } from "react";

import { useEmail } from "@context/EmailContext";

const Form = () => {
  const { email, setEmail, validateEmail } = useEmail();
  const [isError, setIsError] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Email is valid, you can proceed with further actions
      setIsError(false);
      console.log(email);
    } else {
      // Email is not valid, handle the error
      console.log("Error");
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__label-container">
        <label htmlFor="input__email" className="form__label">
          Email address
        </label>
        {isError && <span className="error-message">Valid email required</span>}
      </div>
      <input
        name="email"
        id="input__email"
        className={`input__email ${isError ? "error" : ""}`}
        placeholder="email@company.com"
        value={email}
        onChange={handleEmailChange}
      />

      <button type="submit" className="submit-btn">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;
