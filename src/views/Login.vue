<template>
  <div>
    <div class="centered-container">
      <md-card>
        <md-card-header class="content">
          <md-card-header-text>
            <div class="md-subhead">Welcome!</div>
            <div class="md-title">
                <font-awesome-icon :icon="['fab', 'youtube']" />
                YouTube videos platform
            </div>
          </md-card-header-text>
        </md-card-header>
        <md-content class="md-elevation-3">
          <div class="form">
            <md-field>
              <label>E-mail</label>
              <md-input v-model="login.email" autofocus></md-input>
            </md-field>

            <md-field md-has-password>
              <label>Password</label>
              <md-input v-model="login.password" type="password"></md-input>
            </md-field>
          </div>

          <div class="actions md-layout md-alignment-center">
            <md-button class="md-raised md-primary">Log in</md-button>
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
      login: {
        email: '',
        password: ''
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
  background: url('../assets/background.jpg');
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
