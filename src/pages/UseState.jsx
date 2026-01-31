import React, {useState } from 'react'
import FormHandling from './FormHandling';

function UseState() {
   const [count,setCount]  =useState(0);
const [visible,setVisible]=useState(false);

function handleIncreament(){
setCount(count + 1);
}


function handleDecreament(){


if (count>0) {
  setCount(count - 1); 
}
}



function handleHide(){

setVisible(false)

}
function handleShow(){

setVisible(true)
}


function hideAndShow(){
// if(visible===false){
// setVisible(true)
// }else{
//     setVisible(false)
// }

setVisible(!visible);
}
  return (
    <div>


    <h1>Count {count}</h1>
    <button onClick={handleIncreament}>Increament</button>
    <button onClick={handleDecreament}>Decreament</button>

{visible?<h4>Hide & Show</h4>:""}

<button onClick={handleHide}>Hide </button>
<button onClick={handleShow}>Show </button>
<button onClick={hideAndShow}>Hide &Show </button>

<FormHandling />
    </div>


  )
}

export default UseState



// useState is a Hook that allows you to have state variables in functional components. You can use it to store and update values that affect the rendering of your component. Here's a simple example of how to use useState:

// useEffect is another Hook that lets you perform side effects in functional components. It can be used for tasks like data fetching, subscriptions, or manually changing the DOM. Here's a basic example of how to use useEffect:

// useMemo is a Hook that memoizes a computed value, preventing expensive calculations on every render unless the dependencies change. Here's an example of how to use useMemo:

// useCallback is a Hook that returns a memoized version of a callback function, which is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. Here's an example of how to use useCallback:

// useRef is a Hook that provides a way to access and interact with DOM elements or persist mutable values across renders without causing re-renders. Here's an example of how to use useRef:

// useContext is a Hook that allows you to access the context value in functional components. It is used to share data across the component tree without having to pass props down manually at every level. Here's an example of how to use useContext:


