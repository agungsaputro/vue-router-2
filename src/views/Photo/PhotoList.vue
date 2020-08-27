<template>
  <div class="content inline-block w-full">
      <photo-item/>
      <side-bar/>
  </div>
</template>

<script>
import PhotoItem from '../Photo/PhotoItem'
import SideBar from '../../components/SideBar.vue'

export default {
    name: 'Photo',
    components:{
        PhotoItem,
        SideBar
    }
    
}
</script>