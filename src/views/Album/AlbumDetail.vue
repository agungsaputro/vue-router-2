<template>
  <div>
    <div class="content float-left w-8/12 align-middle">
         <div class="m-6">
          <img src="../../assets/logo.png" alt="logo" class="text-center mx-auto">
          <div class="mx-3 text-center">
            <h2 class="text-3xl post-title font-bold mb-4">{{ album.title }}</h2>
          </div>
        </div>
    </div>
    <side-bar />
  </div>
</template>

<script>
import data from '../../data/album.js'
import SideBar from '../../components/SideBar.vue'

export default {
    name:'PostDetail',
    components:{
        SideBar,
    },
    data(){
        return{
            album:[]
        }
    },
    created(){
        this.album= data.filter((album) => album.id == this.$route.params.id)[0];
    }
}
</script>