import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './style';

export const useMenu = (defaultOn = false) => {
  const [isMenuOn, setIsMenuOn] = useState(defaultOn);
  const backRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOn(!isMenuOn);
  const openMenu = () => setIsMenuOn(true);
  const closeMenu = () => setIsMenuOn(false);

  useEffect(() => {
    const handleBackgroundClick = () => {
      if (!backRef.current) return;

      backRef.current.addEventListener('click', closeMenu);
    };

    handleBackgroundClick();
    return handleBackgroundClick;
  }, [backRef.current]);

  return { isMenuOn, toggleMenu, openMenu, closeMenu, backRef };
};

interface MenuProps {
  children?: ReactNode;
  isMenuOn: boolean;
  backRef: RefObject<HTMLDivElement>;
  parentRef?: RefObject<HTMLElement>;
}

const Menu = ({ ...props }: MenuProps) => {
  const { children, isMenuOn = false, backRef, parentRef } = props;

  return (
    <S.Background className="menu-background" isMenuOn={isMenuOn} ref={backRef}>
      <S.Container className="menu-content">{children}</S.Container>
    </S.Background>
  );
};

export default Menu;
