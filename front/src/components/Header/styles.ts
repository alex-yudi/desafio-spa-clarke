import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 5rem;
  height: 14vh;

  & > img{ 
    width: 11rem;
    
    filter: invert(59%) sepia(47%) saturate(700%) hue-rotate(90deg) brightness(160%) contrast(93%);
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  width: 20rem;
`;