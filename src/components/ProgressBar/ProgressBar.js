import React from 'react'

function ProgressBar({step,setStep}) {

    const styles={
        progress:{
            display:'flex',

        },
        progressBarContainer:{
            display:'flex',
            alignItems:'center',
            // justifyContent:'center',
            width:'100%',
        },
        stepContainer:{
            color:'black',
            width:'30px',
            height:'30px',
            borderRadius:'50%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            border:'1px solid #00000024',
            opacity:0.5,
            fontFamily:'Inter',
        },
        stepContainerDone:{
            backgroundColor:'#664de4',
            color:'#fff',
            width:'30px',
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
                      {item!=4 && <progress style={{background:"#664de4",height:"1px",width:"70%"}}  id="file" value={step>item?"100":step===item?"50":'0'} max="100"></progress>}
                    </div>

                )
            })}
        </div>
    )
}

export default ProgressBar
