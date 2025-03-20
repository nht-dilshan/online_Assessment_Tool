import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/HomePage.vue';
import UserDetails from '../components/UserDetails.vue';
import QuestionList from '../components/QuestionList.vue';
import ResultComponent from '../components/ResultComponent.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/user-details',
    name: 'user-details',
    component: UserDetails
  },
  {
    path: '/question-list',
    name: 'question-list',
    component: QuestionList
  },
  {
    path: '/result/:totalScore', // Accept totalScore as a route parameter
    name: 'result',
    component: ResultComponent,
    props: true  // Pass the totalScore as a prop to ResultComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
