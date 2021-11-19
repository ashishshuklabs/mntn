import React from "react";
import styled from "styled-components";
import { Content1 } from "../../content/Content1";
import { Content2 } from "../../content/Content2";
import { Content3 } from "../../content/Content3";
import bgContent from "../../../assets/images/BG-Content.png";

export const ContentSection = () => {
  return (
    <Container>
      <img className="bg-content" src={bgContent} alt="break" />
      <SectionWrapper>
        <Content1 />
        <Content2 />
        <Content3 />
      </SectionWrapper>
    </Container>
  );
};
const Container = styled.div`
  z-index: 50;
  position: absolute;
  top: 64rem;
  .bg-content {
    position: absolute;
    width: 100%;
    top: -26rem;
    left: 0;
    height: 43rem;
    z-index: 50;
    background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 61.38%);
  }
`;

const SectionWrapper = styled.section`
  position: relative;
  max-width: 100%;
  padding-top: 10rem;
  background: linear-gradient(180deg, rgba(11, 29, 38, 0), #0b1d26 7%);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;
