import React, { FC, useState } from "react";
import {
  Img,
  PersonCard,
  Text,
  WrapperPersonCard,
  ModalContainer,
  ModalTitle,
  TextName,
  ModalText,
  ModalImg,
} from "../../otherPages/ourStaff/style";
import { Box, Modal, Stack, Typography } from "@mui/material";
import { IProvider } from "../../services/types";

interface Props {
  provider: IProvider;
}

const PersonCardComponent: FC<Props> = ({ provider }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <WrapperPersonCard onClick={() => setOpen(true)}>
        <PersonCard>
          <Img src={provider?.image} alt={provider?.firstName} />
          <Box height={110}>
            <TextName>
              {provider?.firstName} {provider?.lastName}
            </TextName>
            <Text>
              {provider?.title.slice(0, 60)}
              ...
            </Text>
          </Box>
        </PersonCard>
      </WrapperPersonCard>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <Box
            width="100%"
            maxWidth={270}
            height={400}
            borderRadius="15px"
            overflow="hidden"
          >
            <ModalImg src={provider?.image} alt={provider?.firstName} />
          </Box>
          <Box width="100%">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography fontSize={20}>
                {provider?.firstName} {provider?.lastName}
              </Typography>

              {provider?.age !== 0 && (
                <Typography fontSize={20}>Age: {provider?.age}</Typography>
              )}
            </Stack>

            <hr />
            <Box overflow="auto" height="400px">
              <Typography fontSize={20} fontWeight="bold" mb={3}>
                {provider?.title}
              </Typography>

              <Typography fontSize={16} mb={3}>
                {provider?.text}
              </Typography>

              {provider?.link && (
                <Box component="a" href={provider?.link} target="_black">
                  {provider?.link}
                </Box>
              )}
            </Box>
          </Box>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default PersonCardComponent;
