import { styled, Box, Tabs } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    maxWidth: 635,
    width: '100%',
    border: '1px solid #e9e9e9',
    boxSizing: 'border-box',

    '& .css-14novro-MuiButtonBase-root-MuiTab-root.Mui-selected': {
      color: '#3498db',
      width: 190,
      textAlign: 'left'
    },

    '& .css-14novro-MuiButtonBase-root-MuiTab-root': {
      width: 190,
      textAlign: 'left'
    },

    '& .MuiTabs-flexContainer': {
      justifyContent: 'space-between',

      '@media (max-width: 669px)': {
        flexDirection: 'column',
        alignItems: 'center'
      }
    },

    '& .css-kqu0uj-MuiTabs-indicator': {
      backgroundColor: '#3498db'
    }
  };
});

export const MUITabs = styled(Tabs)(() => {
  return {
    '@media (max-width: 669px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

export const Title = styled('h2')(() => {
  return {
    fontSize: 18,
    color: '#373737'
  };
});

export const Text = styled('p')(() => {
  return {
    fontSize: 14,
    color: '#959595',
    lineHeight: '26px'
  };
});
