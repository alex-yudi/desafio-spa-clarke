import styled from "styled-components";


export const ContainerTextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    
    width: 50%;
    height: 100%;
    padding: 1rem;
    
    color: ${props => props.theme.colors.white};
`;