import React from "react";
import Welcome from "./AllScreens/Welcome";
import Setup from "./AllScreens/Setup";
import Planning from "./AllScreens/Planning";
import FinalScreen from "./AllScreens/FinalScreen";
function MainSection({ setStep, step }) {

const renderScreen = () => {
    switch (step) {
        case 1:
        return <Welcome />;
        case 2:
        return <Setup />;
        case 3:
        return <Planning />;
        case 4:
        return <FinalScreen />;
        default:
        return null;
    }
}

const styles = {
  btn: {
    width: "96%",
    height: "50px",
    backgroundColor: "#664de4",
    border:"none",
    color:"#ffff",
    fontFamily:"Inter",
    fontSize:"14px",
    cursor:"pointer",
    borderRadius:"5px",
    marginTop:"15px",
  }
}

function nextStep(){
  localStorage.setItem('step',JSON.stringify(step+1));
  setStep((p) => p + 1)
}

  return (
    <div style={{marginTop:"55px"}} >
        {renderScreen()}
      {step < 4 ? (
        <button style={styles.btn}  onClick={nextStep}>Create WorkSpace</button>
      ) : (
        <button style={styles.btn} onClick={() => { localStorage.setItem('step',JSON.stringify(1));setStep(1)}}>Launch Eden</button>
      )}
    </div>
  );
}

export default MainSection;
