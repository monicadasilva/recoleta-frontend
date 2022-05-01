import { useMenu } from '../../Contexts/menu'
import { Menu } from '../../components/menu'
import { MenuFloating } from '../../components/MenuFloating'
import { HomeContainer } from './styles'

export const HomePage = () => {

    const { openMenu } = useMenu()
    
    return (
        <HomeContainer>
            <MenuFloating/>
            <Menu 
                name="Rafael Fulano"
                open={openMenu}
            />
            <h1>Home</h1>
        </HomeContainer>
    );
} 

