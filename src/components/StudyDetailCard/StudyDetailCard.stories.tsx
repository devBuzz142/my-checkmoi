import StudyDetailCard from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/StudyDetailCard',
  component: StudyDetailCard,
  argTypes: {},
} as ComponentMeta<typeof StudyDetailCard>;

const Template: ComponentStory<typeof StudyDetailCard> = (args) => {
  return <StudyDetailCard {...args}></StudyDetailCard>;
};

export const Default = Template.bind({});
