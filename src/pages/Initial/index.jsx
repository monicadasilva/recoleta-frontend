import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {goToLogin} from "../../routes/coordinator";

//STYLES
import { HomeContainer } from "./styled";
import logo from "../../assets/icons/logo.svg";
import {Zoom} from "@material-ui/core";

export const Initial = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(()=> goToLogin(navigate), 3000)
  }, [])
  
  

  return (
    <HomeContainer>
      <Zoom in style={{transitionDelay: logo ? '1000ms' : '0ms'}}>
      <div>
        <img width={120} height={120} src={logo} alt="Reciclável" />
        <h1> <span>Re</span>coleta </h1>
      </div>
      </Zoom>
    </HomeContainer>
  );
};
