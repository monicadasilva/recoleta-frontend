import { MenuProvider } from './menu'

export const Provider = ( {children }) => {
    return(
        <MenuProvider>
            { children }
        </MenuProvider>
    )
}