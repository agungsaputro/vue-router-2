<template>
    <div class="content float-left w-8/12 align-middle">
      <paginate name="postPagine" :list="dataPost" :per="4" ref="postPagine">
        <div v-for="(listPost, i) in paginated('postPagine')" :key="i" class="m-6 flex">
          <img src="../../assets/logo.png" alt="logo">
          <div class="mx-3">
            <h2 class="text-2xl post-title font-bold mb-4">{{ listPost.title }}</h2>
            <p class="text-sm post-sub-title mb-6">{{ listPost.body }}</p>
            <router-link :to="{ name: 'Posts', params: { id: listPost.id } }"  class="button-color text-white text-base py-1 px-10">Detail</router-link>
          </div>
        </div>
      </paginate>
      <paginate-links class="ml-20" for="postPagine" :limit="4"></paginate-links>   
    </div>
</template>

<script>
import data from '../../data/post.js'

export default {
    name:'PostItem',
    data(){
        return{
            dataPost : data
        }
    }
}
</script>