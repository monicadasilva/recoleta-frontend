import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-zero);
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: initial;
  align-items: center;
  height: 90vh;
  width: 100%;
  font-family: "Poppins", sans-serif;

  background-color: var(--white-one-plus);
  border-radius: 2rem 2rem 0 0;

  img {
    margin-top: 1.5rem;
  }

  .title {
    font-family: "Poppins", sans-serif;
    font-size: 0.75rem;
  }

  form {
    box-sizing: border-box;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 75%;

    span {
      cursor: pointer;
      font-size: 0.675rem;
      align-self: flex-end;
      color: var(--success);
      margin-top: 1rem;
    }

    button {
      cursor: pointer;
      width: 100%;
      background-color: var(--primary-zero);
      border-radius: 3rem;
      border: none;
      padding-block: 1rem;
      margin-top: 1rem;
    }
  }

  .flex {
    display: flex;
    width: 75%;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .btn {
    cursor: pointer;
    width: 49%;
    border: none;
    padding-block: 0.75rem;
    border-radius: 3rem;
    background: transparent;

    &:first-child {
      border: 1px solid var(--success);
      color: var(--success);
    }
    &:last-child {
      border: 1px solid var(--secondary-zero);
      color: var(--secondary-zero);
    }
  }

  span {
    cursor: pointer;
    font-size: 0.675rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  .singup {
    margin-block: 1rem;
    font-size: 0.675rem;
    span {
      cursor: pointer;
      font-weight: 700;
      color: var(--success);
      border: none;
    }
  }

  @media (min-width: 768px) {
    height: fit-content;
    border-radius: unset;
    padding-bottom: 3rem ;

    margin: 0 auto;
    img {
      display: none;
    }
    .title {
      display: none;
    }

    form {
      max-width: 25rem;
    }

    .flex {
      max-width: 25rem;
    }
  }
`;

export const InputLogin = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  box-sizing: border-box;
  background-color: var(--white-zero);
  padding: 1rem 1.5rem;
  width: 100%;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const AlternativeLoginText = styled.div`
  width: 75%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    display: inline;
    margin-inline: 16px;
    color: rgba(0, 0, 0, 0.15);
  }
  &::before {
    content: " ";
    width: 40%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.15);
  }
  &::after {
    content: " ";
    width: 40%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    max-width: 25rem;
  }
`;

export const DesktopHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem 0 2rem 5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    gap: 1rem;
    width:fit-content ;

    p {
      font-family: "Poppins", sans-serif;
      font-size: 4rem;
      color: var(--white-one-plus);
        span {
            color:#FFF9C7 ;
        }
    }
  }
`;
