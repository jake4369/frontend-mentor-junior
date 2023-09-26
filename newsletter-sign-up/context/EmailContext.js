"use client";

import { createContext, useContext, useState } from "react";

// Create a context for the email
const EmailContext = createContext();

// Create a custom hook to access the email and its validation function
export function useEmail() {
  return useContext(EmailContext);
}

// Create a provider component to wrap your application
export function EmailProvider({ children }) {
  // State to store the email
  const [email, setEmail] = useState("");

  // Function to validate the email
  const validateEmail = (input) => {
    // You can implement your email validation logic here
    // For example, you can use a regex pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(input);
  };

  // Expose the email and validation function to the components
  const value = {
    email,
    setEmail,
    validateEmail,
  };

  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
}
