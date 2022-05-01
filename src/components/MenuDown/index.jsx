import { Container } from "./styles";
import { MdRecycling } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

export const MenuDown = () => {
  return (
    <Container>
      <div className="menusAction">
        <div className="collect">
          <MdRecycling className="svg rec" />
          <p>Coletar</p>
        </div>
        <div className="donation">
          <FaHandsHelping className="svg hands" />
          <p>Doar</p>
        </div>
      </div>
    </Container>
  );
};
