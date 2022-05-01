import { Container } from './style'
import { MenuCollect } from '../../components/menuCollect'
import { MenuFloating } from '../../components/MenuFloating'
export const CollectPage = () => {
    return(
        <Container>
            <MenuFloating/>
            <MenuCollect/>
        </Container>
    );
}