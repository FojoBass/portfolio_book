'use client';
import LeafletLayout from '@/LeafletLayout';
import React, { useRef } from 'react';

const Home = () => {
  const wrapRef = useRef<null | HTMLDivElement>(null);
  const leftCoverRef = useRef<null | HTMLDivElement>(null);

  const hanldeBookOpen = () => {
    console.log('clciked');

    if (wrapRef.current && leftCoverRef.current) {
      wrapRef.current.classList.add('open');
      leftCoverRef.current && leftCoverRef.current.classList.add('turn');
    }
  };

  return (
    <section id='book'>
      <div className='cover_wrapper' ref={wrapRef}>
        <div className='cover left' ref={leftCoverRef}>
          <h2>John's Portfolio</h2>
          <button className='open_btn' onClick={hanldeBookOpen}>
            Open
          </button>
        </div>
        <div className='cover right'></div>
      </div>

      <div id='content_wrapper'>
        <LeafletLayout id='1'>
          <div className='page front'>Front</div>
          <div className='page back'>Back</div>
        </LeafletLayout>
      </div>
    </section>
  );
};

export default Home;
