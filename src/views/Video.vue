<template>
  <div>
    <Header />
      <div class='container'>
        <div class='video-wrapper py-5'>
          <div class='video'>
            <youtube :video-id="id" player-width="1280" player-height="750" :player-vars="{ autoplay: 1 }" ></youtube>
            <h2>{{ title }}</h2>

            <h4>{{ channel }}</h4>
            <small>Published on {{ publishedAt | formatDate }}</small>

          </div>
        </div>
      </div>
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

<style lang="scss" scoped>

h2 {
  margin-top: 20px;
}

h4 {
  margin-top: 40px;
}

.video-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.video {
  display: flex;
  flex-direction: column;
  align-items: flex-start
}

</style>
