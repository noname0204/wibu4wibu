import type { FC, ReactElement, MouseEventHandler } from 'react';
import { useLogoutMutation } from '~/api/authApi';
import { useAppDispatch } from '~/hooks';
import { logOut } from '~/store/reducers/user';
import Tippy from '@tippyjs/react/headless';
import { FadeIn } from '~/components/Animations';
import { PopperItemLink, PopperWrapper } from '~/components/Popper';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

interface AvatarActionMenuProps {
  open: boolean;
  onClickOutSide: VoidFunction;
  children: ReactElement;
}

const AvatarActionMenu: FC<AvatarActionMenuProps> = ({
  open,
  onClickOutSide,
  children,
}) => {
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogoutClick: MouseEventHandler<HTMLAnchorElement> = async (e) => {
    e.preventDefault();
    await logout();
    dispatch(logOut());
  };

  return (
    <Tippy
      interactive
      placement='bottom-start'
      render={(attrs) => (
        <FadeIn from='top' lenght={15} duration={0.2}>
          <PopperWrapper width={170} {...attrs}>
            <PopperItemLink
              to='/profile'
              label='Profile'
              icon={FaRegUserCircle}
              onClick={onClickOutSide}
            />
            <PopperItemLink
              to='/'
              label='Logout'
              icon={MdLogout}
              onClick={handleLogoutClick}
            />
          </PopperWrapper>
        </FadeIn>
      )}
      visible={open}
      onClickOutside={onClickOutSide}
      offset={[-20, 5]}
    >
      {children}
    </Tippy>
  );
};

export default AvatarActionMenu;
