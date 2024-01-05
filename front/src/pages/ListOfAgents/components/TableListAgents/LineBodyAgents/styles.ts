import styled from "styled-components";

export const LineDataAgents = styled.tr`
    height: 3rem;
    padding: 1rem;

    border-bottom: 1px solid ${props => props.theme.colors.principal};
    & > td {
    }
`

export const SelectAgent = styled.button`
    all: unset;
    padding: 0.5rem 1rem;

    border-radius: 5px;

    background-color: ${props => props.theme.colors.principal};
    color: ${props => props.theme.colors.black};
    
    font-size: 0.8rem;
    font-weight: bold;

    cursor: pointer;
    transition: 0.2s;

    &:hover {
        color: white;
    }
    &:active {  
        transform: scale(0.9);
    }
`