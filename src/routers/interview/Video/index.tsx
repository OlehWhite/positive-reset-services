import { Block, Wrapper } from '../styled';
import { VideoLogo, WrapperVideo } from '../../home/Services/styled';
import IMGVideoLogo from '../../../assets/icons/Interview-Video02.jpg';
import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  boxShadow: 24,
  height: 600
};

export const Video = () => {
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <>
      <Box>
        <Box>
          <WrapperVideo>
            <VideoLogo
              onClick={handleOpen}
              src={IMGVideoLogo}
              alt="Video Logo"
              title="Video Logo"
            />
          </WrapperVideo>
        </Box>
      </Box>
      <Modal
        open={openModalWindow}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <iframe
            title="YouTube Video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Son1_1rKEz8"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </Box>
      </Modal>
    </>
  );
};
