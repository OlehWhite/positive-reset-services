import dynamic from "next/dynamic";
import { HomeHeader } from "@/components/Layout/HomeHeader/HomeHeader";
import { Services } from "@/otherPages/home/Services/Services";
import Head from "next/head";
import React from 'react';
import { useInView } from "react-intersection-observer";

const LazyLoadSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "300px 0px" });
  return <div ref={ref}>{inView ? children : <div style={{ minHeight: "300px" }} />}</div>;
};

const MotivationalQuotes = dynamic(
  () => import("@/otherPages/home/MotivationalQuotes/MotivationalQuotes").then((m) => m.MotivationalQuotes),
  { ssr: false }
);
const Location = dynamic(
  () => import("@/otherPages/home/Location/Location").then((m) => m.Location),
  { ssr: false }
);
const Feedbacks = dynamic(
  () => import("@/components/Feedbacks/Feedbacks").then((m) => m.Feedbacks),
  { ssr: false }
);
const FranchiseOptions = dynamic(
  () => import("@/otherPages/home/FranchiseOptions/FranchiseOptions").then((m) => m.FranchiseOptions),
  { ssr: false }
);
const AboutFranchising = dynamic(
  () => import("@/otherPages/home/AboutFranchising/AboutFranchising").then((m) => m.AboutFranchising),
  { ssr: false }
);
const OurPartners = dynamic(
  () => import("@/otherPages/home/OurPartners/OurPartners").then((m) => m.OurPartners),
  { ssr: false }
);

const Home = () => {
  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today</title>
        <meta
          name="description"
          content="POSITIVE RESET SERVICES is a successful franchise company that operates Mental Health Clinics across the United States. We provide a professional system with a proven track record of financial success and positive treatment outcomes. Call us today at +1 (848) 228-3388."
        />
      </Head>
      <HomeHeader />
      <div>
        <Services />
        <LazyLoadSection><MotivationalQuotes /></LazyLoadSection>
        <LazyLoadSection><Location /></LazyLoadSection>
        <LazyLoadSection><Feedbacks /></LazyLoadSection>
        <LazyLoadSection><FranchiseOptions /></LazyLoadSection>
        <LazyLoadSection><AboutFranchising /></LazyLoadSection>
        <LazyLoadSection><OurPartners /></LazyLoadSection>
      </div>
    </>
  );
};

export default Home;
