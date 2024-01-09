import React, { useState } from 'react'
import darkIcon from '../assets/images/icon-arrow-dark.svg'
import { useGlobalContext } from '../context'
import navMenu from '../data'


const SidebarModal = () => {
  const [toggle,setToggle] = useState(false)
  const [selectedItemIndex,setSelectedItemIndex] = useState(null)

const toggleSubmenu =(index)=>{
 
  setToggle(!toggle)
  setSelectedItemIndex(index === selectedItemIndex ? null : index);

}
  
  return (
<>

{navMenu.map((item,index)=>{
const {subLinks, label} = item
const isSubMenuOpen = selectedItemIndex === index;
return (
  <>
    <ul key={index} className="menu-links">
<li><a href="#"><button onClick={()=>toggleSubmenu(index)}>{label}  {isSubMenuOpen?   <img src={darkIcon}  className='arrow up-arrow'/> : <img src={darkIcon} className='arrow' />}</button></a></li>
     {selectedItemIndex == index && 
     <div className="submenu-container">


<ul>
  {subLinks.map((subLink,subIndex)=>{
    return <li key={subIndex} > <a href="#">{subLink}</a> 
 </li>
  })}
 
    </ul> 


     </div>
    }
  
    </ul>
 </>
)


})}



</>
  )
}

export default SidebarModal