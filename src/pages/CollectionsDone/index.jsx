import { Container,  Header, Main} from './style'
import { CardCollect } from '../../components/CardCollect'
import { useNavigate } from 'react-router-dom'

export const ColletionsDone = () => {
    
    const navigate = useNavigate()

    return (
        <Container>
            <Header onClick={() => navigate('/home')}>
                &lt; Voltar
            </Header>
            <Main>
                <CardCollect
                    type="Papelão"
                    address="Av. Passos, 40 - 50 - Centro, Rio de Janeiro - RJ, 20051-040"
                />
                <CardCollect
                    type="Garrafas Pet"
                    address="Av. Rio Branco, 156 - Loja 309 -st 11, Rio de Janeiro - RJ, 20040-003"
                />
                <CardCollect
                    type="Caixas de Papelão"
                    address="Av. Pres. Antônio Carlos, 251 - Centro, Rio de Janeiro - RJ, 20020-010"
                />
                <CardCollect
                    type="Óleo de Cozinha"
                    address="Av. Rio Branco, 143 - Loja A - Centro,  Rio de Janeiro - RJ, 20040-006"
                />
                 <CardCollect
                    type="Papelão"
                    address="Av. Passos, 40 - 50 - Centro, Rio de Janeiro - RJ, 20051-040"
                />
                <CardCollect
                    type="Garrafas Pet"
                    address="Av. Rio Branco, 156 - Loja 309 -st 11, Rio de Janeiro - RJ, 20040-003"
                />
                <CardCollect
                    type="Caixas de Papelão"
                    address="Av. Pres. Antônio Carlos, 251 - Centro, Rio de Janeiro - RJ, 20020-010"
                />
                <CardCollect
                    type="Óleo de Cozinha"
                    address="Av. Rio Branco, 143 - Loja A - Centro,  Rio de Janeiro - RJ, 20040-006"
                />
            </Main>
        </Container>
    )
}