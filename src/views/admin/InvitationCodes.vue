<script setup>
    import { onMounted, ref } from "vue";
    import InviteCodeModel from "../../models/InviteCode";
    import AuthModel from "../../models/Auth";
    import { useRouter } from "vue-router";
    import { Input, Button } from 'flowbite-vue';

    const codes = ref([]);
    const inputCodes = ref('');
    const invite = new InviteCodeModel();
    const isSaving = ref(false);

    onMounted(async () => {
        await tableReload();
    })

    const deleteCode = async (codename) => {
        const code = {
            code: codename
        }
        await invite.deleteCode(code);
        await tableReload();
    }

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
        if(inputCodes.value == '')
            return 0;
        isSaving.value = true;
        const codes = parseInputCodes();
        if(codes) await invite.addCodes(codes);
        inputCodes.value = '';
        isSaving.value = false;
        tableReload();
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
        <div class="mx-auto bg-white">
            <div class="p-5 text-center">
                <div v-if="!isSaving">
                    <h1 class="text-3xl font-semibold text-center text-black">
                        Generate or add new invite codes.
                    </h1>
                    <div class="relative flex flex-wrap items-stretch my-4">
                        <span @click="generateCode" class="cursor-pointer flex bg-blue-800 text-white items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-blue-800 px-3 py-[0.5rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
                            Generate Codes
                        </span
                        >
                        <input
                            v-model="inputCodes"
                            type="text"
                            class="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            placeholder="Click the generate button or write the code here separated by comma." />
                        <span @click="submitCodes" class="text-white cursor-pointer bg-blue-800 flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-blue-800 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
                            Save Codes
                        </span
                        >
                    </div>
                </div>
                <div v-if="isSaving" class="flex items-center justify-center">
                    <div class="w-max">
                        <p class="overflow-hidden text-2xl font-bold border-r-4 animate-typing whitespace-nowrap border-r-white">
                            Saving the codes ...
                        </p>
                    </div>
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
                            <th scope="col" class="px-6 py-3 text-right">
                                Actions
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
                            <td class="px-6 py-4 text-right text-gray-600">
                                <i class="ti ti-pencil text-2xl cursor-pointer"></i>
                                <i class="ti ti-trash text-2xl cursor-pointer" @click="deleteCode(item.code)"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>