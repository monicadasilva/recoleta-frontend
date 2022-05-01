import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    width: 287px;
    padding: 8px;
    margin: 0 auto;
    margin-bottom: 24px;

    span{
        height:24px;
        width: 24px;
        display: flex;
        justify-content: center;
        align-items:center ;
        background: var(--success);
        border-radius: 50%;
        margin-right: 10px;

        svg{
            height: 19px;
        }
    }

    
`

export const Main = styled.div`
    h4, p{
        margin: 0;
        color: var(--black-one);
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height:18px ;
    }

    p{
        font-size: 10px;
        font-weight: 200;

    }
`