import 'animate.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import './main.css'
import App from './App.vue'
import { pinia }  from './stores'
import router from './router'
import { createApp } from 'vue'
import filters from './filters.js'

const app = createApp(App);

app.config.globalProperties.$filters = filters;

app.use(pinia);

app.use(router);

app.mount('#app');
