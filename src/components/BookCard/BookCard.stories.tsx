import BookCard from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/BookCard',
  component: BookCard,
  argTypes: {},
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => {
  return <BookCard {...args}></BookCard>;
};

export const Default = Template.bind({});
