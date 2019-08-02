<template>
  <div>
    <div class="container">
      <div class="card-columns">
        <!-- <div class="card" :key="video.id.videoId" v-for="video in favVideos">
          <VideoGridItem :video="video"/>
        </div> -->
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
      favVideos: []
    }
  },
  methods: {
    getVideos () {
      const favVideos = localStorage
      console.log(favVideos)
    }
  },
  mounted: function () {
    this.getVideos()
  }
}
</script>
