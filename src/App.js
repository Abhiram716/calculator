import './App.css';
import Digits from './Components/Digits';
import Display from './Components/Display';
import Operators from './Components/Operators';
import { useState } from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*','+','-','.'];
  updateCalc = (value) => { 
    setCalc(calc+value)
  }
  return (
    <div className="app">
      <div className='calculator'>
        <Display clac={calc} updateCalc={updateCalc()} result={result}/>
        <Operators calc={calc}/>
        <Digits calc={calc}/>
      </div>
    </div>
  );
}

export default App;




