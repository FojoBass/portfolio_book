import { useGlobalContext } from '@/context';
import React from 'react';
import { RxCaretRight, RxCaretLeft } from 'react-icons/rx';

interface PageFooterInt {
  pageCount: number;
  id: string;
  isEven: boolean;
  isLastPage?: boolean;
}

// * isLastPage is only needed for mobile

const PageFooter: React.FC<PageFooterInt> = ({
  pageCount,
  id,
  isEven,
  isLastPage,
}) => {
  const { leafRefs, isMobile } = useGlobalContext();

  const handleNav = () => {
    if (leafRefs?.current) {
      const el = leafRefs.current.find((el) => el.id === id);
      el?.classList.toggle('turn');
    }
  };

  const handlePrevNav = () => {
    if (leafRefs?.current) {
      const el = leafRefs.current.find((el) => el.id === id);
      el?.previousElementSibling?.classList.toggle('turn');
    }
  };

  return (
    <footer>
      <span className='page_num'>{pageCount}</span>

      {!isMobile ? (
        <button
          className={`nav_btn ${isEven ? 'prev' : 'next'}`}
          data-id={id}
          onClick={handleNav}
        >
          {isEven ? <RxCaretLeft /> : isLastPage || <RxCaretRight />}
        </button>
      ) : id !== '1' ? (
        !isLastPage ? (
          <>
            <button
              className='nav_btn prev'
              data-id={id}
              onClick={handlePrevNav}
            >
              <RxCaretLeft />{' '}
            </button>
            <button className='nav_btn next' data-id={id} onClick={handleNav}>
              <RxCaretRight />
            </button>
          </>
        ) : (
          <button className='nav_btn prev' data-id={id} onClick={handlePrevNav}>
            <RxCaretLeft />{' '}
          </button>
        )
      ) : (
        <button className='nav_btn next' data-id={id} onClick={handleNav}>
          <RxCaretRight />
        </button>
      )}
    </footer>
  );
};

export default PageFooter;
