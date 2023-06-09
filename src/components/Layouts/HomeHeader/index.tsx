import {
  HeaderContainer,
  Background,
  LeftButton,
  RightButton,
  Buttons,
  Img,
  Title,
  Text,
  WrapperInfo,
  BackgroundTwo
} from './styled';
import IMGRight from 'assets/icons/arrow-point-to-right.png';
import IMGLeft from 'assets/icons/arrow-point-to-left.png';
import { useEffect, useRef, useState } from 'react';
import { PRIVATE_DATA } from 'routers/privateData';
import { LayoutHeader } from './LayoutHeader';
import { LayoutNav } from './LayoutNav';
import Slider from 'react-slick';
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

export const HomeHeader = () => {
  const ref = useRef<Slider | null>(null);
  const refTwo = useRef<Slider | null>(null);
  const [headerInfo, setHeaderInfo] = useState<any[]>([]);
  const [headerInfoData, setHeaderInfoData] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=homeHeader&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setHeaderInfo(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  useEffect(() => {
    if (headerInfo.length > 0) {
      headerInfo.map((item) => {
        axios
          .get(
            `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/assets/${item.fields.imgOne.sys.id}?access_token=${PRIVATE_DATA.accessId}`
          )
          .then((response) => {
            setHeaderInfoData((prevData) => [...prevData, response.data.fields.file.url]);
          })
          .catch((error) => {
            console.error('Error fetching posts:', error);
          });
      });
    }
  }, [headerInfo]);

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
        {headerInfoData.length > 0 &&
          headerInfoData.map((item, index) => (
            <Img key={index} src={item} alt={item} title={item} />
          ))}
      </Background>
      <BackgroundTwo ref={refTwo} {...settings}>
        {headerInfo.length > 0 &&
          headerInfo.map((item, index) => (
            <WrapperInfo key={index}>
              <Title>{item.fields.titleImgOne.content[0].content[0].value}</Title>
              <Text>{item.fields.textImgOne.content[0].content[0].value}</Text>
            </WrapperInfo>
          ))}
      </BackgroundTwo>
      <LayoutHeader />
      <LayoutNav />
      <Buttons>
        <LeftButton src={IMGLeft} alt="Left Button" title="Left Button" onClick={onPrev} />
        <RightButton src={IMGRight} alt="Right Button" title="Right Button" onClick={onNext} />
      </Buttons>
    </HeaderContainer>
  );
};
