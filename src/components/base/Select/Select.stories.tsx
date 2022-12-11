import Select from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Base/Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  return (
    <Select {...args}>
      <option value={'recruiting'}>모집 중</option>
      <option value={'recruitingFinished'}>모집 완료</option>
      <option value={'inProgress'}>진행 중</option>
      <option value={'finished'}>완료</option>
    </Select>
  );
};

export const Default = Template.bind({});
