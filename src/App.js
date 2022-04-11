import "./App.css";
import React, { useState } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import MainSection from "./components/MainSection/MainSection";
import logo from "./assets/logo.png";
import { FontSize } from "./Utils/FontSize";
function App() {

  const head={ 
    fontSize: FontSize.Logo,
    fontWeight: 'bold',
    fontFamily:"Inter"
  }
  const [step,setStep]=useState( JSON.parse(localStorage.getItem('step'))||1);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className="logo" src={logo} alt="logo" />
        <div style={head} >Eden</div>
      </div>
      <ProgressBar step={step} setStep={setStep} />
      <MainSection step={step} setStep={setStep} />
    </div>
  );
}

export default App;
