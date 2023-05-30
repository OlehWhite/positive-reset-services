import { styled, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Container = styled(Box)(() => {
  return {
    borderTop: '1px solid #9797978a',
    borderBottom: '1px solid #9797978a'
  };
});

export const Wrapper = styled('nav')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1300,
    margin: '0 auto',
    padding: '20px'
  };
});

export const Nav = styled(NavLink)(() => {
  return {
    transition: '.3s',
    marginRight: 20,
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,

    '&:hover': {
      color: '#3498db'
    },

    '@media (max-width: 769px)': {
      display: 'none'
    }
  };
});

export const WrapperSidebar = styled(Box)(() => {
  return {
    '@media (max-width: 769px)': {
      display: 'flex',
      alignItems: 'center'
    }
  };
});

