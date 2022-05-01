import styled from "styled-components";

export const Headers = styled.header`
  width: 100%;
  height: 64px;
  position: absolute;
  top: 0;
  z-index: 990;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span:nth-child(n) {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;

    color: var(--black-one);
    background: var(--white-one-negative);

    border-radius: 100%;
    svg {
      width: 30px;
      margin-right: 5px;
    }
    cursor: pointer;
  }
  span:nth-child(1) {
    margin-left: 15px;
    svg {
      margin: 0 auto;
    }
  }
  span:nth-child(2) {
    margin-right: 15px;
    svg {
      margin: 0 auto;
    }
  }
`;
export const Content = styled.div`
  width: 100%;

  position: absolute;
  bottom: 0;

  z-index: 1000;
`;

export const FootBar = styled.footer`
  width: 100%;
  height: 64px;
  position: absolute;
  bottom: 0;

  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: stretch;
  background: var(--white-one-negative);

  z-index: 999;

  div:nth-child(n) {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--black-one);

    svg {
      margin-right: 5px;
      path {
        fill: var(--black-one);
      }
    }
    cursor: pointer;
    :hover {
      color: var(--success);

      svg {
        path {
          fill: var(--success);
        }
      }
    }
  }
`;
