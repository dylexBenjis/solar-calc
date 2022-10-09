import styled from "styled-components";

export const GlobalLayout = styled.div`
    width: calc(100vw*0.7) ;
    margin:auto ;

    
    @media screen and (max-width: 900px){
        width: calc(100vw*0.9)
    }
    @media screen and (max-width: 500px){
        width: calc(100vw)
    }
`