import TextField from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args}></TextField>;
};

export const Default = Template.bind({});
