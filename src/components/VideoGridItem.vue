<template>
  <div>
    <div class='wrapper video' @click.prevent="openVideo(video)">
      <!-- <youtube :video-id="video.id.videoId" @ready="ready"></youtube> -->
      <md-card>
        <md-card-header>

          <div class="md-title">{{ video.snippet.title }}</div>
          <div class="md-subhead">{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</div>
        </md-card-header>

        <md-card-media>
          <youtube :video-id="video.id.videoId" @ready="ready"></youtube>
        </md-card-media>

        <md-card-content>
          {{ video.snippet.description }}
        </md-card-content>
      </md-card>
      <!-- <div class="card-body video">
        <h5 class="card-title">{{ video.snippet.title }}</h5>
        <h6
          class="card-subtitle mb-2 text-muted"
        >{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</h6>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoGridItem',
  methods: {
    openVideo (video) {
      this.$router.push(`/video/${video.id.videoId}/${video.snippet.title}/${video.snippet.channelTitle}/${video.snippet.publishedAt}`)
    },
    ready (event) {
      this.player = event.target
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
