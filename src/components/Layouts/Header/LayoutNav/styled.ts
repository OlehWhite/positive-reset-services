import { styled, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Container = styled(Box)(() => {
  return {
    borderTop: '1px solid #ffffff42',
    borderBottom: '1px solid #ffffff42'
  };
});

export const Wrapper = styled('nav')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1300,
    margin: '0 auto',
    padding: '20px',
  };
});

export const Nav = styled(NavLink)(() => {
  return {
    color: 'white',
    transition: '.3s',
    marginRight: 20,
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,

    '&:hover': {
      color: '#3498db'
    }
  };
});

export const FirstBlock = styled(Box)(() => {
  return {};
});

export const SecondBlock = styled(Box)(() => {
  return {};
});

export const Link = styled('a')(() => {
  return {
    fontSize: 14,
    color: 'white',
    cursor: 'pointer',
    fontWeight: 600,
    transition: '.3s',

    '&:hover': {
      color: '#3498db'
    }
  }
})

