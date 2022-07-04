import type { FC } from 'react';
import { useAppSelector } from '~/hooks';
import ReactAvatar from 'react-avatar';

const Avatar: FC = () => {
  const { currentUser } = useAppSelector((state) => state.user);

  return (
    <ReactAvatar
      size='2.5rem'
      round
      name={currentUser?.username}
      src={currentUser?.avatarURL || undefined}
    />
  );
};

export default Avatar;
