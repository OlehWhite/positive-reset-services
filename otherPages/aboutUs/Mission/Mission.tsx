import { Container, Wrapper, WrapperBlock } from "./styled";
import IMGVideoLogo from "@/public/video-logo.jpg";
import OurMission from "@/components/OurMission/OurMission";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { useProject } from "@/context/ProjectContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 640,
  boxShadow: 24,
  height: 360,
};

export const Mission = () => {
  const { project } = useProject();

  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <Container>
      <Wrapper>
        <WrapperBlock>
          <Image
            onClick={handleOpen}
            src={IMGVideoLogo}
            width={643}
            height={365}
            alt="Video Logo"
            title="Video Logo"
            id="img"
          />
        </WrapperBlock>

        <OurMission />
      </Wrapper>
      <Modal
        open={openModalWindow}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <video width={640} controls autoPlay loop src={project?.video} />
        </Box>
      </Modal>
    </Container>
  );
};
