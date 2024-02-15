import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import CalculateIcon from "@mui/icons-material/Calculate";
import DivideIcon from "@mui/icons-material/CallSplit"; // Example icon for division
import MultiplyIcon from "@mui/icons-material/Clear"; // Example icon for multiplication

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [result, setResult] = useState("");
  const [lastOperation, setLastOperation] = useState(null);

  const handleDigit = (digit: any) => {
    setCurrentInput(currentInput + digit);
  };

  const clear = () => {
    setCurrentInput("");
    setResult("");
    setLastOperation(null);
  };

  const calculate = () => {
    // Perform calculation based on last operation
    let calcResult;
    if (lastOperation) {
      calcResult = eval(result + lastOperation + currentInput);
      setResult(String(calcResult));
      setCurrentInput("");
      setLastOperation(null);
    }
  };

  const setOperation = (operation: any) => {
    if (!currentInput) return;
    if (result) {
      calculate();
    } else {
      setResult(currentInput);
    }
    setCurrentInput("");
    setLastOperation(operation);
  };

  return (
    <div className="bg-blue-300 w-full h-full p-4 flex flex-col items-center justify-center overflow-scroll">
      <div className="mb-4">
        Result: <span>{result}</span>
      </div>
      <div className="mb-4">
        Input: <span>{currentInput}</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].map(
          (digit) => (
            <button
              key={digit}
              className="bg-blue-500 text-white p-2 rounded shadow"
              onClick={() => handleDigit(digit)}
            >
              {digit}
            </button>
          )
        )}
      </div>
      <div className="flex justify-between mb-4">
        <button
          className="flex items-center justify-center bg-green-500 text-white p-2 rounded shadow w-16 mr-2"
          onClick={() => setOperation("+")}
        >
          <AddIcon />
        </button>
        <button
          className="flex items-center justify-center bg-red-500 text-white p-2 rounded shadow w-16 mx-2"
          onClick={() => setOperation("-")}
        >
          <RemoveIcon />
        </button>
        <button
          className="flex items-center justify-center bg-yellow-500 text-white p-2 rounded shadow w-16 mx-2"
          onClick={() => setOperation("*")}
        >
          <MultiplyIcon />
        </button>
        <button
          className="flex items-center justify-center bg-purple-500 text-white p-2 rounded shadow w-16 ml-2"
          onClick={() => setOperation("/")}
        >
          <DivideIcon />
        </button>
      </div>
      <div className="flex ">
        <button
          className="flex items-center justify-center bg-orange-500 text-white p-2 rounded shadow w-32 mr-2"
          onClick={calculate}
        >
          <CalculateIcon />
        </button>
        <button
          className="flex items-center justify-center bg-gray-500 text-white p-2 rounded shadow w-32 ml-2"
          onClick={clear}
        >
          <ClearIcon />
        </button>
      </div>
    </div>
  );
};

export default Calculator;
