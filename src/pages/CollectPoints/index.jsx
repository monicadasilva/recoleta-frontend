import { Maps } from "../../components/map";
import { FootBar, Content, Headers } from "./styled";
import { Menu } from "../../components/menu";
import Person from "../../assets/icons/person.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as Notf } from "../../assets/icons/notification.svg";
import { ReactComponent as Rec } from "../../assets/icons/recycling.svg";
import { ReactComponent as Hands } from "../../assets/icons/handshake.svg";
import React from "react";

export const Collect = () => {
  const [opens, setOpen] = React.useState(false);
  console.log(opens);
  return (
    <>
      <span onClick={() => setOpen(false)}>
        <Maps MaterialType={"paper"} />
      </span>
      <Menu name={"monica"} img={Person} open={opens} />

      <Headers>
        <span onClick={() => setOpen(!opens)}>
          <MenuIcon />
        </span>
        <span>
          <Notf />
        </span>
      </Headers>
      <Content>
        <div>Notícias</div>
        <FootBar>
          <div>
            <Rec />
            <p>Coletar</p>
          </div>
          <div>
            <Hands />
            <p>Doar</p>
          </div>
        </FootBar>
      </Content>
    </>
  );
};
