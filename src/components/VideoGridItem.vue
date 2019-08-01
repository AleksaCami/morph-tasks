<template>
  <div>
    <div class='wrapper video' @click.prevent="openVideo(video)">
      <youtube :video-id="video.id.videoId"></youtube>
      <div class="card-body video">
        <h5 class="card-title">{{ video.snippet.title }}</h5>
        <h6
          class="card-subtitle mb-2 text-muted"
        >{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoGridItem',
  methods: {
    openVideo (video) {
      this.$router.push(`/video/${video.id.videoId}`)
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
