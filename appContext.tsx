import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {
  navResOpen: boolean;
  setNavResOpen: (value: boolean) => void;
}

const Contexto = createContext<AppContextType | undefined>(undefined);

interface ContextoProviderProps {
  children: ReactNode;
}

const ContextoProvider: React.FC<ContextoProviderProps> = ({ children }) => {
  const [navResOpen, setNavResOpen] = useState<boolean>(false);

  return <Contexto.Provider value={{ navResOpen, setNavResOpen }}>{children}</Contexto.Provider>;
};

export { Contexto, ContextoProvider };
