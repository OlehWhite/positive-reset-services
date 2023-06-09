import { useState } from 'react';
import { VideoLogo, Wrapper, WrapperVideo } from './styled';
import IMGVideoLogo from 'assets/icons/Websitе-cover-video.jpg';
import { Box, Modal } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 640,
  boxShadow: 24,
  height: 360
};

export const VideoPost = () => {
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <>
      <Wrapper>
        <WrapperVideo>
          <VideoLogo onClick={handleOpen} src={IMGVideoLogo} alt="Video Logo" title="Video Logo" />
        </WrapperVideo>
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
              src="https://rr2---sn-5hne6n6l.googlevideo.com/videoplayback?expire=1686350896&ei=0FeDZLnFKZ6Ey_sP0uKo2AI&ip=102.129.153.179&id=o-AGx6F8n2YEivQn-cyRdLXnATHmZ2Dxy0hSJ356vALVu3&itag=18&source=youtube&requiressl=yes&spc=qEK7B33mJGXgeex2yRLNT12mqeYuILBs25JjFFyLPg&vprv=1&svpuc=1&mime=video%2Fmp4&ns=tKJYRxK6WgBcDOMWzzTIX1QN&cnr=14&ratebypass=yes&dur=259.575&lmt=1661936782169517&fexp=24007246,24362685,24363391&c=WEB&txp=6218224&n=qVHxzhOGGY3UOg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAM2CeBIynIantcW6SgMxYUw3F0Xv29q7cyKLcL_QmUgXAiB3Guj-wt5M9x2BcxcGUlhx0M_NClmTJz6pZFxd1MzZ5Q%3D%3D&redirect_counter=1&cm2rm=sn-q4fess76&req_id=ef0490d4f446a3ee&cms_redirect=yes&cmsv=e&mh=Tq&mip=94.240.175.57&mm=34&mn=sn-5hne6n6l&ms=ltu&mt=1686327591&mv=D&mvi=2&pl=0&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhALJt9GOW-yfSz7bEzGDUPRH1407MPmNUa6wP3jug2K2qAiB7v5Vv5hjpO27D4PfW7dJMbHH4ekBYqg9NrPAdlIr9eA%3D%3D"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Box>
        </Modal>
      </Wrapper>
    </>
  );
};
