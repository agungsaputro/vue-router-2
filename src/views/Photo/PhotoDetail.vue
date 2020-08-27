<template>
  <div>
    <div class="content float-left w-8/12 align-middle">
         <div class="m-6">
          <img v-bind:src="photo.thumbnailUrl" alt="logo" class="text-center mx-auto">
          <div class="mx-3 text-center">
            <h2 class="text-3xl post-title font-bold mb-4">{{ photo.title }}</h2>
          </div>
        </div>
    </div>
    <side-bar />
  </div>
</template>

<script>
import data from '../../data/photo.js'
import SideBar from '../../components/SideBar.vue'

export default {
    name: 'PhotoDetail',
    components:{
        SideBar
    },
    data(){
        return{
            photo:[]
        }
    },
    created(){
        this.photo = data.filter((photo) => photo.id == this.$route.params.id)[0];
    }
    
}
</script>