<template>
  <div>
    <div class="container">
      <h1>Favorite videos</h1>
      <div v-if="this.videoValues.length === 0">
        <h3>You don't have any videos favorited!</h3>
      </div>
      <div class="card-columns">
        <div class="card" :key="video.id.videoId" v-for="video in videoValues">
          <VideoGridItem :video="video"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoGridItem from '@/components/VideoGridItem.vue'

export default {
  name: 'Favorites',
  components: {
    VideoGridItem
  },
  data () {
    return {
      favVideos: [],
      videoKeys: [],
      videoValues: []
    }
  },
  methods: {
    getVideos () {
      // Metoda za izvlacenje favorite videa iz local storage-a
      this.favVideos = localStorage
      // Odvajanje object keysa iz local storagea u poseban niz
      this.videoKeys = Object.keys(this.favVideos)

      // Dodavanje svakog odgovarajuceg elementa koji se trazi preko key-a u videoValues array
      this.videoKeys.forEach((element) => {
        if (element.length === 11) {
          this.videoValues.push(JSON.parse(localStorage.getItem(element)))
        }
      })
    }
  },
  mounted: function () {
    this.getVideos()
  }
}
</script>
