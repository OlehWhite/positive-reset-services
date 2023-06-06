import React, { FC, useState } from 'react';
import { VideoLogo, WrapperVideo, Wrapper } from './styled';
import IMGVideoLogo from 'assets/icons/video-logo.jpg';
import { AboutFranchise } from './AboutFranchise/AboutFranchise';
import { Box, Modal } from '@mui/material';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Positive Reset Services - Call Today</title>
        <meta
          name="description"
          content="WHAT MAKES A FRANCHISE AN ATTRACTIVE OPPORTUNITY?
Franchises offer easier access to financing and more predictable growth models than most sole proprietorships. To obtain financing for a sole proprietorship, you might have to convince your family and friends, a private lender, or the Small Business Association that you have a sound business plan and growth model."
        />
        <meta
          name="description2"
          content="WHAT IS A BUSINESS OPPORTUNITY?
Business opportunities are a highly regulated method of business expansion where a company provides outsiders the opportunity, for a fee, to go into business."
        />
        <meta
          name="description3"
          content="
WHY YOU SHOULD INVEST IN A FRANCHISE?
The franchise organization model offers the franchisee the ability to grow under a common brand and share in the benefits of a larger group of business owners. … Training from successful business operators. A lower risk of failure and/or loss of investments than if you were to start your own business from scratch"
        />
      </Helmet>
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
