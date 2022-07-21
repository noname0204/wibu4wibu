import type { FC } from 'react';
import { useState } from 'react';

import AvatarActionMenu from './ActionMenu';
import AvatarImage from './AvatarImage';

const Avatar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleHideMenu = () => setIsMenuOpen(false);
  const handleShowMenu = () => setIsMenuOpen(true);

  return (
    <AvatarActionMenu open={isMenuOpen} onClickOutSide={handleHideMenu}>
      <div onClick={isMenuOpen ? handleHideMenu : handleShowMenu}>
        <AvatarImage />
      </div>
    </AvatarActionMenu>
  );
};

export default Avatar;
