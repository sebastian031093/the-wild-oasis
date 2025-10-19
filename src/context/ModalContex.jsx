import { createContext, useContext, useState } from 'react';

const ModalContex = createContext();

function ModalProvider({ children }) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContex.Provider
      value={{
        close,
        open,
        openName,
      }}
    >
      {children}
    </ModalContex.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContex);
  if (context === undefined) throw new Error('QuizContext was used outside of the QuizProvider');
  return context;
}

export { ModalProvider, useModal };
