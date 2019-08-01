<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
      <div class="container">
        <a class="navbar-brand" href="#">
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <span class="ml-2">YouTube</span>
        </a>
        <router-link to="/login" @click.native="logout()" replace>Logout</router-link>
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
</style>
