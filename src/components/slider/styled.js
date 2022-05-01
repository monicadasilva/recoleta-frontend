import styled from "styled-components";


export const StyledContainer = styled.div`
  z-index: 1000;
  position: fixed;
  bottom: 15%;
  width: 100%;
`;

export const SlickSliderContainer = styled.div`
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  color: var(--white-one-plus);

  div {
    box-sizing: border-box;
    background-color: var(--secondary-one-plus);
    width: 95%;
    padding: 1rem 1.5rem;
    border-radius: 1rem;

    h2 {
      font-size: 0.875rem;
      margin: 0 0 1rem 0;
    }
    p {
        font-size: 0.75rem;
      &::after {
        content: ">";
        font-size: 0.75rem;
      }
    }
  }
`;
