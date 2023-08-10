<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const router = useRouter();
const email = ref("");
const password = ref("");
const errMsg = ref("");
const isLoading = ref(false);
const subscription = ref(null);

const fetchSubscriptions = async () => {
    isLoading.value = true;
    const auth = getAuth();
    if (auth.currentUser) { // Check if user is authenticated
        const db = getFirestore();
        const subsRef = collection(
            db,
            "customers", auth.currentUser.uid, "subscriptions"
        );

        const subsQuery = query(
            subsRef,
            where("status", "in", ["trialing", "active", "past_due", "unpaid"])
        );

        subscription.value = await getDocs(subsQuery)
            .then((sub) => sub.docs.length > 0 ? sub.docs[0].data() : null);
        console.log(subscription);
        isLoading.value = false;
    } else {
        isLoading.value = false;
    }
};

onMounted(() => {
    fetchSubscriptions();
    console.log(subscription);
});
</script>

<template>
    <div>
    </div>
</template>
