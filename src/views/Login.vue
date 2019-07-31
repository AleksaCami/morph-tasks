<template>
  <div>
    <div class="centered-container">
      <md-card>
        <md-card-header class="content">
          <md-card-header-text>
            <div class="heading-wrapper">
              <div v-if="isLoggingIn" class="spinner-wrapper mt-2">
                <div style="text-align: center">
                  <md-progress-spinner style="width: 3rem; height: 0.5rem;" :md-diameter="30" :md-stroke="3" class='md-accent' md-mode="determinate" :md-value="amount">
                  </md-progress-spinner>
                </div>
                 <div>
                  {{ amount }}%
                </div>
              </div>
              <div class='heading-text-wrapper'>
                <div class="md-subhead heading">Welcome!</div>
                <div class="md-title heading">
                  <font-awesome-icon class="mr-1" :icon="['fab', 'youtube']" />YouTube videos
                </div>
              </div>
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
            <md-button v-on:keyup.enter="login" type="submit" class="md-raised md-primary" @click.prevent="login">Log in</md-button>
          </div>

        </md-content>
      </md-card>

      <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackBar" md-persistent>
        <div v-if='errors.length'>
          <p v-for="error in errors" :key="error"> {{ error }}</p>
        </div>
        <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
      </md-snackbar>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      loggedIn: false,
      errors: [],
      input: {
        username: '',
        password: ''
      },
      isLoggingIn: false,
      amount: 0,
      showSnackBar: false,
      position: 'center',
      duration: 4000,
      isInfinity: false
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          this.isLoggingIn = true
          this.$emit('authenticated', true)
          this.loggedIn = this.input.username
          localStorage.setItem('loggedIn', this.loggedIn)
          this.$router.replace({ name: 'home' })
        } else {
          this.errors = []
          if(this.input.username !== this.$parent.mockAccount.username || this.input.password !== this.$parent.mockAccount.password) {
            this.showSnackBar = true
            this.errors.push('Username ili password su netacni')
          }
        }
      } else {
        this.errors = []
          if (!this.username) {
            this.showSnackBar = true
            this.errors.push('Username required.')
          }
          if (!this.password) {
            this.showSnackBar = true
            this.errors.push('Password required.')
          }
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
  .heading-wrapper {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .heading-text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start
  }
  .heading {
    float: left;
    margin: 5px;
  }
  .spinner-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center
  }
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
