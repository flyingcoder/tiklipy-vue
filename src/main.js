import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from './plugins/firebase'
import { getAnalytics } from "firebase/analytics";

getAnalytics(firebase)

const app = createApp(App)

app.use(router)

app.mount('#app')
