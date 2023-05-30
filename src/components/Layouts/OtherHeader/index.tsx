import { HeaderContainer } from './styled';
import { LayoutHeader } from './LayoutHeader';
import { LayoutNav } from './LayoutNav';

export const OtherHeader = () => {
  return (
    <HeaderContainer>
      <LayoutHeader />
      <LayoutNav />
    </HeaderContainer>
  );
};
