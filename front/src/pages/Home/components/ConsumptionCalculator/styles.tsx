import styled from "styled-components";

export const ContainerCalculator = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50%;
`;

export const Calculator = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    gap: 3rem;

    width: 90%;

    border-radius: 20px;
    background-color: ${props => props.theme.colors.white};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;

    margin: 2rem 0;
`;

export const Label = styled.label`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;

export const ErrorInput = styled.div`
    display: flex;
    margin-top: 0.5rem;

    color: red;
    font-size: 0.8rem;
    height: 1rem;
`

export const InputNumber = styled.input`
    padding: 0.5rem;
    outline-color: ${props => props.theme.colors.principal};
`;

export const ContainerTextHelper = styled.div`
`