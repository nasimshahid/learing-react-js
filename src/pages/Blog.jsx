import React from 'react'
import { useNavigate } from 'react-router-dom';
import CommonPage from '../components/CommonPage';
import USeRefHooks from './USeRefHooks';

function Blog() {
    const navigate = useNavigate();

  return (
//  <div className="container">
//     <div className="row">
//         <div className="col-md-8 mt-5">
//             <h1>This is a Blog Components</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//             <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//             <button className='btn btn-primary' onClick={()=>navigate("/Gallery")}>Navigate Gallery</button>
//         </div>
//         <div className="col-md-4 mt-5">
//             <img src="https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80" alt="" className='img-thumbnail' />
//         </div>
//     </div>
//  </div>
<>
<CommonPage  title="Blog" btn="Gallery"  img="https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80" visited="/gallery"  />
<USeRefHooks />
</>
  )
}

export default Blog