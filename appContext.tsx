import React, { createContext, useState, ReactNode } from "react";

interface AppContextType {
  modalIsOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navResOpen: boolean;
  setNavResOpen: (value: boolean) => void;
}

const Contexto = createContext<AppContextType | undefined>(undefined);

interface ContextoProviderProps {
  children: ReactNode;
}

const ContextoProvider: React.FC<ContextoProviderProps> = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [navResOpen, setNavResOpen] = useState<boolean>(false);
  
  return (
    <Contexto.Provider
      value={{ modalIsOpen, setIsOpen, navResOpen, setNavResOpen }}
    >
      {children}
    </Contexto.Provider>
  );
};

export { Contexto, ContextoProvider };