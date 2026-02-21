import Link from "next/link";
import { Box } from "@mui/material";
import { IMGLogo } from "@/components/Layout/Footer/styled";
import IMGLogoFooter from "@/public/logo.png";
import React from "react";

const LogoImgDark = () => {
  return (
    <Link href="/" id="logo">
      <Box sx={{ display: "flex" }}>
        <Box>
          <IMGLogo src={IMGLogoFooter} alt="Logo" title="Logo" />
        </Box>
        <Box>
          <Box
            sx={{
              color: "rgba(53,180,248,0.98)",
              fontWeight: "600",
              fontSize: 18,
            }}
          >
            POSITIVE RESET SERVICES
          </Box>
          <Box
            sx={{
              color: "#7d7d7d",
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Mental Health Clinic
          </Box>
          <Box
            sx={{
              color: "rgba(53,180,248,0.98)",
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            FRANCHISING OPPORTUNITY
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default LogoImgDark;
