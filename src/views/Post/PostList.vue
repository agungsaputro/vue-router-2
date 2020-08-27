<template>
  <div class="content inline-block w-full">
    <post-item/>
    <side-bar/>
  </div>
</template>

<script>
import PostItem from '../Post/PostItem.vue'
import SideBar from '../../components/SideBar.vue'

export default {
    name:'Posts',
    components:{
        PostItem,
        SideBar
    }
    
}
</script>