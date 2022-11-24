import StudyCard from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/StudyCard',
  component: StudyCard,
  argTypes: {},
} as ComponentMeta<typeof StudyCard>;

const Template: ComponentStory<typeof StudyCard> = (args) => {
  return <StudyCard {...args}></StudyCard>;
};

export const Default = Template.bind({});
