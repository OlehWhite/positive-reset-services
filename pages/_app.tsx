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
import { Backdrop, CircularProgress, Box, Typography, keyframes } from "@mui/material";

const pulse = keyframes`
  0% { transform: scale(0.9); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0.7; }
`;

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
                zIndex: 9999,
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                display: "flex",
                flexDirection: "column",
                gap: 2
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  animation: `${pulse} 2s infinite ease-in-out`,
                }}
              >
                <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                  <CircularProgress size={80} thickness={4} sx={{ color: "#3498db" }} />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "#3498db",
                        opacity: 0.2,
                        animation: `${pulse} 1.5s infinite ease-in-out`,
                      }}
                    />
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ color: "#2c3e50", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>
                  Завантаження...
                </Typography>
              </Box>
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
