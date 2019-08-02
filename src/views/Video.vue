<template>
  <div>
      <div class='container full'>
        <div class='video-wrapper py-5'>
          <div class='video'>
            <!-- Iz nekog razloga player-height ne radi, a ovako pise u dokumentaciji da treba -->
            <youtube :video-id="id" player-width="1280" player-height="750" :player-vars="{ autoplay: 1 }" ></youtube>
            <h2 v-html="title">{{ title }}</h2>

            <h4>{{ channel }}</h4>
            <small>Published on {{ publishedAt | formatDate }}</small>

          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Video',
  data () {
    return {
      // Postavljanje state-a na vrednosti dobijene iz url parametarara
      id: this.$route.params.id,
      title: this.$route.params.title,
      channel: this.$route.params.channel,
      publishedAt: this.$route.params.publishedAt
    }
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

.full {
  position: relative;
  min-height: 100%;
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
