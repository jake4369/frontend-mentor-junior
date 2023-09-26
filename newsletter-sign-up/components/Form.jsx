"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEmail } from "@context/EmailContext";
import Button from "./Button";

const Form = () => {
  const { email, setEmail, validateEmail } = useEmail();
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Email is valid, you can proceed with further actions
      setIsError(false);
      router.push("/confirmation");
    } else {
      // Email is not valid, handle the error
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
        type="email"
        name="email"
        id="input__email"
        className={`input__email ${isError ? "error" : ""}`}
        placeholder="email@company.com"
        value={email}
        onChange={handleEmailChange}
      />

      <Button>Subscribe to monthly newsletter</Button>
    </form>
  );
};

export default Form;
