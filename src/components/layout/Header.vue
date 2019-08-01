<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark nav-color mb-5">
      <div class="container">
        <a style="color: #fff" class="navbar-brand" href="/home">
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <span class="ml-2">YouTube videos</span>
        </a>
        <md-button @click.native="logout()"
          type="button"
          class="md-raised md-accent"
          >
          Logout
        </md-button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
$white: #fff;
$accent: #2196f3;

.nav-text {
    color: $white
}
.nav-color {
    background: $accent
}

</style>
