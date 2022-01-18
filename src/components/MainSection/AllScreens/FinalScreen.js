import React from 'react'
import data from '../../../Utils/staticData.json'
import done from '../../../assets/done.png'
function FinalScreen() {
    const styles={
        img:{
            width: '50px',
        }
    }
    return (
        <div>
            <img style={styles.img} src={done} alt='done' />
            <h3>{data.step_4.title}</h3>
            <h4>{data.step_4.subtitle}</h4>
        </div>
    )
}

export default FinalScreen
