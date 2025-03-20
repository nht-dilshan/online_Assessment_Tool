import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/HomePage.vue';
import UserDetails from '../components/UserDetails.vue';
import QuestionList from '../components/QuestionList.vue';
import TimeOut from '../components/TimeOut.vue'; // Import TimeOut page
import TimeIn from '../components/TimeIn.vue'; // Import TimeIn page

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
