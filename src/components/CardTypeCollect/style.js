import styled from "styled-components";

export const Container = styled.div`
    display:flex ;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 80px;
    width: 80px;
    background: var(--white-one-negative);
    color: var(--black-one);
    margin-right: 26px;

    h3{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 10px;
        margin: 0;
    }
`