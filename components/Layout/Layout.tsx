import React, { FC, ReactNode, useEffect, useState } from "react";
import { Wrapper, Arrow, Img } from "./styled";
import { Footer } from "./Footer/Footer";
import Image from "next/image";
import IMGLogo from "../../public/down-arrow.png";
import GoogleTranslate from "../GoogleTranslate";
import PhoneIcon from "./PhoneIcon";
import { useGetProjects } from "../../services/getInfo";
import { GoogleAnalytics } from "@next/third-parties/google";

interface CustomImgProps {
  show: boolean;
  src: string;
  alt: string;
  title: string;
}

const CustomImg: FC<CustomImgProps> = ({ show, src }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Img show={show ? 1 : 0} onClick={handleClick}>
      <Image src={src} width={30} height={30} alt="Img" title="Img" />
    </Img>
  );
};

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { project } = useGetProjects();
  const [showArrow, setShowArrow] = useState(false);

  const gaId = project?.googleId;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const triggerOffset = 100;

      if (scrollTop > triggerOffset) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <GoogleTranslate />
      <GoogleAnalytics gaId={gaId} />

      <Wrapper>
        <PhoneIcon />
        {children}
        <Footer />
        <Arrow>
          <CustomImg
            show={showArrow}
            src={IMGLogo.src}
            alt="Arrow"
            title="Arrow"
          />
        </Arrow>
      </Wrapper>
    </>
  );
};
