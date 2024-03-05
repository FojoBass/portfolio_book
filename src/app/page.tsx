'use client';
import Contact from '@/components/Contact';
import EduServ from '@/components/EduServ';
import ProfileExp from '@/components/ProfileExp';
import SkillsProj from '@/components/SkillsProj';
import { useGlobalContext } from '@/context';
import { delay } from '@/helpers';
import React, { useEffect, useRef } from 'react';

const Home = () => {
  const { leafRefs, leftCoverRef, wrapRef, contentRef } = useGlobalContext();

  const hanldeBookOpen = () => {
    if (wrapRef?.current && leftCoverRef?.current && contentRef?.current) {
      wrapRef.current.classList.add('open');
      leftCoverRef.current && leftCoverRef.current.classList.add('turn');

      wrapRef.current.ontransitionend = () => {
        if (wrapRef.current) {
          wrapRef.current.style.transition = 'none';
          wrapRef.current.ontransitionend = null;
        }
      };

      contentRef.current.ontransitionend = () => {
        if (contentRef.current) {
          contentRef.current.style.transition = 'none';
          contentRef.current.ontransitionend = null;
        }
      };
    }
  };

  // todo remove content-wrapper's transition after open
  // todo when closing remove vissibility and then add transition
  // todo add zIndex transition to cover wrapper

  useEffect(() => {
    if (contentRef?.current && leafRefs) {
      const el = contentRef.current;

      const mutObserver = new MutationObserver((mutationList, observer) => {
        for (let mutation of mutationList) {
          if (mutation.attributeName === 'class') {
            const target = mutation.target as HTMLElement;
            if (target.classList.contains('turn')) {
              delay(() => {
                target.style.zIndex = `${Number(target.id) * 10}`;
              }, 500);
            } else {
              delay(() => {
                target.style.zIndex = `${
                  (leafRefs.current.length - Number(target.id)) * 10
                }`;
              }, 500);
            }
          }
        }
      });

      mutObserver.observe(el, { attributes: true, subtree: true });
    }
  }, []);

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

      <div id='content_wrapper' ref={contentRef}>
        <ProfileExp />
        <EduServ />
        <SkillsProj />
        <Contact />
      </div>
    </section>
  );
};

export default Home;