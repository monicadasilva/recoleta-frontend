import { useState } from "react";
import { MapPage } from "../../components/map/index";
import { Menu } from "../../components/menu";
import SliderHome from "../../components/slider";

// STYLES
import { Container, BottomBar, BottomBarItem, MenuIcon } from "./style";
import recycling from "../../assets/icons/recycling.svg";
import handshake from "../../assets/icons/handshake.svg";
import menu from "../../assets/icons/menu.svg";

export const HomePage = () => {
  const [isMenuActive, setisMenuActive] = useState(false);

  return (
    <Container>
      <MapPage MatiralType="glass" />
      <MenuIcon
        onClick={() => {
          setisMenuActive(!isMenuActive);
        }}
      >
        <img width={24} height={24} src={menu} alt="menu" />
      </MenuIcon>
      {!!isMenuActive && <Menu name="ricardo" img={recycling} open={"yes"}/>}
      <SliderHome />
      <BottomBar>
        <BottomBarItem color>
          <img width={24} height={24} src={recycling} alt="ícone da coleta" />
          <p> Coletar </p>
        </BottomBarItem>
        <BottomBarItem>
          <img width={24} height={24} src={handshake} alt="ícone de doação" />
          <p> Doar </p>
        </BottomBarItem>
      </BottomBar>
    </Container>
  );
};
