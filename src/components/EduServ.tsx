import LeafletLayout from '@/LeafletLayout';
import React from 'react';
import PageFooter from './PageFooter';
import ExpEduContent from './ExpEduContent';
import { eduList, servList } from '@/data';
import { IconType } from 'react-icons';
import { useGlobalContext } from '@/context';

const EduServ = () => {
  const { isWebkit, isMobile } = useGlobalContext();

  return !isMobile ? (
    <LeafletLayout id='2'>
      <div
        suppressHydrationWarning
        className={`page front ${isWebkit ? 'webkit' : 'not_webkit'}`}
      >
        <div className='page_wrapper'>
          <h1 className='page_title'>Education</h1>

          {eduList.map((list, index) => (
            <ExpEduContent
              key={list.year + index}
              info={list.info}
              title={list.title}
              year={list.year}
            />
          ))}
        </div>

        <PageFooter id='2' isEven={false} pageCount={3} />
      </div>

      <div
        suppressHydrationWarning
        className={`page back ${isWebkit ? 'webkit' : 'not_webkit'}`}
      >
        <div className='page_wrapper'>
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
        </div>

        <PageFooter id='2' isEven={true} pageCount={4} />
      </div>
    </LeafletLayout>
  ) : (
    <>
      <LeafletLayout id='3'>
        <div
          suppressHydrationWarning
          className={`page front ${isWebkit ? 'webkit' : 'not_webkit'}`}
        >
          <div className='page_wrapper'>
            <h1 className='page_title'>Education</h1>

            {eduList.map((list, index) => (
              <ExpEduContent
                key={list.year + index}
                info={list.info}
                title={list.title}
                year={list.year}
              />
            ))}
          </div>

          <PageFooter id='3' isEven={false} pageCount={5} />
        </div>

        <div className='page back'></div>
      </LeafletLayout>

      <LeafletLayout id='4'>
        <div
          suppressHydrationWarning
          className={`page front ${isWebkit ? 'webkit' : 'not_webkit'}`}
        >
          <div className='page_wrapper'>
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
          </div>

          <PageFooter id='4' isEven={false} pageCount={7} />
        </div>

        <div className='page back'></div>
      </LeafletLayout>
    </>
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
