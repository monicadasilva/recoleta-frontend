import { useState } from "react";
import { useEffect } from "react";
import Logo from "../../assets/Logo.svg";
import { Container } from "./styles";

export const SplashScreen = () => {
  const [stop, setStop] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStop(false);
    }, 2000);
  }, []);
  return (
    <Container stop={stop}>
      <div className="Logotipo">
        <img src={Logo} alt={"Logotipo"} className="Logotipo" />
      </div>
      <h1 className="Title">Recoleta</h1>
    </Container>
  );
};
