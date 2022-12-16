import Modal from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Base/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isModalOn, setIsModalOn] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsModalOn(!isModalOn);
        }}
      >
        Modal
      </button>
      <Modal {...args} isModalOn={isModalOn}>
        <div> hello modal </div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
