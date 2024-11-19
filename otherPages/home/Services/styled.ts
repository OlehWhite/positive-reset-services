import { Box, styled } from "@mui/material";
import Image from "next/image";
import { width } from "@mui/system";

export const WrapperBox = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: 635,
    height: "100%",
    maxHeight: 365,
    transition: ".3s",
    cursor: "pointer",

    "&:hover": {
      transition: ".3s",
      boxShadow: "0px 0px 20px 10px silver",
    },

    "@media (max-width: 661px)": {
      width: 440,
      maxWidth: "100%",
    },

    "@media (max-width: 476px)": {
      width: 300,
      maxWidth: "100%",
    },
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-evenly",
    maxWidth: 1303,
    margin: "35px auto 35px",

    "@media (max-width: 1335px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export const WrapperVideo = styled(Box)(() => {
  return {
    display: "flex",
    cursor: "pointer",
    marginRight: 26,

    "&:hover": {
      background: "white",
      transition: ".3s",
      boxShadow: "0px 0px 20px 10px silver",
    },
  };
});
