import { FC } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Link } from './styled';
import { Covid19 } from './Covid19';

type Anchor = 'right';

export const Sidebar: FC = () => {
  const [state, setState] = React.useState({
    right: false
  });
  const currentPath = window.location.pathname;

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Covid19 />
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor: any) => (
        <React.Fragment key={anchor}>
          <Link onClick={toggleDrawer(anchor, true)} sx={{color: currentPath === '/' ? 'white' : '#555'}}>COVID-19</Link>
          <Drawer anchor={anchor} open={state.right} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
