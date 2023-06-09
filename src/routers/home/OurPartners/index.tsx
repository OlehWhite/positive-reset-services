import { FC, useEffect, useRef, useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Img,
  Carusell,
  Clinicals,
  LeftButton,
  RightButton,
  Link,
  Block
} from './styled';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import IMGLeft from '../../../assets/icons/arrow-point-to-left.png';
import IMGRight from '../../../assets/icons/arrow-point-to-right.png';
import Slider from 'react-slick';
import axios from 'axios';
import { PRIVATE_DATA } from '../../privateData';

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

type TPartners = {
  img: string;
  link: string;
};

const ID = 'ourPartners';

export const OurPartners: FC = () => {
  const ref = useRef<Slider | null>(null);

  const [partners, setPartners] = useState<TPartners[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        if (response.data.items.length > 0) {
          response.data.items.forEach((post?: any) => {
            const imgID = post.fields.img.sys.id;
            const link = post.fields.link;
            return axios
              .get(
                `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/assets/${imgID}?access_token=${PRIVATE_DATA.accessId}`
              )
              .then((response) => {
                const newPost: TPartners = {
                  img: response.data.fields.file.url,
                  link
                };
                setPartners((prevPost) => [...prevPost, newPost]);
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
        <meta name="description14" content="JERSEY BEHAVIORAL CARE Metal Health Clinic" />
        <meta name="description15" content="OCEAN INSIGHT CENTER Metal Health Clinic" />
        <meta name="description16" content="POSITIVE RESET Metal Health Clinic" />
        <meta name="description160" content="New Jersey Psychotherapy Counseling Center" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>OUR PARTNERS</Title>
        </Box>
        <Carusell>
          <LeftButton src={IMGLeft} alt="Left Button" title="Left Button" onClick={onPrev} />
          {partners.length > 0 && (
            <Clinicals ref={ref} {...settings}>
              {partners.map((partner, index) => (
                <Block key={index}>
                  <Link href={partner.link} target="_blank">
                    <Img src={partner.img} alt={partner.img} title={partner.img} />
                  </Link>
                </Block>
              ))}
            </Clinicals>
          )}
          <RightButton src={IMGRight} alt="Right Button" title="Right Button" onClick={onNext} />
        </Carusell>
      </Wrapper>
    </Container>
  );
};
