import React from 'react'
import styled from 'styled-components';
import { Landing } from '..';

export const Main = () => {
    return (
        <PageContainer>
            <Landing />
        </PageContainer>
    )
}
const PageContainer = styled.main`
  max-width: 120rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);
  background: var(--ds-bg-color);

`;