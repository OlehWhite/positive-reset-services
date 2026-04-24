import { HeaderContainer } from "./styled";
import { LayoutHeader } from "./LayoutHeader/LayoutHeader";
import { LayoutNav } from "./LayoutNav/LayoutNav";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const OtherHeader = () => {
  return (
    <HeaderContainer>
      <AnimateOnScroll direction="down" duration={0.8}>
        <LayoutHeader />
      </AnimateOnScroll>
      <LayoutNav />
    </HeaderContainer>
  );
};
