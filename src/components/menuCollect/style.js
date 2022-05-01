import styled from "styled-components";

export const Container = styled.div`
    height: 70vh;
    width: 100%;
    bottom:0% ;
    border-radius: 8px 8px 0px 0px;
    position: absolute;
    background: var(--white-one-plus);
`

export const ContentInput = styled.div`
    display: flex;
    border: 1px solid var(--black-one);
    border-radius: 10px;
    width: 285px;
    margin: 0 auto;
    margin-top:32px;
    margin-bottom:32px;
    padding-left: 16px;

    input{
        height: 48px;
        width: 80%;
        background: transparent;
        font-size:12px;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        border:none;
        &::placeholder{
            color: var(--black-one);
        }

        &:focus{
            outline:none!important;
        }
        
    }
`

export const ContentTypesCollect = styled.div`
    display:flex ;
    align-items: center;
    padding-left: 34px;
    height: 128px;
    border-top: 1px solid var(--white-one-negative);
    border-bottom: 1px solid var(--white-one-negative);
    overflow: auto;

    div{
        display: flex;
    }
`


export const Main = styled.main`
    overflow: auto;
    height: 265px;
    `

export const Footer = styled.div`
    &:hover{
        background:     #ece6e6;
    }
    height:72px ;
    border-top: 1px solid var(--white-one-negative);
    cursor: pointer;
    display: flex;
    align-items:center;
    padding-left: 28px;
    a{
        text-decoration: none;
        color: var(--black-one);
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight: 600;
    }

    svg{
        height: 24px;
    }
`