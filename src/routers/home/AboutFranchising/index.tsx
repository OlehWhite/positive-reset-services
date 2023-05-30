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
  Wrapper,
  Button,
  PostText
} from './styled';
import IMGRight from 'assets/icons/arrow-point-to-right.png';
import IMGLeft from 'assets/icons/arrow-point-to-left.png';
import { FC, useEffect, useRef, useState } from 'react';
import { PRIVATE_DATA } from '../../privateData';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import axios from 'axios';

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
  text: string;
  button: string;
}

const ID = 'aboutFranchising';

export const AboutFranchising: FC = () => {
  const ref = useRef<Slider | null>(null);

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        if (response.data.items.length > 0) {
          response.data.items.map((post?: any) => {
            const imgID = post.fields.img.sys.id;
            const text = post.fields.text.content[0].content[0].value;
            const button = post.fields.button.content[0].content[0].value;

            return axios
              .get(
                `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/assets/${imgID}?access_token=${PRIVATE_DATA.accessId}`
              )
              .then((response) => {
                const newPost: Post = {
                  img: response.data.fields.file.url,
                  text,
                  button
                };
                setPosts((prevPost) => [...prevPost, newPost]);
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
      <Info>
        <Title>NEWS ABOUT FRANCHISING OPPORTUNITIES</Title>
        <Text>
          Reading news helps you to learn something new every day, and slow down aging. Reading news
          helps you to distinguish truth from falsehoods. Reading news can enhance your creativity.
          Reading news gives you leads with events.
        </Text>
      </Info>
      <Carusell>
        <LeftButton src={IMGLeft} alt="Left Button" title="Left Button" onClick={onPrev} />
        {posts.length > 0 && (
          <Clinicals ref={ref} {...settings}>
            {posts.map((franchising, index) => (
              <Wrapper key={index}>
                <Box>
                  <Img src={franchising.img} alt={franchising.img} title={franchising.img} />
                </Box>
                <Box>
                  <Button>{franchising.button}</Button>
                  <PostText>{franchising.text}</PostText>
                </Box>
              </Wrapper>
            ))}
          </Clinicals>
        )}
        <RightButton src={IMGRight} alt="Right Button" title="Right Button" onClick={onNext} />
      </Carusell>
    </Container>
  );
};
