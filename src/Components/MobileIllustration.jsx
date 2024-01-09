import React from 'react'
import illustrationPhones from '../assets/images/illustration-phones.svg'
import bgPattern from '../assets/images/bg-pattern-circles.svg'

const MobileIllustration = () => {
  return (
    <section className="fifth-section">
  
  <div className="content">

<div className="overflow">
  <img className="bg-img" src={bgPattern} />
</div>


<div className="mobile-container">
  <div className="mobile-grid">

    <div>
      <img src={illustrationPhones} className="illustration-phones"/>
    </div>
  
    <div className="mobile-text" >
  
     <h1>  State of the Art <span>Infrastructure</span></h1>
     <p>  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
      This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
    
    </div>


  </div>
 
   
  </div>
   
</div>
</section>
    
  )
}

export default MobileIllustration