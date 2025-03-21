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
    // Removed skillsScore from URL params, this is now managed via Vuex
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
  // Removed :skillsScore from the URL parameters, it will be handled in Vuex
  {
    path: '/result/novice',
    name: 'result-novice',
    component: ResultNovice,
  },
  {
    path: '/result/seed',
    name: 'result-seed',
    component: ResultSeed,
  },
  {
    path: '/result/rising-star',
    name: 'result-rising-star',
    component: ResultRisingStar,
  },
  {
    path: '/result/star',
    name: 'result-star',
    component: ResultStar,
  },
  {
    path: '/result/rock-star',
    name: 'result-rock-star',
    component: ResultRockStar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
