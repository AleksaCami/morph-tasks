import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// FONT AWESOME STILOVI I IKONICE
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// MATERIAL DESIGN KOMPONENTE I STILOVI
import { MdButton, MdContent, MdCard, MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

library.add(faUserSecret)
library.add(faYoutube)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdCard)
Vue.use(MdField)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
