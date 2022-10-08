import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#walca">What is AlCa?</a></p>
  {/* <p><a href="#possibility">College Of Dupage</a></p> */}
  <p><a href="#features">Meet the Team</a></p>
  <p><a href="#blog">Discord</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='alca__navbar'>
      <div className='alca__navbar-links'>

        <div className='alca__navbar-links_logo gradient__text'>
          {/* <img src={logo} alt="logo"/> */}
          <h1>almightycandle.com</h1>
        </div>

        <div className='alca__navbar-links_container'>
          <Menu />
        </div>

      </div>
      <div className='alca__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>

      <div className='alca__navbar-menu'>
        {toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='alca__navbar-menu_container scale-up-center'>
            <div className='alca__navbar-menu_container-links'>
              <Menu />

              <div className='alca__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
              </div>

            </div>
          </div>
        )} 
      </div>
    </div>
  )
}

export default Navbar