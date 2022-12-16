import LoginButton from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/LoginButton',
  component: LoginButton,
  argTypes: {},
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => {
  return <LoginButton {...args}></LoginButton>;
};

export const Default = Template.bind({});
