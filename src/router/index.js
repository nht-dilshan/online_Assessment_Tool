import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/HomePage.vue';
import UserDetails from '../components/UserDetails.vue';
import QuestionList from '../components/QuestionList.vue';
import ResultComponent from '../components/ResultComponent.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/user-details', component: UserDetails },
  { path: '/question-list', component: QuestionList },
  {
    path: '/result',
    name: 'result',
    component: ResultComponent,
    props: true  // Allow route params to be passed as props
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
