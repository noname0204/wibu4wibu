import type { FC } from 'react';
import { useAppSelector } from '~/hooks';
import defaultAvatar from '~/assets/default-avatar.jpg';
import ReactAvatar from 'react-avatar';
import classes from './styles/Avatar.module.scss';

const Avatar: FC = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <ReactAvatar
      className={classes.avatar}
      size='2.5rem'
      round
      name={user.username}
      src={user.avatarURL || defaultAvatar}
    />
  );
};

export default Avatar;
