import React from 'react'
import { useNavigate } from 'react-router-dom';
import CommonPage from '../components/CommonPage';

function Gallery() {
    const navigate = useNavigate();
  return (
//  <div className="container">
//     <div className="row">
//         <div className="col-md-8 mt-5">
//             <h1>This is a Gallery Components</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//             <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//             <button className='btn btn-primary' onClick={()=>navigate("/blog")}>Navigate Blog</button>
//         </div>
//         <div className="col-md-4 mt-5">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSssjlX3zGL8qyifj4vBXXYSg0JiL3XqBoB6A&s" alt="" className='img-thumbnail' />
//         </div>
//     </div>
//  </div>

<CommonPage  title="Gallery" btn="Blog"  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSssjlX3zGL8qyifj4vBXXYSg0JiL3XqBoB6A&s" visited="/blog" />
  )
}

export default Gallery