import styled from "styled-components";

export const HomeContainer = styled.main`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: var(--primary-zero);

    div {
        display:flex;
        flex-direction: column;
        align-items: center ;

        h1 {
            font-size: 3rem;
            color: var(--white-one-plus); 
            span {
            color:#FFF9C7 ;
            }
        }  
    
    }
`;
