import { styled, Box } from "@mui/material";

export const Wrapper = styled("aside")(() => {
  return {
    padding: 24,
    width: "100%",
    maxWidth: 350,
  };
});

export const Img = styled("img")(() => {
  return {
    width: "100%",
    maxWidth: 300,
  };
});

export const Title = styled("h2")(() => {
  return {
    color: "#555555",
    fontSize: 14,
    margin: "28px 0",
  };
});

export const Text = styled("p")(() => {
  return {
    color: "#959595",
    fontSize: 15,
    lineHeight: "28px",
    fontWeight: 400,
    marginTop: 15,
  };
});

export const Email = styled("p")(() => {
  return {
    color: "#b7b7b7",
    fontWeight: 400,
    fontSize: 14,
    margin: 0,
  };
});

export const Link = styled("a")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    width: 22,
    backgroundColor: "rgba(199,199,199,0.45)",
    borderRadius: "45%",
    marginRight: 10,
    transition: ".3s",

    "&:hover": {
      transition: ".3s",
      backgroundColor: "#3498db",
    },
  };
});
