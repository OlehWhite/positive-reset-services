import { styled, Box } from '@mui/material';
import { createGlobalStyle } from 'styled-components';

export const Wrapper = styled(Box)(() => {
  return {
    margin: '0 auto'
  };
});

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    font-weight: 400;
  }
`;
