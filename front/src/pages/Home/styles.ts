import styled from "styled-components";
import bg from '../../assets/bg-main.jpeg'

export const ContainerMain = styled.main`
    display: flex;
    
    padding: 1rem 5rem;
    width: 100%;
    height: calc(100vh - 14vh);

    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${bg}) ;
    background-size: cover;
    background-position: center;
`;
