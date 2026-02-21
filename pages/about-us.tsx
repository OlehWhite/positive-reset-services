import { Feedbacks } from "@/components/Feedbacks/Feedbacks";
import React from "react";
import { Box } from "@mui/material";
import { Header } from "@/otherPages/aboutUs/Header/Header";
import { Mission } from "@/otherPages/aboutUs/Mission/Mission";
import { OtherHeader } from "@/components/Layout/OtherHeader/OtherHeader";
import { VisionStatement } from "@/otherPages/aboutUs/VisionStatement/VisionStatement";
import Head from "next/head";

const AboutUs = () => {
  return (
    <Box>
      <Head>
        <title>Positive Reset Services - Call Today | About Us</title>
        <meta
          name="keywords"
          content="Mental health services,
Counseling and therapy,
Holistic approach to mental wellness,
Experienced therapists and counselors,
Personalized treatment plans,
Empowering individuals,
Positive mindset and well-being,
Mental health awareness,
Stress management,
Emotional support"
        />
        <meta name="description" content="OUR MISSION OUR VALUES OUR VISION OUR GOAL" />
      </Head>
      <OtherHeader />
      <Header />
      <Mission />
      <VisionStatement />
      <Feedbacks />
    </Box>
  );
};

export default AboutUs;
