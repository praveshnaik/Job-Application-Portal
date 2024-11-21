import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import HomePage from '../components/HomePage.vue';
import JobDetails from '../components/JobDetails.vue';
import ApplicationForm from '../components/ApplicationForm.vue';

const routes = [
  { path: '/', component: LandingPage, name: 'LandingPage' },
  { path: '/jobs', component: HomePage, name: 'HomePage' },
  { path: '/job/:jobId', component: JobDetails, name: 'JobDetails' },
  { path: '/apply/:jobId:jobTitle', component: ApplicationForm, name: 'JobApplication' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
