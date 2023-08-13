import './style.css'
import 'animate.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import App from './App.vue'
import router from './router'
import { pinia }  from './stores'
import { createApp } from 'vue'

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');