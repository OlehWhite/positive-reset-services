import { Container, Wrapper, Nav, WrapperSidebar } from './styled';
import { Sidebar } from 'routers/home/Sidebar';
import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { BASE_NAV } from './constants';
import { MUIAccordion } from '../../../MUIAccordion';
import { WrapperMenu } from '../../HomeHeader/LayoutNav/styled';
import { Services } from '../../../../routers/services';

export const LayoutNav: FC = () => {
  const [active, setActive] = useState('/');
  const [location, setLocation] = useState('/');
  const currentPath = window.location.pathname;

  const handleNavClick = (link: string) => {
    setActive(link);
    setLocation(window.location.pathname);
  };

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
                <Services color={'#555'} />
              ) : (
                <Nav
                  key={index}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  sx={{
                    color: currentPath === link.path ? '#3498db' : '#555'
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
