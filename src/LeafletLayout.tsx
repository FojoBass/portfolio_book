import React from 'react';

interface LeafletLayoutInt {
  id: string;
  children: React.ReactNode;
}

const LeafletLayout: React.FC<LeafletLayoutInt> = ({ id, children }) => {
  return (
    <div className='leaf' id={id}>
      {children}
    </div>
  );
};

export default LeafletLayout;
