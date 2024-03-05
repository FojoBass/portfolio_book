import { useGlobalContext } from '@/context';
import React from 'react';
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx';

interface PageFooterInt {
  pageCount: number;
  id: string;
  isEven: boolean;
}

const PageFooter: React.FC<PageFooterInt> = ({ pageCount, id, isEven }) => {
  const { leafRefs } = useGlobalContext();

  const handleNav = () => {
    if (leafRefs?.current) {
      const el = leafRefs.current.find((el) => el.id === id);
      el?.classList.toggle('turn');
    }
  };

  return (
    <footer>
      <span className='page_num'>{pageCount}</span>

      <button
        className={`nav_btn ${isEven ? 'prev' : 'next'}`}
        data-id={id}
        onClick={handleNav}
      >
        {isEven ? <RxCaretLeft /> : <RxCaretRight />}
      </button>
    </footer>
  );
};

export default PageFooter;
