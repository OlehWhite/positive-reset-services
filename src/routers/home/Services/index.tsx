import React, { FC, useState } from 'react';
import { VideoLogo, WrapperVideo, Wrapper, Iframe } from './styled';
import IMGVideoLogo from 'assets/icons/video-logo.jpg';
import { AboutFranchise } from './AboutFranchise/AboutFranchise';
import { Box, Modal } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 640,
  boxShadow: 24,
  height: 360
};

const ID = 'video';

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
            <Iframe
              title="YouTube Video"
              src="https://rr5---sn-4g5lzned.googlevideo.com/videoplayback?expire=1686346945&ei=YUiDZLvGAsew2roPkJ-eiAU&ip=114.32.132.80&id=o-AHDrWMClAFMm2My6kPF5XhoiUNlkdV4H9NsOXVTko6Ou&itag=18&source=youtube&requiressl=yes&spc=qEK7B13z7Uzen379uPAeSACwzLKES6kb3-RqVZE3tQ&vprv=1&svpuc=1&mime=video%2Fmp4&ns=SSp1cJwjj6UAiWOWRbikAVgN&cnr=14&ratebypass=yes&dur=106.091&lmt=1656852855771891&fexp=24007246&c=WEB&txp=6218224&n=YIWB2qiG0l9YXw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgd5NZ3O2UAADg8WXVLk5YJhv4f7hA2oSVw6OBCAxKbBUCIQD0i0w6MFsjcDtEiCjxSbKMUFvqeZpZDNWhAQ-yNWSubQ%3D%3D&redirect_counter=1&cm2rm=sn-un5e776&req_id=c424bdfbae8aa3ee&cms_redirect=yes&mh=lL&mip=94.240.175.57&mm=34&mn=sn-4g5lzned&ms=ltu&mt=1686328395&mv=m&mvi=5&pl=19&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhANFKraorshtKvv_D6yAth8sQ-OTz50ri6GKY1sL7nMzTAiEAtyqmpRa8m8rzh3ggc7OG5Udlgu4jaMpK5bfy26T14Wo%3D"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Box>
        </Modal>
      </Wrapper>
    </>
  );
};
