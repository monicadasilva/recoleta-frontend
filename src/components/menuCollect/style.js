import styled, { keyframes } from "styled-components";

const animateMenu = keyframes`
    0%{
        top:800%
    }
    100%{
        top:100%
    }

`;
export const Container = styled.div`
  height: 70vh;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  background: var(--white-one-plus);

  position: fixed;
  width: 100%;
  bottom: 0;
  animation: ${animateMenu} ease 1.5s;
  z-index: 1254015555555555555555;
`;

export const ContentInput = styled.div`
  display: flex;
  border: 1px solid var(--black-one);
  border-radius: 10px;
  width: 285px;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;
  padding-left: 16px;

  input {
    height: 48px;
    width: 80%;
    background: transparent;
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    border: none;
    &::placeholder {
      color: var(--black-one);
    }

    &:focus {
      outline: none !important;
    }
  }
`;

export const ContentTypesCollect = styled.div`
  display: flex;
  align-items: center;
  padding-left: 34px;
  height: 128px;
  border-top: 1px solid var(--white-one-negative);
  border-bottom: 1px solid var(--white-one-negative);
  overflow: auto;

  div {
    display: flex;
  }
`;

export const Main = styled.main`
  background: var(--white-one-negative);
  overflow: auto;
  height: 265px;
`;

export const Footer = styled.div`
  background: var(--white-one-negative);
  &:hover {
    background: #ece6e6;
  }
  height: 72px;
  border-top: 1px solid #d7d7d7;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 28px;
  a {
    text-decoration: none;
    color: var(--black-one);
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 600;
  }

  svg {
    height: 24px;
  }
`;

export const LineExit = styled.div`
  width: 80px;
  height: 5px;
  border-radius: 2.5px;
  background: #c4c4c4;
  margin: 0 auto;
  margin-top: 8px;
`;
