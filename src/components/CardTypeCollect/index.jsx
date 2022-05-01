import { Container } from './style'

export const CardTypeCollet = ({ type, Icon}) => {
    return(
        <Container>
            <Icon/>
            <h3>{type}</h3>
        </Container>
    )
}