import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import axios from '../plugins/axios';
import { ref } from 'vue';

export const useLessonStore = defineStore('lesson', () => {
    const auth = useAuthStore();
    const lessons = ref([]);
    axios.defaults.headers.common['Authorization'] = auth.authUser.accessToken;

    async function fetchLessons() {
        return await axios.get('/api/v1/lessons')
            .then((lessons) => this.lessons = lessons);
    }

    return { lessons, fetchLessons }
});