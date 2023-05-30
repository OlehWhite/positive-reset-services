import { MUIButton, Container } from './styled';
import { DATA_LINKS } from './constants';
import { Ul, Li, Nav } from './styled';
import Menu from '@mui/material/Menu';
import * as React from 'react';
import { FC } from 'react';

interface TServices {
  color?: string;
}

export const Services: FC<TServices> = ({ color }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <MUIButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: color ? '#555' : undefined }}>
        Services
      </MUIButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}>
        <Ul>
          {DATA_LINKS.map((link, index) => (
            <Li key={index}>
              <Nav to={link.path} onClick={handleClose}>
                {link.name}
              </Nav>
            </Li>
          ))}
        </Ul>
      </Menu>
    </Container>
  );
};
