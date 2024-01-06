import styled, { keyframes } from "styled-components";

export const LoadingOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);

  z-index: 9999;
`

const rotate = keyframes`
  from {
      transform: rotate(0deg);
  }

  to {
      transform: rotate(360deg);
  }
`

export const LoadingCircle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;

  border: 2.5px solid #8F21F7;
  border-top: 2.5px solid ${props => props.theme.colors.principal};
  border-right: 2.5px solid ${props => props.theme.colors.principal};
  border-radius: 100%;
  animation: ${rotate} 1s linear infinite;
`