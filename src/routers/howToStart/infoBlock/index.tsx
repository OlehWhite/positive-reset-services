import {
  Container,
  Wrapper,
  Info,
  Picture,
  Post,
  Title,
  Img,
  WrapperImg,
  Text,
  WrapperPicture
} from './styled';
import IMGOne from 'assets/icons/1_Icon.png';
import IMGTwo from 'assets/icons/2_Icon.png';
import IMGThree from 'assets/icons/3_Icon.png';
import IMGFour from 'assets/icons/4_Icon.png';
import IMGGirl from 'assets/icons/05.png';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export const InfoBlock = () => {
  return (
    <Container>
      <Helmet>
        <meta
          name="description32"
          content="
I WANT TO BECOME A FRANCHISOR
If you’re thinking of starting a franchise, you’re probably thinking of becoming a franchisee. That is, you want to become a business owner by franchising under a community."
        />
        <meta
          name="description33"
          content="
RESPONSIBILITY TO BECOME A FRANCHISOR
As you probably know, a franchise is a business model and a brand—and when you become a franchisee or franchise owner, you’re signing a franchise contract and putting down some money for the right to use that business model, sistem and brand."
        />
        <meta
          name="description34"
          content="MENTAL HEALTH FRANCHISE IS THE BEST IN US
Franchise brands are everywhere. If you have a favorite business joint that you know to in cities around the country, that’s almost certainly a franchise. In other words, instead of being owned by a corporation, individuals own and operate one or two or several of those business."
        />
        <meta
          name="description35"
          content="SOME BENEFITS OF FRANCHISE BUSINESS MODELS
One of the biggest benefits of buying into a franchise is that it's an stable анд verified business. It already has an patients and clients, and someone has worked out a lot of the kinks in the process — in short, you don't have to reinvent the wheel. New owners in a franchise have distinct advantages over new owners of small businesses."
        />
      </Helmet>
      <Wrapper>
        <Info>
          <Post>
            <WrapperImg>
              <Img src={IMGOne} alt="One Img" title="One Img" />
            </WrapperImg>
            <Box>
              <Title>I WANT TO BECOME A FRANCHISOR</Title>
              <Text>
                If you’re thinking of starting a franchise, you’re probably thinking of becoming a
                franchisee. That is, you want to become a business owner by franchising under a
                community.
              </Text>
            </Box>
          </Post>
          <Post>
            <WrapperImg>
              <Img src={IMGTwo} alt="Two Img" title="Two Img" />
            </WrapperImg>
            <Box>
              <Title>RESPONSIBILITY TO BECOME A FRANCHISOR</Title>
              <Text>
                As you probably know, a franchise is a business model and a brand—and when you
                become a franchisee or franchise owner, you’re signing a franchise contract and
                putting down some money for the right to use that business model, sistem and brand.
              </Text>
            </Box>
          </Post>
          <Post>
            <WrapperImg>
              <Img src={IMGThree} alt="Three Img" title="Three Img" />
            </WrapperImg>
            <Box>
              <Title>MENTAL HEALTH FRANCHISE IS THE BEST IN US</Title>
              <Text>
                Franchise brands are everywhere. If you have a favorite business joint that you know
                to in cities around the country, that’s almost certainly a franchise. In other
                words, instead of being owned by a corporation, individuals own and operate one or
                two or several of those business.
              </Text>
            </Box>
          </Post>
          <Post>
            <WrapperImg>
              <Img src={IMGFour} alt="Four Img" title="Four Img" />
            </WrapperImg>
            <Box>
              <Title>SOME BENEFITS OF FRANCHISE BUSINESS MODELS</Title>
              <Text>
                One of the biggest benefits of buying into a franchise is that it's an stable анд
                verified business. It already has an patients and clients, and someone has worked
                out a lot of the kinks in the process — in short, you don't have to reinvent the
                wheel. New owners in a franchise have distinct advantages over new owners of small
                businesses.
              </Text>
            </Box>
          </Post>
        </Info>
        <WrapperPicture>
          <Picture src={IMGGirl} alt="Girl" title="Girl" />
        </WrapperPicture>
      </Wrapper>
    </Container>
  );
};
