import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  
  padding: 0.5rem 1rem;
  border-radius: 30px;

  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.black};
  
  background-color: ${props => props.theme.colors.principal};
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.colors.white};
  }
  &:active {
    color: ${props => props.theme.colors.black};
    opacity: 0.8;
  }
`;