<template>
  <div class="container mb-3">
    <div class="d-flex mb-3">
      <div class="mr-auto">
        <h3>Search Results for "{{ reformattedSearchString }}"</h3>
      </div>
      <div class="btn-group ml-auto" role="group">
        <button
          @click="changeDisplayMode('grid')"
          type="button"
          class="btn btn-outline-secondary"
          :class="{ active: displayMode === 'grid' }"
        >
          <font-awesome-icon class="mr-1" :icon="['fas', 'table']" />
        </button>
        <button
          @click="changeDisplayMode('list')"
          type="button"
          class="btn btn-outline-secondary"
          :class="{ active: displayMode === 'list' }"
        >
          <font-awesome-icon class="mr-1" :icon="['far', 'list-alt']" />
        </button>
      </div>
    </div>

    <div class="card-columns" v-if="displayMode === 'grid'">
      <div class="card" :key="video.id.videoId" v-for="video in videos">
        <VideoGridItem :video="video"/>
      </div>
    </div>
    <div v-else>
      <div class="card mb-2" :key="video.id.videoId" v-for="video in videos">
        <VideoListItem :video="video"/>
      </div>
    </div>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem.vue'
import VideoGridItem from './VideoGridItem.vue'

export default {
  name: 'SearchResults',
  components: {
    VideoListItem,
    VideoGridItem
  },
  data () {
    return {
      title: 'Search Results',
      displayMode: 'grid'
    }
  },
  methods: {
    changeDisplayMode (displayMode) {
      this.displayMode = displayMode
    }
  },
  props: ['videos', 'reformattedSearchString']
}
</script>

<style scoped>
button:focus {
  box-shadow: none !important;
}
</style>
