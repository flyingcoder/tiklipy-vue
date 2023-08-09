<script setup>
    import { TheCard } from 'flowbite-vue'
</script>

<template>

    <section class="bg-secondary-color dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-4 text-4xl pt-7 font-semibold tracking-tight leading-none text-white md:text-3xl lg:text-5xl dark:text-white">Unleashed Insights: Our Blog</h1>
            <p class="mb-8 mt-7 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Tales of Teaching, Technology, and Education.</p>
        </div>
    </section>

    <div class="container mx-auto mt-32">
        <div class="grid 2xl:lg-grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 justify-items-center">
            <the-card variant="image" class="mb-5 cursor-pointer" img-src="https://flowbite.com/docs/images/blog/image-1.jpg" img-alt="Desk">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tiklipy and Artificial Intelligence (AI): An Amicable Overview</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    If you're familiar with AI, you might be curious about its essence. Here's an insight into what educators should understand concerning generative AI models and their distinctions from Tiklipy.
                </p>
            </the-card>
            <the-card variant="image" class="mb-5 cursor-pointer" img-src="https://flowbite.com/docs/images/blog/image-1.jpg" img-alt="Desk">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tiklipy's FAQ: A Complete Guide to Addressing Your Queries</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    Presented below are the most significant technology acquisitions within the enterprise sector for the year 2021, listed in reverse chronological order.
                </p>
            </the-card>
            <the-card variant="image" class="mb-5 cursor-pointer" img-src="https://flowbite.com/docs/images/blog/image-1.jpg" img-alt="Desk">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Commencement: Enabling Our Expertise to Assist Your Endeavors</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                HCome aboard as we unveil our narrative. Unearth the roots of our inception and glimpse into our future vision, as we persist in making a distinctive impact for educators through our innovative methodology.
                </p>
            </the-card>
        </div>
    </div>
</template>