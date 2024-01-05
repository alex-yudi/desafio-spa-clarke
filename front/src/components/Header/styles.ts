import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;

  & > img{ 
    width: 11rem;
    
    filter: invert(59%) sepia(47%) saturate(700%) hue-rotate(90deg) brightness(160%) contrast(93%);
  }

  border-bottom: 1px solid red;
`;

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-a;
  width: 20rem;
`;

export const ContainerCallToAction = styled.div`
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