<template>
  <div>
    <Header />
    {{ id }} {{ title }} {{ channel }} {{ publishedAt | formatDate }}
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
// import axios from 'axios'

export default {
  name: 'Video',
  data () {
      return {
        id: this.$route.params.id,
        title: this.$route.params.title,
        channel: this.$route.params.channel,
        publishedAt: this.$route.params.publishedAt,
      }
  },
  components: {
    Header
  }
}
</script>
