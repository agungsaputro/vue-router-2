<template>
  <div class="content inline-block w-full">
      <router-view></router-view>
      <side-bar/>
  </div>
</template>

<script>

import SideBar from '../../components/SideBar.vue'

export default {
    name: 'Album',
    components:{
        
        SideBar
    }
    
}
</script>