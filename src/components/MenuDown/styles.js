import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  z-index: 5000;
  background-color: white;
  padding: 32px 0;
  color: #4d4d4d;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .menusAction {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .svg {
    width: 26px;
    height: 26px;
  }

  .collect:active,
  .donation:active {
    color: rgba(49, 122, 55, 1);
  }

  .collect,
  .donation {
    cursor: pointer;
  }
`;
