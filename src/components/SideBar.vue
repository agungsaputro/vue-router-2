<template>
    <div class="side-bar float-right w-4/12">
        <p class="text-xl p-2">Side Bar</p>
        <hr class="w-11/12 mb-4">

        <router-link to="/posts" class="side-color text-lg font-bold mt-1 p-2">Post</router-link>
        
        <router-link to="/photos" class="side-color text-lg font-bold mt-1 p-2">Photo</router-link>

        <router-link to="/albums" class="side-color text-lg font-bold mt-1 p-2">Album</router-link>
        
    </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>