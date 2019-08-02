<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark fixed nav-color mb-5">
      <div class="container">
        <a style="color: #fff" class="navbar-brand" href="/home">
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <span class="ml-2">YouTube videos</span>
        </a>
        <md-menu md-size="medium" md-align-trigger>
          <md-button class='md-primary' style='color: white; border: 1px solid white' md-menu-trigger>Menu</md-button>

          <md-menu-content>
            <md-menu-item>
              <a href="/home">
                <md-button to="/home" class="md-primary md-raised">Home</md-button>
              </a>
            </md-menu-item>
            <md-menu-item>
              <a href="/favorites">
                <md-button to="/favorites" class="md-primary md-raised">Favorites</md-button>
              </a>
            </md-menu-item>
            <md-menu-item>
              <md-button @click.native="logout()"
                type="button"
                class="md-raised md-accent"
                >
                Logout
              </md-button>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {
    // Log out - brise se login token iz local storage, prelazi na rutu /login
    logout () {
      localStorage.removeItem('loggedIn')
      this.$router.push('/login')
      console.clear()
    }
  }
}
</script>

<style lang="scss" scoped>
$white: #fff;
$accent: #2196f3;

header {
  margin-bottom: 100px;
}

.fixed {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.nav-text {
    color: $white
}
.nav-color {
    background: $accent
}

</style>
