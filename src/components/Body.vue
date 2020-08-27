<template>
    <div class="content float-left w-8/12 align-middle">
      <paginate name="homePagine" :list="dataComment" :per="4" ref="homePagine">
        <div v-for="(listComment, i) in paginated('homePagine')" :key="i" class="m-6 flex">
          <img src="../assets/logo.png" alt="logo">
          <div class="mx-3">
            <h2 class="text-2xl post-title font-bold mb-4">{{ listComment.name}}</h2>
            <p class="text-sm post-sub-title mb-6">{{ listComment.body }}</p>
            <router-link :to="{ name: 'Comments', params: { id: listComment.id } }" class="button-color text-white text-base py-1 px-10">Detail</router-link>
          </div>
        </div>
      </paginate>
    </div>
</template>

<script>
import data from '../data/comment.js'

export default {
  name: 'Body',
  data(){
    return{
      dataComment : data
    }
  }
}
</script>