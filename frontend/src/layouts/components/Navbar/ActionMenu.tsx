import type { FC, ReactElement } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FadeIn } from '~/components/Animations';
import { PopperItemLink, PopperWrapper } from '~/components/Popper';
import { MusicNoteBeamedIcon, PenIcon, PostAddIcon } from '~/components/Icons';

interface ActionMenuProps {
  open: boolean;
  onClickOutSide: VoidFunction;
  children: ReactElement;
}

const ActionMenu: FC<ActionMenuProps> = ({ open, onClickOutSide, children }) => {
  return (
    <div>
      <Tippy
        interactive
        placement='bottom-end'
        render={(attrs) => (
          <FadeIn from='top' lenght={15} duration={200}>
            <PopperWrapper width='190px' {...attrs}>
              <PopperItemLink
                to='/'
                label='New content'
                icon={PenIcon}
                onClick={onClickOutSide}
              />
              <PopperItemLink
                to='/'
                label='New post'
                icon={PostAddIcon}
                onClick={onClickOutSide}
              />
              <PopperItemLink
                to='/'
                label='New chill radio'
                icon={MusicNoteBeamedIcon}
                onClick={onClickOutSide}
              />
            </PopperWrapper>
          </FadeIn>
        )}
        visible={open}
        onClickOutside={onClickOutSide}
        offset={[20, 5]}
      >
        {children}
      </Tippy>
    </div>
  );
};

export default ActionMenu;
