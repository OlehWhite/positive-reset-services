import { Container } from './styled';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { Helmet } from 'react-helmet-async';

export const ContactUs = () => {
  return (
    <Container>
      <Helmet>
        <title>Positive Reset Services - Call Today | Contact Us</title>
        <meta
          name="description24"
          content="Contact Us"
        />
      </Helmet>
      <ContactForm />
      <ContactInfo />
    </Container>
  );
};
