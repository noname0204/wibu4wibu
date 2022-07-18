import type { FC } from 'react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Ripple } from '~/components/Animations';
import ActionMenu from './ActionMenu';
import { BsPlusLg } from 'react-icons/bs';
import classes from './styles/ActionButton.module.scss';

const cx = classNames.bind(classes);
const ActionButton: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleHideMenu = () => setIsMenuOpen(false);
  const handleShowMenu = () => setIsMenuOpen(true);

  return (
    <ActionMenu open={isMenuOpen} onClickOutSide={handleHideMenu}>
      <button
        onClick={isMenuOpen ? handleHideMenu : handleShowMenu}
        className={cx('button', !isMenuOpen && '[&>svg]:hover:scale-125')}
      >
        <BsPlusLg size={15} className={cx('icon', isMenuOpen && 'rotate-45 scale-125')} />
        <Ripple />
      </button>
    </ActionMenu>
  );
};

export default ActionButton;
