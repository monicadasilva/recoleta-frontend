import { Container, ContentInfo, Perfil, Main} from './style'
import { ReactComponent as  Star} from '../../assets/icons/star.svg'
import { ReactComponent as Group } from '../../assets/icons/group.svg'
import { ReactComponent as Handashake } from '../../assets/icons/handshake.svg'
import { ReactComponent as Info } from '../../assets/icons/info.svg'
import person  from '../../assets/icons/person.svg'
import { ReactComponent as PinDrop } from '../../assets/icons/pin_drop.svg'
import { ReactComponent as Recycling } from '../../assets/icons/recycling.svg'
import { ReactComponent as Settings } from '../../assets/icons/settings.svg'
import { ReactComponent as Verified } from '../../assets/icons/verified.svg'
import { ReactComponent as Message } from '../../assets/icons/message.svg'
import { Link } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useMenu } from '../../Contexts/menu'


export const Menu = ({ name, img, open}) => {
    
    const { SetMenu } = useMenu()
    return (
        <>
        {open && 
        <Container>
            <Perfil>
                <AiOutlineCloseCircle onClick={() => SetMenu(false)}/>
                <ContentInfo>
                    <span>
                        <p>{name}</p>
                        <Link to="ediar">Editar perfil &gt;</Link>
                    </span>
                    <img src={img ? img : person} alt="name"/>
                </ContentInfo>
            </Perfil> 
            <Main>
                <ul>
                    <li onClick={() => SetMenu(false)}>
                        <Star/>
                        <Link to='/meu-progresso'>Meu Progresso</Link>
                    </li>
                    <li onClick={() => SetMenu(false)}>
                        <Handashake/>
                        <Link to='/minhas-doações'>Minhas doações</Link>
                    </li>
                    <li onClick={() => SetMenu(false)}>
                        <Recycling/>
                        <Link to='/coletas-realizadas'>Coletas Realizadas</Link>
                    </li>
                    <li onClick={() => SetMenu(false)}>
                        <Message/>
                        <Link to='/mensagens'>Mensagens</Link>
                    </li>
                    <li onClick={() => SetMenu(false)}>
                        <PinDrop/>
                        <Link to='/pontos-de-coletas'>Pontos de coletas</Link>
                    </li>
                    <li onClick={() => SetMenu(false)}>
                        <Group/>
                        <Link to='/covite-amigos'>Convide Amigos</Link>
                    </li>
                    <li onClick={() => SetMenu(false)}>    
                        <Verified/>
                        <Link to='/central-de-segurança'>Central de segurança</Link>
                    </li>
                    <li onClick={() => SetMenu(false)}>
                        <Settings/>
                        <Link to='/configurações'>Configurações</Link>
                    </li>
                    <li onClick={() => SetMenu(false)}>
                        <Info/>
                        <Link to='/sobre'>Sobre</Link>
                    </li>
                </ul>
            </Main>
        </Container>
        }
        </>
    )
}