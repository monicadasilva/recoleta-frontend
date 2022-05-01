import { Container } from './style'
import { MenuCollect } from '../../components/menuCollect'
import { MenuFloating } from '../../components/MenuFloating'
import { useMenu } from '../../Contexts/menu'
import { Menu } from '../../components/menu'


export const CollectPage = () => {

    const { openMenu } = useMenu()

    return(
        <Container>
            <Menu 
                name="Rafael Fulano"
                open={openMenu}
            />
            <MenuFloating/>
            <MenuCollect/>
        </Container>
    );
}