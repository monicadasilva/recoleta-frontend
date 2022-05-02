import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  place-items: center;
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  z-index: 2010;

  div {
    //display: flex;
    //flex-direction: column;
    //align-items: center;

    h1 {
      font-size: 3rem;
      color: var(--white-one-plus);
    }
  }
`;
