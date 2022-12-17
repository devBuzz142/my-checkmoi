import Menu, { useMenu } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Base/Menu',
  component: Menu,
  argTypes: {},
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => {
  const { isMenuOn, openMenu, closeMenu, toggleMenu, backRef } = useMenu(true);

  return (
    <>
      <button onClick={toggleMenu}>MENU</button>
      <Menu {...args} isMenuOn={isMenuOn} backRef={backRef}>
        <div>menu1</div>
        <div>menu2</div>
        <div>menu3</div>
        <div>menu4</div>
      </Menu>
    </>
  );
};

export const Default = Template.bind({});
