import LeafletLayout from '@/LeafletLayout';
import React, { useState } from 'react';
import PageFooter from './PageFooter';
import { FaUser } from 'react-icons/fa';
import { useGlobalContext } from '@/context';
import { delay } from '@/helpers';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const {
    leafRefs,
    leftCoverRef,
    wrapRef,
    contentRef,
    isWebkit,
    isMidScreen,
    setDisablePointer,
  } = useGlobalContext();

  const handleClick = () => {
    if (leafRefs) {
      const recur = (index: number) => {
        if (index < 0) return;

        const el = leafRefs.current[index];
        delay(() => {
          el.classList.remove('turn');
          recur(index - 1);
        }, 200);
      };

      recur(leafRefs.current.length - 1);
    }
  };

  const handleClose = () => {
    if (
      leafRefs &&
      leftCoverRef?.current &&
      wrapRef?.current &&
      contentRef?.current
    ) {
      const recur = (index: number) => {
        if (index < 0) {
          if (wrapRef.current && leftCoverRef.current && contentRef.current) {
            const wrapEl = wrapRef.current;
            const leftCoverEl = leftCoverRef.current;
            const contentEl = contentRef.current;

            leftCoverEl.classList.remove('turn');
            leftCoverEl.style.transform =
              'rotateX(0deg) rotateY(0deg) translateZ(2px)';
            setDisablePointer && setDisablePointer(true);

            delay(() => {
              wrapEl.style.zIndex = '100';
            }, 200 * leafRefs.current.length);

            leftCoverEl.ontransitionend = () => {
              leftCoverEl.removeAttribute('style');
              contentEl.style.transition =
                'opacity ease 0.1s 300ms, transform ease 10ms 0.8s';
              wrapEl.style.transition = 'z-index 10ms 2.5s';

              delay(() => {
                wrapEl.classList.remove('open');
                wrapEl.removeAttribute('style');
              }, 500);

              delay(() => {
                contentEl.removeAttribute('style');
              }, 1500);

              delay(() => {
                setDisablePointer && setDisablePointer(false);
              }, 3000);

              leftCoverEl.ontransitionend = null;
            };
          }
          return;
        }

        if (index === 0) {
          if (contentRef.current) {
            const contentEl = contentRef.current;
            delay(() => {
              contentEl.style.transform = 'translateX(4px)';
            }, 200);

            delay(() => {
              contentEl.style.display = 'none';
            }, 2500);
          }
        }

        const el = leafRefs.current[index];
        delay(() => {
          el.classList.remove('turn');

          recur(index - 1);
        }, 200);
      };

      recur(leafRefs.current.length - 1);
    }
  };

  return !isMidScreen ? (
    <LeafletLayout id='4'>
      <div
        suppressHydrationWarning
        className={`page front ${isWebkit ? 'webkit' : 'not_webkit'}`}
      >
        <div className='page_wrapper'>
          <h1 className='page_title'>Contact Me</h1>

          <form action='' onSubmit={(e) => e.preventDefault()}>
            <input
              type='text'
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name=''
              id=''
              cols={30}
              rows={10}
              placeholder='Your Message'
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>

            <button className='cta_btn'>Send Message</button>
          </form>
        </div>

        <PageFooter id='4' isEven={false} pageCount={7} />
      </div>

      <div
        suppressHydrationWarning
        className={`page back end ${isWebkit ? 'webkit' : 'not_webkit'}`}
      >
        <div className='page_wrapper'>
          <p className='text'>
            The End
            <button className='close_btn btn' onClick={handleClose}>
              Close
            </button>
          </p>

          <button className='to_about' onClick={handleClick}>
            <span className='icon'>
              <FaUser />
            </span>
            <p>About</p>
          </button>
        </div>

        <PageFooter id='4' isEven={true} pageCount={8} />
      </div>
    </LeafletLayout>
  ) : (
    <>
      <LeafletLayout id='7'>
        <div
          suppressHydrationWarning
          className={`page front ${isWebkit ? 'webkit' : 'not_webkit'}`}
        >
          <div className='page_wrapper'>
            <h1 className='page_title'>Contact Me</h1>

            <form action='' onSubmit={(e) => e.preventDefault()}>
              <input
                type='text'
                placeholder='Full Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='text'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name=''
                id=''
                cols={30}
                rows={10}
                placeholder='Your Message'
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>

              <button className='cta_btn'>Send Message</button>
            </form>
          </div>

          <PageFooter id='7' isEven={false} pageCount={13} />
        </div>

        <div className='page back'></div>
      </LeafletLayout>

      <LeafletLayout id='8'>
        <div
          suppressHydrationWarning
          className={`page front end ${isWebkit ? 'webkit' : 'not_webkit'}`}
        >
          <div className='page_wrapper'>
            <p className='text'>
              The End
              <button className='close_btn btn' onClick={handleClose}>
                Close
              </button>
            </p>

            <button className='to_about' onClick={handleClick}>
              <span className='icon'>
                <FaUser />
              </span>
              <p>About</p>
            </button>
          </div>

          <PageFooter id='8' isEven={false} pageCount={15} isLastPage={true} />
        </div>

        <div className='pages back'></div>
      </LeafletLayout>
    </>
  );
};

export default Contact;
