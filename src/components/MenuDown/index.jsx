import { Container } from "./styles";
import { MdRecycling } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { useMenu } from "../../Contexts/menu";
import { useNavigate } from "react-router-dom";
export const MenuDown = ({ open }) => {
  const { SetMenuDown, SetMenuColletc, setOpenMenuCollet } = useMenu();
  const navigate = useNavigate();

  const donationClick = () => {
    navigate("/create-donation");
    SetMenuDown(false);
  };

  const collectClick = () => {
    SetMenuDown(false);
    SetMenuColletc(true);
    setOpenMenuCollet(true);
  };

  return (
    <>
      {open && (
        <Container>
          <div className="menusAction">
            <div className="collect" onClick={collectClick}>
              <MdRecycling className="svg rec" />
              <p>Coletar</p>
            </div>
            <div className="donation" onClick={donationClick}>
              <FaHandsHelping className="svg hands" />
              <p>Doar</p>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
