import Menu, { useMenu } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RefObject } from 'react';

export default {
  title: 'Base/Menu',
  component: Menu,
  argTypes: {},
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => {
  const { isMenuOn, openMenu, closeMenu, toggleMenu, backRef, parentRef } =
    useMenu(false);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        style={{ background: `red` }}
        onClick={toggleMenu}
        ref={parentRef as RefObject<HTMLButtonElement>}
      >
        MENU
      </button>
      <Menu
        {...args}
        isMenuOn={isMenuOn}
        backRef={backRef}
        parentRef={parentRef}
      >
        <div>menu1</div>
        <div>menu2</div>
        <div>menu3</div>
        <div>menu4</div>
      </Menu>
    </>
  );
};

export const Default = Template.bind({});
