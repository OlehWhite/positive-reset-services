import { Container, Wrapper, VideoLogo, WrapperVideo } from './styled';
import IMGVideoLogo from 'assets/icons/video-logo.jpg';
import OurMission from 'components/OurMission';
import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';
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

export const Mission = () => {
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <Container>
      <Helmet>
        <meta
          name="description18"
          content="OUR MISSION Each day our mission is to enable people to realize their dreams. We do this with each new franchisee we add to our family. For some of them that dream may be tied to a financial goal.

For others it’s the independence of business ownership, and in some cases, it may be as simple as creating job opportunities for friends and family; but through keeping this mission top of mind each day, we remain inspired in the work that we do. We use modern marketing, sales tools, and strategies to find outstanding candidates and help them become franchisees."
        />
        <meta
          name="description19"
          content="OUR VALUES Franchises have a higher rate of success than start-up businesses. You may find it easier to secure finance for a franchise.

It may cost less to buy a franchise than start your own business of the same type. The value of franchising lies in the franchise system’s gives aspiring business owners a head start toward becoming their own boss, with a proven business model that can set up new business owners for success."
        />
        <meta
          name="description20"
          content="OUR VISION Our vision is to become a leading franchising company providing key services to people, families and communities. Ultimately, we would like to enhance the quality of life in the communities we serve across the U.S.A.

We believe that the franchise model will bring more value and more help to individuals, families and communities as it creates a strong unified system for many behavioral clinics."
        />
        <meta
          name="description21"
          content="OUR GOAL What is the main goal of franchising business? It sells the right to use its name and idea. The franchisee buys this right to sell the franchisor’s services under an existing business model and trademark. Franchises are a popular way for entrepreneurs to start a business, especially when entering a highly competitive industry such as behavioral care. It is also the goal of the franchise company that franchisors are more successful and financially independent. The more successful the franchise company, the more benefits the franchisee receives."
        />
      </Helmet>
      <Wrapper>
        <WrapperVideo>
          <VideoLogo onClick={handleOpen} src={IMGVideoLogo} alt="Video Logo" title="Video Logo" />
        </WrapperVideo>
        <OurMission />
      </Wrapper>
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
    </Container>
  );
};
