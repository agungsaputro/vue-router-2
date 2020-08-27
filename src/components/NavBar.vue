<template>
  <div class="navbar">
    <ul class="flex border-b">
      <li class="-mb-px mx-3">
        <router-link to="/">Home</router-link>
      </li>
      <li class="mx-3">
        <router-link to="/posts">Post</router-link>
      </li>
      <li class="mx-3">
        <router-link to="/photos">Photo</router-link>
      </li>
      <li class="mx-3">
        <router-link to="/albums">Album</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
  }
}
</script>