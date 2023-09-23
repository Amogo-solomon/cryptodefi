import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => { 
  const [click, setClick] = useState(false)   // usestate hooks taken on two values(click, setClick). here th default value is false; this implies it will not be active till we click it
  const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
      <div className='container'>
        <h1 style={{ marginLeft: '1rem', color: '#00d8ff' }} >Defi</h1>
        <ul className=''></ul>
        <ul className={click ? 'nav active' : 'nav'}> {/* if clicked, show the nav class and active, else show the nav */}
          <li className="nav-item">
            <a href="/">Platform</a>
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
        <div onClick={handleClick} className="hamburger"> {/*  on click we want to handle the handle click arrow function */}
          {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}  {/* displaying a little icon we will use to close the menue */}
        </div>
      </div>
    </div>
  )
}

export default Navbar