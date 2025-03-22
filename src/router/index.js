import { createRouter, createWebHistory } from 'vue-router';

// Import all components
import HomePage from '../views/HomePage.vue';
import UserDetails from '../views/UserDetails.vue';
import QuestionList from '../views/QuestionList.vue';
import TimeOut from '../views/TimeOut.vue'; // TimeOut page
import TimeIn from '../views/TimeIn.vue'; // TimeIn page

// Import result components
import ResultNovice from '../views/ResultNovice.vue';
import ResultSeed from '../views/ResultSeed.vue';
import ResultRisingStar from '../views/ResultRisingStar.vue';
import ResultStar from '../views/ResultStar.vue';
import ResultRockStar from '../views/ResultRockStar.vue';

// Define routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { title: 'Home' }, // Optional: Add meta information for each route
  },
  {
    path: '/user-details',
    name: 'user-details',
    component: UserDetails,
    meta: { title: 'User Details' }, // Optional: Add meta information
  },
  {
    path: '/question-list',
    name: 'question-list',
    component: QuestionList,
    meta: { title: 'Question List' }, // Optional: Add meta information
  },
  {
    path: '/timeout',
    name: 'timeout',
    component: TimeOut,
    meta: { title: 'Time Out' }, // Optional: Add meta information
  },
  {
    path: '/timein',
    name: 'timein',
    component: TimeIn,
    meta: { title: 'Time In' }, // Optional: Add meta information
  },
  // Result routes
  {
    path: '/result/novice',
    name: 'result-novice',
    component: ResultNovice,
    meta: { title: 'Novice Result' }, // Optional: Add meta information
  },
  {
    path: '/result/seed',
    name: 'result-seed',
    component: ResultSeed,
    meta: { title: 'Seed Result' }, // Optional: Add meta information
  },
  {
    path: '/result/rising-star',
    name: 'result-rising-star',
    component: ResultRisingStar,
    meta: { title: 'Rising Star Result' }, // Optional: Add meta information
  },
  {
    path: '/result/star',
    name: 'result-star',
    component: ResultStar,
    meta: { title: 'Star Result' }, // Optional: Add meta information
  },
  {
    path: '/result/rock-star',
    name: 'result-rock-star',
    component: ResultRockStar,
    meta: { title: 'Rock Star Result' }, // Optional: Add meta information
  },
  // Optional: Add a catch-all route for 404 errors
  {
    path: '/:pathMatch(.*)*', // Matches any route that doesn't exist
    redirect: '/', // Redirect to home or a custom 404 page
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

// Optional: Add a global navigation guard to update the page title
router.beforeEach((to, from, next) => {
  const title = to.meta.title || 'Online Assessment Tool'; // Default title
  document.title = title; // Update the document title
  next(); // Proceed with the navigation
});

export default router;
