import React, {
  ReactElement,
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

  return { isMenuOn, toggleMenu, openMenu, closeMenu, backRef, parentRef };
};

interface MenuItemProps {
  children?: ReactNode;
}

export const MenuItem = ({ ...props }: MenuItemProps) => {
  const { children } = props;

  return <S.MenuItem className="menu-item">{children}</S.MenuItem>;
};

const typeMenuItem = (<MenuItem />).type;

interface MenuProps {
  children?: ReactNode;
  isMenuOn: boolean;
  backRef: RefObject<HTMLDivElement>;
  parentRef?: RefObject<HTMLElement>;
}

const Menu = ({ ...props }: MenuProps) => {
  const { children, isMenuOn = false, backRef, parentRef } = props;

  const menuRef = useRef<HTMLDivElement>(null);
  const [menuPos, setMenuPos] = useState({
    top: 0,
    left: 0,
  });

  const menuItemList = React.Children.toArray(children)
    .filter((node) => (node as ReactElement).type === typeMenuItem)
    .map((node) => ((node as ReactElement).props as MenuItemProps).children);

  useEffect(() => {
    const handleMenuPosition = () => {
      if (!parentRef?.current) return;
      if (!menuRef?.current) return;

      const menuRects = menuRef.current.getBoundingClientRect();
      const parentRects = parentRef.current.getBoundingClientRect();

      const menuTop = parentRects.top + parentRects.height;
      const menuLeft =
        parentRects.left + parentRects.width / 2 - menuRects.width / 2;

      setMenuPos({
        ...menuPos,
        top:
          menuTop < 0
            ? 0
            : menuTop + menuRects.height <= window.innerHeight
            ? menuTop
            : window.innerHeight - menuRects.height,
        left:
          menuLeft < 0
            ? 0
            : menuLeft + menuRects.width <= window.innerWidth
            ? menuLeft
            : window.innerWidth - menuRects.width,
      });
    };

    handleMenuPosition();
    return handleMenuPosition;
  }, [isMenuOn]);

  return (
    <S.Background className="menu-background" isMenuOn={isMenuOn} ref={backRef}>
      <S.Container className="menu-content" menuPos={menuPos} ref={menuRef}>
        {menuItemList.map((children, idx) => (
          <MenuItem key={`.${idx}`}>{children}</MenuItem>
        ))}
      </S.Container>
    </S.Background>
  );
};

export default Menu;
