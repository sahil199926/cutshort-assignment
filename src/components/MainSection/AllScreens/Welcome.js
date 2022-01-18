import React from 'react'
import data from '../../../Utils/staticData.json'
function Welcome() {
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
            borderColor:"#00000024",
            marginBottom:"5px",
            borderRadius:"2px",

        }
    }
    return (
        <div>
            <h1>{data.step_1.title}</h1>
            <h3>{data.step_1.subtitle}</h3>
            <div style={styles.inputContainer}>
                <label style={styles.label} >Full Name</label>
                <input style={styles.input} placeholder='Steve Jobs' type="text" />
            </div>
            <div style={styles.inputContainer}>
            <label  style={styles.label} >Display Name</label>
                <input style={styles.input} placeholder='Steve' type="text" />
            </div>
        </div>
    )
}

export default Welcome
