import InputBase from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const HTMLInputType = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
];

export default {
  title: 'Base/InputBase',
  component: InputBase,
  argTypes: {
    type: {
      control: 'radio',
      options: HTMLInputType,
    },
    defaultValue: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
    autoComplete: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
  },
} as ComponentMeta<typeof InputBase>;

const Template: ComponentStory<typeof InputBase> = (args) => {
  return <InputBase {...args}></InputBase>;
};

export const Default = Template.bind({});
