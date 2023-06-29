// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Navbar.css'

// function Navbar (){
// return(
// <div>
//     <nav className='Navbar'>

//     <li className='linkloi' class="nav-item"  style={{
//       listStyle:'none',
//       textDecoration: 'none',
//       padding:'5px',
//       marginLeft:'130px',
//       marginTop:"15px",
//       fontSize:'23px'}}  >
//     <Link   style={{ textDecoration: 'none' }}  to="/"  class="nav-link" aria-current="page" >SleepSafari</Link>
//   </li>

//         <ul className='LInks'>
//         <li className='link' class="nav-item">
//     <Link  to="/destinatins" style={{ textDecoration: 'none' }} class="nav-link" aria-current="page" >Destinations</Link>
//   </li>
//   <li className='link' class="nav-item">
//     <Link to="/hostels" style={{ textDecoration: 'none' }} class="nav-link" >Hostels</Link>
//   </li>
//   <li className='link' class="nav-item">
//     <Link to="/workations" style={{ textDecoration: 'none' }} class="nav-link" >Workations</Link>
//   </li>
//   <li className='link' class="nav-item">
//     <Link to="/membership" style={{ textDecoration: 'none' }} class="nav-link "  >Membership</Link>
//   </li>

//   <li className='link' class="nav-item">
//     <Link to="/blogs" style={{ textDecoration: 'none' }} class="nav-link "  >Blogs</Link>
//   </li>
//         </ul>
//     </nav>
// </div>


// )

// }
// export default Navbar;




import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  const location = useLocation();

<<<<<<< HEAD
    <li className='linklogii' class="nav-item" style={{listStyle:"none", marginTop:"12px"}}>
    <Link    to="/" style={{ textDecoration: 'none',     
                              alignItems: "center",
                              alignContent: "center",
                              fontFamily: "cursive",
                              fontSize: "xx-large",
                              marginLeft:"20px"
                            }} 
                  className='logo-sleep' class="nav-link" aria-current="page" >SleepSafari</Link>
    </li>
=======
  return (
    <div>
      <nav className="Navbar">

        
        <li   class="nav-item" className="linkloi"
        
            >
          <Link to="/"   style={{ textDecoration: 'none' }}   className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}   class="nav-item"   >
            SleepSafari
          </Link>
        </li>
         <div className='Linksss' > >>>>>>> b40217b1aee5d6a69a0d990919e8446a242a0e5f

        <ul className="links">
          <li  class="nav-item" className="link">
            <Link to="/destinations"  style={{ textDecoration: 'none' }}  class="nav-link" className={`nav-link ${location.pathname === '/destinations' ? 'active' : ''}`}>
              Destinations
            </Link>
          </li>
          <li  class="nav-item" className="link">
            <Link to="/hostels"  style={{ textDecoration: 'none' }}   class="nav-link" className={`nav-link ${location.pathname === '/hostels' ? 'active' : ''}`}>
              Hostels
            </Link>
          </li>
          <li class="nav-item" className="link">
            <Link to="/workations"  style={{ textDecoration: 'none' }}  class="nav-link" className={`nav-link ${location.pathname === '/workations' ? 'active' : ''}`}>
              Workations
            </Link>
          </li>
          <li class="nav-item" className="link">
            <Link to="/membership"  style={{ textDecoration: 'none' }}  class="nav-link" className={`nav-link ${location.pathname === '/membership' ? 'active' : ''}`}>
              Membership
            </Link>
          </li>
          <li class="nav-item" className="link">
            <Link to="/blogs" style={{ textDecoration: 'none' }}  class="nav-link" className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`}>
              Blogs
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
