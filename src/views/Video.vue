<template>
  <div>
    <Header />
    <section>
        <youtube :video-id="id" player-width="1280" style="height: 790px"></youtube>
    </section>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'

export default {
  name: 'Video',
  data () {
    return {
      id: this.$route.params.id,
      title: this.$route.params.title,
      channel: this.$route.params.channel,
      publishedAt: this.$route.params.publishedAt
    }
  },
  components: {
    Header
  }
}
</script>
