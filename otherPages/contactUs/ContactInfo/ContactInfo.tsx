import { Container, Wrapper, Title, Ul, Li, Text, TContact, Contact } from "./styled";
import { DATA_INFO } from "./mocData";
import { Box } from "@mui/material";
import { useProject } from "@/context/ProjectContext";

export const ContactInfo = () => {
  const { project } = useProject();

  return (
    <Container>
      <Wrapper>
        <Title>CONTACT INFO</Title>

        <Box>
          <Ul>
            {DATA_INFO.map((item, index) => (
              <Li key={index}>{item.text}</Li>
            ))}
          </Ul>

          <Text>Call, write and get more information.</Text>
        </Box>

        <Box>
          <Contact>
            <TContact>CONTACT</TContact>

            <TContact>{project?.tel}</TContact>
          </Contact>

          <Contact>
            <TContact>EMAIL</TContact>

            <TContact>{project?.email}</TContact>
          </Contact>
        </Box>
      </Wrapper>
    </Container>
  );
};
