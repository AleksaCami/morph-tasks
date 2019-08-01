<template>
  <div class="home">
    <!-- HEADER KOMPONENTA -->
    <Header/>

    <!-- SEARCH FORMA -->
    <SearchForm v-on:search="search"/>

    <!-- KOMPONENTA KOJA SE RENDERUJE KADA KORISNIK IZVRSI PRETRAGU -->
    <SearchResults
      v-if="videos.length > 0 && !searchQueried"
      :videos="videos"
      :reformattedSearchString="reformattedSearchString"
    />

    <!-- DEFAULTNI HOME KOD KOJI SE RENDERUJE
    SVE DOK KORISNIK NE IZVRSI PRETRAGU -->
    <div class='container'>
      <div class="d-flex mb-3">
        <div class="btn-group ml-auto" role="group">
          <md-button @click="changeDisplayMode('grid')"
            type="button"
            :class="{ active: displayMode === 'grid' }"
            class="md-raised list-button"
            style='background-color: #46d6b5; color: white'
            >
            <font-awesome-icon class="mr-1" :icon="['fas', 'table']" />
          </md-button>
          <md-button
            @click="changeDisplayMode('list')"
            type="button"
            class="md-raised"
            :class="{ active: displayMode === 'list' }"
            style='background-color: #46d6b5; color: white'
            >
            <font-awesome-icon class="mr-1" :icon="['far', 'list-alt']" />
          </md-button>
        </div>
      </div>

      <div class="card-columns" v-if="displayMode === 'grid'">
        <div class="card" :key="video.id.videoId" v-for="video in homeVideos">
          <VideoGridItem :video="video"/>
        </div>
      </div>
      <div v-else>
        <div class="card mb-2" :key="video.id.videoId" v-for="video in homeVideos">
          <VideoListItem :video="video"/>
        </div>
      </div>
    </div>

    <!-- PAGINATION KOMPONENTA -->
    <Pagination
      v-if="videos.length > 0 || homeVideos.length > 0"
      :prevPageToken="api.prevPageToken"
      :nextPageToken="api.nextPageToken"
      v-on:prev-page="prevPage"
      v-on:next-page="nextPage"
    />
  </div>
</template>

<script>
import randomWords from 'random-words'
import axios from 'axios'
import Header from '@/components/layout/Header.vue'
import SearchForm from '@/components/SearchForm.vue'
import SearchResults from '@/components/SearchResults.vue'
import Pagination from '@/components/Pagination.vue'
import VideoGridItem from '@/components/VideoGridItem.vue'
import VideoListItem from '@/components/VideoListItem.vue'

export default {
  name: 'home',
  components: {
    Header,
    SearchForm,
    SearchResults,
    Pagination,
    VideoGridItem,
    VideoListItem
  },
  data () {
    return {
      api: {
        baseUrl: 'https://www.googleapis.com/youtube/v3/search?',
        part: 'snippet',
        type: 'video',
        order: 'viewCount',
        maxResults: 12,
        q: '',
        key: 'AIzaSyCzutc_C0va6pJHfFuX_kg4Sxi6oj5stN0',
        prevPageToken: '',
        nextPageToken: ''
      },
      reformattedSearchString: '',
      videos: [],
      homeVideos: [],
      searchQueried: false,
      displayMode: 'grid'
    }
  },
  methods: {
    search (searchParams) {
      this.reformattedSearchString = searchParams.join(' ')
      this.api.q = searchParams.join('+')
      const { baseUrl, part, type, order, maxResults, q, key } = this.api
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}`
      this.getData(apiUrl)
    },
    prevPage () {
      const { baseUrl, part, type, order, maxResults, q, key, prevPageToken } = this.api
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${prevPageToken}`
      this.getData(apiUrl)
    },

    nextPage () {
      const { baseUrl, part, type, order, maxResults, q, key, nextPageToken } = this.api
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${nextPageToken}`
      this.getData(apiUrl)
    },
    getData (apiUrl) {
      this.homeVideos = []
      axios
        .get(apiUrl)
        .then(res => {
          this.videos = res.data.items
          this.api.prevPageToken = res.data.prevPageToken
          this.api.nextPageToken = res.data.nextPageToken
        })
        .catch(error => console.log(error))
    },

    getDefaultVideos () {
      const { baseUrl, part, type, order, maxResults, key } = this.api
      const queryWord = randomWords(1)
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${queryWord}&maxResults=${maxResults}&key=${key}`
      axios
        .get(apiUrl)
        .then(res => {
          this.homeVideos = res.data.items
          console.log(this.homeVideos)
          this.api.prevPageToken = res.data.prevPageToken
          this.api.nextPageToken = res.data.nextPageToken
        })
        .catch(error => console.error(error))
    },

    changeDisplayMode (displayMode) {
      this.displayMode = displayMode
    }
  },
  mounted: function () {
    this.getDefaultVideos()
  }
}
</script>

<style lang="scss" scoped>
.list-button {
  background-color: #46d6b5;
}

button:focus {
  box-shadow: none !important;
}
</style>
