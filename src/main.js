import './style.css'
import 'animate.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseApp } from './plugins/firebase'
import { getAnalytics } from "firebase/analytics";

getAnalytics(firebaseApp)

const app = createApp(App)

app.use(router)

app.mount('#app')
