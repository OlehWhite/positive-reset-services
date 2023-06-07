import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Button = styled('span')(() => {
  return {
    color: 'white',
    textDecoration: 'none',
    fontSize: 15,
    transition: '.3s',
    cursor: 'pointer',

    '&:hover': {
      color: '#3498db'
    }
  };
});

export const Ul = styled('ul')(() => {
  return {
    margin: 0,
    padding: 0
  };
});

export const Li = styled('li')(() => {
  return {
    listStyleType: 'none',
    padding: '6px 0',
    borderBottom: '1px solid rgba(255,255,255,.08)',
  };
});

export const Nav = styled(NavLink)(() => {
  return {
    display: 'block',
    textDecoration: 'none',
    color: '#fff',
    fontSize: 16,
    transition: '.3s',

    '&:hover': {
      color: '#3498db'
    }
  };
});
