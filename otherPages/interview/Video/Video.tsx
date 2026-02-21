import { WrapperBox, WrapperVideo } from "@/otherPages/home/Services/styled";
import IMGVideoLogo from "@/public/Interview-Video02.jpg";
import { Modal } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  boxShadow: 24,
  height: 600,
};

export const Video = () => {
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <>
      <WrapperVideo onClick={handleOpen}>
        <Image
          id="image"
          width={643}
          height={365}
          src={IMGVideoLogo}
          alt="Video Logo"
          title="Video Logo"
        />
      </WrapperVideo>
      <Modal
        open={openModalWindow}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <WrapperBox sx={style}>
          <video width={650} controls autoPlay loop src="/PRS Interview.mp4" />
        </WrapperBox>
      </Modal>
    </>
  );
};
