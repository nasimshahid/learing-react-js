import React from 'react'
import A from './propsdrilling/A'

function AnotherAction(props) {
  const [email,setEmail]=React.useState("")
  const [password,setPassword]=React.useState("")

  const handleEmail =(e)=> setEmail(e.target.value)
    
  function handleSubmit(e){
    e.preventDefault();
    if (email===""||password==="") {
        alert("Please fill all the fields");
        return;
    }
    if(password.length<6){
        alert("Password must be at least 6 characters long");
        return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  }
  return (
    <>
   <A data={props.data}/>
   <button>Start</button>
   <button>Stop</button>


<input type="email" value={email} onChange={handleEmail} />
<input type="password"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
<button onClick={handleSubmit}>Submit</button>


   </>
  )
}

export default AnotherAction