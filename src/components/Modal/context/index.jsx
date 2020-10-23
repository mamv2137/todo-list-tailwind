import React, { useState, createContext } from 'react';

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({})

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setData({})
    setIsOpen(false);
  }

  const handleModalCreator = item => {
    setData(item)
    openModal();
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        handleModalCreator,
        data
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };