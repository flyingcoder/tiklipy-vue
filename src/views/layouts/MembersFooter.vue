<script setup>
import { useIdentityStore } from "../../stores/siteIdentity";

const sitename = useIdentityStore();
</script>

<template>
    <div>
        <div class="container mx-auto">
            <footer class="mt-10">
                <div class="bottom-0 justify-between px-4 py-10 mx-16 font-light text-center md:flex md:items-center md:text-left" style="width: -webkit-fill-available">
                    <div class="mb-6 text-sm font-medium md:mb-0">© 2023 {{sitename.siteName}}. All rights reserved.</div>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <router-link :to="{name: 'terms'}">
                            <a class="block text-sm">Terms</a>
                        </router-link>
                        <router-link :to="{name: 'privacy'}">
                            <a class="block text-sm">Privacy</a>
                        </router-link>
                        <router-link :to="{name: 'license'}">
                            <a class="block text-sm">License</a>
                        </router-link>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    
</template>