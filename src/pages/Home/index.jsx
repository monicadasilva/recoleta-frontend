import { useEffect } from "react";
import { SplashScreen } from "../../components/SplashScreen";
import api from "../../services/ap";
import { Container } from "./styles";

export const HomePage = () => {
  return (
    <Container>
      <SplashScreen />
      <h1>Home</h1>
    </Container>
  );
};
