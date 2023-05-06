import React from 'react';
import { createPortal } from 'react-dom';

import './modal.css';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  return createPortal(
    <>
      <div className='backdrop' onClick={onClose}></div>
      {children}
    </>,
    document.getElementById('modal-root') as HTMLDivElement
  );
};

export default Modal;
