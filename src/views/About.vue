<script setup>
    import { useIdentityStore } from "../stores/siteIdentity";

    const sitename = useIdentityStore();
</script>
<template>
    <div class="block pt-[0.1px] mt-0 text-black text-center ">
        <div class="flex pt-1 mx-auto max-w-screen-midlg midlg:absolute sm:items-center xs:justify-center midlg:h-[600px] lg:h-[800px] midlg:w-[100vw] midlg:max-w-[unset] midlg:left-0 bg-center bg-cover bg-[url(/About-background.png)] shadow-gray-100 shadow-lg">
            <div class="block xs:max-w-[25rem] md:max-w-[35rem] midlg:max-w-[40rem] lg:max-w-[50rem] m-[5vw] sm:m-20">
                <h1 class="mb-8 text-4xl font-bold text-center text-gray-800 md:text-5xl lg:text-6xl capitalize !leading-snug">
                    Forging an innovative route to reshape the landscape of education.
                </h1>
                <div class="text-lg text-center text-gray-800 font-base">
                    Our mission is to propel education towards enhancement. Thus, we are reshaping conventions and envisioning a new paradigm for educators' work.
                </div>
            </div>
        </div>
        <div class="container mx-auto pt-10 md:mt-10 midlg:mt-[650px] lg:mt-[850px] bg-white rounded-t-lg">
            <div class="max-w-screen-sm m-auto mb-5 text-4xl font-bold text-center text-gray-700">
                    An organization characterized by empathy and dedication.
            </div>
            <div class="max-w-screen-sm pb-5 m-auto text-lg text-center text-gray-800 font-base">
                    We formulated {{sitename.siteName}} with a unique approach, distinguishing it from other educational companies.
                </div>
            <div class="flex flex-wrap justify-around mt-3">
                <div class="block mt-5 w-96 bg-white rounded-lg  p-3 sm:p-10" >
                    <img src="/Boss.svg" class="mx-auto mb-4" alt="Gift" width="150" height="150">
                    <h2 class="mb-4 text-2xl font-semibold text-center text-gray-800">Crafted by a Teaching Professional</h2>
                    <p class="text-lg text-center text-gray-500">{{sitename.siteName}} was meticulously designed by an experienced educator who deeply understands the needs of fellow teachers.</p>
                </div>
                <div class="block mt-5 w-96 bg-white rounded-lg  p-3 sm:p-10">
                    <img src="/Graduation-cap.svg" class="mx-auto mb-4" alt="Gift" width="150" height="150">
                    <h2 class="mb-4 text-2xl font-semibold text-center text-gray-800">AI possessing an educational degree</h2>
                    <p class="text-lg text-center text-gray-500">Our AI is far from ordinary; it's uniquely educated in every facet of teaching.</p>
                </div>
                <div class="block mt-5 w-96 bg-white rounded-lg p-3 sm:p-10">
                    <img src="/Trophy.svg" class="mx-auto mb-4" alt="Gift" width="150" height="150">
                    <h2 class="mb-4 text-2xl font-semibold text-center text-gray-800">Honoring our champions</h2>
                    <p class="text-lg text-center text-gray-500">Our goal is to serve as a steadfast teaching companion, prioritizing the requirements of educators above everything else.</p>
                </div>
            </div>
        </div>
        <div class="container mx-auto md:mb-[50px] ">
            <div class="flex flex-wrap bg-white rounded-b-lg justify-center">
                <div class="block lg:w-1/2 lg:px-10 place-self-center">
                    <img src="/creator.png" class="mx-auto md:mb-[50px] w-[30rem]" alt="Gift" >
                </div>
                <div class="block py-4 lg:w-1/2 place-self-center mb-[50px]">
                    <h2 class="mb-4 mx-3 text-4xl font-semibold text-gray-800 lg:text-left">Words from the creators</h2>
                    <p class="mt-10 mx-3 md:mr-10 text-lg text-gray-500 lg:text-left">
                        Greetings, we're the groups responsible for {{sitename.siteName}}.<br><br>
                        Embarking on this path more than three years ago, we were propelled by a vision to empower educators and transform the landscape of education. Our intuitive tools simplify tasks for teachers worldwide, and we're only at the beginning of our journey.<br><br>
                        Experience it firsthand. We're eagerly anticipating your feedback!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>