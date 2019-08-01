<template>
  <div>
    <div class="card-body">
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
  props: ['video']
}
</script>
