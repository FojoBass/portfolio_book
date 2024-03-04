import React from 'react';
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx';

interface PageFooterInt {
  pageCount: number;
  id: string;
  isEven: boolean;
}

const PageFooter: React.FC<PageFooterInt> = ({ pageCount, id, isEven }) => {
  return (
    <footer>
      <span className='page'>{pageCount}</span>

      <button className={`nav_btn ${isEven ? 'prev' : 'next'}`} data-id={id}>
        {isEven ? <RxCaretLeft /> : <RxCaretRight />}
      </button>
    </footer>
  );
};

export default PageFooter;
