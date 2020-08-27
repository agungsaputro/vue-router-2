<template>
  <div class="content inline-block w-full">
      <album-item/>
      <side-bar/>
  </div>
</template>

<script>
import AlbumItem from '../Album/AlbumItem.vue'
import SideBar from '../../components/SideBar.vue'

export default {
    name: 'Album',
    components:{
        AlbumItem,
        SideBar
    }
    
}
</script>