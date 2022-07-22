import type { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Wrapper = styled.div`
  margin: 0 0.75rem;
  display: flex;
  height: 100%;
  gap: 0.75rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const DefaultLayout: FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Navbar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default DefaultLayout;
