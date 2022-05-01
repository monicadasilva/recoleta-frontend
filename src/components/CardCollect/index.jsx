import { Container, Main } from './style'
import { ReactComponent as Recycling } from '../../assets/icons/recycling_white.svg'

export const CardCollect = ( { type, address }) => {
    return (
        <Container>
            <span>
                <Recycling/>
            </span>
            <Main>
                <h4>{type}</h4>
                <p>{address}</p>
            </Main>
        </Container>
    )
}