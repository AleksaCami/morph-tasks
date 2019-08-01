<template>
  <div>
    <youtube :video-id="video.id.videoId"></youtube>
    <div class="card-body">
      <h5 class="card-title">{{ video.snippet.title }}</h5>
      <h6
        class="card-subtitle mb-2 text-muted"
      >{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoGridItem',
  props: ['video']
}
</script>
