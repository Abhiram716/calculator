import React from "react";
export default function Operators({ updateCalc, deleteLastChar }) {
  return (
    <div className="operators">
      <button onClick={() => updateCalc("/")}>/</button>
      <button onClick={() => updateCalc("*")}>*</button>
      <button onClick={() => updateCalc("+")}>+</button>
      <button onClick={() => updateCalc("-")}>-</button>

      <button onClick={() => deleteLastChar()}>DEL</button>
    </div>
  );
}


