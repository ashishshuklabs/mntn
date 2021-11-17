import React from "react";
import { Hero, Content } from "../../components";
import styled from "styled-components";

export const Landing = () => {
  return (
    <LandingWrapper>
      <Hero />
      <Content />
    </LandingWrapper>
  );
};

const LandingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
