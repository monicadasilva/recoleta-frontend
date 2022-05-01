import { Maps } from "../../components/map";
import { FootBar, Content, Headers } from "./styled";
import { Menu } from "../../components/menu";
import Person from "../../assets/icons/person.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as Notf } from "../../assets/icons/notification.svg";

import React from "react";
import { MenuDown } from "../../components/MenuDown";

import { useMenu } from '../../Contexts/menu'
import { MenuFloating } from '../../components/MenuFloating'

export const Collect = () => {
  const [opens, setOpen] = React.useState(false);
  const { openMenu } = useMenu()
  return (
    <>
      <MenuDown />
      <span onClick={() => setOpen(false)}>
        <Maps MaterialType={"paper"} />
      </span>
      <Menu name={"monica"} img={Person} open={openMenu} />

      <Headers>
        <MenuFloating/>
      </Headers>
    </>
  );
};
