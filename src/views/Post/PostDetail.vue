<template>
  <div>
    <div class="content float-left w-8/12 align-middle">
         <div class="m-6">
          <img src="../../assets/logo.png" alt="logo" class="text-center mx-auto">
          <div class="mx-3 text-center">
            <h2 class="text-3xl post-title font-bold mb-4">{{ post.title }}</h2>
            <p class="text-sm post-sub-title mb-6">{{ post.body }}</p>
          </div>
        </div>
    </div>
    <side-bar />
  </div>
</template>

<script>
import data from '../../data/post.js'
import SideBar from '../../components/SideBar.vue'

export default {
    name:'PostDetail',
    components:{
        SideBar,
    },
    data(){
        return{
            post:[]
        }
    },
    created(){
        this.post = data.filter((post) => post.id == this.$route.params.id)[0];
    }
}
</script>