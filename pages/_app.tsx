import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout/Layout";
import { ProjectProvider } from "@/context/ProjectContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/global.css";

const theme = createTheme({});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <ProjectProvider initialProject={pageProps.project ?? null}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer hideProgressBar />
    </ProjectProvider>
  </ThemeProvider>
);

export default MyApp;
