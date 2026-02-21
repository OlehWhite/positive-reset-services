import Link from "next/link";
import { Box } from "@mui/material";
import { IMGLogo } from "@/components/Layout/Footer/styled";
import IMGLogoFooter from "@/public/logo.png";
import React from "react";

const LogoImg = () => {
  return (
    <Link href="/" id="logo">
      <Box sx={{ display: "flex" }}>
        <Box>
          <IMGLogo src={IMGLogoFooter} alt="Logo" title="Logo" />
        </Box>
        <Box>
          <Box sx={{ color: "#fff", fontWeight: "600", fontSize: 18 }}>POSITIVE RESET SERVICES</Box>
          <Box
            sx={{
              color: "rgba(57,138,243,0.98)",
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Mental Health Clinic
          </Box>
          <Box sx={{ color: "#fff", fontWeight: "600", fontSize: 14 }}>FRANCHISING OPPORTUNITY</Box>
        </Box>
      </Box>
    </Link>
  );
};

export default LogoImg;
