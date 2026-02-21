import { Title, WrapperHeader } from "./styled";
import React from "react";
import IMGHeader from "@/public/about-us.jpg";

export const Header = () => {
  return (
    <WrapperHeader
      style={{
        backgroundImage: `url(${IMGHeader.src})`,
      }}
    >
      <Title>ABOUT US</Title>
    </WrapperHeader>
  );
};
