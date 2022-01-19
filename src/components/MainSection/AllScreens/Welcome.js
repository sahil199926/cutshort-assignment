import React from 'react'
import data from '../../../Utils/staticData.json'
import { FontSize } from '../../../Utils/FontSize'
function Welcome({userData,setUserdata}) {
    const styles={
        heading:{
            fontSize:FontSize.Title,
        },
        subHeading:{
            fontSize:FontSize.SubTitle,
            opacity: "0.7",
            marginBottom:'40px'
        },
        inputContainer:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            marginBottom: "20px",

        },
        label:{
            fontSize:FontSize.label,
            fontWeight:"bold",
            fontFamily:"Inter",
            marginBottom:"10px",
            opacity: "0.7",

        },
        input:{
            borderColor:"rgb(0 0 0 / 5%)",
            marginBottom:"5px",
            borderRadius:"4px",
            width:"95%",
            height:"clamp(20px, 2.66vw, 30px)",
            paddingLeft:"10px",
            marginLeft:"3px",
            fontSize:FontSize.Inptext,

        }
    }
    return (
        <div>
            <h1 style={styles.heading}>{data.step_1.title}</h1>
            <div style={styles.subHeading}>{data.step_1.subtitle}</div>
            <div style={{maxWidth: "80%",margin: "auto"}}>
            <div style={styles.inputContainer}>
                <label style={styles.label} >Full Name</label>
                <input value={userData.name} onChange={(e)=>setUserdata({...userData,name:e.target.value})} style={styles.input} placeholder='Steve Jobs' type="text" />
            </div>
            <div style={styles.inputContainer}>
            <label  style={styles.label} >Display Name</label>
                <input value={userData.displayName} onChange={(e)=>setUserdata({...userData,displayName:e.target.value})} style={styles.input} placeholder='Steve' type="text" />
            </div>
            </div>
        </div>
    )
}

export default Welcome
