import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// FONT AWESOME STILOVI I IKONICE
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSearch, faCheckCircle, faTable, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {
  faListAlt,
  faBookmark,
  faStar
} from '@fortawesome/free-regular-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// FORMATIRANJE DATUMA I VREMENA
import moment from 'moment'

// MATERIAL DESIGN KOMPONENTE I STILOVI
import { MdButton, MdContent, MdCard, MdField, MdProgress, MdSnackbar, MdIcon, MdDivider, MdMenu, MdToolbar, MdList, MdTooltip, MdDialog } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// VUE BOOTSTRAP
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// BIBLIOTEKA ZA EMBEDOVANJE YT VIDEA
import VueYouTubeEmbed from 'vue-youtube-embed'

library.add(
  faUserSecret,
  faYoutube,
  faSearch,
  faCheckCircle,
  faListAlt,
  faTable,
  faBookmark,
  faArrowLeft,
  faArrowRight,
  faStar
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdCard)
Vue.use(MdField)
Vue.use(MdProgress)
Vue.use(MdSnackbar)
Vue.use(MdIcon)
Vue.use(MdDivider)
Vue.use(MdMenu)
Vue.use(MdToolbar)
Vue.use(MdTooltip)
Vue.use(MdList)
Vue.use(BootstrapVue)
Vue.use(VueYouTubeEmbed)
Vue.use(MdDialog)

Vue.filter('formatDate', (value) => {
  if (!value) return ''
  return moment(value.toString()).format('DD/MM/YYYY')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
