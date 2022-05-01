import { useMenu } from "../../Contexts/menu";
import { Menu } from "../../components/menu";
import { MenuFloating } from "../../components/MenuFloating";
import { HomeContainer } from "./styles";
import { MenuDown } from "../../components/MenuDown";
import { Maps } from "../../components/map";

export const HomePage = () => {
  const { openMenu } = useMenu();

  return (
    <>
      <Maps MaterialType={"none"} />
      <HomeContainer>
        <MenuFloating />
        <MenuDown open={true} />
        <Menu name="Rafael da Silva" open={openMenu} />
      </HomeContainer>
    </>
  );
};
