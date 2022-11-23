import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faMagnifyingGlass, faPlay, faUser, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'
// import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faBars, faMagnifyingGlass, faPlay, faUser, faClock, faLocationDot, faTwitter, faLinkedinIn, faFacebookF)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
