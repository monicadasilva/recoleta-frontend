import { Container } from "./style";
import Msg from "../../../assets/mockups/msg.png";
import { Link } from "react-router-dom";

export const Messagens = () => {
  return (
    <Container>
      <Link to="/home">
        <img src={Msg} alt="algo" />
      </Link>
    </Container>
  );
};
