import { Container, ContentIcon } from './style'
import { FiMenu } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'

export const MenuFloating = () => {
    return(
        <Container>
            <ContentIcon>
                <FiMenu/>
            </ContentIcon>
            <ContentIcon>
                <IoMdNotificationsOutline/>
            </ContentIcon>
        </Container>
    )
}