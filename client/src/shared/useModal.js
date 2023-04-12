import { useState } from 'react';

const useModal = function useModal() {
  const [showModal, setShowModal] = useState(false);

  return {
    isOpen: showModal,
    onOpen: () => {
      document.body.classList.add('stop-scrolling');
      setShowModal(true);
    },
    onClose: () => {
      document.body.classList.remove('stop-scrolling');
      setShowModal(false);
    }
  };
};

export default useModal;
