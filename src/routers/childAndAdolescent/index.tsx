import { Helmet } from 'react-helmet-async';
import { Block, Img, Text, Title, Wrapper, WrapperBlock, WrapperHeader } from './styled';
import { Box } from '@mui/material';
import IMGOne from '../../assets/icons/Child-and-Adolescent02.jpg';

import { Feedbacks } from '../../components/Feedbacks';
import React from 'react';

export const ChildAndAdolescent = () => {
  return (
    <>
      <Helmet>
        <title>Positive Reset Services - Call Today | Child and Adolescent</title>
        <meta name="description119" content="CHILD AND ADOLESCENT" />
        <meta
          name="description120"
          content="CHILD AND ADOLESCENT
Many treatments are available for child and adolescent mental health symptoms.

Some are backed by science (i.e., “evidence-based treatments”), and some are not.

We provide children and adolescents, ages 5 through 18, with support and coping skills to achieve emotional health and improved functioning through individual and family counseling. Play therapy allows younger children, who often are unable to communicate verbally, to express their feelings through art, activities, and toys."
        />
        <meta
          name="description121"
          content="We counsel children with challenges such as attention disorders, learning differences, and behavioral issues. Parents are incorporated into the treatment plan so that they can provide intervention and additional support at home.

Our expert counselors are available to speak on a variety of topics, including body image, bullying, and building healthy relationships at area synagogues and schools."
        />
      </Helmet>
      <WrapperHeader>
        <Title>CHILD AND ADOLESCENT</Title>
      </WrapperHeader>
      <Wrapper>
        <Block>
          <Box>
            <Img src={IMGOne} alt="Img-1" title="Img-1" />
          </Box>
          <WrapperBlock>
            <Text>
              Many treatments are available for child and adolescent mental health symptoms.
            </Text>
            <Text>
              Some are backed by science (i.e., “evidence-based treatments”), and some are not.
            </Text>
            <Text>
              We provide children and adolescents, ages 5 through 18, with support and coping skills
              to achieve emotional health and improved functioning through individual and family
              counseling. Play therapy allows younger children, who often are unable to communicate
              verbally, to express their feelings through art, activities, and toys.
            </Text>
          </WrapperBlock>
        </Block>
        <Box>
          <Text>
            We counsel children with challenges such as attention disorders, learning differences,
            and behavioral issues. Parents are incorporated into the treatment plan so that they can
            provide intervention and additional support at home.
          </Text>
          <Text>
            Our expert counselors are available to speak on a variety of topics, including body
            image, bullying, and building healthy relationships at area synagogues and schools.
          </Text>
        </Box>
      </Wrapper>
      <Feedbacks />
    </>
  );
};
