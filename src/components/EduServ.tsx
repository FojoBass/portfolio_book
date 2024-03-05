import LeafletLayout from '@/LeafletLayout';
import React, { useState } from 'react';
import PageFooter from './PageFooter';
import ExpEduContent from './ExpEduContent';
import { FaRegCalendarDays } from 'react-icons/fa6';
import { eduList, servList } from '@/data';
import { IconType } from 'react-icons';

const EduServ = () => {
  const [isTurn, setIsTurn] = useState(false);

  return (
    <LeafletLayout id='2' isTurn={isTurn}>
      <div className='page front'>
        <h1 className='page_title'>Education</h1>

        {eduList.map((list, index) => (
          <ExpEduContent
            key={list.year + index}
            info={list.info}
            title={list.title}
            year={list.year}
          />
        ))}

        <PageFooter id='2' isEven={false} pageCount={3} />
      </div>

      <div className='page back'>
        <h1 className='page_title'>Services</h1>

        <div className='services_wrapper'>
          {servList.map(({ Icon, title, info }, index) => (
            <ServContent
              key={title + index}
              Icon={Icon}
              info={info}
              title={title}
            />
          ))}
        </div>

        <PageFooter id='2' isEven={true} pageCount={4} />
      </div>
    </LeafletLayout>
  );
};

export default EduServ;

interface ServContentInt {
  Icon: IconType;
  title: string;
  info: string;
}

const ServContent: React.FC<ServContentInt> = ({ Icon, title, info }) => {
  return (
    <div className='serv_box'>
      <span className='icon'>
        <Icon />
      </span>

      <h3 className='title'>{title}</h3>

      <p className='info'>{info}</p>

      <button className='btn'>Read more</button>
    </div>
  );
};
