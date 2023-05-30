import { FC, useState } from 'react';
import { VideoLogo, WrapperVideo, Wrapper } from './styled';
import IMGVideoLogo from 'assets/icons/video-logo.jpg';
import { AboutFranchise } from './AboutFranchise/AboutFranchise';
import { Box, Modal } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  boxShadow: 24,
  height: 600
};

export const Services: FC = () => {
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <>
      <Wrapper>
        <WrapperVideo>
          <VideoLogo onClick={handleOpen} src={IMGVideoLogo} alt="Video Logo" title="Video Logo" />
        </WrapperVideo>
        <AboutFranchise />
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
              src="https://www.youtube.com/embed/1qbf1kMx8Dw?rel=1&autoplay=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Box>
        </Modal>
      </Wrapper>
    </>
  );
};
