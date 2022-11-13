import MuiTest from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Test/MuiTest',
  component: MuiTest,
  argTypes: {},
  args: {
    mui: true,
  },
} as ComponentMeta<typeof MuiTest>;

const Template: ComponentStory<typeof MuiTest> = (args) => {
  return <MuiTest {...args}></MuiTest>;
};

export const Default = Template.bind({});
