import AppBar from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/AppBar',
  component: AppBar,
  argTypes: {},
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => {
  return (
    <AppBar {...args}>
      <div>This is AppBar</div>
    </AppBar>
  );
};

export const Default = Template.bind({});
