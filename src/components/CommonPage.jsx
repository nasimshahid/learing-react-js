import React from 'react'
import { useNavigate } from 'react-router-dom';

function CommonPage(props) {
    console.log(props);
    
    const navigate = useNavigate();
  return (
 <div className="container">
    <div className="row">
        <div className="col-md-8 mt-5">
            <h1>This is a {props.title} Components</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button className='btn btn-primary' onClick={()=>navigate(props.visited)}>Navigate {props.btn}</button>
        </div>
        <div className="col-md-4 mt-5">
            <img src={props.img} alt="" className='img-thumbnail' />
        </div>
    </div>
 </div>
  )
}

export default CommonPage