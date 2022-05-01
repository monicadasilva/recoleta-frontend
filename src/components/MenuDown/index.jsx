import { Container } from "./styles";
import { MdRecycling } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const MenuDown = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <div className="menusAction">
        <div className="collect">
          <MdRecycling className="svg rec" />
          <p>Coletar</p>
        </div>
        <div className="donation" onClick={() => navigate("/create-donation")}>
          <FaHandsHelping className="svg hands" />
          <p>Doar</p>
        </div>
      </div>
    </Container>
  );
};
