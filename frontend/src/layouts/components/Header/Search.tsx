import type { FC, ChangeEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { SearchThinIcon, CancelIcon } from '~/components/Icons';

const Wrapper = styled.div`
  --search-items-margin: 0.7rem;

  display: none;
  min-width: 27rem;
  height: 2.5rem;
  border: 2px solid ${(p) => p.theme.color.gray[3]};
  align-items: center;
  flex-direction: row-reverse;
  padding-left: var(--search-items-margin);
  border-radius: 50vw;
  transition: border-color 200ms;

  & > * {
    margin-right: var(--search-items-margin);
  }

  &:focus-within {
    border-color: ${(p) => p.theme.color.gray[4] + p.theme.alpha[80]};
  }

  @media ${(p) => p.theme.breakpoints.md} {
    display: flex;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  color: ${(p) => p.theme.color.gray[6]};
`;

const StyledClearButton = styled(CancelIcon)`
  cursor: pointer;
  fill: ${(p) => p.theme.color.gray[4]};

  &:hover {
    fill: ${(p) => p.theme.color.gray[5]};
  }
`;

const StyledSearchIcon = styled(SearchThinIcon)<{
  // Use transient props to fix error with react dom
  $isInputValueEmpty: boolean;
}>`
  width: 1.5rem;
  transition: fill 200ms;
  fill: ${(p) => (p.$isInputValueEmpty ? p.theme.color.gray[4] : p.theme.color.slate[6])};

  &:hover {
    fill: ${(p) => p.theme.color.slate[6]};
  }
`;

const Search: FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange: ChangeEventHandler = (e) => {
    const searchValue = (e.target as HTMLInputElement).value;
    if (searchValue.startsWith(' ')) return;

    setValue(searchValue);
  };

  return (
    <Wrapper>
      {value && <StyledClearButton onClick={() => setValue('')} />}
      <StyledInput
        value={value}
        onChange={handleChange}
        placeholder='Search anime, manga, lightnovel, ...'
        spellCheck={false}
      />
      <StyledSearchIcon size={20} $isInputValueEmpty={!value} />
    </Wrapper>
  );
};

export default Search;
