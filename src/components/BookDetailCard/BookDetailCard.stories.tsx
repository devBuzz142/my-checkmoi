import BookDetailCard from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/BookDetailCard',
  component: BookDetailCard,
  argTypes: {},
} as ComponentMeta<typeof BookDetailCard>;

const Template: ComponentStory<typeof BookDetailCard> = (args) => {
  return <BookDetailCard {...args}></BookDetailCard>;
};

export const Default = Template.bind({});
