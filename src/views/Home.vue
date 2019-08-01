<template>
  <div class="home">
    <Header/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
