
import './index.css'
import Header from './Components/Header'
import Intro from './Components/Intro'
import MobileIllustration from './Components/MobileIllustration'
import DesktopIllustration from './Components/DesktopIllustration'
import Footer from './Components/Footer'
import Attribute from './Components/Attribute'

function App() {
  

  return (
   <div className="container">
    <div className="main-grid">
      <div className="article">
        <Header/>
        <Intro/>
        <MobileIllustration/>
        <DesktopIllustration/>
        <Footer/>
       
      </div>
      <Attribute/>
      </div>
    
   </div>
  )
}

export default App
