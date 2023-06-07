import { DATA_LINKS } from 'routers/services/constants';
import { Button, Ul, Li, Nav } from './styled';
import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#34495e',
  pt: 2,
  px: 4,
  pb: 3
};

export const ModalServices = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavClick = (path: string) => {
    setOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Button onClick={handleOpen}>Services</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: '100%', maxWidth: 200 }}>
          <Ul>
            {DATA_LINKS.map((link, item) => (
              <Li key={link.path} onClick={() => handleNavClick(link.path)}>
                <Nav to={link.path}>{link.name}</Nav>
              </Li>
            ))}
          </Ul>
        </Box>
      </Modal>
    </>
  );
};
