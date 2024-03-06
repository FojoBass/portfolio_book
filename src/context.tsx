'use client';

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface AppContextInt {
  leafRefs?: React.MutableRefObject<HTMLDivElement[]>;
  leftCoverRef?: React.MutableRefObject<null | HTMLDivElement>;
  wrapRef?: React.MutableRefObject<null | HTMLDivElement>;
  contentRef?: React.MutableRefObject<null | HTMLDivElement>;
  isWebkit?: React.SetStateAction<boolean>;
}

const AppContext = createContext<AppContextInt>({});

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const leafRefs = useRef<HTMLDivElement[]>([]);
  const leftCoverRef = useRef<null | HTMLDivElement>(null);
  const wrapRef = useRef<null | HTMLDivElement>(null);
  const contentRef = useRef<null | HTMLDivElement>(null);
  const [isWebkit, setIsWebkit] = useState(false);

  const sharedProps: AppContextInt = {
    leafRefs,
    leftCoverRef,
    wrapRef,
    contentRef,
    isWebkit,
  };

  useEffect(() => {
    leafRefs.current.forEach((el) => {
      const id = Number(el.id);
      el.style.zIndex = `${(leafRefs.current.length - id) * 10}`;
    });

    setIsWebkit(window.navigator.userAgent.toLowerCase().includes('webkit'));
  }, []);

  return (
    <AppContext.Provider value={sharedProps}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
