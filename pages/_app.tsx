import { Layout } from "../components/Layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/global.css";

const theme = createTheme({});

const MyApp = ({ Component, pageProps }: any) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <ToastContainer hideProgressBar />
  </ThemeProvider>
);

export default MyApp;
