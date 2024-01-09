import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

export const useGlobalContext =()=> useContext(GlobalContext)

const AppContext = ({children})=>{
    const [isMenuOpen,setIsMenuOpen] = useState(null)
 
    
 

    const openMenu =()=>{
        setIsMenuOpen(true)
      }

    const closeMenu =()=>{
        setIsMenuOpen(false)
    }

 

  

   

    return <GlobalContext.Provider value={{isMenuOpen,openMenu,closeMenu}}>
        {children}

    </GlobalContext.Provider>
}


export default AppContext