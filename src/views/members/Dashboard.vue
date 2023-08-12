<script setup>
    import { TheCard } from 'flowbite-vue'
</script>

<template>
    <div class=" mt-7 px-3">
        <div class="mb-16">
            <div class="flex flex-wrap items-stretch max-lg:justify-center">
                <router-link class="flex" :to="{name: 'generate'} ">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z"/>
                            </svg>
                            <h1 class="font-normal text-xl group-hover:text-gray-500 mb-1">Newsletter</h1>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">Generate a Newsletter, Blog Entry, or Class Update.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Effortlessly create personalized letters and updates in an instant.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-10 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 1h10M6 5h10M6 9h10M1.49 1h.01m-.01 4h.01m-.01 4h.01"/>
                            </svg>
                            <div class="font-normal text-xl group-hover:text-gray-500 mb-1">Lesson Planning</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Create a Five-E Model Lesson Plan.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Devise a lesson plan that encourages active learning by incorporating five distinct stages.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                            <div class="font-medium text-lg group-hover:text-gray-500">Email</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Produce an E-letter</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Produce impactful emails with tailored style and substance.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                            </svg>
                            <div class="font-medium text-lg group-hover:text-gray-500">Curriculum</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Create an Article, Passage, or Brief Narrative.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Effortlessly generate content that is customized to match your specific needs and preferences.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
            </div>
        </div>
        <div class="mb-16">
            <div class="block justify-center font-semibold mb-6">
                <span class="text-purple-600 tracking-wider text-sm uppercase mt-0 mb-1 font-poppins font-bold leading-6">FUNDAMENTALS</span>
                <h2 class="text-gray-800 text-3xl mt-2">Concentrate on the fundamentals.</h2>
            </div>
            <div class="flex flex-wrap max-lg:justify-center">
                <router-link class="flex" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                            </svg>
                            <div class="font-medium text-lg group-hover:text-gray-500">Relationships</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Generate Feedback or Offer Constructive Criticism.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Offer valuable assistance and direction to both colleagues and students.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3a3 3 0 1 1-1.614 5.53M15 12a4 4 0 0 1 4 4v1h-3.348M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
                            </svg>
                            <div class="font-medium text-lg group-hover:text-gray-500">Classroom</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Effectively Oversee Problematic Behavior.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Explore successful approaches to managing difficult behavior.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 0v6M4.5 7A2.5 2.5 0 0 1 7 4.5"/>
                            </svg>
                            <div class="font-medium text-lg group-hover:text-gray-500">Language Arts</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Effectively Oversee Problematic Behavior.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Efficiently generate a multitude of interesting questions from any written material.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
                            </svg>
                            <div class="font-medium text-lg group-hover:text-gray-500">Curriculum</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Make a Complex Idea Easy to Understand.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Make a subject or standard easier to understand by finding clear and simplified explanations.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
            </div>
        </div>
        <div class="mb-16">
            <div class="block justify-center font-semibold mb-6">
                <span class="text-purple-600 tracking-wider text-sm uppercase mt-0 mb-1 font-poppins font-bold leading-6">TRY A NEW APPROACH</span>
                <h2 class="text-gray-800 text-3xl mt-2">Useful Quick Tips</h2>
            </div>
            <div class="flex flex-wrap max-lg:justify-center">
                <router-link class="flex" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706"/>
                            </svg>
                            <div class="font-medium text-lg group-hover:text-gray-500">Curriculum</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Create an Analogy</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Improve understanding through concept connections.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 0v6M4.5 7A2.5 2.5 0 0 1 7 4.5"/>
                            </svg>
                            <div class="font-medium text-lg group-hover:text-gray-500">Language Arts</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Conduct a Thorough Text Analysis.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Unbiasedly assess written content to identify its merits and shortcomings.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 1H1m14 18H1m2 0v-4.333a2 2 0 0 1 .4-1.2L5.55 10.6a1 1 0 0 0 0-1.2L3.4 6.533a2 2 0 0 1-.4-1.2V1h10v4.333a2 2 0 0 1-.4 1.2L10.45 9.4a1 1 0 0 0 0 1.2l2.15 2.867a2 2 0 0 1 .4 1.2V19H3Z"/>
                            </svg>
                            <div class="font-medium text-lg group-hover:text-gray-500">Science and Math</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Discover a Science or Math Experiment.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Find interactive methods to validate theories and hypotheses through practical experiments.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706"/>
                            </svg>
                            <div class="font-medium text-lg group-hover:text-gray-500">Curriculum</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Identify Similarities and Differences.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Recognize the commonalities and distinctions between two concepts.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"/>
                            </svg>
                            <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400"></p>
                            <div class="font-medium text-lg group-hover:text-gray-500">Organization</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Create A List</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Recognize and structure essential details related to any topic.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
            </div>
        </div>
    </div>
    
    
</template>