import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full-screen spinner */
  background-color: ${(props) => props.theme.palette.background.default};
`;

const Spinner = styled.div`
  border: 8px solid ${(props) => props.theme.palette.background.paper}; /* Light gray border */
  border-top: 8px solid ${(props) => props.theme.palette.primary.main}; /* Blue border on top */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
