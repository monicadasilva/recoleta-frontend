import { Maps } from "../../components/map";
import { Headers } from "./styled";
import { Menu } from "../../components/menu";
import Person from "../../assets/icons/person.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as Notf } from "../../assets/icons/notification.svg";

import React from "react";
import { MenuDown } from "../../components/MenuDown";
import { DonorDetails } from "../../components/DonorDetails";

export const Collect = () => {
  const [opens, setOpen] = React.useState(false);
  console.log(opens);
  return (
    <>
      <DonorDetails />
      <MenuDown />
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
    </>
  );
};
