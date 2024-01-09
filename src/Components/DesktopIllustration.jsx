import React from 'react'
import illustrationLaptop from '../assets/images/illustration-laptop-mobile.svg'

const DesktopIllustration = () => {
  return (
    <div className="illustration-desktop">


    <section className="illustration-section">
      <div><img src={illustrationLaptop} alt="" srcset="" className="illustration-img"/>
      </div>
    
    <div className="illustration-article-desktop">
      <div className="illustartion-info">
        
        <h1>  Free, open, simple
        </h1>
        <p>
          Blogr is a free and open source application backed by a large community of helpful developers. It supports 
          features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
          and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
         </p>
      
    
      </div>
      <div className="illustration-tooling">
        <h1>  Powerful tooling
        </h1>
        <p> Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
          capable of producing even the most complicated sites.
        </p>
      </div>
    </div>
    
      
    </section>
    </div>
    
  )
}

export default DesktopIllustration