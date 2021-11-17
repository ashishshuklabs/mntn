import React from "react";
import styled from "styled-components";
import { Content1 } from "../../content/Content1";
import { Content2 } from "../../content/Content2";
import { Content3 } from "../../content/Content3";

export const ContentSection = () => {
  return (
    <SectionWrapper>
      <Content1 />
      <Content2 />
      <Content3 />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  position: absolute;
  top: 50%;
  max-width: 100%;
  background: linear-gradient(180deg, rgba(11, 29, 38, 0), #0b1d26 20%);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;
