import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TestView from '@/views/TestView.vue'
import Detail from '@/views/Detail.vue'
import Pokedex from '@/views/Pokedex.vue'
import Types from '@/views/Types.vue'
import TypesDetail from '@/views/TypesDetail.vue'
import TalentsDetail from '@/views/TalentsDetail.vue'
import Talents from '@/views/Talents.vue'
import Moves from '@/views/Moves.vue'
import MovesDetail from '@/views/MovesDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },*/
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: Pokedex,
      props: true,
    },
    {
      path: '/pokemon/:name',
      name: 'pokemon',
      component: Detail,
      props: true,
    },
    {
      path: '/types',
      name: 'types',
      component: Types,
      props: true,
    },
    {
      path: '/type/:name',
      name: 'type',
      component: TypesDetail,
      props: true,
    },
    {
      path: '/abilities',
      name: 'abilities',
      component: Talents,
      props: true,
    },
    {
      path: '/ability/:name',
      name: 'ability',
      component: TalentsDetail,
      props: true,
    },
    {
      path: '/moves',
      name: 'moves',
      component: Moves,
      props: true,
    },
    {
      path: '/move/:name',
      name: 'move',
      component: MovesDetail,
      props: true,
    },
  ],
})

export default router
