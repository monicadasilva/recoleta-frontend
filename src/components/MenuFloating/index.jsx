import { Container, ContentIcon } from './style'
import { FiMenu } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { useMenu } from '../../Contexts/menu'

export const MenuFloating = () => {
    const { SetMenu } = useMenu()
    
    return(
        <Container>
            <ContentIcon onClick={() => SetMenu(true)}>
                <FiMenu/>
            </ContentIcon>
            <ContentIcon>
                <IoMdNotificationsOutline/>
            </ContentIcon>
        </Container>
    )
}