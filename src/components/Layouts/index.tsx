import React, { FC, useEffect, useState } from 'react';
import { Wrapper, Img, Arrow } from './styled';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import IMGArrow from 'assets/icons/down-arrow.png';

interface CustomImgProps {
  show: boolean;
  src: string;
  alt: string;
  title: string;
}

const CustomImg: FC<CustomImgProps> = ({ show, ...props }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <Img show={show ? 1 : 0} {...props} onClick={handleClick} />;
};

export const Layout: FC = () => {
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const triggerOffset = 100; // Встановіть відступ, який вам потрібен, перед відображенням елементу

      if (scrollTop > triggerOffset) {
        setShowImg(true);
      } else {
        setShowImg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Wrapper>
        <Outlet />
        <Footer />
        <Arrow>
          <CustomImg show={showImg} src={IMGArrow} alt="Arrow" title="Arrow" />
        </Arrow>
      </Wrapper>
    </>
  );
};
