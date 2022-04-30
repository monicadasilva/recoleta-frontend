import { HomeContainer } from "./styled";
import reciclyingSVG from "../../assets/icons/recycling.svg";

export const HomePage = () => {
  return (
    <HomeContainer>
      <div>
        <img src={reciclyingSVG} alt="Reciclável" />
        HomePage
      </div>
    </HomeContainer>
  );
};
