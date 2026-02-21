import type { GetStaticProps } from "next";
import Home from "@/pages/home";
import { getProjectData } from "@/services/getInfo";

const Index = () => <Home />;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const project = await getProjectData();
    return {
      props: { project },
      revalidate: 60,
    };
  } catch {
    return { props: { project: null }, revalidate: 60 };
  }
};

export default Index;
