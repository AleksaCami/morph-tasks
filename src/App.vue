<template>
  <div id="app">
    <Header v-if='this.$route.path !== "/login"' />
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {
      authenticated: false,
      authStorage: null,
      mockAccount: {
        username: 'test',
        password: '123'
      }
    }
  },
  mounted () {
    this.authStorage = localStorage.loggedIn
    if (!this.authenticated && !this.authStorage) {
      this.$router.replace({ name: 'login' })
      console.log(this.authStorage)
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

html {
  height: 100vh;
}

#app {
  font-family: "Roboto Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
