import React from 'react';

interface ModalConfig {
  close: () => void;
}

export const ModalContext = React.createContext<ModalConfig | null>(null);

export const useModalContext = () => {
  const modalConfig = React.useContext(ModalContext);

  if (modalConfig === null || modalConfig === undefined) {
    throw new Error('useModalContext must be used in react-modal-hp Modal');
  }

  return modalConfig;
};
