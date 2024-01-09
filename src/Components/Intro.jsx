import React from 'react'
import illustrationDesktop from '../assets/images/illustration-editor-mobile.svg'

const Intro = () => {
  return (
  
<div className="three-sections-combined">
       <section className="pattern-section">
        <div className="pattern-h1">
          <h1>Designed for the future</h1>
        </div>


<div className="pattern-editor">

<img src={illustrationDesktop}  alte='illustration' className="pattern-edditorImg"/>
</div>

       </section>


<div className="article-combined">

<section className="editor-article">
  <h1>  Introducing an extensible editor
  </h1>
  <p> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
    change the looks of a blog.
  </p>
</section>




<section className="fourth-section">
  <h1>  Robust content management
  </h1>

<p> Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p> 

</section>
</div>
</div>
  )
}

export default Intro