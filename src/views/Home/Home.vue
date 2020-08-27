<template>
  <div class="content inline-block w-full">
    <Body/>
    <side-bar />
  </div>
</template>

<script>
import Body from '../../components/Body.vue'
import SideBar from '../../components/SideBar.vue'
export default {
    name:'Home',
    components:{
        Body,
        SideBar
    }
    
}
</script>