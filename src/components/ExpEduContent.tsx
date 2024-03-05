import React from 'react';
import { FaRegCalendarDays } from 'react-icons/fa6';

interface ExpEduContentInt {
  year: string;
  title: string;
  info: string;
}

const ExpEduContent: React.FC<ExpEduContentInt> = ({ year, title, info }) => {
  return (
    <div className='item'>
      <div className='date'>
        <span className='icon'>
          <FaRegCalendarDays />
        </span>
        {year}
      </div>

      <h3 className='title'>{title}</h3>

      <p className='info'>{info}</p>
    </div>
  );
};

export default ExpEduContent;
