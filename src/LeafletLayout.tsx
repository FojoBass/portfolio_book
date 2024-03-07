import React from 'react';
import { useGlobalContext } from './context';

interface LeafletLayoutInt {
  id: string;
  children: React.ReactNode;
}

const LeafletLayout: React.FC<LeafletLayoutInt> = ({ id, children }) => {
  const { leafRefs } = useGlobalContext();

  return (
    <div
      className='leaf'
      id={id}
      ref={(el) => el && leafRefs?.current.push(el)}
    >
      {children}
    </div>
  );
};

export default LeafletLayout;
