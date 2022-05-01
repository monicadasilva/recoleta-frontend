import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .Top {
    width: 100%;
    height: 64px;
    background: #9e7dfa;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
    button {
      width: 59px;
      height: 32px;
      color: #9e7dfa;
      border-radius: 18px;
      border: none;
      margin-right: 15px;
    }
    svg {
      color: white;
      width: 20px;
      height: 20px;
      margin-left: 15px;
    }
  }

  .Photo {
    display: flex;
    color: gray;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 270px;
    height: 184px;
    margin: 20px auto;
    border: 2px dotted gray;
    svg {
      width: 32px;
      height: 32px;
      color: gray;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: auto;
    height: 300px;
    font-size: 12px;
    label {
      margin-bottom: 10px;
    }

    input {
      height: 32px;
      background: #ffffff;
      border: 1px solid #dfdfdf;
      box-sizing: border-box;
      border-radius: 8px;
      margin-bottom: 20px;
      padding: 20px;
    }
    button {
      width: 236px;
      height: 32px;
      background: #317a37;
      border-radius: 16px;
      color: white;
      padding: 15px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px auto;
    }
  }
`;
