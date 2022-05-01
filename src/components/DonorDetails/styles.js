import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 80vh;
  background-color: #fbfcff;
  bottom: 0;
  z-index: 999999999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  gap: 20px;
  font-size: 12px;

  .Profile {
    display: flex;
    font-size: 12px;
    gap: 20px;
    margin-bottom: 19px;
    .Details {
      width: 205px;
      color: rgba(77, 77, 77, 1);
      h3 {
        color: rgba(77, 77, 77, 1);
      }
    }
    .Icon {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: #68627a;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: white;
        width: 30px;
        height: 30px;
      }
    }
  }

  .Up {
    width: 88px;
    border-radius: 6px;
    margin: 5px 0px;
    height: 5px;
    background-color: rgba(196, 196, 196, 1);
  }

  .Items {
    .ItemOne {
      .img {
        width: 80px;
        height: 80px;
        background: #dfdfdf;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      .DetailsItem {
        width: 205px;
        h3 {
          margin: 10px 0px;
        }
        span {
          font-weight: normal;
        }
      }
      color: rgba(77, 77, 77, 1);
      h3 {
        color: rgba(77, 77, 77, 1);
      }
    }
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    border-top: 1px solid #DFDFDF;
    gap: 10px;
    button {
      width: 146px;
      height: 31px;
      border: 1px solid rgba(158, 125, 250, 1);
      border-radius: 24px;
      color: rgba(158, 125, 250, 1);
      background: white;
    }
  }
`;
