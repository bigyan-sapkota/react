import React from "react";
import { ThemeProvider } from "./TwoUseContext/ThemeContext";
import ThemeComponent from "./TwoUseContext/ThemeComponent";

function App() {
  return (
    <ThemeProvider>
      <h1>Themed App</h1>
      <ThemeComponent />
    </ThemeProvider>
  );
}

export default App;
