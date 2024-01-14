import React, { useState } from "react";
import MyContext from "./OneMyContext";
import OneChildComponent from "./OneChildComponent";

const OneParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <MyContext.Provider value={{ counter, setCounter }}>
      <div>
        <h2>Parent Component</h2>
        <p>Counter value: {counter}</p>
        <button onClick={incrementCounter}>Increase</button>
        <OneChildComponent />
      </div>
    </MyContext.Provider>
  );
};

export default OneParentComponent;
