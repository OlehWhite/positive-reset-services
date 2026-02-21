import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useProject } from "@/context/ProjectContext";

const PhoneIcon = () => {
  const { project } = useProject();

  return (
    <Stack
      component="a"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      bottom={30}
      left={30}
      width={50}
      height={50}
      bgcolor="#34495e"
      borderRadius="50%"
      href={`tel:${project?.tel}`}
      zIndex={999}
      sx={{
        transition: ".3s",
        ":hover": {
          bgcolor: "#51708f",
        },
      }}
    >
      <Image src="/call-icon.png" width={40} height={40} alt="Phone icon" title="Phone icon" />
    </Stack>
  );
};

export default PhoneIcon;
