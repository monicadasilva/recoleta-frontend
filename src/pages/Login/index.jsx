import { goToHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

//STYLES
import {
  Container,
  LoginContainer,
  InputLogin,
  AlternativeLoginText,
  DesktopHeader,
} from "./styled";
import logo from "../../assets/icons/logo.svg";
import useMobile from "../../hooks/useMobile";

export const LoginPage = () => {
  const { isMobile } = useMobile();
  const navigate = useNavigate();

  return (
    <Container>
      {!isMobile && (
        <DesktopHeader>
          <div>
            <img src={logo} alt="logo" width={100} height={100} />
            <p>
              <span>Re</span>coleta
            </p>
          </div>
        </DesktopHeader>
      )}
      <LoginContainer>
        <img width={120} height={120} src={logo} alt="logo" />
        <p className="title"> Acesse sua conta </p>

        <form>
          <InputLogin type="text" placeholder="Usuário" />
          <InputLogin type="password" placeholder="Senha" />
          <span> Esqueceu sua senha? </span>
          <button type="submit">Entrar</button>
        </form>

        <AlternativeLoginText>
          <p>Ou</p>
        </AlternativeLoginText>
        <div class="flex">
          <button className="btn"> Google </button>
          <button className="btn"> Facebook </button>
        </div>

        <span
          onClick={() => {
            goToHome(navigate);
          }}
        >

          Pular essa etapa
        </span>

        <p class="singup">
          Não tem uma conta? <span> Cadastre-se! </span>
        </p>
      </LoginContainer>
    </Container>
  );
};
