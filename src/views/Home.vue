<template>
  <div class="home">
    <Header/>
    <SearchForm
      :search="search"
    />
    <SearchResults
      :videos="videos"
      :formattedSearchString="formattedSearchString"
    />
    <div v-for="video in videos" :key="video">
      {{ video.snippet.title }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import SearchForm from '@/components/SearchForm.vue'
import SearchResults from '@/components/SearchResults.vue'

export default {
  name: 'home',
  components: {
    Header,
    SearchForm,
    SearchResults
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
        key: 'AIzaSyB0CcjIh1rG7O4ex6GhVN2uqMGHxrHAmMU',
        prevPageToken: '',
        nextPageToken: ''
      },
      formattedSearchString: '',
      videos: []
    }
  },
  methods: {
    search (searchParams) {
      this.formattedSearchString = searchParams.join(' ')
      this.api.q = searchParams.join('+')
      const { baseUrl, part, type, order, maxResults, q, key } = this.api
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}`
      this.getData(apiUrl)
    },
    getData (apiUrl) {
      console.log('asdasd')
      axios
        .get(apiUrl)
        .then(res => {
          this.videos = res.data.items
          this.api.prevPageToken = res.data.prevPageToken
          this.api.nextPageToken = res.data.nextPageToken
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
