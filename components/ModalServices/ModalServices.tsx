import { Button, Ul, Li } from "./styled";
import { Box, Modal } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { DATA_LINKS } from "@/components/Services/constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#34495e",
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalServices = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavClick = (path: string) => {
    setOpen(false);
    router.push(path);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Button onClick={handleOpen} id="white-footer-link">
        Services
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: "100%", maxWidth: 200 }}>
          <Ul>
            {DATA_LINKS.map((link) => (
              <Li key={link.path} onClick={() => handleNavClick(link.path)}>
                <Link href={link.path} passHref id="white-footer-link">
                  {link.name}
                </Link>
              </Li>
            ))}
          </Ul>
        </Box>
      </Modal>
    </>
  );
};

export default ModalServices;
