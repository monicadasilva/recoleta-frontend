import styled, {css} from "styled-components";

const icons = css`
    position: absolute ;
    z-index: 1000;
    background-color: var(--white-zero);
    border-radius: 50%;

    display: flex; 
    padding: 0.25rem;
    border: 1px solid var(--black-zero);
`

export const Container = styled.div`
  height: 100vh;
  position: relative;
`;

export const BottomBar = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
  bottom: 0;
  padding-bottom: 2rem;
  padding-top: 1rem;
  background-color: white;

  display: flex;
  justify-content: space-around;
`;

export const BottomBarItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    color: ${props => props.color ? "var(--success)" : "black"};
  }
`;


export const MenuIcon = styled.div`
    cursor: pointer;
    top: 2rem;
    left: 4rem;
    ${icons}
`


export const NotificationIcon = styled.div`
    cursor: pointer;
    right: 2rem;
    top: 2rem;
    ${icons}

`

