<template>
  <div class="home">

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
      <div class="card-columns">
        <div class="card" :key="video.id.videoId" v-for="video in homeVideos">
          <VideoGridItem :video="video"/>
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
// Biblioteka za generisanje random reci
import randomWords from 'random-words'
import axios from 'axios'
import SearchForm from '@/components/SearchForm.vue'
import SearchResults from '@/components/SearchResults.vue'
import Pagination from '@/components/Pagination.vue'
import VideoGridItem from '@/components/VideoGridItem.vue'

export default {
  name: 'home',
  components: {
    SearchForm,
    SearchResults,
    Pagination,
    VideoGridItem
  },
  data () {
    return {
      // API objekat koji odgovara JSON odgovoru youtube API-a
      api: {
        baseUrl: 'https://www.googleapis.com/youtube/v3/search?',
        part: 'snippet',
        type: 'video',
        order: 'viewCount',
        maxResults: 12,
        q: '',
        key: 'AIzaSyDa34jZCa0wtKvKMlcN3LwG8o4ZFR5hkRg',
        prevPageToken: '',
        nextPageToken: ''
      },
      reformattedSearchString: '',
      videos: [],
      homeVideos: [],
      searchQueried: false,
      displayMode: 'grid',
      showSnackbar: false
    }
  },
  methods: {
    search (searchParams) {
      // Search metoda koja prima search parametre unesene u input polje
      // Trimuje whitespace i sastavlja query od prosledjenih reci
      this.reformattedSearchString = searchParams.join(' ')
      this.api.q = searchParams.join('+')
      // Destrukturisanje this.api objekta u posebne promenljive
      const { baseUrl, part, type, order, maxResults, q, key } = this.api
      // Sastavljen API URL od svih dostupnih parameteara
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}`
      this.getData(apiUrl)
    },
    prevPage () {
      // Logika za previous page i next page je identicna, jedina razlika jeste token u URL-u
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
      // Postavljanje homeVideos niza na default vrednost jer se ova metoda poziva ukoliko se
      // Iskoristi search ili se predje na drugu stranicu
      this.homeVideos = []
      // Get request ka API
      axios
        .get(apiUrl)
        .then(res => {
          // postavljanje this.videos state-a jednako rezultatu get requesta od API-a
          this.videos = res.data.items
          // postavljanje prevpage i nextpage tokena u state-u jednako tokenima iz API-a
          this.api.prevPageToken = res.data.prevPageToken
          this.api.nextPageToken = res.data.nextPageToken
        })
        .catch(error => console.log(error))
    },

    getDefaultVideos () {
      // Metoda koja se poziva cim se komponenta ucita, getuje default klipove
      // Kao query koristi jednu random rec
      const { baseUrl, part, type, order, maxResults, key } = this.api
      const queryWord = randomWords(1)
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${queryWord}&maxResults=${maxResults}&key=${key}`
      axios
        .get(apiUrl)
        .then(res => {
          this.homeVideos = res.data.items
          this.api.prevPageToken = res.data.prevPageToken
          this.api.nextPageToken = res.data.nextPageToken
        })
        .catch(error => console.error(error))
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
