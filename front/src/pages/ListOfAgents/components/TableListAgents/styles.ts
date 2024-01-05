import styled from "styled-components";


export const TableAgents = styled.table`
    width: 100%;
    table-layout: auto;
    border-collapse: collapse;

    & > thead {
        background-color: ${props => props.theme.colors.principal};
        color: ${props => props.theme.colors.black};
        font-weight: bold;
    }
    
    & > thead > tr > th, & > tbody > tr > td {
        padding: 0.5rem;
    }
    & > tbody > tr > td { 
        text-align: center;
    }
`