<template>
    <div class="side-bar bg-gray-300 float-right w-4/12">
        <p class="text-xl p-2">Side Bar</p>
        <ul class="list-reset">
          <li>
            <router-link to="/posts" class="side-color text-lg font-bold mt-1 p-2">Post</router-link>
          </li>
          <li>
            <router-link to="/photos" class="side-color text-lg font-bold mt-1 p-2">Photo</router-link>
          </li>
          <li>
            <router-link to="/albums" class="side-color text-lg font-bold mt-1 p-2">Album</router-link>
          </li>
        </ul>
        
    </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>