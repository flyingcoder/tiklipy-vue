<script setup>
    import { ref, defineProps } from "vue"
    import { Modal } from "flowbite-vue"
    import { useRouter } from "vue-router"
    import { getAuth, 
        signInWithEmailAndPassword,
        GoogleAuthProvider,
        FacebookAuthProvider,
        signInWithPopup, 
    } from "firebase/auth"

    defineProps({
        isShowLogin: Boolean,
    });

    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const errMsg = ref();
    
    const signIn = async () => {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                console.log(auth.currentUser)
                router.push('dashboard')
            })
            .catch(() => {
                errMsg.value = "Email or password was incorrect."
            });
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider)
            .then((res) => {
                console.log(res.user);
                router.push('dashboard')
            })
            .catch((error) => {
                console.log(error.message)
            })
    };

    const signInWithFacebook = () => {
        const provider =  new FacebookAuthProvider();
        signInWithPopup(getAuth(), provider)
            .then((res) =>  {
                console.log(res.user);
                router.push('dashboard')
            })
    };
</script>

<template>
    <Modal size="lg" v-if="isShowLogin" @close="isShowLogin = !isShowLogin">
        <template #header>
            <div>
                modal head
            </div>
        </template>
        <template #body>
            <div>
                modal body
            </div>
        </template>
    </Modal>
</template>