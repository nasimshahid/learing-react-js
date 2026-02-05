import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../App'
function C(props) {
    const data =useContext(UserContext)
    console.log(data);
    
  return (
    <>
    <div>Props Drilling {props.data}</div>
    <p>Name:{data.name} <br />Age:{data.age}</p>
</>
  )
}

export default C