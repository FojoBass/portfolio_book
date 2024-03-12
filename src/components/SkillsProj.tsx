import LeafletLayout from '@/LeafletLayout';
import React from 'react';
import PageFooter from './PageFooter';
import { SkillInt, backSkills, designSkills, frontSkils } from '@/data';
import Image from 'next/image';
import projImg from '../../public/images/proj_img.jpg';
import { RiExternalLinkLine } from 'react-icons/ri';
import { useGlobalContext } from '@/context';

const SkillsProj = () => {
  const { isWebkit, isMidScreen } = useGlobalContext();

  return !isMidScreen ? (
    <LeafletLayout id='3'>
      <div className={`page front ${isWebkit ? 'webkit' : 'not_webkit'}`}>
        <div className='page_wrapper'>
          <h1 className='page_title'>Skills</h1>
          <div className='skills_wrapper'>
            <div className='skill_wrapper'>
              <h3>Front-End</h3>

              <div className='skills'>
                {frontSkils.map((skill) => (
                  <Skill skill={skill} key={skill.title} />
                ))}
              </div>
            </div>
            <div className='skill_wrapper'>
              <h3>Back-End</h3>

              <div className='skills'>
                {backSkills.map((skill) => (
                  <Skill skill={skill} key={skill.title} />
                ))}
              </div>
            </div>
            <div className='skill_wrapper'>
              <h3>UI/UX Design</h3>

              <div className='skills'>
                {designSkills.map((skill) => (
                  <Skill skill={skill} key={skill.title} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <PageFooter id='3' isEven={false} pageCount={5} />
      </div>

      <div className={`page back proj ${isWebkit ? 'webkit' : 'not_webkit'}`}>
        <div className='page_wrapper'>
          <h1 className='page_title'>Latest Projects</h1>

          <div className='img_wrapper'>
            <Image src={projImg} alt='project img' />
          </div>

          <div className='proj_title_wrapper'>
            <h3 className='title'>Project Name</h3>

            <button className='preview_btn'>
              Live Preview{' '}
              <span className='icon'>
                <RiExternalLinkLine />
              </span>{' '}
            </button>
          </div>

          <div className='info_wrapper'>
            <h4>Tech Used:</h4>
            <p className='info'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              soluta molestias qui suscipit totam aut. Repellendus impedit
              ducimus minima blanditiis deserunt quae facilis praesentium,
              aliquam ullam necessitatibus, quaerat exercitationem rerum!
            </p>
          </div>

          <div className='btns_wrapper'>
            <button className='cta_btn'>Source Code</button>
            <button className='btn'>More Projects</button>
          </div>
        </div>

        <PageFooter id='3' isEven={true} pageCount={6} />
      </div>
    </LeafletLayout>
  ) : (
    <>
      <LeafletLayout id='5'>
        <div className={`page front ${isWebkit ? 'webkit' : 'not_webkit'}`}>
          <div className='page_wrapper'>
            <h1 className='page_title'>Skills</h1>
            <div className='skills_wrapper'>
              <div className='skill_wrapper'>
                <h3>Front-End</h3>

                <div className='skills'>
                  {frontSkils.map((skill) => (
                    <Skill skill={skill} key={skill.title} />
                  ))}
                </div>
              </div>
              <div className='skill_wrapper'>
                <h3>Back-End</h3>

                <div className='skills'>
                  {backSkills.map((skill) => (
                    <Skill skill={skill} key={skill.title} />
                  ))}
                </div>
              </div>
              <div className='skill_wrapper'>
                <h3>UI/UX Design</h3>

                <div className='skills'>
                  {designSkills.map((skill) => (
                    <Skill skill={skill} key={skill.title} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <PageFooter id='5' isEven={false} pageCount={9} />
        </div>

        <div className='page back'></div>
      </LeafletLayout>

      <LeafletLayout id='6'>
        <div
          className={`page front proj ${isWebkit ? 'webkit' : 'not_webkit'}`}
        >
          <div className='page_wrapper'>
            <h1 className='page_title'>Latest Projects</h1>

            <div className='img_wrapper'>
              <Image src={projImg} alt='project img' />
            </div>

            <div className='proj_title_wrapper'>
              <h3 className='title'>Project Name</h3>

              <button className='preview_btn'>
                Live Preview{' '}
                <span className='icon'>
                  <RiExternalLinkLine />
                </span>{' '}
              </button>
            </div>

            <div className='info_wrapper'>
              <h4>Tech Used:</h4>
              <p className='info'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt soluta molestias qui suscipit totam aut. Repellendus
                impedit ducimus minima blanditiis deserunt quae facilis
                praesentium, aliquam ullam necessitatibus, quaerat
                exercitationem rerum!
              </p>
            </div>

            <div className='btns_wrapper'>
              <button className='cta_btn'>Source Code</button>
              <button className='btn'>More Projects</button>
            </div>
          </div>

          <PageFooter id='6' isEven={false} pageCount={11} />
        </div>

        <div className='page back'></div>
      </LeafletLayout>
    </>
  );
};

export default SkillsProj;

interface SkillPropInt {
  skill: SkillInt;
}

const Skill: React.FC<SkillPropInt> = ({ skill: { Icon, title, years } }) => {
  return (
    <div className='skill'>
      <div className='content'>
        <span className='icon'>
          <Icon />
        </span>
        <p className='title'>{title}</p>
      </div>
      <p className='exp'>{years}Y</p>
    </div>
  );
};
