import Vue from 'vue'
import VueRouter from 'vue-router'
import PostDetail from '../views/Post/PostDetail.vue'
import AlbumDetail from '../views/Album/AlbumDetail.vue'

const authenticate ="";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue')
    },
    {
      path: '/posts',
      name: 'Post',
      component: () => import(/* webpackChunkName: "Post" */ '../views/Post/PostList.vue'),
      beforeEnter:(to, from, next) =>{
        if(to.name !== authenticate){
          alert("sorry gan !");
          next({name: "Home"})
        }else next();
      }
    },
    {
      path: '/posts/:id',
      name: 'Posts',
      component: PostDetail
    },
    {
      path: '/albums',
      name: 'Album',
      component: () => import(/* webpackChunkName: "Album" */ '../views/Album/AlbumList.vue')
    },
    {
      path: '/albums/:id',
      name: 'Albums',
      component: AlbumDetail
    },
    {
      path: '/photos',
      name: 'Photo',
      component: () => import(/* webpackChunkName: "Photo" */ '../views/Photo/PhotoList.vue'),
    },
    {
      path: 'detail/:id',
      name: 'Photos',
      component: () => import(/* webpackChunkName: "Photos" */ '../views/Photo/PhotoDetail.vue'),
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
