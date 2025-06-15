import { styled, Box } from "@mui/material";

export const Container = styled("main")(() => {
  return {
    width: "100%",
    maxWidth: 1300,
    margin: "35px auto 35px",
    boxSizing: "border-box",

    "@media (max-width: 992px)": {
      padding: "0 16px",
    },
  };
});

export const WrapperHeader = styled(Box)(() => {
  return {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 300,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
});

export const Title = styled("h2")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    color: "#3498db",
    margin: 0,
    fontSize: 24,
  };
});

export const Prescribers = styled("div")(() => {
  return {};
});

export const WrapperCards = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 45px;
`;

export const PersonCard = styled("div")`
  width: 224px;
  background-color: rgba(166, 166, 166, 0.21);
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 18px #494949;
    background-color: #555555;
  }

  &:hover::after {
    content: "Read more";
    position: absolute;
    bottom: 9%;
    left: 28%;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const Img = styled("img")`
  width: 224px;
  height: 250px;
  object-fit: cover;
  object-position: center;
`;

export const ModalImg = styled("img")`
  width: 270px;
  height: 400px;
  object-fit: cover;
  object-position: center;
`;

export const Text = styled("div")`
  padding: 10px;
  line-height: 20px;
  color: #555;
  min-height: 50px;
`;

export const WrapperPersonCard = styled("div")`
  position: relative;
`;

export const ModalContainer = styled("div")`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  padding: 40px;
  background-color: #fff;
  border: 2px solid #3498db;
  border-radius: 10px;
  display: flex;
  gap: 40px;
`;

export const TextName = styled("h6")`
  margin: 10px 10px 0 10px;
  font-size: 18px;
  color: #555;
  border-bottom: 1px solid #555555;
  padding-bottom: 10px;
`;

export const ModalTitle = styled("h6")`
  margin: 20px 0;
  font-size: 24px;
`;

export const ModalText = styled("p")`
  margin-top: 20px;
  font-size: 18px;

  width: 100%;
`;
