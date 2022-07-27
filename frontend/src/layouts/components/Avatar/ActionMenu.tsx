import type { FC, ReactElement, MouseEventHandler } from 'react';
import { useLogoutMutation } from '~/api/authApi';
import { useAppDispatch } from '~/hooks';
import { logOut } from '~/store/reducers/user';
import Tippy from '@tippyjs/react/headless';
import { FadeIn } from '~/components/Animations';
import { PopperItemLink, PopperWrapper } from '~/components/Popper';
import { UserCircleIcon, LogoutIcon } from '~/components/Icons';

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
        <FadeIn from='top' lenght={15} duration={200}>
          <PopperWrapper width='170px' {...attrs}>
            <PopperItemLink
              to='/profile'
              label='Profile'
              icon={UserCircleIcon}
              onClick={onClickOutSide}
            />
            <PopperItemLink
              to='/'
              label='Logout'
              icon={LogoutIcon}
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
