// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import Result from "./res";

const sectNum = Math.floor(Math.random() * 10) + 1;
// import mohan from './pic/Mohan.jpg';
function App() {
  const [term , setTerm] = useState("")
  const handlechg = (e) =>{
    setTerm(e.target.value)
  }
  return (
    <div>
    <label>
      Guess the number : 
    </label>
    <input  id ='term' type="text"  name="term" onChange={handlechg}/>
    <Result sectNum = {sectNum} term={term}/>
    </div>
    
  );
}

export default App;
