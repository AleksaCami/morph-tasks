<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>sfsd</h1>
    <router-link to="/login" @click.native="logout()" replace>Logout</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {},
  methods: {
    logout () {
      localStorage.clear()
    }
  }
}
</script>
