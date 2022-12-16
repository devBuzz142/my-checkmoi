import Modal, { useModal } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Base/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const { isModalOn, modalRef, openModal } = useModal();

  return (
    <>
      <button onClick={openModal}>Modal</button>
      <Modal {...args} isModalOn={isModalOn} modalRef={modalRef}>
        <div> hello modal </div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
