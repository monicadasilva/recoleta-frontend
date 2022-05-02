import { Maps } from "../../components/map";
import { Headers } from "./styled";
import { Menu } from "../../components/menu";
import Person from "../../assets/icons/person.svg";

import React from "react";
import { MenuDown } from "../../components/MenuDown";
import { DonorDetails } from "../../components/DonorDetails";

import { useMenu } from "../../Contexts/menu";
import { MenuFloating } from "../../components/MenuFloating";
import { MenuCollect } from "../../components/menuCollect";

export const Collect = () => {
  const [opens, setOpen] = React.useState(false);

  const { openMenu, menuDown, menuCollect } = useMenu();

  return (
    <>
      <DonorDetails visible={false} />
      <MenuDown open={menuDown} />
      <span onClick={() => setOpen(false)}>
        <Maps MaterialType={"paper"} />
      </span>
      <Menu name={"Rafael da Silva"} img={Person} open={openMenu} />

      <Headers>
        <MenuFloating />
        <MenuCollect open={menuCollect} />
      </Headers>
    </>
  );
};
