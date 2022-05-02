import { Container } from "./style";
import Donation from "../../../assets/mockups/Doação.png";
import { Link } from "react-router-dom";

export const Donations = () => {
  return (
    <Container>
      <Link to="/home">
        <img src={Donation} alt="algo" />
      </Link>
    </Container>
  );
};
