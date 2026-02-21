import {
  Container,
  Wrapper,
  Info,
  Post,
  Title,
  WrapperImg,
  Text,
  WrapperPicture,
  WrapperPost,
} from "./styled";
import IMGOne from "@/public/1_Icon.png";
import IMGTwo from "@/public/2_Icon.png";
import IMGThree from "@/public/3_Icon.png";
import IMGFour from "@/public/4_Icon.png";
import IMGGirl from "@/public/05.png";
import Image from "next/image";

export const InfoBlock = () => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <Post>
            <WrapperImg>
              <Image src={IMGOne} width={68} height={50} alt="One Img" title="One Img" />
            </WrapperImg>
            <WrapperPost>
              <Title>I WANT TO BECOME A FRANCHISOR</Title>
              <Text>
                If you’re thinking of starting a franchise, you’re probably thinking of becoming a
                franchisee. That is, you want to become a business owner by franchising under a
                community.
              </Text>
            </WrapperPost>
          </Post>
          <Post>
            <WrapperImg>
              <Image src={IMGTwo} width={68} height={45} alt="Two Img" title="Two Img" />
            </WrapperImg>
            <WrapperPost>
              <Title>RESPONSIBILITY TO BECOME A FRANCHISOR</Title>
              <Text>
                As you probably know, a franchise is a business model and a brand—and when you
                become a franchisee or franchise owner, you’re signing a franchise contract and
                putting down some money for the right to use that business model, sistem and brand.
              </Text>
            </WrapperPost>
          </Post>
          <Post>
            <WrapperImg>
              <Image src={IMGThree} width={68} height={80} alt="Three Img" title="Three Img" />
            </WrapperImg>
            <WrapperPost>
              <Title>MENTAL HEALTH FRANCHISE IS THE BEST IN US</Title>
              <Text>
                Franchise brands are everywhere. If you have a favorite business joint that you know
                to in cities around the country, that’s almost certainly a franchise. In other
                words, instead of being owned by a corporation, individuals own and operate one or
                two or several of those business.
              </Text>
            </WrapperPost>
          </Post>
          <Post>
            <WrapperImg>
              <Image src={IMGFour} width={68} height={45} alt="Four Img" title="Four Img" />
            </WrapperImg>
            <WrapperPost>
              <Title>SOME BENEFITS OF FRANCHISE BUSINESS MODELS</Title>
              <Text>
                One of the biggest benefits of buying into a franchise is that it&apos;s an stable
                анд verified business. It already has an patients and clients, and someone has
                worked out a lot of the kinks in the process — in short, you don&apos;t have to
                reinvent the wheel. New owners in a franchise have distinct advantages over new
                owners of small businesses.
              </Text>
            </WrapperPost>
          </Post>
        </Info>
        <WrapperPicture>
          <Image id="image" src={IMGGirl} width={528} height={660} alt="Girl" title="Girl" />
        </WrapperPicture>
      </Wrapper>
    </Container>
  );
};
