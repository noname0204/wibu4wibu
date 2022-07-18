import type { FC, ReactElement } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FadeIn } from '~/components/Animations';
import { PopperItemLink, PopperWrapper } from '~/components/Popper';
import { FaPen } from 'react-icons/fa';
import { BsMusicNoteBeamed } from 'react-icons/bs';

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
          <FadeIn from='top' lenght={15} duration={0.2}>
            <PopperWrapper width={200} {...attrs}>
              <PopperItemLink to='/' label='Add new content' icon={FaPen} />
              <PopperItemLink
                to='/'
                label='Add new chill radio'
                icon={BsMusicNoteBeamed}
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
