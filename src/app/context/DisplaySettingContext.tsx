import React, { createContext, useContext, useState } from "react";

// Define the context shape
const DisplaySettingContext = createContext({
  fontSize: "medium", // small, medium, large
  windowColor: "#60a5fa", // Default color
  theme: "light", // light or dark
  setSettings: (settings: any) => {}, // Placeholder for a function to update settings
});

// Provider component
export const DisplaySettingProvider = ({ children }: any) => {
  const [settings, setSettings] = useState({
    fontSize: "medium",
    windowColor: "#60a5fa",
    theme: "light",
  });

  const handleSetSettings = (newSettings: any) => {
    setSettings((prevSettings) => ({ ...prevSettings, ...newSettings }));
  };

  return (
    <DisplaySettingContext.Provider
      value={{ ...settings, setSettings: handleSetSettings }}
    >
      {children}
    </DisplaySettingContext.Provider>
  );
};

// Custom hook for easier consumption of the context
export const useDisplaySettings = () => useContext(DisplaySettingContext);
