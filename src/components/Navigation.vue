<script setup></script>

<template>
    <nav class="mx-auto border-gray-200 dark:bg-gray-900 max-w-screen-2xl">
        <div class="flex flex-wrap items-center justify-between px-4 py-6 mx-auto max-lg:justify-end">
            <div class="relative z-10 flex items-center lg:order-3">
                <slot name="right"></slot>
            </div>
            <div class="absolute inset-x-0 z-0 top-4 md:order-2">
                <slot name="center"></slot>
            </div>
            <div id="mega-menu" class="relative z-10 items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
                <slot name="left"></slot>
            </div>
        </div>
    </nav>
</template>