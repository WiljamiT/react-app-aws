import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGlobal, AiOutlineHome } from 'react-icons/ai';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav> 
      <div className="logo">
        <h2><AiOutlineGlobal /></h2>
      </div>  
        <i>Country App</i>
        <Link to={"/"}><AiOutlineHome /></Link>
     </nav>
  )
}

export default Navbar
