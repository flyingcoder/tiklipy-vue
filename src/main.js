import './style.css'
import 'animate.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { firebaseApp } from './plugins/firebase'
import { getAnalytics } from "firebase/analytics"

getAnalytics(firebaseApp);

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount('#app');