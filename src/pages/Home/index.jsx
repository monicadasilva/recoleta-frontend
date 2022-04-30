import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {goToLogin} from "../../routes/coordinator";

//STYLES
import { HomeContainer } from "./styled";
import reciclyingSVG from "../../assets/icons/recycling.svg";
import {Zoom} from "@material-ui/core";

export const HomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    //setTimeout(()=> goToLogin(navigate), 3000)
  }, [])
  
  

  return (
    <HomeContainer>
      <Zoom in style={{transitionDelay: reciclyingSVG ? '1000ms' : '0ms'}}>
      <div>
        <img width={120} height={120} src={reciclyingSVG} alt="Reciclável" />
        <h1> Recoleta </h1>
      </div>
      </Zoom>
    </HomeContainer>
  );
};
