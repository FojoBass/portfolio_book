import LeafletLayout from '@/LeafletLayout';
import Image from 'next/image';
import React, { useState } from 'react';
import profImg from '../../public/images/cat.jpg';
import PageFooter from './PageFooter';
import ExpEduContent from './ExpEduContent';
import { expList } from '@/data';
import { useGlobalContext } from '@/context';

const ProfileExp = () => {
  const [isTurn, setIsTurn] = useState(false);
  const { isWebkit } = useGlobalContext();

  return (
    <LeafletLayout id='1' isTurn={isTurn}>
      <div
        suppressHydrationWarning
        className={`page front profile ${isWebkit ? 'webkit' : 'not_webkit'}`}
      >
        <div className='page_wrapper'>
          <div className='img_wrapper'>
            <Image src={profImg} alt='Profile image' />
          </div>

          <h1 className='name'>John Doe</h1>
          <h3 className='title'>Web Developer</h3>

          <p className='about'>
            Hi, I am John Doe, a Web Developer. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eum atque minus consequuntur, officia
            deserunt aperiam culpa unde suscipit quo necessitatibus! Also, in
            the Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci ipsa ratione a officiis facere incidunt.
          </p>

          <div className='btns_wrapper'>
            <button className='cta_btn'>Download CV</button>
            <button className='btn'>Contact me</button>
          </div>
        </div>

        <PageFooter id='1' isEven={false} pageCount={1} />
      </div>

      <div
        suppressHydrationWarning
        className={`page back ${isWebkit ? 'webkit' : 'not_webkit'}`}
      >
        <div className='page_wrapper'>
          <h1 className='page_title'>Work Experience</h1>

          {expList.map((list, index) => (
            <ExpEduContent
              key={list.year + index}
              info={list.info}
              title={list.title}
              year={list.year}
            />
          ))}
        </div>

        <PageFooter id='1' isEven={true} pageCount={2} />
      </div>
    </LeafletLayout>
  );
};

export default ProfileExp;
