import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#333" : "#eee",
      }}
    >
      <h2>Themed Component</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default ThemeComponent;
