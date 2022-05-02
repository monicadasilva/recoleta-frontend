import {
  Container,
  ContentInput,
  ContentTypesCollect,
  Footer,
  Main,
  LineExit,
} from "./style";
import { CardCollect } from "../CardCollect";
import { CardTypeCollet } from "../CardTypeCollect";
import { ReactComponent as Message } from "../../assets/icons/message.svg";
import { ReactComponent as Search } from "../../assets/icons/search_gray.svg";
import { ReactComponent as Vector2 } from "../../assets/icons/Vector-2.svg";
import { ReactComponent as Vector } from "../../assets/icons/Vector.svg";
import { ReactComponent as MyLocation } from "../../assets/icons/my_location.svg";
import { ReactComponent as List } from "../../assets/icons/list.svg";
import { Link } from "react-router-dom";
import { useMenu } from "../../Contexts/menu";

export const MenuCollect = () => {
  const { SetMenuColletc, SetMenuDown, openMenuCollect, setOpenMenuCollet } =
    useMenu();

  return (
    <>
      {" "}
      {openMenuCollect && (
        <Container>
          <LineExit
            onClick={() => (setOpenMenuCollet(false), SetMenuDown(true))}
          />
          <ContentInput>
            <input type="text" placeholder="O que você gostaria de coletar" />
            <Search />
          </ContentInput>

          <ContentTypesCollect>
            <div>
              <CardTypeCollet type="Vidro" Icon={Vector2} />
              <CardTypeCollet type="Papelão" Icon={Vector} />
              <CardTypeCollet type="Papel" Icon={List} />
              <CardTypeCollet type="Plástico" Icon={Message} />
              <CardTypeCollet type="Plástico" Icon={Message} />
            </div>
          </ContentTypesCollect>

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
          </Main>
          <Footer>
            <MyLocation />
            <Link to="/map"> Definir um local no mapa</Link>
          </Footer>
        </Container>
      )}
    </>
  );
};
