import logo from './logo.svg';
import './App.css';
import React, {useRef} from 'react';
import User from './user';

function App() {

  const inputReader = useRef(null)
  const updateBox = ()=>{

    inputReader.current.value = '1000'
    inputReader.current.style.color= "red"

  }
  return (
    <div className="App">
    <h1>forword Ref in React</h1>
    <button onClick={updateBox}>Update</button>
    <User ref={inputReader}/>
    </div>
  );
}

export default App;
