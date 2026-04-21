import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout/Layout";
import { ProjectProvider } from "@/context/ProjectContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/global.css";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Backdrop, CircularProgress } from "@mui/material";

const theme = createTheme({});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <ProjectProvider initialProject={pageProps.project ?? null}>
        <Layout>
          {loading && (
            <Backdrop
              open={true}
              sx={{
                color: "#3498db",
                zIndex: 9999,
                backdropFilter: "blur(5px)",
                display: "flex",
                flexDirection: "column",
                gap: 2
              }}
            >
              <CircularProgress color="inherit" size={60} thickness={4} />
            </Backdrop>
          )}
          <Component {...pageProps} />
        </Layout>
        <ToastContainer hideProgressBar />
      </ProjectProvider>
    </ThemeProvider>
  );
};

export default MyApp;
