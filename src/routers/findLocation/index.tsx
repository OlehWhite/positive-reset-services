import { Container, Img, Info, Post, Text, Title, WrapperHeader } from './styled';
import { Box } from '@mui/material';
import IMGOne from 'assets/icons/03-4.jpg';
import IMGTwo from 'assets/icons/01-3.jpg';
import IMGThree from 'assets/icons/04-5.jpg';
import IMGFour from 'assets/icons/05-3.jpg';
import { Feedbacks } from 'components/Feedbacks';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const FindLocation = () => {
  return (
    <Box>
      <Helmet>
        <title>Positive Reset Services - Call Today | Location</title>
        <meta name="description76" content="LOCATION" />
        <meta
          name="description77"
          content="HOW TO PICK A FRANCHISE LOCATION?
For Mental Health franchises, the right location is key to success. The catch is that franchisor willingness to help find the site and negotiate the lease varies tremendously. When you’re on the lookout for the perfect location for your shiny new franchise, here are three key considerations."
        />
        <meta
          name="description78"
          content="GET EXPERIENCED SUPPORT
Although your franchise agreement might include the rights to a particular geographic region, there are often umpteen potential sites. It’s important to identify the best environment for your fledgling business to succeed. That analysis requires an experienced franchisor with a team that has studied the best environments for the franchise’s success, and that works with experienced real estate brokers or a commercial broker network. Positive Reset Services has such experience and connections. We will always support you in finding a location for your clinic.

"
        />
        <meta
          name="description79"
          content="ANALYZE THE AREA
A suitable building is one part of the equation, but it’s equally important to understand the area, including traffic patterns, demographics and future building plans. Even if a location looks great on paper, it’s important to inspect the traffic patterns around it. If it’s too difficult to access, patients might not bother."
        />
        <meta
          name="description80"
          content="SWEAT THE LEASE DETAILS
Positive Reset Services strongly recommends all franchisees retain legal counsel to review their leases to protect their best interests and ensure the lease allows for fulfillment of the franchise agreements, including space configuration, signage and other factors.

"
        />
      </Helmet>
      <WrapperHeader>
        <Title>LOCATION</Title>
      </WrapperHeader>
      <Container>
        <Post>
          <Box>
            <Img
              src={IMGOne}
              alt="HOW TO PICK A FRANCHISE LOCATION?"
              title="HOW TO PICK A FRANCHISE LOCATION?"
            />
          </Box>
          <Info>
            <Title>HOW TO PICK A FRANCHISE LOCATION?</Title>
            <Text>
              For Mental Health franchises, the right location is key to success. The catch is that
              franchisor willingness to help find the site and negotiate the lease varies
              tremendously. When you’re on the lookout for the perfect location for your shiny new
              franchise, here are three key considerations.
            </Text>
          </Info>
        </Post>
        <Post>
          <Info>
            <Title>GET EXPERIENCED SUPPORT</Title>
            <Text>
              Although your franchise agreement might include the rights to a particular geographic
              region, there are often umpteen potential sites. It’s important to identify the best
              environment for your fledgling business to succeed. That analysis requires an
              experienced franchisor with a team that has studied the best environments for the
              franchise’s success, and that works with experienced real estate brokers or a
              commercial broker network. Positive Reset Services has such experience and
              connections. We will always support you in finding a location for your clinic.
            </Text>
          </Info>
          <Box>
            <Img src={IMGTwo} alt="GET EXPERIENCED SUPPORT" title="GET EXPERIENCED SUPPORT" />
          </Box>
        </Post>
        <Post>
          <Box>
            <Img src={IMGThree} alt="ANALYZE THE AREA" title="ANALYZE THE AREA" />
          </Box>
          <Info>
            <Title>ANALYZE THE AREA</Title>
            <Text>
              A suitable building is one part of the equation, but it’s equally important to
              understand the area, including traffic patterns, demographics and future building
              plans. Even if a location looks great on paper, it’s important to inspect the traffic
              patterns around it. If it’s too difficult to access, patients might not bother.
            </Text>
          </Info>
        </Post>
        <Post>
          <Info>
            <Title>SWEAT THE LEASE DETAILS</Title>
            <Text>
              Positive Reset Services strongly recommends all franchisees retain legal counsel to
              review their leases to protect their best interests and ensure the lease allows for
              fulfillment of the franchise agreements, including space configuration, signage and
              other factors.
            </Text>
          </Info>
          <Box>
            <Img src={IMGFour} alt="SWEAT THE LEASE DETAILS" title="SWEAT THE LEASE DETAILS" />
          </Box>
        </Post>
      </Container>
      <Feedbacks />
    </Box>
  );
};
