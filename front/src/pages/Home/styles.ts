import styled from "styled-components";
import bg from '../../assets/bg-header.jpeg'

export const ContainerMain = styled.main`
    display: flex;
    
    padding: 1rem 5rem;
    width: 100%;
    height: calc(100vh - 14vh);

    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${bg}) ;
    background-size: cover;
    background-position: center;
`;

export const ContainerTextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    width: 50%;
    height: 100%;
    color: ${props => props.theme.colors.white};
`;