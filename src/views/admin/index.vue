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
    const success = ref('');

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
        const codes = parseInputCodes();
        const user = await auth.fireAuthState();
        if(user?.isAdmin) {
            if(codes) await invite.addCodes(codes);
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
        <div class="bg-white w-[50vw] mx-auto mt-20">
            <div class="p-5">
                {{ success }} <br><br>
                <label for="codes">Add codes separete with comma</label>
                <button @click="generateCode" class="px-6 py-2 mb-4 ml-10 text-white bg-main-color">Generate Code</button>
                <button @click="submitCodes" class="px-6 py-2 mb-4 ml-10 text-white bg-main-color">Add</button>
                <textarea class="block" v-model="inputCodes" id="" cols="80" rows="3"></textarea>
                <h1 class="text-lg">
                    Invite Codes
                </h1>
                <table>
                    <tr>
                        <th>Codes</th>
                        <th>Emails</th>
                        <th>Status</th>
                        <th>Expiration</th>
                    </tr>
                    <tr v-for="(item, index) in codes" :key="index +'-codes-table'">
                        <td>{{ item.code }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.status }}</td>
                        <td>{{ item.expire_at }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>