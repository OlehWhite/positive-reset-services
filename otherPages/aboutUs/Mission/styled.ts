import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => {
  return {
    marginTop: "50px",
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: "flex",
    width: "100%",
    maxWidth: 1300,
    margin: "0 auto",

    "@media (max-width: 1250px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export const WrapperBlock = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: 635,
    height: "100%",
    maxHeight: 365,
    transition: ".3s",
    marginBottom: 20,

    "&:hover": {
      transition: ".3s",
      boxShadow: "0px 0px 20px 10px silver",
    },
  };
});
