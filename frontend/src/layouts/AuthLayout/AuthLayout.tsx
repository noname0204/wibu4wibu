import type { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import bgImg from '~/assets/blobscene.svg';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-content: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bgImg});
`;

const AuthLayout: FC = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default AuthLayout;
