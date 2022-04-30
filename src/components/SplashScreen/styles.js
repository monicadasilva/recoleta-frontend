import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #4fe385;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  visibility: ${({stop}) => stop ? "visibily": "hidden"};
  .Title {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    margin: 0;
    animation: 1s AnimateText;
  }

  .Logotipo {
    animation: 1s AnimateLogo;
    width: 100px;
    height: 100px;
  }

  @keyframes AnimateBackground {
    100% {
    }
  }

  @keyframes AnimateLogo {
    0% {
      transform: scale(10%) rotate(90deg);
    }
  }

  @keyframes AnimateText {
    0% {
      transform: scale(40%);
    }
  }
`;


/**
 * 
 */