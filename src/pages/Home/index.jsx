import { MapPage } from "../../components/map/index";

// STYLES
import { Container, BottomBar, BottomBarItem } from "./style";
import recycling from "../../assets/icons/recycling.svg";
import handshake from "../../assets/icons/handshake.svg";

export const HomePage = () => {
  return (
    <Container>
      <MapPage MatiralType="glass" />
      <BottomBar> 
        <BottomBarItem color>
            <img width={24} height={24} src={recycling} alt="ícone da coleta"/> 
            <p> Coletar </p>
        </BottomBarItem>
        <BottomBarItem>
            <img width={24} height={24} src={handshake} alt="ícone de doação"/>
            <p> Doar </p>
        </BottomBarItem>
      </BottomBar>
    </Container>
  );
};
