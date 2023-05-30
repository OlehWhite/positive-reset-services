import { Container, Wrapper, Nav, WrapperMenu, WrapperSidebar } from './styled';
import { Sidebar } from 'routers/home/Sidebar';
import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { BASE_NAV } from './constants';
import { MUIAccordion } from '../../../MUIAccordion';
import { Services } from '../../../../routers/services';

const screenWidth = window.innerWidth;

export const LayoutNav: FC = () => {
  const [active, setActive] = useState('/');
  const [location, setLocation] = useState('/');
  const currentPath = window.location.pathname;
  const [display, setDisplay] = useState(screenWidth);

  const handleNavClick = (link: string) => {
    setActive(link);
    setLocation(window.location.pathname);
  };

  useEffect(() => {
    setDisplay(screenWidth);
  }, [display]);

  return (
    <Container>
      <Wrapper>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <WrapperMenu>
            <MUIAccordion />
          </WrapperMenu>
          {BASE_NAV.map((link, index) => (
            <Box sx={{ display: 'inline-block' }} key={index}>
              {link.name === 'SERVICES' ? (
                <Services />
              ) : (
                <Nav
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  sx={{
                    color: currentPath === link.path ? '#3498db' : 'white',
                    transition: '.3s',
                    marginRight: '20px',
                    textDecoration: 'none',
                    fontSize: 14,
                    fontWeight: 600
                  }}>
                  {link.name}
                </Nav>
              )}
            </Box>
          ))}
        </Box>
        <WrapperSidebar>
          <Sidebar />
        </WrapperSidebar>
      </Wrapper>
    </Container>
  );
};
