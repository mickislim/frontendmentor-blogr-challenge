import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import navMenu from '../data'

const Footer = () => {


  return (
   
<footer>
  <div>
    <img src={logo}/>

  </div>


  {navMenu.map((item,index)=>{
    const {subLinks,label} = item
    return (  <div key={index}>
    <h3 className='label' >{label}</h3>
    
    <ul>
      {subLinks.map((sublink,subIndex)=>{
        return  <li key={subIndex}> <a href="#">{sublink}</a> </li>

      })}
    </ul>
    
    
    
    
    
    </div>

    )
    
   
  })}

   

  



</footer>

  )
}

export default Footer