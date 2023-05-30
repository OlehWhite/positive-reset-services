import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    width: '100%',
    maxWidth: 665
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    '@media (max-width: 770px)': {
      width: '100%',
      maxWidth: 470,
      margin: '0 auto',
      marginTop: 50
    }
  };
});

export const Ul = styled('ul')(() => {
  return {
    paddingLeft: 20
  };
});

export const Li = styled('li')(() => {
  return {
    color: '#959595',
    padding: 4
  };
});

export const Text = styled('p')(() => {
  return {
    color: '#959595'
  };
});

export const Title = styled('h2')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 700,
    color: '#3498db',
    margin: 0,
    paddingBottom: 10
  };
});

export const Contact = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #ebebeb',
    padding: '20px 0 20px 10px'
  };
});

export const TContact = styled(Box)(() => {
  return {
    color: '#6a767e',
    fontWeight: 600,
    fontSize: 14
  };
});
