import { Project } from '../types/interfaces/Project';
import {
  BEERS_TASK_GITHUB_URL,
  BEERS_TASK_URL,
  FLAVOURIFY_GITHUB_URL,
  FLAVOURIFY_URL,
  PORTFOLIO_GITHUB_URL,
  PORTFOLIO_URL
} from './URLConstants';

export const FLAVOURIFY: Project = {
  github: FLAVOURIFY_GITHUB_URL,
  url: FLAVOURIFY_URL,
  imageSrc: [
    'projects/flavourify/1.webp',
    'projects/flavourify/2.webp',
    'projects/flavourify/3.webp',
    'projects/flavourify/4.webp',
    'projects/flavourify/5.webp',
    'projects/flavourify/6.webp'
  ],
  name: 'Flavourify',
  description: [
    "I've developed a recipe book app that caters to users' needs (actually, mine needs) by providing a convenient way to maintain collection of recipes. This app also incorporates a user system.",
    "One of the app's standout features is the option to create menus. Users can plan their meals by selecting recipes from available ones. The app then calculates the required ingredients, streamlining the grocery shopping process.",
    'The app was built using React and TypeScript, utilizing popular libraries such as Material UI, React Query, and React Hook Form for enhanced functionality and user experience. Its Mobile First Design ensures a seamless mobile viewing experience, and thanks to Capacitor, it can be easily converted into a mobile app.',
    'Backend is implemented with usage of Spring Boot.'
  ]
};

const PORTFOLIO: Project = {
  github: PORTFOLIO_GITHUB_URL,
  url: PORTFOLIO_URL,
  imageSrc: ['projects/portfolio/1.webp', 'projects/portfolio/2.webp'],
  name: 'Portfolio',
  description: [
    'Modern, simple and elegant responsive portfolio website created in React with as little libraries as possible.',
    'There were actually at least 3 design versions, but only this one met my requirements. I am quite happy of the outcome, especially that I have achieved that with low amount of css and it took me like only 3 hours to complete my vision.',
    'Technologies used: React, TypeScript, SCSS, MaterialUI, Cypress, Webpack, ESLint, Prettier.'
  ]
};

const BEERS_TASK: Project = {
  github: BEERS_TASK_GITHUB_URL,
  url: BEERS_TASK_URL,
  imageSrc: [
    'projects/beers/1.webp',
    'projects/beers/2.webp',
    'projects/beers/3.webp',
    'projects/beers/4.webp'
  ],
  name: 'Beers.',
  description: [
    'This application was created as a recruitment task.',
    'It allows to browse list of beers from public api and check their details. App is fully responsive, provides seamless user experience and is unbreakable and bug-free.',
    'Technologies used: React, TypeScript, SCSS, React Router, Cypress, Webpack, ESLint, Prettier.'
  ]
};

export const PROJECTS: Project[] = [FLAVOURIFY, PORTFOLIO, BEERS_TASK];
