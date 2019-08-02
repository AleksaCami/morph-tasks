<template>
  <div>
    <div class="centered-container">
      <md-card>

        <md-card-header class="content">
          <md-card-header-text>
            <div class="heading-wrapper">
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
              <md-icon>
                <font-awesome-icon v-if="this.input.username" icon="check-circle" size="xs" />
              </md-icon>
              <label>E-mail</label>
              <md-input
                v-model="input.username"
                @keydown.13.prevent="login"
                autofocus
              >
              </md-input>
            </md-field>

            <md-field md-has-password>
              <md-icon>
                <font-awesome-icon v-if="this.input.password" icon="check-circle" size="xs" />
              </md-icon>
              <label>Password</label>
              <md-input
                v-model="input.password"
                type="password"
                @keydown.13.prevent="login"
              >
              </md-input>
            </md-field>
          </div>

          <div class="actions md-layout md-alignment-center">
            <md-button type="submit" class="md-raised md-primary" @click.prevent="login">Log in</md-button>
          </div>

        </md-content>
      </md-card>

      <!-- Snackbar u kojem se ispisuju greske u zavisnosti od toga koji je tip greske -->
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
      errors: [],
      input: {
        username: '',
        password: ''
      },
      showSnackBar: false,
      position: 'center',
      duration: 4000,
      isInfinity: false
    }
  },
  methods: {
    login () {
      // Metoda za login
      // Prva provera, da li su input polja prazna
      if (this.input.username !== '' && this.input.password !== '') {
        // Jednostavna provera da li su unesene vrednosti u poljima jednake mock accountu kreiranom na App.vue
        if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          // Ukoliko jesu, emitovanje eventa authenticated = true
          // Pomocu kojeg dobijamo pristup ostalim rutama
          this.$emit('authenticated', true)
          // Postavljanje session tokena na username
          // Za ovakav jednostavan primer smatrao sam da je ovako dovoljno cuvati sesiju
          this.loggedIn = this.input.username
          localStorage.setItem('loggedIn', this.loggedIn)
          // Rutiranje na home komponentu nakon uspesnog logina
          this.$router.replace({ name: 'home' })
        } else {
          // Svaki put kada se desi greska, errors array se postavlja na defaultnu vrednost
          this.errors = []
          if (this.input.username !== this.$parent.mockAccount.username || this.input.password !== this.$parent.mockAccount.password) {
            // Ukoliko username ili password nisu dobri
            this.showSnackBar = true
            this.errors.push('Username / password incorrect.')
          }
        }
      } else {
        this.errors = []
        if (!this.username) {
          // Ukoliko nisu uneseni username ili password
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
    justify-content: flex-start;
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
