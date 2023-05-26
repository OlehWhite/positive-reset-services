import { Container, Wrapper, Nav, FirstBlock, SecondBlock, Link } from './styled';
import { FC } from 'react';

const BASE_NAV = ['HOME', 'SERVICES', 'TELEHEALTH', 'ABOUT US', 'CONTACT US'];

export const LayoutNav: FC = () => {
  return (
    <Container>
      <Wrapper>
        <FirstBlock>
          {BASE_NAV.map((link, index) => (
            <Nav key={index} to="/">
              {link}
            </Nav>
          ))}
        </FirstBlock>
        <SecondBlock>
          <Link>COVID-19</Link>
        </SecondBlock>
      </Wrapper>
    </Container>
  );
};
