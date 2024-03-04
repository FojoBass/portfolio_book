'use client';

import React, { ReactNode, createContext, useContext } from 'react';

interface AppContextInt {}

const AppContext = createContext<AppContextInt>({});

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const sharedProps: AppContextInt = {};

  return (
    <AppContext.Provider value={sharedProps}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
