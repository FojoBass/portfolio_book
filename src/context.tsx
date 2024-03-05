'use client';

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
} from 'react';

interface AppContextInt {
  leafRefs?: React.MutableRefObject<HTMLDivElement[]>;
  leftCoverRef?: React.MutableRefObject<null | HTMLDivElement>;
  wrapRef?: React.MutableRefObject<null | HTMLDivElement>;
  contentRef?: React.MutableRefObject<null | HTMLDivElement>;
}

const AppContext = createContext<AppContextInt>({});

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const leafRefs = useRef<HTMLDivElement[]>([]);
  const leftCoverRef = useRef<null | HTMLDivElement>(null);
  const wrapRef = useRef<null | HTMLDivElement>(null);
  const contentRef = useRef<null | HTMLDivElement>(null);

  const sharedProps: AppContextInt = {
    leafRefs,
    leftCoverRef,
    wrapRef,
    contentRef,
  };

  useEffect(() => {
    leafRefs.current.forEach((el) => {
      const id = Number(el.id);
      el.style.zIndex = `${(leafRefs.current.length - id) * 10}`;
    });
  }, []);

  return (
    <AppContext.Provider value={sharedProps}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
