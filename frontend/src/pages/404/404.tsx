import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSetDocumentTitle } from '~/hooks';
import {
  Container,
  Content,
  ErrorCode,
  StyledButton,
  Title,
  Wrapper,
} from './404.styled';

const Error404: FC = () => {
  useSetDocumentTitle('Not found');

  return (
    <Container>
      <Wrapper>
        <Content>
          <ErrorCode>404</ErrorCode>
          <Title fontStyle='bold' size={2}>
            Sorry, we couldn't find this page.
          </Title>
          <Link to='/'>
            <StyledButton>Back to homepage</StyledButton>
          </Link>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Error404;
