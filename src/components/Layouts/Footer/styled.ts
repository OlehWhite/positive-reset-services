import { styled, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Container = styled(Box)(() => {
  return {
    backgroundColor: '#2c3e50'
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1300,
    width: '100%',
    margin: '0 auto',
    padding: '74px 0 49px'
  };
});

export const Logo = styled(Box)(() => {
  return {
    weight: '100%',
    maxWidth: 300,
    margin: '0 24px 0'
  };
});

export const IMGLogo = styled('img')(() => {
  return {
    maxWidth: 302,
    width: '100%',
    margin: '2px 0 24px 0'
  };
});

export const Text = styled('p')(() => {
  return {
    color: 'white',
    fontSize: 15,
    marginTop: 0
  };
});

export const TextLogo = styled(Text)(() => {
  return {
    marginBottom: 24,
    textAlign: 'right',
    lineHeight: '26px'
  };
});

export const Contact = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center'
  };
});

export const ImgPhone = styled('img')(() => {
  return {
    width: 34
  };
});

export const WrapperImg = styled(Box)(() => {
  return {
    marginRight: 12
  };
});

export const ContactInfo = styled(Box)(() => {
  return {};
});

export const Tel = styled(Box)(() => {
  return {
    marginBottom: 2,
    color: 'white',
    fontSize: 14
  };
});

export const Email = styled(Box)(() => {
  return {
    color: '#b7b7b7',
    fontSize: 14
  };
});

export const ImgPost = styled('img')(() => {
  return {
    width: 60,
    height: 60,
    borderRadius: '50%',
    marginRight: 24
  };
});

export const Title = styled('h2')(() => {
  return {
    color: 'white',
    fontSize: 18,
    margin: '0 0 35px 0'
  };
});

export const Date = styled('p')(() => {
  return {
    color: 'white',
    marginTop: 12,
    fontSize: 15
  };
});

export const WrapperPost = styled(Box)(() => {
  return {
    marginTop: 34
  };
});

export const Post = styled(Box)(() => {
  return {
    display: 'flex',
    marginBottom: 30
  };
});

export const Ul = styled('ul')(() => {
  return {
    padding: 0
  };
});

export const Li = styled('li')(() => {
  return {
    listStyleType: 'none',
    borderBottom: '1px solid rgba(255,255,255,.08)',
    transition: '.3s',
    padding: '9px 0',

    '&:hover': {
      color: '#3498db'
    }
  };
});

export const Nav = styled(NavLink)(() => {
  return {
    color: 'white',
    textDecoration: 'none',
    fontSize: 15,
    transition: '.3s',

    '&:hover': {
      color: '#3498db'
    }
  };
});

export const Menu = styled('nav')(() => {
  return {
    margin: '0 24px 0',
    maxWidth: '100%',
    width: 390
  };
});

export const RecentPosts = styled(Box)(() => {
  return {
    maxWidth: 300,
    width: '100%',
    margin: '0 16px 0'
  };
});

export const WorkingHours = styled(Box)(() => {
  return {
    maxWidth: '100%',
    width: 430,
    marginLeft: 24,
    backgroundColor: '#34495e'
  };
});

export const Day = styled('p')(() => {
  return {
    color: 'white',
    fontWeight: 400,
    borderBottom: '1px solid rgba(255,255,255,.08)',
    padding: '8px 18px',
    fontSize: 14
  };
});

export const WrapperAlarm = styled('div')(() => {
  return {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 44,
    backgroundColor: '#34495e',
    borderRadius: '50%',
    padding: 10,
    boxSizing: 'content-box',
    textAlign: 'center',
    position: 'relative',
    bottom: 33,
    left: 110
  };
});

export const ImgAlarm = styled('img')(() => {
  return {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  };
});

export const WrapperPosition = styled(Box)(() => {
  return {
    position: 'absolute'
  };
});

export const Days = styled(Box)(() => {
  return {
    paddingTop: 24
  };
});

export const Copyright = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1300,
    margin: '0 auto',
    borderTop: '1px solid rgba(255,255,255,.08)'
  };
});

export const Links = styled(Box)(() => {
  return {
    display: 'flex'
  };
});

export const Facebook = styled('img')(() => {
  return {
    width: 14,
    marginRight: 16,
    transition: '.3s',

    '&:hover': {
      filter: 'brightness(0.5)',
      cursor: 'pointer'
    }
  };
});

export const Twitter = styled('img')(() => {
  return {
    width: 14,
    marginRight: 16,

    '&:hover': {
      filter: 'brightness(0.5)',
      cursor: 'pointer'
    }
  };
});

export const Linkedin = styled('img')(() => {
  return {
    width: 14,
    transition: '.3s',

    '&:hover': {
      filter: 'brightness(0.5)',
      cursor: 'pointer'
    }
  };
});

export const TitleFooter = styled('p')(() => {
  return {
    color: 'white',
    padding: '14px 0',
    fontSize: 14
  };
});

export const Link = styled('p')(() => {
  return {};
});
