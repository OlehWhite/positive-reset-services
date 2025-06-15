import { styled, Box } from "@mui/material";
import Slider from "react-slick";

export const Container = styled(Box)(() => {
  return {
    backgroundColor: "#f7f7f7",
    padding: "30px 0 30px",
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    maxWidth: 1100,
    width: "100%",
    margin: "0 auto",
  };
});

export const Title = styled(Box)(() => {
  return {
    textAlign: "center",
    color: "#3498db",
    fontSize: 27,
    fontWeight: 600,
    paddingBottom: 40,
  };
});

export const Img = styled("img")(() => {
  return {
    display: "flex",
    width: 250,
  };
});

export const Carusell = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
  };
});

export const Clinicals = styled(Slider)({
  maxWidth: 950,
  margin: "0 auto",
  textAlign: "center",

  "@media (max-width: 1335px)": {
    width: 370,
  },
});

export const Link = styled("a")({
  display: "inline-block",
  transition: ".3s",

  "&:hover": {
    backgroundColor: "#3498db6b",
  },
});

export const Block = styled(Box)(() => {
  return {
    maxWidth: 350,
    width: "100%",
    transition: ".3s",
  };
});
