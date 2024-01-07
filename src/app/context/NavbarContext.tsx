// NavbarContext.tsx
"use client";
import React, { createContext, useState, useContext } from "react";

interface NavbarContextType {
  operation: string;
  updateOperation: (newOperation: string) => void;
}

const NavbarContext = createContext<NavbarContextType>({
  operation: "Home",
  updateOperation: () => {},
});

export const useNavbarContext = () => useContext(NavbarContext);

// Define the type for the props of NavbarProvider
interface NavbarProviderProps {
  children: React.ReactNode;
}

export const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const [operation, setOperation] = useState("Home");

  const updateOperation = (newOperation: string) => {
    setOperation(newOperation);
  };

  return (
    <NavbarContext.Provider value={{ operation, updateOperation }}>
      {children}
    </NavbarContext.Provider>
  );
};
