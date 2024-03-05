import LeafletLayout from '@/LeafletLayout';
import Image from 'next/image';
import React, { useState } from 'react';
import profImg from '../../public/images/cat.jpg';
import PageFooter from './PageFooter';
import ExpEduContent from './ExpEduContent';
import { expList } from '@/data';

const ProfileExp = () => {
  const [isTurn, setIsTurn] = useState(false);

  return (
    <LeafletLayout id='1' isTurn={isTurn}>
      <div className='page front profile'>
        <div className='img_wrapper'>
          <Image src={profImg} alt='Profile image' />
        </div>

        <h1 className='name'>John Doe</h1>
        <h3 className='title'>Web Developer</h3>

        <p className='about'>
          Hi, I am John Doe, a Web Developer. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eum atque minus consequuntur, officia
          deserunt aperiam culpa unde suscipit quo necessitatibus! Also, in the
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          ipsa ratione a officiis facere incidunt.
        </p>

        <div className='btns_wrapper'>
          <button className='cta_btn'>Download CV</button>
          <button className='btn'>Contact me</button>
        </div>

        <PageFooter id='1' isEven={false} pageCount={1} />
      </div>

      <div className='page back'>
        <h1 className='page_title'>Work Experience</h1>

        {expList.map((list, index) => (
          <ExpEduContent
            key={list.year + index}
            info={list.info}
            title={list.title}
            year={list.year}
          />
        ))}

        <PageFooter id='1' isEven={true} pageCount={2} />
      </div>
    </LeafletLayout>
  );
};

export default ProfileExp;
