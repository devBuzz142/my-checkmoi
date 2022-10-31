import TopBar from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/TopBar',
  component: TopBar,
  argTypes: {},
} as ComponentMeta<typeof TopBar>;

const Template: ComponentStory<typeof TopBar> = (args) => {
  return <TopBar {...args}></TopBar>;
};

export const Default = Template.bind({});
