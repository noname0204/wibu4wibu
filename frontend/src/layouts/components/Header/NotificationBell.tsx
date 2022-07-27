import type { FC } from 'react';
import styled from 'styled-components';
import { NotificationsIcon } from '~/components/Icons';
import { Ripple } from '~/components/Animations';

const Wrapper = styled.div`
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 50%;

  &:hover {
    background-color: ${(p) => p.theme.color.gray[1]};
  }

  &:hover > svg {
    fill: ${(p) => p.theme.color.gray[4] + p.theme.alpha[90]};
  }
`;

const StyledIcon = styled(NotificationsIcon)`
  fill: ${(p) => p.theme.color.gray[3]};
`;

const NotificationBell: FC = () => {
  return (
    <Wrapper>
      <StyledIcon size={27} />
      <Ripple />
    </Wrapper>
  );
};

export default NotificationBell;
