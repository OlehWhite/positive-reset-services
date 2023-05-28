import {
  HeaderContainer,
  Background,
  LeftButton,
  RightButton,
  Buttons,
  Img,
  Title,
  Text
} from './styled';
import IMGRight from 'assets/icons/arrow-point-to-right.png';
import IMGLeft from 'assets/icons/arrow-point-to-left.png';
import { LayoutHeader } from './LayoutHeader';
import { LayoutNav } from './LayoutNav';
import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false
};

const REACT_APP_SPACE_ID = '6zmu4epjkfkz';
const REACT_APP_ACCESS_TOKEN = '0X5b2h_lSbIDd9Qqf2Nea0k4EY7-6wQaUOFEmzrtz0c';

export const Header = () => {
  const ref = useRef<Slider | null>(null);
  const refTwo = useRef<Slider | null>(null);
  const [headerInfo, setHeaderInfo] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${REACT_APP_SPACE_ID}/entries?access_token=${REACT_APP_ACCESS_TOKEN}`
      )
      .then((response) => {
        setHeaderInfo(response.data.items); // Оновлення стану `posts` зі значеннями

        console.log(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

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
      <Background ref={ref} {...settings}>
        {headerInfo.length > 0 &&
          headerInfo.map((item, index) => (
            <Img
              key={index}
              src={`https://cdn.contentful.com/spaces/${REACT_APP_SPACE_ID}/assets/${item.fields.imgOne.sys.id}?access_token=${REACT_APP_ACCESS_TOKEN}`}
              alt={item.fields.imgOne.sys.id}
              title={item.fields.imgOne.sys.id}
            />
          ))}
        {/*{IMAGES.map((img, index) => (*/}
        {/*  <Img key={index} src={img} alt={img} title={img} />*/}
        {/*))}*/}
      </Background>
      <LayoutHeader />
      <LayoutNav />
      <Buttons>
        <LeftButton src={IMGLeft} alt="Left Button" title="Left Button" onClick={onPrev} />
        <Background ref={refTwo} {...settings}>
          {headerInfo.length > 0 &&
            headerInfo.map((item, index) => (
              <Box key={index} sx={{ marginLeft: 20 }}>
                <Title>{item.fields.titleImgOne.content[0].content[0].value}</Title>
                <Text>{item.fields.textImgOne.content[0].content[0].value}</Text>
              </Box>
            ))}
        </Background>
        <RightButton src={IMGRight} alt="Right Button" title="Right Button" onClick={onNext} />
      </Buttons>
    </HeaderContainer>
  );
};
