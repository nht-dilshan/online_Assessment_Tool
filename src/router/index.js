import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import UserDetails from '../components/UserDetails.vue'  // Import the UserDetails component
import QuestionList from '../components/QuestionList.vue'
import ResultComponent from '../components/ResultComponent.vue'

const routes = [
  { path: '/', component: HomePage },  // HomePage route
  { path: '/user-details', component: UserDetails },  // UserDetails route
  { path: '/question-list', component: QuestionList },  // QuestionList route
  { path: '/result', component: ResultComponent }  // ResultComponent route
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
