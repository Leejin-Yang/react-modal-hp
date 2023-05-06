import React from 'react';
import { createPortal } from 'react-dom';

import { ModalContext } from '../contexts/ModalContext';

import './modal.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  position?: 'bottom';
  animation?: boolean;
  portal: Element;
}

const Modal = ({
  open,
  onClose,
  position = 'bottom',
  animation,
  children,
  portal,
}: React.PropsWithChildren<ModalProps>) => {
  const [isCloseReady, setIsCloseReady] = React.useState(false);

  const closeAnimated = React.useCallback(() => {
    setIsCloseReady(true);

    const timer = setTimeout(() => {
      setIsCloseReady(false);
      onClose();
      clearTimeout(timer);
    }, 200);
  }, []);

  const closeModal = React.useMemo(
    () => (animation ? closeAnimated : onClose),
    [animation, onClose]
  );

  const modalConfig = React.useMemo(
    () => ({
      close: closeModal,
    }),
    [onClose]
  );

  const ModalBase = (
    <ModalContext.Provider value={modalConfig}>
      {open && (
        <>
          <div className='modal-backdrop' onClick={closeModal}></div>
          <main
            className={`modal-${position} ${
              animation ? `animation-${position}` : ''
            } ${animation && isCloseReady ? 'close' : ''}`}
          >
            {children}
          </main>
        </>
      )}
    </ModalContext.Provider>
  );

  return createPortal(ModalBase, portal);
};

export default Modal;
