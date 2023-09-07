<script setup>
    import { ref } from 'vue';
    import expressModel from "../models/express";
    import { Textarea, Button, Input } from 'flowbite-vue';
    import Swal from 'sweetalert2';

    const backEndModel = new expressModel();

    const name = ref('');
    const email = ref('');
    const subject = ref('');
    const message = ref('');

    const submitContent = () => {
        const contactData = new FormData();

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!name.value || !email.value || !subject.value || !message.value) {
            Swal.fire({
                html: `
                        <div style="display: flex; justify-content: space-between;">
                            <div>
                                <img src="Invalid-error-bongo-cat.gif" width="" height="" alt="cat">
                            </div>
                        </div>

                        <h2 class="swal2-title !p-0 text-black text-xl text-red-500" id="swal2-title" style="display: block;">Nya-oh! Please fill out the form</h2> 
                        <p class="swal2-title !py-0 px-7 text-black text-sm text-black" id="swal2-title" style="display: block;">My apologies, but the form still needs your touch, meow! Kindly complete it to share your issue. Much appreciated!</p> 
                    `,
                    width: 600,
                    padding: '',
                    color: '#716add',
                    allowOutsideClick: false,
                    confirmButtonText:'Okay',
                    backdrop: `
                        rgba(0, 0, 123, 0.4)
                        left top
                        no-repeat
                    `
                })
        } else if (!emailRegex.test(email.value)) {
            Swal.fire({
                html: `
                        <div style="display: flex; justify-content: space-between;">
                            <div>
                                <img src="Invalid-error-bongo-cat.gif" width="" height="" alt="cat">
                            </div>
                        </div>

                        <h2 class="swal2-title !p-0 text-black text-xl text-red-500" id="swal2-title" style="display: block;">Nya-oh! Email Hiccups</h2> 
                        <p class="swal2-title !py-0 px-7 text-black text-sm text-black" id="swal2-title" style="display: block;">Your email seems a bit fishy please take a moment to make sure everything is in order, nya!</p> 
                    `,
                    width: 600,
                    padding: '',
                    color: '#716add',
                    allowOutsideClick: false,
                    confirmButtonText:'Okay',
                    backdrop: `
                        rgba(0, 0, 123, 0.4)
                        left top
                        no-repeat
                    `
            })
        } else {
            contactData.append('name', name.value);
            contactData.append('email', email.value);
            contactData.append('subject', subject.value);
            contactData.append('message', message.value);
            backEndModel.addContact(contactData);
            Swal.fire({
                html: `
                        <div style="display: flex; justify-content: space-between;">
                            <div>
                                <img src="/thank-you.gif" width="" height="" alt="cat">
                            </div>
                        </div>
                        <h2 class="swal2-title !p-0 text-black text-xl text-red-500" id="swal2-title" style="display: block;">Thank you nya!</h2> 
                        <p class="swal2-title !py-0 px-7 text-black text-sm text-black" id="swal2-title" style="display: block;">Thank you for sending us your message, purr-fectly appreciated! We'll reach out to you as swiftly as a possible.</p> 
                    `,
                    width: 600,
                    padding: '',
                    color: '#716add',
                    allowOutsideClick: false,
                    confirmButtonText:'Okay',
                    backdrop: `
                        rgba(0, 0, 123, 0.4)
                        left top
                        no-repeat
                    `
                }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                    }
                });
        }
    }   
    
</script>
<template>
    <div class="my-12 py-8 lg:py-16 mx-auto max-w-screen-md bg-white px-10 rounded-xl">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send a feedback? Need details? Let us know.</p>
        <Input placeholder="e.g. Emmanuel Escol" size="md" label="Name" v-model="name" class="text-black mb-2" />
        <Input placeholder="e.g. Emmanuel@gmail.com" size="md" label="Email" v-model="email" class="text-black mb-2" />
        <Input placeholder="e.g. Question" size="md" label="Subject" v-model="subject" class="text-black mb-2" />
        <Textarea   rows="4" label="Message" v-model="message" class="text-black"></Textarea>
        <button @click="submitContent" class="px-5 py-2 mt-4 text-lg font-semibold text-white bg-main-color hover:bg-secondary-color rounded mb-2">Submit</button>
    </div>
</template>


