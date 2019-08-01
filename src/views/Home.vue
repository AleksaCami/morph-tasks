<template>
  <div class="home">
    <Header/>
    <SearchForm
      :search="search"
    />
  </div>
</template>

<script>
// import axios from 'axios'
import Header from '@/components/Header.vue'
import SearchForm from '@/components/SearchForm.vue'

export default {
  name: 'home',
  components: {
    Header,
    SearchForm
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
        key: 'YOUR_API_KEY',
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
      console.log(apiUrl)
    }
  }
}
</script>
