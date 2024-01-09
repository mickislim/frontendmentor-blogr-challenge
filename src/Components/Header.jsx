import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import iconClose from '../assets/images/icon-close.svg'
import { useGlobalContext } from '../context'
import SidebarModal from './SidebarModal'
import Navbar from './Navbar'


const Header = () => {
  const {isMenuOpen,openMenu,closeMenu}= useGlobalContext()
 
  



 

  return (
   
<section className="header">
<nav className="nav-section"> 

<div className="desktop-nav">
  <div className="nav-img"><img src={logo}/> </div>
  <div className='navlinks'>
  <Navbar/>
  </div>
  


  



  
  


  <div className={isMenuOpen?  'menu show-menu': 'menu' }>

<div className="nav-center">
<SidebarModal/>
</div>



  


 
  
<div className="user-container">
  <button type="button" className="login">Login</button>
  <button type="button" className="signup">Sign Up</button>
</div>


  </div>
  </div>


  
  <div  className="hamburger">
    {isMenuOpen?  <button onClick={closeMenu} > <img src={iconClose}/> </button> :  <button onClick={openMenu} > <img src={hamburger}/> </button> }


  </div>
</nav>

<article className='article-text'>
  <div className='article'>
    <h1>
      A modern <span> publishing platform </span>

    </h1>
    <p>      Grow your audience and build your online brand</p>
  </div>

  <div className="btn-container">

    <button className="start-btn">  Start for Free
    </button>

    <button className="learn-btn">  Learn More
    </button>
         
  </div>
</article>
</section>



  )
}

export default Header