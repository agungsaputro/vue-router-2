<template>
    <div class="content float-left w-8/12 align-middle">
      <paginate name="photoPagine" :list="dataPhoto" :per="4" ref="photoPagine">
        <div v-for="(listPhoto, i) in paginated('photoPagine')" :key="i" class="m-6 flex">
          <img v-bind:src="listPhoto.thumbnailUrl" alt="logo">
          <div class="mx-3">
            <h2 class="text-2xl post-title font-bold mb-4">{{ listPhoto.title }}</h2>
            <router-link :to="{ name: 'Photos', params: { id: listPhoto.id } }" class="button-color text-white text-base py-1 px-10">Detail</router-link>
          </div>
        </div>
      </paginate>
      <paginate-links class="ml-20" for="photoPagine" :limit="4"></paginate-links>   
    </div>
</template>

<script>
import data from '../../data/photo.js'

export default {
    name: 'Main',
    data(){
        return{
            dataPhoto : data
        }
    }

}
</script>