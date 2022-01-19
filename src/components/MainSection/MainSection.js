import React, {useState} from "react";
import Welcome from "./AllScreens/Welcome";
import Setup from "./AllScreens/Setup";
import Planning from "./AllScreens/Planning";
import FinalScreen from "./AllScreens/FinalScreen";
import Loading from '../common/Loading'
import { FontSize } from '../../Utils/FontSize'
function MainSection({ setStep, step }) {
  const styles = {
    btn: {
      width: "80%",
      height: "Clamp(30px,4.16vw,50px)",
      backgroundColor: "#664de4",
      border:"none",
      color:"#ffff",
      fontFamily:"Inter",
      fontSize:FontSize.Button,
      cursor:"pointer",
      borderRadius:"5px",
      marginTop:"5px",
      fontWeight: '700',
      marginLeft:"7px",
    },
    disbtn:{
      width: "80%",
      height: "Clamp(30px,4.16vw,50px)",
      border:"none",
      color:"#ffff",
      fontFamily:"Inter",
      fontSize:FontSize.Button,
      fontWeight: '700',
      cursor:"pointer",
      borderRadius:"5px",
      marginTop:"5px",
      backgroundColor:"rgb(102 77 228 / 65%)",
      marginLeft:"7px",
    }
  }
const [loading,setloading] = useState(false)
const [userData,setUserdata] = useState( JSON.parse(localStorage.getItem('userData')) ||{name:"",displayName:"",workSpaceName:"",url:"",for:'self',})
const renderScreen = () => {
    switch (step) {
        case 1:
        return <Welcome userData={userData} setUserdata={setUserdata} />;
        case 2:
        return <Setup userData={userData} setUserdata={setUserdata} />;
        case 3:
        return <Planning userData={userData} setUserdata={setUserdata} />;
        case 4:
        return <FinalScreen />;
        default:
        return null;
    }
}



function nextStep(){
    setloading(true)
    setTimeout(()=>{
        setloading(false)
        localStorage.setItem('step',JSON.stringify(step+1));
        localStorage.setItem('userData',JSON.stringify(userData));
        setStep((p) => p + 1)
    },1500)
 
}
function submit(){
  console.log(userData)
    setloading(true)
    setTimeout(()=>{
        setloading(false)
        localStorage.setItem('step',JSON.stringify(1));
        setStep(1)
        setUserdata({name:"",displayName:"",workSpaceName:"",url:"",for:'self'})
    },1500)
}
  return (
    <div style={{marginTop:"55px"}} >
        {renderScreen()}
      {step < 4 ? (
        <button disabled={loading} style={loading?styles.disbtn:styles.btn}  onClick={nextStep}>{loading?<Loading/>:"Create WorkSpace"}</button>
      ) : (
        <button style={styles.btn} onClick={submit}>{loading?<Loading/>:'Launch Eden'}</button>
      )}
    </div>
  );
}

export default MainSection;
