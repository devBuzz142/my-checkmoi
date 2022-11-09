import InputBase from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Base/InputBase',
  component: InputBase,
  argTypes: {},
} as ComponentMeta<typeof InputBase>;

const Template: ComponentStory<typeof InputBase> = (args) => {
  return <InputBase {...args}></InputBase>;
};

export const Default = Template.bind({});
