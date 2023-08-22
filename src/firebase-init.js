import { auth } from "./plugins/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from "./stores/auth";
import { useUserStore } from "./stores/user";

onAuthStateChanged(auth, (user) => {
    const authStore = useAuthStore();
    const userStore = useUserStore();
    if(user) {
        const appUser = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        }
        authStore.setUserToLocal(appUser);
        userStore.setUser(user);
    }
});