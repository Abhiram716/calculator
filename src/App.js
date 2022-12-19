import "./App.css";
import Digits from "./Components/Digits";
import Display from "./Components/Display";
import Operators from "./Components/Operators";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLastChar = () => {
    if (calc == "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="app">
      <div className="calculator">
        <Display calc={calc} result={result} />
        <Operators
          calc={calc}
          updateCalc={updateCalc}
          deleteLastChar={deleteLastChar}
        />
        <Digits updateCalc={updateCalc} calculate={calculate} />
      </div>
    </div>
  );
}

export default App;


