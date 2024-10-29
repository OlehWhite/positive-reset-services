import React, { FC, useState } from "react";
import { Wrapper, WrapperBox } from "./styled";
import IMGVideoLogo from "../../../public/video-logo.jpg";
import { AboutFranchise } from "./AboutFranchise/AboutFranchise";
import { Box, Modal } from "@mui/material";
import Image from "next/image";
import { useGetProjects } from "../../../services/getInfo";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 640,
  boxShadow: 24,
  height: 360,
};

export const Services: FC = () => {
  const { project } = useGetProjects();

  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <Wrapper>
      {project?.videoIcon && (
        <WrapperBox onClick={handleOpen}>
          <Image
            src={project?.videoIcon}
            width={640}
            height={365}
            alt="Video Logo"
            title="Video Logo"
            id="img_Logo"
          />
        </WrapperBox>
      )}
      <AboutFranchise />

      {project?.video && (
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
      )}
    </Wrapper>
  );
};
