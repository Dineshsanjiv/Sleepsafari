import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

function Navbar (){
return(
<div>
    <nav className='Navbar'>

    <li className='linkloi' class="nav-item"  style={{
      listStyle:'none',
      textDecoration: 'none',
      padding:'5px',
      marginLeft:'130px',
      marginTop:"15px",
      fontSize:'23px'}}  >
    <Link   style={{ textDecoration: 'none' }}  to="/"  class="nav-link" aria-current="page" >SleepSafari</Link>
  </li>

        <ul className='LInks'>
        <li className='link' class="nav-item">
    <Link  to="/destinatins" style={{ textDecoration: 'none' }} class="nav-link" aria-current="page" >Destinations</Link>
  </li>
  <li className='link' class="nav-item">
    <Link to="/hostels" style={{ textDecoration: 'none' }} class="nav-link" >Hostels</Link>
  </li>
  <li className='link' class="nav-item">
    <Link to="/workations" style={{ textDecoration: 'none' }} class="nav-link" >Workations</Link>
  </li>
  <li className='link' class="nav-item">
    <Link to="/membership" style={{ textDecoration: 'none' }} class="nav-link "  >Membership</Link>
  </li>

  <li className='link' class="nav-item">
    <Link to="/blogs" style={{ textDecoration: 'none' }} class="nav-link "  >Blogs</Link>
  </li>
        </ul>
    </nav>
</div>


)

}
export default Navbar;