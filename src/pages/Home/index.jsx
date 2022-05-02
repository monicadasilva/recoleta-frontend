import { useMenu } from "../../Contexts/menu";
import { Menu } from "../../components/menu";
import { MenuFloating } from "../../components/MenuFloating";
import { HomeContainer } from "./styles";
import { MenuDown } from "../../components/MenuDown";
import { Maps } from "../../components/map";
import { MenuCollect } from "../../components/menuCollect";

export const HomePage = () => {
  const { openMenu } = useMenu();
  return (
    <>
      <MenuCollect />
      <Maps MaterialType={"none"} />
      <HomeContainer>
        <MenuFloating />
        <MenuDown open={true} />
        <Menu name="Rafael da Silva" open={openMenu} />
      </HomeContainer>
    </>
  );
};
