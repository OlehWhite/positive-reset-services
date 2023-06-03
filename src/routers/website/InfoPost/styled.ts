import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };
});

export const Block = styled(Box)(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 635
  };
});

export const Img = styled('img')(() => {
  return {
    width: 82,
    height: 82,
    borderRadius: '50%',
    margin: '0 20px 20px 0'
  };
});

export const Title = styled('h2')(() => {
  return {
    fontSize: 16,
    fontWeight: 700,
    color: '#373737'
  };
});

export const Text = styled('p')(() => {
  return {
    fontSize: 14,
    lineHeight: '26px',
    color: '#959595'
  };
});
