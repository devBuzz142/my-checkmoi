import React, {
  ChangeEvent,
  ChangeEventHandler,
  HTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './style';

const getUnNativeChangeEvent = (ref: RefObject<HTMLInputElement>) => {
  if (!ref.current) throw new Error('unNativeRef is not assigned yed');

  const changeEv: ChangeEvent<HTMLInputElement> = {
    target: ref.current,
    nativeEvent: new Event('change'),
    currentTarget: ref.current,
    bubbles: false,
    cancelable: false,
    defaultPrevented: false,
    eventPhase: 0,
    isTrusted: false,
    preventDefault: function (): void {
      this.defaultPrevented = true;
    },
    isDefaultPrevented: function (): boolean {
      throw new Error('Function not implemented.');
    },
    stopPropagation: function (): void {
      throw new Error('Function not implemented.');
    },
    isPropagationStopped: function (): boolean {
      throw new Error('Function not implemented.');
    },
    persist: function (): void {
      throw new Error('Function not implemented.');
    },
    timeStamp: 0,
    type: 'change',
  };

  return changeEv;
};

interface SelectProps
  extends Omit<HTMLAttributes<HTMLSelectElement>, 'onChange'> {
  children?: ReactNode;
  id?: string;
  name?: string;
  autoWidth?: boolean;
  defaultOpen?: boolean;
  multiple?: boolean;
  label?: string;
  variant?: 'filled' | 'outlined' | 'standard';
  native?: boolean;
  sx?: {
    width?: string | number;
    height?: string | number;
  };
  onChange?: ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
}

const Select = ({ ...props }: SelectProps) => {
  const {
    children,
    label = 'temp-label',
    variant = 'standard',
    native = false,
    sx = { width: 240 },
  } = props;

  const options = React.Children.toArray(children)
    .filter((node) => (node as ReactElement)?.type === 'option')
    .map((node) => (node as ReactElement).props);

  const [selected, setSelected] = useState<string>(
    options[0].children as string,
  );
  const [isOn, setIsOn] = useState(false);

  const ulRef = useRef<HTMLUListElement>(null);
  const unNativeRef = useRef<HTMLInputElement>(null);

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

    setIsOn(!isOn);
  };

  const handleOptionClick = (e: MouseEvent<HTMLUListElement>) => {
    handleSelectorClick();

    const li = e.target as HTMLLIElement;
    setSelected(li.dataset.value as string);

    if (unNativeRef.current && props.onChange) {
      props.onChange(getUnNativeChangeEvent(unNativeRef));
    }
  };

  if (native) {
    return (
      <S.Conainer
        width={sx.width || '100%'}
        height={sx.height || variant === 'standard' ? '48px' : '56px'}
      >
        <S.SelectorLabel>{label}</S.SelectorLabel>
        <S.NativeSelect
          name={props.name}
          native={native}
          variant={variant}
          onClick={handleSelectorClick}
          onChange={props.onChange}
        >
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
      <input hidden name={props.name} value={selected} ref={unNativeRef} />
      <S.SelectorLabel>{label}</S.SelectorLabel>
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
