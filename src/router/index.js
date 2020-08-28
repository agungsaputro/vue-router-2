import Vue from 'vue'
import VueRouter from 'vue-router'


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
      component: () => import(/* webpackChunkName: "Posts" */ '../views/Post/PostDetail.vue')
    },
    {
      path: '/albums',
      component: () => import(/* webpackChunkName: "Album" */ '../views/Album/AlbumList.vue'),
      children:[
        {
          path:"",
          name: 'Album',
          component: () => import(/* webpackChunkName: "Album" */ '../views/Album/AlbumItem.vue'),
        },
        {
          path: 'detail/:id',
          name: 'Albums',
          component: () => import(/* webpackChunkName: "Albums" */ '../views/Album/AlbumDetail.vue')
        },
      ]
    },
    {
      path: '/photos',
      component: () => import(/* webpackChunkName: "Photo" */ '../views/Photo/PhotoList.vue'),
      children:[
        {
          path:"",
          name: 'Photo',
          component: () => import(/* webpackChunkName: "Photo" */ '../views/Photo/PhotoItem.vue'),
        },
        {
          path: 'detail/:id',
          name: 'Photos',
          component: () => import(/* webpackChunkName: "Photos" */ '../views/Photo/PhotoDetail.vue'),
        },
      ]
    },
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
