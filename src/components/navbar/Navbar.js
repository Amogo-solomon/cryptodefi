import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <h1 style={{ marginLeft: '1rem', color: '#00d8ff' }}>Defi</h1>
        <ul className="nav">
          <li className="nav-item">
            <a href="/">platform</a>
          </li>
          <li className="nav-item">
            <a href="/">Developers</a>
          </li>
          <li className="nav-item">
            <a href="/">Community</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a className='btn' href="/">Use Defi</a>
          </li>
        </ul>
        <div className="hamburger">
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar