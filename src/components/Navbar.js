import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <h2>Logo</h2>
        <p>Country App</p>
        
     </nav>
  )
}

export default Navbar
