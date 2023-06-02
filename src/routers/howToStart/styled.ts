import { styled, Box } from '@mui/material';
import IMGHeader from '../../assets/icons/start-how-to-start.jpg';

export const Main = styled('main')(() => {
  return {
    width: '100%'
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    maxWidth: 1300,
    margin: '0 auto'
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

export const TitleHeader = styled('h2')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    color: '#3498db',
    margin: 0,
    fontSize: 26
  };
});

export const Block = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '70px 0',

    '@media (max-width: 1090px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

export const Img = styled('img')(() => {
  return {
    width: '100%',
    maxWidth: 630
  };
});

export const WrapperBlock = styled(Box)(() => {
  return {
    marginTop: 70,
    width: '100%',
    maxWidth: 630
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

export const Text = styled('p')(() => {
  return {
    fontSize: 16,
    lineHeight: '26px',
    color: '#959595'
  };
});
