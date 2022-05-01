import styled, { keyframes } from "styled-components";

const animateModal = keyframes`
    0%{
        left: -70%;
    }
    100%{
        left: 0%;
    }

`;

export const Container = styled.div`
  width: 60vw;
  height: 100vh;
  background: var(--white-zero);
  position: absolute;
  animation: ${animateModal} ease 1s;

  top: 0;
  left: 0;
  z-index: 1003;

  a {
    font-size: 12px;
    color: var(--black-one);
    list-style-type: none;
    list-style: none;
    text-decoration: none;
  }
  @media (min-width: 700px) {
    width: 25vw;
    a {
      font-size: 1rem;
    }
  }
`;

export const Perfil = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  svg{
    position: absolute;
    top: 6px;
    right: 7px;
    font-size: 19px;
    color: var(--secondary-one-plus);
  }
`;

export const ContentInfo = styled.div`
  width: 100%;
  color: var(--black-one);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--secondary-one-plus);
    padding: 5px;
  }
  @media (min-width: 700px) {
    width: 25vw;
    a {
      font-size: 12px;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  box-shadow: 0px -2px 4px 0px #00000040;
  padding-top: 30px;

  svg {
    width: 16px;
    height: 16px;
  }

  ul {
    padding-left: 1rem;

    li {
      cursor: pointer;
      padding: 1rem;
      color: var(--black-one);
      display: flex;
      align-items: center;
      a {
        margin-left: 11px;
      }

      &:hover {
        background: #ece6e6;
      }
    }
  }
`;
