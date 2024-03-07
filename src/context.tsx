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
  isMidScreen?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  loading?: boolean;
  isMobile?: boolean;
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
  const [isMidScreen, setIsMidScreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  const [isMobile, setIsMobile] = useState(false);

  const sharedProps: AppContextInt = {
    leafRefs,
    leftCoverRef,
    wrapRef,
    contentRef,
    isWebkit,
    isMidScreen,
    loading,
    setLoading,
    isMobile,
  };

  useEffect(() => {
    setIsWebkit(window.navigator.userAgent.toLowerCase().includes('webkit'));
    setIsMidScreen(window.innerWidth < 800);

    setIsMobile(
      !!toMatch.find((toMatchItem) => navigator.userAgent.match(toMatchItem))
    );
  }, []);

  useEffect(() => {
    const modLeafs = [...new Set(leafRefs.current)];
    modLeafs.forEach((el) => {
      const id = Number(el.id);
      el.style.zIndex = `${(modLeafs.length - id) * 10}`;
    });
  }, [loading, isMidScreen]);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth < 800 && !isMidScreen) setIsMidScreen(true);
      if (window.innerWidth >= 800 && isMidScreen) setIsMidScreen(false);
    };

    return () => {
      window.onresize = null;
    };
  }, [isMidScreen]);

  return (
    <AppContext.Provider value={sharedProps}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
