import React from 'react';
import { useState, useEffect, useRef } from "react";

export function TestUseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export function ElementUseRef() {
    const inputElement = useRef();
  
    const focusInput = () => {
      inputElement.current.focus();
    };
  
    return (
      <>
        <p><input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button></p>
      </>
    );
  }

  export function PreviousInputValueUseRef() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
  
    useEffect(() => {
      previousInputValue.current = inputValue;
    }, [inputValue]);
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </>
    );
  }
 