<template>
  <div>

    <md-card class="video">
      <md-card-media>
        <youtube :video-id="video.id.videoId"></youtube>
      </md-card-media>

      <md-card-content>
        <div v-html='video.snippet.title' class="md-title">{{ video.snippet.title }}</div>
        <div class="md-subhead">{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</div>
      </md-card-content>

      <md-card-actions>
        <md-button @click.prevent="openVideo(video)" class="md-raised md-primary">
            Open
          </md-button>
          <md-button @click.prevent="addToFavorites(video)" class="md-raised md-primary">
            Add to favorites
          </md-button>
        </md-card-actions>
      </md-card>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  methods: {
    openVideo (video) {
      this.$router.push(`/video/${video.id.videoId}/${video.snippet.title}/${video.snippet.channelTitle}/${video.snippet.publishedAt}`)
    },
    addToFavorites (video) {
      const favVideo = video
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
