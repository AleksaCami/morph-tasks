<template>
  <div>
    <div class="container">
      <h1>Favorite videos</h1>
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
      this.favVideos = localStorage
      this.videoKeys = Object.keys(this.favVideos)

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
