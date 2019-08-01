<template>
  <div>
    <div @click.prevent="openVideo(video)" class="card-body video">
      <h5 class="card-title">
      <youtube :video-id="video.id.videoId"></youtube>
      </h5>
      <h6
        class="card-subtitle mb-2 text-muted"
      >{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</h6>
      <p class="card-text">{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  methods: {
    openVideo (video) {
      console.log(video)
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
