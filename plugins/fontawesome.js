// For Nuxt 2
import Vue from 'vue'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart, faBasketShopping, faPlus, faMinus, faDeleteLeft, faClose } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeart } from '@fortawesome/free-regular-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

library.add(faHeart, fasHeart, faBasketShopping, faPlus, faMinus, faDeleteLeft, faClose);

// Register the component globally
Vue.component('Icon', FontAwesomeIcon)