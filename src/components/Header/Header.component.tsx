import React from 'react';
import { Modal } from '../Modal/Modal.component';

import './Header.component.css';

export const Header: React.FC = () => {
  const [isModalOpen, setModalState] = React.useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <div className={'header'}>
      <p>LOGO</p>
      <button onClick={toggleModal}>
        open modal
      </button>
      <Modal
        isOpen={isModalOpen}
        handleClose={toggleModal}
      >
        This is content from Header component!
      </Modal>
    </div>
  );
};