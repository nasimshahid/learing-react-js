import React from 'react'
import C from './C'

function B(props) {
    console.log(props.data,"B");
    
  return (
    <C data={props.data}/>
  )
}

export default B