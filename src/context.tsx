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
  isWebkit?: boolean;
  isMobile?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  loading?: boolean;
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
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  const sharedProps: AppContextInt = {
    leafRefs,
    leftCoverRef,
    wrapRef,
    contentRef,
    isWebkit,
    isMobile,
    loading,
    setLoading,
  };

  useEffect(() => {
    setIsWebkit(window.navigator.userAgent.toLowerCase().includes('webkit'));
    setIsMobile(window.innerWidth < 800);
  }, []);

  useEffect(() => {
    const modLeafs = [...new Set(leafRefs.current)];
    modLeafs.forEach((el) => {
      const id = Number(el.id);
      el.style.zIndex = `${(modLeafs.length - id) * 10}`;
    });
  }, [loading, isMobile]);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth < 800 && !isMobile) setIsMobile(true);
      if (window.innerWidth >= 800 && isMobile) setIsMobile(false);
    };

    return () => {
      window.onresize = null;
    };
  }, [isMobile]);

  return (
    <AppContext.Provider value={sharedProps}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
