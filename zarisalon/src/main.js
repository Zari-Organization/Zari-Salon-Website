import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fas)
library.add(fab)
library.add(far)


import 'jquery';

import './scss/_variables.scss';
import './scss/style.scss';


// import 'jquery';

// import carousel from 'vue-owl-carousel'

// export default {
//     components: { carousel },
// }



createApp(App)
.component('fa', FontAwesomeIcon)
// .component('carousel', 'vue-owl-carousel')
.use(store)
.use(router)
.mount("#app");




// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");





 