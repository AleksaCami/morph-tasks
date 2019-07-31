<template>
  <div>
    <div class="centered-container">
      <md-card>
        <md-card-header class="content">
          <md-card-header-text>
            <div class="md-subhead">Welcome!</div>
            <div class="md-title">
              <font-awesome-icon :icon="['fab', 'youtube']" />YouTube videos platform
            </div>
          </md-card-header-text>
        </md-card-header>
        <md-content class="md-elevation-3">
          <div class="form">
            <md-field>
              <label>E-mail</label>
              <md-input v-model="input.username" autofocus></md-input>
            </md-field>

            <md-field md-has-password>
              <label>Password</label>
              <md-input v-model="input.password" type="password"></md-input>
            </md-field>
          </div>

          <div class="actions md-layout md-alignment-center">
            <md-button type="submit" class="md-raised md-primary" @click.prevent="login">Log in</md-button>
          </div>

          <div class="loading-overlay" v-if="loading">
            <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
          </div>
        </md-content>
      </md-card>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      loading: false,
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        if (
          this.input.username === this.$parent.mockAccount.username &&
          this.input.password === this.$parent.mockAccount.password
        ) {
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'home' })
        } else {
          console.log('The username and / or password is incorrect')
        }
      } else {
        console.log('A username and password must be present')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: url("../assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .md-card {
    width: 360px;
  }
  .content {
    background-color: #2196f3;
    color: white;
    display: flex;
  }
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
}
</style>
