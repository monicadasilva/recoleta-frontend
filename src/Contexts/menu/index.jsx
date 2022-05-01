import { useContext, createContext, useState } from "react"

export const MenuContext = createContext()

export const MenuProvider = ( {children }) => {

    const [ openMenu, setOpenMenu ] = useState(false)
    const [ menuDown, setMenuDown ] = useState(true)
    const [ menuCollect, setMenuCollet ] = useState(false)

    const SetMenu = (state) => {
        setOpenMenu(state);
    }

    const SetMenuDown = (state) => {
        setMenuDown(state)
    }

    const SetMenuColletc = (state) => {
        setMenuCollet(state)
    }
    return(
        <MenuContext.Provider value={{openMenu, SetMenu, menuDown, SetMenuDown, menuCollect, SetMenuColletc}}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenu = () => useContext(MenuContext);