import {
  Container,
  Info,
  Text,
  Title,
  Carusell,
  Clinicals,
  LeftButton,
  RightButton,
  Img,
  InfoCard,
  TitleCard,
  Address,
  Wrapper
} from './styled';
import IMGLeft from 'assets/icons/arrow-point-to-left.png';
import IMGRight from 'assets/icons/arrow-point-to-right.png';
import React, { FC, useEffect, useRef, useState } from 'react';
import { PRIVATE_DATA } from '../../privateData';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import axios from 'axios';
import Drawer from '@mui/material/Drawer';
import { AsideClinic } from './AsideClinic';
import { Helmet } from 'react-helmet-async';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false,
  responsive: [
    {
      breakpoint: 1335,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

interface Post {
  img: string;
  title: string;
  address: string;
  email: string;
  telephone: string;
  webSite: string;
  location: string;
}

const ID = 'locationClinic';

export const Location: FC = () => {
  const ref = useRef<Slider | null>(null);
  const [post, setPost] = useState<Post[]>([]);
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    setPost([]);
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        if (response.data.items.length > 0) {
          response.data.items.forEach((post?: any) => {
            const imgID = post.fields.img.sys.id;
            const title = post.fields.title.content[0].content[0].value;
            const address = post.fields.Address.content[0].content[0].value;
            const email = post.fields.email.content[0].content[0].value;
            const telephone = post.fields.telephone.content[0].content[0].value;
            const webSite = post.fields.webSite.content[0].content[0].value;
            const location = post.fields.googleMap.content[0].content[0].value;

            return axios
              .get(
                `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/assets/${imgID}?access_token=${PRIVATE_DATA.accessId}`
              )
              .then((response) => {
                const newPost: Post = {
                  img: response.data.fields.file.url,
                  title: title,
                  address: address,
                  email: email,
                  telephone: telephone,
                  webSite: webSite,
                  location: location
                };
                setPost((prevPost) => [...prevPost, newPost]);
              });
          });
        }
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
  };

  const onPrev = (): void => {
    ref.current?.slickPrev();
  };

  return (
    <Container>
      <Helmet>
        <meta
          name="description8"
          content="POSITIVE RESET SERVICES LOCATIONS
POSITIVE RESET SERVICES is a successful franchise company that opens Mental Health Clinics across Unlined Sates. POSITIVE RESET SERVICES works like a professional system that has stood the test of time, financial success and successful treatment outcomes."
        />
      </Helmet>
      <Info>
        <Title>POSITIVE RESET SERVICES LOCATIONS</Title>
        <Text>
          POSITIVE RESET SERVICES is a successful franchise company that opens Mental Health Clinics
          across Unlined Sates. POSITIVE RESET SERVICES works like a professional system that has
          stood the test of time, financial success and successful treatment outcomes.
        </Text>
      </Info>
      <Carusell>
        <LeftButton src={IMGLeft} alt="Left Button" title="Left Button" onClick={onPrev} />
        {post && post.length > 0 && (
          <Clinicals {...settings} ref={ref}>
            {post.map((clinical, index) => (
              <Wrapper key={clinical.title}>
                <Box onClick={() => setOpenIndex(index)}>
                  <Box>
                    <Img src={clinical.img} alt={clinical.img} title={clinical.img} />
                  </Box>
                  <Box>
                    <TitleCard>{clinical.title}</TitleCard>
                    <Address>{clinical.address}</Address>
                    <InfoCard>{clinical.telephone}</InfoCard>
                    <InfoCard>{clinical.email}</InfoCard>
                    <InfoCard>{clinical.webSite}</InfoCard>
                  </Box>
                </Box>
                <Drawer anchor="right" open={openIndex === index} onClose={() => setOpenIndex(-1)}>
                  <AsideClinic setOpenIndex={setOpenIndex} clinical={clinical} />
                </Drawer>
              </Wrapper>
            ))}
          </Clinicals>
        )}
        <RightButton src={IMGRight} alt="Right Button" title="Right Button" onClick={onNext} />
      </Carusell>
    </Container>
  );
};
