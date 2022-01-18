import React,{useState} from 'react'
import data from '../../../Utils/staticData.json'
import profile from '../../../assets/profile.png'
import grp from '../../../assets/grpIcon.png'
function Planning() {
    const styles={
        container:{
            display:'flex',
            maxWidth:'90%',
            margin:'auto',
            justifyContent:'space-between',
        },
        subcontainer:{
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-start',
            width:'40%',
            maxWidth:'180px',
            textAlign:'left',
            padding:'15px',
            cursor:'pointer',
            border:'2px solid #00000024',
            borderRadius:'5px',
        },
        subcontainerselected:{
            display:'flex',
            width:'40%',
            maxWidth:'180px',
            flexDirection:'column',
            alignItems:'flex-start',
            textAlign:'left',
            padding:'15px',
            border:'2px solid #664de4',
            borderRadius:'5px',
        },
        img:{
            width: '30px',
        }
    }
    const [selected,setSelected] = useState(0)
    return (
        <div>
            <h2>{data.step_3.title}</h2>
            <h3>{data.step_3.subtitle}</h3>
            <div  style={styles.container} >
                <div onClick={()=>setSelected(0)}  style={selected==0?styles.subcontainerselected:styles.subcontainer} >
                    <img style={styles.img} src={profile} alt='profile' />
                    <h5>For myself</h5>
                    <div>Write better.think more clearly.Stay organized</div>
                </div>
                <div onClick={()=>setSelected(1)}  style={selected==1?styles.subcontainerselected:styles.subcontainer} >
                    <img style={styles.img} src={grp}  alt='grp' />
                    <h5>With my team</h5>
                    <div>Wikis,docs,tasks & projects,all in one place</div>
                </div>
            </div>
        </div>
    )
}

export default Planning
