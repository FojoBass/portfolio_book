import React from 'react';
import { useGlobalContext } from './context';

interface LeafletLayoutInt {
  id: string;
  children: React.ReactNode;
  isTurn: boolean;
}

const LeafletLayout: React.FC<LeafletLayoutInt> = ({
  id,
  children,
  isTurn,
}) => {
  const { leafRefs } = useGlobalContext();

  return (
    <div
      className={`leaf ${isTurn ? 'turn' : ''}`}
      id={id}
      ref={(el) => el && leafRefs?.current.push(el)}
    >
      {children}
    </div>
  );
};

export default LeafletLayout;
