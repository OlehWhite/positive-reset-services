import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  HeaderContainer,
  Background,
  Buttons,
  Img,
  Title,
  Text,
  WrapperInfo,
  BackgroundTwo,
} from "./styled";
import { useEffect, useRef } from "react";
import { LayoutHeader } from "./LayoutHeader/LayoutHeader";
import { LayoutNavHed } from "./LayoutNavHed/LayoutNavHed";
import Slider from "react-slick";
import IMGRight from "@/public/arrow-point-to-right.png";
import IMGLeft from "@/public/arrow-point-to-left.png";
import Image from "next/image";
import { useProject } from "@/context/ProjectContext";
import { LinearProgress, Stack } from "@mui/material";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false,
  style: { position: "absolute" },
};

export const HomeHeader = () => {
  const { project } = useProject();

  const ref = useRef<Slider | null>(null);
  const refTwo = useRef<Slider | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      onNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const onNext = (): void => {
    ref.current?.slickNext();
    refTwo.current?.slickNext();
  };

  const onPrev = (): void => {
    ref.current?.slickPrev();
    refTwo.current?.slickPrev();
  };

  return (
    <HeaderContainer>
      {project?.headerImages ? (
        <Background ref={ref} {...settings}>
          {project?.headerImages.map((item, index) => (
            <Img
              key={index}
              src={item.image}
              alt={item.title}
              title={item.title}
              width={1200}
              height={500}
              priority={index === 0}
              sizes="100vw"
            />
          ))}
        </Background>
      ) : (
        <Stack>
          <LinearProgress />
        </Stack>
      )}

      <BackgroundTwo ref={refTwo} {...settings}>
        {project?.headerImages.map((item, index) => (
          <WrapperInfo key={index}>
            <AnimateOnScroll direction="up" delay={0.2}>
              <Title>{item?.title}</Title>
              <Text>{item?.text}</Text>
            </AnimateOnScroll>
          </WrapperInfo>
        ))}
      </BackgroundTwo>

      <LayoutHeader />

      <LayoutNavHed />

      <Buttons>
        <Image
          src={IMGLeft}
          width={64}
          height={64}
          alt="Left Button"
          title="Left Button"
          onClick={onPrev}
          id="arrow-off"
        />

        <Image
          src={IMGRight}
          width={64}
          height={64}
          alt="Right Button"
          title="Right Button"
          onClick={onNext}
          id="arrow-off"
        />
      </Buttons>
    </HeaderContainer>
  );
};
