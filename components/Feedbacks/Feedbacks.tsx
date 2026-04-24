import { Container, Wrapper, Name, Text } from "./styled";
import { FC, useEffect, useRef, useState } from "react";
import IMGIcon from "@/public/icons8.png";
import { Box } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import { DEFAULT_FEEDBACK } from "@/services/constants";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false,
};

export const Feedbacks: FC = () => {
  const ref = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current) {
        const totalSlides = DEFAULT_FEEDBACK.length;
        const nextSlide = (activeSlide + 1) % totalSlides;
        setActiveSlide(nextSlide);
        ref.current.slickGoTo(nextSlide);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <AnimateOnScroll direction="right">
      <Container>
        <Wrapper>
          <Slider ref={ref} {...settings}>
            {DEFAULT_FEEDBACK.map((feedback: any, index: number) => (
              <Wrapper key={index}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={IMGIcon} alt="Img" title="Img" />
                </Box>

                <Box>
                  <Text>{feedback.text}</Text>
                  <Name>{feedback.title}</Name>
                </Box>
              </Wrapper>
            ))}
          </Slider>
        </Wrapper>
      </Container>
    </AnimateOnScroll>
  );
};
