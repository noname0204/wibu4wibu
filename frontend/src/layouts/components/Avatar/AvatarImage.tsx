import type { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '~/hooks';
import { selectCurrentUser } from '~/store/reducers/user';
import defaultAvatar from '~/assets/default-avatar.jpg';

interface AvatarImageProps {
  size?: string;
}

const Wrapper = styled.div<Required<AvatarImageProps>>`
  width: ${(p) => p.size};
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  pointer-events: none;
  max-width: 100%;
  max-height: 100%;
`;

const AvatarImage: FC<AvatarImageProps> = ({ size = '2.5rem' }) => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <Wrapper size={size}>
      <StyledImage
        src={user?.avatarURL || defaultAvatar}
        alt={user?.username || 'Avatar'}
      />
    </Wrapper>
  );
};

export default AvatarImage;
