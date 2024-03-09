import React from 'react';
import { useGlobalContext } from './context';

interface LeafletLayoutInt {
  id: string;
  children: React.ReactNode;
}

const LeafletLayout: React.FC<LeafletLayoutInt> = ({ id, children }) => {
  const { leafRefs } = useGlobalContext();

  const handleAddEl = (el: HTMLDivElement | null) => {
    if (leafRefs?.current) {
      if (!leafRefs.current.find((refEl) => refEl === el) && el)
        leafRefs?.current.push(el);
    }
  };

  return (
    <div className='leaf' id={id} ref={(el) => handleAddEl(el)}>
      {children}
    </div>
  );
};

export default LeafletLayout;
