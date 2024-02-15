import React, { useState, useContext, useEffect } from "react";
import { useDisplaySettings } from "@/app/context/DisplaySettingContext";

const DisplayPanel = () => {
  const { fontSize, windowColor, theme, setSettings } = useDisplaySettings();
  const [tempSettings, setTempSettings] = useState({
    fontSize,
    windowColor,
    theme,
  });

  // State to track if changes have been made
  const [hasChanges, setHasChanges] = useState(false);

  // Effect hook to check if tempSettings differ from the initial settings
  useEffect(() => {
    const settingsChanged =
      tempSettings.fontSize !== fontSize ||
      tempSettings.windowColor !== windowColor ||
      tempSettings.theme !== theme;
    setHasChanges(settingsChanged);
  }, [tempSettings, fontSize, windowColor, theme]);

  const applySettings = () => {
    setSettings(tempSettings);
  };

  return (
    <div
      className="display-panel"
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        margin: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2>Display Settings</h2>
      <div>
        <label>
          Font Size:
          <select
            value={tempSettings.fontSize}
            onChange={(e) =>
              setTempSettings({ ...tempSettings, fontSize: e.target.value })
            }
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Window Color:
          <input
            type="color"
            value={tempSettings.windowColor}
            onChange={(e) =>
              setTempSettings({ ...tempSettings, windowColor: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Theme:
          <select
            value={tempSettings.theme}
            onChange={(e) =>
              setTempSettings({ ...tempSettings, theme: e.target.value })
            }
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
      <button
        onClick={applySettings}
        disabled={!hasChanges}
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          cursor: hasChanges ? "pointer" : "not-allowed",
          opacity: hasChanges ? 1 : 0.5,
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default DisplayPanel;
