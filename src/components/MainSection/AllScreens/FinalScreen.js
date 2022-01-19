import React from 'react'
import data from '../../../Utils/staticData.json'
import done from '../../../assets/done.png'
import { FontSize } from '../../../Utils/FontSize'
function FinalScreen() {
    const styles={
        heading:{
            fontSize:FontSize.Title,
            margin: "25px 0px 15px 0px",
            fontWeight:"bold",
        },
        subHeading:{
            fontSize:FontSize.SubTitle,
            opacity: "0.7"
        },
        img:{
            width: '50px',
        }
    }
    return (
        <div style={{marginBottom: "20px"}}>
            <img style={styles.img} src={done} alt='done' />
            <div style={styles.heading}>{data.step_4.title}</div>
            <div style={styles.subHeading}>{data.step_4.subtitle}</div>
        </div>
    )
}

export default FinalScreen
