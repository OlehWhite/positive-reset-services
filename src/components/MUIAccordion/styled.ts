import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export const Nav = styled(NavLink)(() => {
  return {
    textDecoration: 'none',
    color: '#555',
    margin: 0,
    fontSize: 14,
    fontWeight: 600,
    padding: '12px 0',
    transition: '.3s',

    '&:hover': {
      transition: '.3s',
      color: '#3498db'
    }
  };
});

export const SNav = styled(Nav)(() => {
  return {
    padding: '6px 0',
  }
})

export const Menu = styled(Typography)(() => {
  return {
    fontWeight: 700,
    color: '#000',
    fontSize: 14,
    transition: '.3s',

    '&:hover': {
      transition: '.3s',
      color: '#3498db'
    }
  };
});
