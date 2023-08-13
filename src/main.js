import './style.css'
import 'animate.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { firebaseApp } from './plugins/firebase'
import { getAnalytics } from "firebase/analytics"
import { useAuthStore } from "./stores/auth.js";

getAnalytics(firebaseApp);

const app = createApp(App);
const pinia = createPinia();

// const auth = getAuth();

app.use(pinia);
app.use(router);

const authStore = useAuthStore();
authStore.getFirebaseUser();
authStore.fetchSubscription();

const removeListener = authStore.$subscribe((mutations, state) => {
    console.log(state)
    if(state.authUser) {
        if(!state.authSubscription) {
            authStore.fetchSubscription();
            removeListener();
        }
    }
});

app.mount('#app');