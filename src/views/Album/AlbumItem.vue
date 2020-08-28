<template>
    <div class="content float-left w-8/12 align-middle">
      <paginate name="albumPagine" :list="dataAlbum" :per="4" ref="albumPagine">
        <div v-for="(listAlbum, i) in paginated('albumPagine')" :key="i" class="m-6 flex">
          <img src="../../assets/logo.png" alt="logo">
          <div class="mx-3">
            <h2 class="text-2xl post-title font-bold mb-4">{{ listAlbum.title }}</h2>
            <router-link :to="{ name: 'Albums', params: { id: listAlbum.id } }" class="button-color text-white text-base py-1 px-10">Detail</router-link>
          </div>
        </div>
      </paginate>
      <paginate-links class="ml-20" for="albumPagine" :limit="4"></paginate-links>   
    </div>
</template>

<script>
import data from '../../data/album.js'

export default {
    name:'AlbumItem',
    data(){
        return{
            dataAlbum : data
        }
    }
    
}
</script>

<style>

</style>