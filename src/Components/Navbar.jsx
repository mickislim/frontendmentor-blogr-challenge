import React, { useState } from 'react'
import navMenu from '../data'
import lightIcon from '../assets/images/icon-arrow-light.svg'




const Navbar = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [toggleSubLinks, setToggleSubLinks] = useState(false);
  
    const openSubLinks = (index) => {
      setToggleSubLinks(!toggleSubLinks);
      setSelectedIndex(index === selectedIndex ? null : index);
    };
  
    return (
      <>
      <div className='nav-label'>
        {navMenu.map((item, index) => {
          const { label, subLinks } = item;
          const isSubLinksOpen = selectedIndex === index
          return (
            <ul className='menu-links' key={index}>
              <li>
                <a href="#">
                  <button onClick={() => openSubLinks(index)}>
                    {label} {isSubLinksOpen? <img src={lightIcon} alt={`${label} icon`} className='up-arrow' /> : <img src={lightIcon} alt={`${label} icon`}   />} 
                  </button>
                </a>
              </li>
              {selectedIndex === index && (
                <div className='submenu-container' key={index}>
                  <ul>
                    {subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <a href='#'>{subLink}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          );
        })}
        </div>
  
        <div className='user-container'>
          <button type='button' className='login'>
            Login
          </button>
          <button type='button' className='signup'>
            Sign Up
          </button>
        </div>
      </>
    );
  };
  

export default Navbar