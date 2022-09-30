/* Set up using Vue 2 */
import Vue from 'vue'
import App from './App.vue'

/* FONTAWESOME */
// Core
import { library } from '@fortawesome/fontawesome-svg-core'
// icon Component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import Icons
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons'

// Add Icons to Library
library.add(farStar, fasStar, faStarHalfStroke)

// Add FontAwesome component
Vue.component('font-awesome-icon', FontAwesomeIcon)


/* ************************************************************ */
/* VUE CONFIG */
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
