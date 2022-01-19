import React from "react";
import data from "../../../Utils/staticData.json";
import { FontSize } from "../../../Utils/FontSize";
function Setup({userData,setUserdata}) {
  const styles = {
    heading: {
      fontSize: FontSize.Title,
    },
    subHeading:{
        fontSize:FontSize.SubTitle,
        opacity: "0.7",
        marginBottom:'40px'
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginBottom: "20px",
    },
    label:{
        fontSize:FontSize.label,
        fontWeight:"bold",
        fontFamily:"Inter",
        opacity: "0.7",
        marginBottom:"10px"

    },
    input: {
      borderColor: "rgb(0 0 0 / 5%)",
      marginBottom: "5px",
      borderRadius: "4px",
      fontSize:FontSize.Inptext,
      width: "95%",
      height:"clamp(20px, 2.66vw, 30px)",
      paddingLeft: "10px",
      marginLeft: "3px",
    },
    input2: {
      border: "2px solid rgb(0 0 0 / 5%)",
      width: "100%",
      borderRadius: "4px",
      height:"clamp(20px, 2.66vw, 30px)",
      marginLeft: "3px",
      alignItems: "center",
      display: "flex",
      fontSize:FontSize.Inptext,
    },
    inputurl: {
      borderRight: "1px solid rgb(0 0 0 / 5%)",
      padding: "0px 4px",
      fontSize:FontSize.Inptext,
      height:"clamp(20px, 2.66vw, 30px)",
      display: "flex",
      alignItems: "center",
      color: "rgb(0 0 0 / 28%)",
      fontWeight: "bold",
      background: "rgb(0 0 0 / 4%)",
      width: "30%",
    },
    inpfield: {
      border: "none",
      width: "100%",
      height:"clamp(20px, 2.66vw, 30px)",
      padding: "0px 5px",
      fontFamily: "Inter",
      fontSize:FontSize.Inptext,
      width: "70%",
    },
  };

  return (
    <div>
      <h2 style={styles.heading}>{data.step_2.title}</h2>
      <div style={styles.subHeading}>{data.step_2.subtitle}</div>
      <div style={{maxWidth: "80%",margin: "auto"}}>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Workspace Name</label>
        <input value={userData.workSpaceName} onChange={(e)=>setUserdata({...userData,workSpaceName:e.target.value})} style={styles.input} placeholder="Eden" type="text" />
      </div>
      <div style={styles.inputContainer}>
        <label style={styles.label}>
          Workspace URL <span style={{opacity:"0.6"}} >(optional)</span>{" "}
        </label>
        <div style={styles.input2}>
          <div style={styles.inputurl}>www.eden.com/</div>
          <input value={userData.url} onChange={(e)=>setUserdata({...userData,url:e.target.value})}  style={styles.inpfield} placeholder="Example" type="text" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Setup;
