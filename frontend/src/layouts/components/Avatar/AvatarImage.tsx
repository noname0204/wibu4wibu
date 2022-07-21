import type { FC } from 'react';
import classNames from 'classnames/bind';
import { useAppSelector } from '~/hooks';
import { selectCurrentUser } from '~/store/reducers/user';
import defaultAvatar from '~/assets/default-avatar.jpg';
import classes from './styles/Avatar.module.scss';

interface AvatarImageProps {
  className?: string;
  size?: number | string;
}

const cx = classNames.bind(classes);
const AvatarImage: FC<AvatarImageProps> = ({ className, size = '2.5rem' }) => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className={cx('wrapper')} style={{ width: size }}>
      <img
        className={cx('avatar-img', className)}
        src={user?.avatarURL || defaultAvatar}
        alt={user?.username || 'Avatar'}
      />
    </div>
  );
};

export default AvatarImage;
