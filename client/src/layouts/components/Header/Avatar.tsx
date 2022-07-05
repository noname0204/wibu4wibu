import type { FC } from 'react';
import { useAppSelector } from '~/hooks';
import defaultAvatar from '~/assets/default-avatar.jpg';
import ReactAvatar from 'react-avatar';

const Avatar: FC = () => {
  const { currentUser } = useAppSelector((state) => state.user);

  return (
    <ReactAvatar
      className='[&>img]:pointer-events-none'
      size='2.5rem'
      round
      name={currentUser?.username}
      src={currentUser?.avatarURL || defaultAvatar}
    />
  );
};

export default Avatar;
