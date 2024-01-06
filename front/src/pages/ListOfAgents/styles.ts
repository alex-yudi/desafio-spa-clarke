import styled from "styled-components";

export const ContainerListOfAgents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 5rem;
    gap: 2rem;

    & > h1 {
        text-decoration: underline;
        text-decoration-color: ${props => props.theme.colors.principal};
    }
`;

export const NotFoundAgent = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40vh;
    width: 100%;
`