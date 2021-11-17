import React from "react";
import { Hero, Content } from "../../components";
import styled from "styled-components";

export const Landing = () => {
  return (
    <PageContainer>
      <LandingWrapper>
        <Hero />
        <Content />
      </LandingWrapper>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  max-width: 120rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);
  background: var(--ds-bg-color);

`;
const LandingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
