import React from 'react'
import { FontSize } from '../../Utils/FontSize'
function ProgressBar({step,setStep}) {

    const styles={
        progress:{
            marginTop:"30px",
            display:'flex',
            width:'80%',
            marginLeft:'auto',
            marginRight:'auto',
        },
        progressBarContainer:{
            display:'flex',
            alignItems:'center',
            // justifyContent:'center',
            width:'100%',
        },
        stepContainer:{
            color:'black',
            minWidth: "30px",
            width: "25%",
            height:'30px',
            borderRadius:'50%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            border:'1px solid #00000024',
            opacity:0.5,
            fontFamily:'Inter',
            fontSize:FontSize.Button,
        },
        stepContainerDone:{
            backgroundColor:'#664de4',
            color:'#fff',
            fontSize:FontSize.Button,
            minWidth: "30px",
            width: "25%",
            height:'30px',
            borderRadius:'50%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontFamily:'Inter',
        }
    }


    return (
        <div style={styles.progress} >
            {[1,2,3,4].map((item,index)=>{
                return(
                    <div key={index} style={{ display:'flex',alignItems:'center',width:item==4?'unset':"100%"}}>
                       <div style={step>=item?styles.stepContainerDone:styles.stepContainer} >{item}</div>
                      {item!=4 && <progress style={{background:"#664de4",height:"1px",width:"75%"}}  id="file" value={step>item?"100":step===item?"50":'0'} max="100"></progress>}
                    </div>

                )
            })}
        </div>
    )
}

export default ProgressBar
