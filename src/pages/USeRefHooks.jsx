import React, { useRef } from 'react'

function USeRefHooks() {
    const [count, setCount] = React.useState(0);
    const [, forceUpdate] = React.useState(0);
    const [data,setData] = React.useState("");
    const inputRef = useRef(null);
    const incRef = useRef(0);
    const valueRef =useRef("")
    console.log("Hello");
    function increament() {
        setCount(count + 1);
    }
    function handleClick() {
        console.log(inputRef);
        inputRef.current.focus()
        inputRef.current.value = "Hello World"
        inputRef.current.style.backgroundColor = "yellow"
    }
    function handleRefIncreament() {
        incRef.current += 1;
  forceUpdate(prev => prev + 1);
    }
    function getValue() {
        console.log(valueRef.current.value);
    }
    function handleInputChange(e) {
        setData(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div>
<input type="text" onChange={handleInputChange} />
            <h1>{count}</h1>
            <button onClick={increament}>Increament</button>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Submit</button>
            <h1>{incRef.current}</h1>
            <button onClick={handleRefIncreament}>Increament By Input Ref</button>
            <input type="text" ref={valueRef} />
                <button onClick={getValue}>Get Value</button>
        </div>
    )
}

export default USeRefHooks