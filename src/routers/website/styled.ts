import { styled, Box } from '@mui/material';
import IMGHeader from 'assets/icons/Website.jpg';

export const Container = styled('main')(() => {
  return {
    width: '100%',
    maxWidth: 1300,
    margin: '0 auto 100px'
  };
});

export const WrapperHeader = styled(Box)(() => {
  return {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 300,
    backgroundImage: `url(${IMGHeader})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
});

export const Title = styled('h2')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    color: '#3498db',
    margin: 0,
    fontSize: 26
  };
});

export const Post = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 70,

    '@media (max-width: 1070px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

export const Img = styled('img')(() => {
  return {
    width: '100%',
    maxWidth: 625
  };
});

export const Info = styled(Box)(() => {
  return {
    width: '100%',
    maxWidth: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };
});

export const Text = styled('p')(() => {
  return {
    fontSize: 16,
    lineHeight: '26px',
    color: '#959595'
  };
});

export const Block = styled(Box)(() => {
  return {
    backgroundColor: '#f7f7f7'
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1300,
    margin: '0 auto',

    '@media (max-width: 1070px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

