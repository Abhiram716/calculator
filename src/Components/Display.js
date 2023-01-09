import React from "react";

export default function Display({ calc, result, setresult }) {
  return (
    <div className="display">
      {result ? <span>({result})</span> : ""}
      {calc || 0}
    </div>
  );
}


