import { Block, TextLow, TitleLow } from "@/otherPages/communityIntegration/styled";
import { Container, Wrapper, Logo, WrapperContent, WrapperBox, WrapperImg } from "./styled";
import IMGOne from "@/public/05-4.jpg";
import IMGTwo from "@/public/06.jpg";
import IMGThree from "@/public/07.png";
import IMGFour from "@/public/08.png";
import React from "react";
import Image from "next/image";

export const BigPost = () => {
  return (
    <>
      <Container>
        <Block>
          <Wrapper>
            <WrapperImg>
              <WrapperBox>
                <Image
                  width={85}
                  height={85}
                  src={IMGOne}
                  alt="COMMUNITY INTEGRATION IS THE KEY TO RECOVERY?"
                  title="COMMUNITY INTEGRATION IS THE KEY TO RECOVERY?"
                />
              </WrapperBox>
            </WrapperImg>
            <WrapperContent>
              <TitleLow>COMMUNITY INTEGRATION IS THE KEY TO RECOVERY?</TitleLow>
              <TextLow>
                Mental health treatments have become patient-clinic. Evaluating recovery in people
                with mental health difficulties living in the community can help to develop better
                patient-clinic services. Community integration is critical to recovery in patients
                with mental health difficulties.
              </TextLow>
            </WrapperContent>
          </Wrapper>
          <Wrapper>
            <WrapperImg>
              <WrapperBox>
                <Image
                  width={85}
                  height={85}
                  src={IMGTwo}
                  alt="COMMUNITY INTEGRATION IS THE KEY TO RECOVERY."
                  title="COMMUNITY INTEGRATION IS THE KEY TO RECOVERY."
                />
              </WrapperBox>
            </WrapperImg>
            <WrapperContent>
              <TitleLow>COMMUNITY INTEGRATION IS THE KEY TO RECOVERY.</TitleLow>
              <TextLow>
                Participating in mental health clinic programs promoted mental health recovery in
                people with mental health difficulties living in the community.
                Independence/self-actualization, psychological integration and social support
                improved mental health recovery in people with mental health difficulties living in
                the community.
              </TextLow>
            </WrapperContent>
          </Wrapper>
          <Wrapper>
            <WrapperImg>
              <WrapperBox>
                <Image
                  width={85}
                  height={85}
                  src={IMGThree}
                  alt="COMMUNITY INTEGRATION IS THE KEY TO RECOVERY!"
                  title="COMMUNITY INTEGRATION IS THE KEY TO RECOVERY!"
                />
              </WrapperBox>
            </WrapperImg>

            <WrapperContent>
              <TitleLow>COMMUNITY INTEGRATION IS THE KEY TO RECOVERY!</TitleLow>
              <TextLow>
                There is a need to develop and actively promote programs that attract people with
                mental health difficulties living in the community so that they will actively use
                mental health clinic services. Offering systematic social skills training and
                occupational rehabilitation therapy to people with mental health difficulties living
                in the community may help them function independently.
              </TextLow>
            </WrapperContent>
          </Wrapper>
        </Block>
        <Logo>
          <Image width={360} height={668} src={IMGFour} alt="Logo" title="logo" />
        </Logo>
      </Container>
    </>
  );
};
