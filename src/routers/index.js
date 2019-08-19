import Vue from 'vue';
import VueRouter from 'vue-router';
import Rooms from '../pages/Rooms';
import RoomInfo from '../pages/RoomInfo';
import TestPage from '../pages/TestPage';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'Home',
      path: '',
      component: Rooms,
    },
    {
      name: 'RoomInfo',
      path: '/room/:id',
      component: RoomInfo,
    },
    {
      name: 'TestPage',
      path: '/testpage',
      component: TestPage,
    },
  ],
});
