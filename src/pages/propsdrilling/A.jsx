import React from 'react'
import B from './B'

function A(props) {
      console.log(props,"A C");
  return (
      <B data={props.data}/>
  )
}

export default A