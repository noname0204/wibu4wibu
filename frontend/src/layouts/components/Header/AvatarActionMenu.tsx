import type { FC, ReactElement } from 'react';
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
  return (
    <Tippy
      interactive
      placement='bottom-start'
      render={(attrs) => (
        <FadeIn from='top' lenght={15} duration={0.2}>
          <PopperWrapper width={170} {...attrs}>
            <PopperItemLink to='/' label='Profile' icon={FaRegUserCircle} />
            <PopperItemLink to='/' label='Logout' icon={MdLogout} />
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
