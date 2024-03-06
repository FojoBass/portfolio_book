import { IconType } from 'react-icons';
import { FaHtml5, FaReact, FaSearch } from 'react-icons/fa';
import {
  FaCode,
  FaCss3,
  FaFigma,
  FaJava,
  FaJs,
  FaNode,
  FaPaintbrush,
  FaPhp,
  FaPython,
} from 'react-icons/fa6';
import { IoStatsChart } from 'react-icons/io5';
import { SiSass, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export interface SkillInt {
  Icon: IconType;
  title: string;
  years: string;
}

export const expList = [
  {
    year: '2020-2021',
    title: 'Web Developer - Company',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non qui obcaecati earum a voluptatum odit consectetur harum velit architecto obcaecati ',
  },
  {
    year: '2021-2022',
    title: 'Web Developer - Company',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non qui obcaecati earum a voluptatum odit consectetur harum velit architecto obcaecati ',
  },
  {
    year: '2022-Present',
    title: 'Web Developer - Company',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non qui obcaecati earum a voluptatum odit consectetur harum velit architecto obcaecati ',
  },
];

export const eduList = [
  {
    year: '2014-2019',
    title: 'Bachelor Degree - Lorem',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non qui obcaecati earum a voluptatum odit consectetur harum velit architecto obcaecati ',
  },
  {
    year: '2021-2022',
    title: 'Master Degree - Lorem',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non qui obcaecati earum a voluptatum odit consectetur harum velit architecto obcaecati ',
  },
  {
    year: '2022-Present',
    title: 'Master Degree - Lorem',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non qui obcaecati earum a voluptatum odit consectetur harum velit architecto obcaecati ',
  },
];

export const servList = [
  {
    Icon: FaCode,
    title: 'Web Development',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    Icon: FaPaintbrush,
    title: 'Creative Design',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    Icon: IoStatsChart,
    title: 'Digital Marketing',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    Icon: FaSearch,
    title: 'SEO',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
];

export const frontSkils: SkillInt[] = [
  {
    Icon: FaHtml5,
    title: 'HTML',
    years: '8',
  },
  {
    Icon: FaCss3,
    title: 'CSS',
    years: '8',
  },
  {
    Icon: FaJs,
    title: 'JS',
    years: '7',
  },
  {
    Icon: SiTypescript,
    title: 'TS',
    years: '7',
  },
  {
    Icon: FaReact,
    title: 'React',
    years: '7',
  },
  {
    Icon: TbBrandNextjs,
    title: 'NexJs',
    years: '7',
  },
  {
    Icon: SiSass,
    title: 'SCSS',
    years: '7',
  },
];

export const backSkills: SkillInt[] = [
  {
    Icon: FaPython,
    title: 'Python',
    years: '5',
  },
  {
    Icon: FaJava,
    title: 'Java',
    years: '4',
  },
  {
    Icon: FaPhp,
    title: 'PHP',
    years: '6',
  },
  {
    Icon: FaNode,
    title: 'Node',
    years: '4',
  },
];

export const designSkills: SkillInt[] = [
  { Icon: FaFigma, title: 'Figma', years: '3' },
];
