import React ,{useEffect, useState} from 'react'

function Loading({loading,setloading}) {

const [load,setLoad] = useState(1)
useEffect(()=>{
    const temp=setInterval(()=>{
        setLoad(p=>p+1)
    },500)
    return ()=>{clearInterval(temp)}
    
},[loading])

const styles={
    load:{
        fontWeight:"bold",
        fontSize:"14px",
    }
}

    return (
        <div style={styles.load}>
            {`saving data ${'.'.repeat(load)}`}
        </div>
    )
}

export default React.memo(Loading)