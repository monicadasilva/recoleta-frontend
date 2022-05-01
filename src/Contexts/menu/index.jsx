import { useContext, createContext, useState } from "react"

export const MenuContext = createContext()

export const MenuProvider = ( {children }) => {

    const [ openMenu, setOpenMenu ] = useState(false)
    
    const SetMenu = (state) => {
        setOpenMenu(state);
    }

    return(
        <MenuContext.Provider value={{openMenu, SetMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenu = () => useContext(MenuContext);