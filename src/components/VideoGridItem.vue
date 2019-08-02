<template>
  <div>
    <div class='wrapper video'>
      <md-card>
        <md-card-header>

          <div v-html='video.snippet.title' class="md-title">{{ video.snippet.title }}</div>
          <div class="md-subhead">{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</div>
        </md-card-header>

        <md-card-media>
          <youtube :video-id="video.id.videoId" @ready="ready"></youtube>
        </md-card-media>

        <md-card-content>
          {{ video.snippet.description }}
        </md-card-content>

        <md-card-actions>
          <md-button @click.prevent="openVideo(video)" class="md-raised md-primary">
            Open
          </md-button>
          <md-button v-if='this.$route.path !== "/favorites"' @click.prevent="addToFavorites(video)" class="md-raised md-primary">
            Add to favorites
          </md-button>
        </md-card-actions>
      </md-card>
    </div>
    <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackBar" md-persistent>
      <p>{{video.snippet.title}} added to favorites</p>
      <md-button class="md-primary" @click="showSnackbar = false">Close</md-button>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: 'VideoGridItem',
  data () {
    return {
      showSnackBar: false,
      position: 'center',
      duration: 4000,
      isInfinity: false
    }
  },
  methods: {
    openVideo (video) {
      this.$router.push(`/video/${video.id.videoId}/${video.snippet.title}/${video.snippet.channelTitle}/${video.snippet.publishedAt}`)
    },
    ready (event) {
      this.player = event.target
    },
    addToFavorites (video) {
      const favVideo = video
      this.showSnackBar = true
      localStorage.setItem(`${video.id.videoId}`, JSON.stringify(favVideo))
    }
  },
  props: ['video']
}
</script>

<style lang="scss" scoped>
.video {
  cursor: pointer
}
</style>
