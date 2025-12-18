"use client";

import React, { createContext, useState } from "react";

// Create context
export const AuthDialogContext = createContext(null);

// Provider component
export const AuthDialogProvider = ({ children }) => {
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [isFailedDialogOpen, setIsFailedDialogOpen] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  return (
    <AuthDialogContext.Provider
      value={{
        isSuccessDialogOpen,
        setIsSuccessDialogOpen,
        isFailedDialogOpen,
        setIsFailedDialogOpen,
        isUserRegistered,
        setIsUserRegistered,
      }}
    >
      {children}
    </AuthDialogContext.Provider>
  );
};

export default AuthDialogContext;
