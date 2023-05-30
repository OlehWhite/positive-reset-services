import { Container } from './styled';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export const ContactUs = () => {
  return (
    <Container>
      <ContactForm />
      <ContactInfo />
    </Container>
  );
};
