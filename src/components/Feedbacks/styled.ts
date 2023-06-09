import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    background: '#f7f7f7',
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    maxWidth: 1300,
    width: '100%',
    margin: '0 auto',
    padding: '12px 0 12px',
    textAlign: 'center',
  };
});

export const Text = styled('p')(() => {
  return {
    fontSize: 18,
    lineHeight: '26px',
    maxWidth: 1000,
    color: '#959595',
    margin: '0 auto',
    padding: 34,
    fontWeight: 400
  };
});

export const Name = styled('p')(() => {
  return {
    fontSize: 16,
    color: '#b7b7b7',
    lineHeight: '24px'
  };
});
