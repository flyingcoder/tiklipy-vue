<script setup>
    

</script>

<template>
        <div class="lg:container md:mx-auto">
        <div class="bg-white w-[50vw] mx-auto mt-20 rounded-lg">
            <div class="p-5  text-center">
                <div class=" flex justify-between mx-[10rem]">
                    <router-link :to="{name:'invite-code'}">invitation code</router-link>
                    <router-link :to="{name:'reviews'}">Reviews</router-link>
                    <router-link :to="{name:'newsletters'}">Newsletters</router-link>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>