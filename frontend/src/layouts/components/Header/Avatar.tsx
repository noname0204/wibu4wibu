import type { FC } from 'react';
import { useState } from 'react';
import { useAppSelector } from '~/hooks';
import { selectCurrentUser } from '~/store/reducers/user';
import defaultAvatar from '~/assets/default-avatar.jpg';
import ReactAvatar from 'react-avatar';
import classes from './styles/Avatar.module.scss';
import AvatarActionMenu from './AvatarActionMenu';

const Avatar: FC = () => {
  const user = useAppSelector(selectCurrentUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleHideMenu = () => setIsMenuOpen(false);
  const handleShowMenu = () => setIsMenuOpen(true);

  return (
    <div className='hidden lg:block'>
      <AvatarActionMenu open={isMenuOpen} onClickOutSide={handleHideMenu}>
        <div>
          <ReactAvatar
            className={classes.avatar}
            size='2.5rem'
            round
            name={user?.username}
            src={user?.avatarURL || defaultAvatar}
            onClick={isMenuOpen ? handleHideMenu : handleShowMenu}
          />
        </div>
      </AvatarActionMenu>
    </div>
  );
};

export default Avatar;
