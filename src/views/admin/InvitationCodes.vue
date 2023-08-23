<script setup>
import { onMounted, ref } from "vue";
    import InviteCodeModel from "../../models/InviteCode";
    import AuthModel from "../../models/Auth";
    import { useRouter } from "vue-router";

    const codes = ref([]);
    const router = useRouter();
    const inputCodes = ref('');
    const invite = new InviteCodeModel();
    const auth = new AuthModel();
    const isSaving = ref(false);

    onMounted(async () => {
        await tableReload();
    })

    const parseInputCodes = () => {
        let trimed = inputCodes.value.replace(/\s+/g, '');
        const lastChar = trimed.charAt(trimed.length - 1);
        if(lastChar === ',')
            trimed = trimed.slice(0, -1);
        return trimed.split(',');
    }

    const tableReload = async () => {
        codes.value = await invite.getCodes().then((docs) => docs.data.codes );
    }

    const submitCodes = async () => {
        isSaving.value = true;
        const codes = parseInputCodes();
        const user = await auth.fireAuthState();
        if(user?.isAdmin) {
            if(codes) await invite.addCodes(codes);
            inputCodes.value = '';
            isSaving.value = false;
            tableReload();
        } else {
            router.push({ name: 'dashboard' });
        }
    }

    const generateRandomString = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const randomString = Array.from({ length: 6 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
        return randomString;
    }

    const generateCode = () => {
        inputCodes.value += generateRandomString()+', ';
    }
</script>
<template>
    <div class="lg:container md:mx-auto">
        <div class="bg-white w-[50vw] mx-auto mt-20 rounded-lg">
            <div class="p-5 text-center">
                <div class="">
                    <label class="text-center text-black" for="codes">Add codes separete with comma</label><br>
                    <button v-if="!isSaving" @click="generateCode" class="mx-1 my-5 text-white bg-main-color">Generate Code</button>
                    <button v-if="!isSaving" @click="submitCodes" class="mx-1 my-5 text-white bg-main-color">Add</button>
                    <textarea class="block w-full text-black border-gray-300 rounded-lg" v-model="inputCodes" id="" cols="80" rows="3"></textarea>
                </div>
                <h1 class="my-6 text-2xl font-bold text-black">
                    Invite Codes
                </h1>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Codes
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Emails
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Expiration
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="(item, index) in codes" :key="index +'-codes-table'" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ item.code }}
                            </th>
                            <td class="px-6 py-4">
                                {{ item.status }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.email }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.expire_at }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>