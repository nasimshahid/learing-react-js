import React, { useEffect, useMemo } from 'react'

function Memo() {
    const [count, setCount] = React.useState(0);
    const [data,setData] = React.useState(100);
    function increament() {
        setCount(count + 1);
    }
function decreament() {
    setData(data - 1);
}



const multiplication=useMemo( ()=>{
    console.log("Multiplying...");
    return count * 2;
},[count])



    return (

        <>
        {multiplication}
            <h1>{count}</h1>
            <h1>{data}</h1>
            <button onClick={increament}>Increament</button>
            <button onClick={decreament}>Increament</button>


        </>
    )
}

export default Memo




