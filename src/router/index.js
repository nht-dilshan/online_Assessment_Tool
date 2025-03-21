import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import UserDetails from '../views/UserDetails.vue';
import QuestionList from '../views/QuestionList.vue';
import TimeOut from '../views/TimeOut.vue'; // Import TimeOut page
import TimeIn from '../views/TimeIn.vue'; // Import TimeIn page

import ResultNovice from '../views/ResultNovice.vue';
import ResultSeed from '../views/ResultSeed.vue';
import ResultRisingStar from '../views/ResultRisingStar.vue';
import ResultStar from '../views/ResultStar.vue';
import ResultRockStar from '../views/ResultRockStar.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/user-details',
    name: 'user-details',
    component: UserDetails,
    props: (route) => ({ skillsScore: route.query.skillsScore }),  // Pass skillsScore to UserDetails as a prop
  },
  {
    path: '/question-list',
    name: 'question-list',
    component: QuestionList,
  },
  {
    path: '/timeout',
    name: 'timeout',
    component: TimeOut, // Navigate here when time runs out
  },
  {
    path: '/timein',
    name: 'timein',
    component: TimeIn, // Navigate here if the user finishes on time
  },
  {
    path: '/result/novice/:skillsScore',
    name: 'result-novice',
    component: ResultNovice,
    props: true,
  },
  {
    path: '/result/seed/:skillsScore',
    name: 'result-seed',
    component: ResultSeed,
    props: true,
  },
  {
    path: '/result/rising-star/:skillsScore',
    name: 'result-rising-star',
    component: ResultRisingStar,
    props: true,
  },
  {
    path: '/result/star/:skillsScore',
    name: 'result-star',
    component: ResultStar,
    props: true,
  },
  {
    path: '/result/rock-star/:skillsScore',
    name: 'result-rock-star',
    component: ResultRockStar,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
