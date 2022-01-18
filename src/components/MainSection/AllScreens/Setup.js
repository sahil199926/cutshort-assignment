import React from 'react'
import data from '../../../Utils/staticData.json'
function Setup() {
    const styles={
        inputContainer:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"flex-start",

        },
        label:{
            fontSize:"12px",
            fontFamily:"Inter",
            marginBottom:"5px"

        },
        input:{
            border:"2px solid #00000024",
            marginBottom:"5px",
            borderRadius:"4px",
            display:"flex"
        },
        inpfield:{
            border:"none",
        }
    }

    return (
        <div>
            <h2>{data.step_2.title}</h2>
            <h3>{data.step_2.subtitle}</h3>
            <div  style={styles.inputContainer} >
                <label style={styles.label} >Workspace Name</label>
                <input style={styles.input} placeholder='Eden' type="text" />
            </div>
            <div  style={styles.inputContainer} >
            <label style={styles.label} >Workspace URL <span>(optional)</span> </label>
               <div style={styles.input}  ><div style={{borderRight:"2px solid #00000024",padding:'4px',fontSize:'12px',color:'rgb(0 0 0 / 28%)',fontWeight:'bold',background:"rgb(0 0 0 / 4%)"}} >www.eden.com/</div><input style={styles.inpfield}  placeholder='Example' type="text" /></div> 
            </div>
        </div>
    )
}

export default Setup
