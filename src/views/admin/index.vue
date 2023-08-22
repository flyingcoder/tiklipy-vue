<script setup>
    import { onAuthStateChanged } from "firebase/auth";
    import { ref } from "vue";
    import InviteCodeModel from "../../models/InviteCode";
    import { auth } from "../../plugins/firebase";

    const codes = ref([]);
    const inviteCodes = ref('');
    const invite = new InviteCodeModel();
    const success = ref('');

    const submitCodes = async () => {
        onAuthStateChanged(auth, async (user) => {
            if(inviteCodes.value !== '') {
                await invite.addCodes([inviteCodes.value]);
                success.value = 'success';
            } else {
                success.value = 'walay sulod imong text area bulok'
            }
        })
    }
</script>

<template>
    <div class="lg:container md:mx-auto">
        <div class="bg-white w-[50vw] mx-auto mt-20">
            <div class="p-5">
                {{ success }} <br><br>
                <label for="codes">Add codes separete with comma</label>
                <button @click="submitCodes" class="px-6 py-2 mb-4 ml-10 text-white bg-main-color">Add</button>
                <textarea class="block" v-model="inviteCodes" id="" cols="80" rows="3"></textarea>
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