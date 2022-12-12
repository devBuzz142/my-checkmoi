import React, {
  HTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './style';

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
  id?: string;
  autoWidth?: boolean;
  defaultOpen?: boolean;
  multiple?: boolean;
  variant?: 'filled' | 'outlined' | 'standard';
  native?: boolean;
  sx?: {
    width?: string | number;
    height?: string | number;
  };
}

const Select = ({ ...props }: SelectProps) => {
  const {
    children,
    variant = 'standard',
    native = false,
    sx = { width: 240 },
  } = props;

  const options = React.Children.toArray(children)
    .filter((node) => (node as ReactElement)?.type === 'option')
    .map((node) => (node as ReactElement).props);

  const ulRef = useRef<HTMLUListElement>(null);

  const [selected, setSelected] = useState<string>(
    options[0].children as string,
  );
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const handleOptionListOn = () => {
      if (!ulRef.current) return;

      if (isOn) {
        ulRef.current.classList.remove('hidden');
        ulRef.current.classList.add('visible');
      } else {
        ulRef.current.classList.remove('visible');
        ulRef.current.classList.add('hidden');
      }
    };

    handleOptionListOn();
    return handleOptionListOn;
  }, [isOn]);

  const handleSelectorClick = () => {
    if (!ulRef.current) return;
    console.log('clicked');

    setIsOn(!isOn);
  };

  const handleOptionClick = (e: MouseEvent<HTMLUListElement>) => {
    const li = e.target as HTMLLIElement;

    setSelected(li.dataset.value as string);

    handleSelectorClick();
  };

  if (native) {
    return (
      <S.Conainer
        width={sx.width || '100%'}
        height={sx.height || variant === 'standard' ? '32px' : '56px'}
      >
        <S.NativeSelect variant={variant} onClick={handleSelectorClick}>
          {options.map((opt, idx) => (
            <option key={`.${idx}`} value={opt.children}>
              {opt.children}
            </option>
          ))}
        </S.NativeSelect>
      </S.Conainer>
    );
  }

  return (
    <S.Conainer
      width={sx.width || '100%'}
      height={sx.height || variant === 'standard' ? '48px' : '56px'}
    >
      <S.StyledSelect variant={variant} onClick={handleSelectorClick}>
        {selected}
      </S.StyledSelect>
      <S.OptionList
        className={'option-list hidden'}
        isOn={isOn}
        onClick={handleOptionClick}
        ref={ulRef}
      >
        {options.map((opt, idx) => (
          <li key={`.${idx}`} data-value={opt.children}>
            {opt.children}
          </li>
        ))}
      </S.OptionList>
      {/* <S.ListBackground
        isOn={isOn}
        onClick={handleSelectorClick}
      ></S.ListBackground> */}
    </S.Conainer>
  );
};

export default Select;
