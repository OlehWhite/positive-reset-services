import { styled, Box } from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export const Container = styled(Box)(() => {
  return {
    '@media (max-width: 769px)': {
      display: 'none'
    }
  };
});

export const MUIButton = styled(Button)(() => {
  return {
    padding: 0,
    color: '#fff',
    marginRight: 20,
    fontSize: 14,
    fontWeight: 700,
    transition: '.3s',

    '&:hover': {
      color: '#3498db',
      backgroundColor: 'none'
    }
  };
});

export const Ul = styled('ul')(() => {
  return {
    padding: '0 20px 0',
    marginLeft: 10
  };
});

export const Li = styled('li')(() => {
  return {
    padding: '6px 0',
    borderBottom: '1px solid rgba(243, 243, 243, 1)'
  };
});

export const Nav = styled(NavLink)(() => {
  return {
    textDecoration: 'none',
    color: '#373737',
    transition: '.3s',

    '&:hover': {
      transition: '.3s',
      color: '#3498db'
    }
  };
});
