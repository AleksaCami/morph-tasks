<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark nav-color mb-5">
      <div class="container">
        <a style="color: #fff" class="navbar-brand" href="#">
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <span class="ml-2">YouTube videos</span>
        </a>
        <router-link style="color: #fff" to="/login" @click.native="logout()" replace>Logout</router-link>
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
