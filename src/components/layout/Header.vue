<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark nav-color mb-5">
      <div class="container">
        <a style="color: #fff" class="navbar-brand" href="/home">
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <span class="ml-2">YouTube videos</span>
        </a>
        <md-button class="md-dense md-primary" style='color: white; border: 1px solid white' @click="showSidepanel = true">Menu</md-button>
      </div>
    </nav>
    <md-drawer class="md-right" style='height: 100vh' :md-active.sync="showSidepanel">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Menu</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <a href="/home">
            <md-button to="/home" class="md-primary">Home</md-button>
          </a>
        </md-list-item>
        <md-list-item>
          <a href="/favorites">
            <md-button class="md-primary">Favorites</md-button>
          </a>
        </md-list-item>

        <hr>

        <md-list-item>
          <md-button @click.native="logout()"
            type="button"
            class="md-raised md-accent"
            >
            Logout
          </md-button>
        </md-list-item>
      </md-list>
    </md-drawer>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showSidepanel: false
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('loggedIn')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
$white: #fff;
$accent: #2196f3;

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.nav-text {
    color: $white
}
.nav-color {
    background: $accent
}

</style>
