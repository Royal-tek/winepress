<template>
    <div class="w-full bg-white">
        <div class="w-full px-5 md:px-0 py-3 container mx-auto flex justify-between items-center">
            <div>
            <router-link to="/">
                <img src="../assets/logo.png" class="h-20 cursor-pointer" alt="">
            </router-link>
            </div>

            <div class="hidden md:flex gap-12 justify-between">
            <router-link to="/" class="text-[#667085] cursor-pointer font-bold hover:text-primary">Home</router-link>
            <router-link to="/" class="text-[#667085] cursor-pointer font-bold hover:text-primary">Giving</router-link>
            <span class="text-[#667085] cursor-pointer font-bold hover:text-primary" @click="triggerMinistries">Ministries</span>
            <router-link to="/events" class="text-[#667085] cursor-pointer font-bold hover:text-primary">Events</router-link>
            </div>

            <div class="block md:hidden">
                <i class="fa fa-bars cursor-pointer" @click="mobileNav = !mobileNav"></i>
            </div>
        </div>
    </div>

    <div class="w-full bg-primary absolute" ref="ministriesDropdown" v-if="ministries" v-click-away="closeMinistries">
    <div class="container px-5 md:px-0 py-5 mx-auto">
        <div class="w-full flex flex-col md:flex-row gap-8 py-4">
        <div class="w-full md:w-[30%] hover:bg-[#A0588F] cursor-pointer p-3 rounded-md">
            <p class="text-xl uppercase font-bold text-white my-1">Men of ministry</p>
            <p class="text-white text-sm md:max-w-md">The righteous man walks in his integrity; his children are blessed after him.</p>
        </div>

        <div class="w-full md:w-[30%] hover:bg-[#A0588F] cursor-pointer p-3 rounded-md">
            <p class="text-xl uppercase font-bold text-white my-1">Gracious Women</p>
            <p class="text-white text-sm md:max-w-md">A gracious woman gains honor.</p>
        </div>
        </div>

        <div class="w-full flex flex-col md:flex-row gap-8 py-4">
        <div class="w-full md:w-[30%] hover:bg-[#A0588F] cursor-pointer p-3 rounded-md">
            <p class="text-xl uppercase font-bold text-white my-1">Royalties: Children and Teens</p>
            <p class="text-white text-sm md:max-w-md">Children are a heritage from the LORD, offspring a reward from him.</p>
        </div>

        <div class="w-full md:w-[30%] hover:bg-[#A0588F] cursor-pointer p-3 rounded-md">
            <p class="text-xl uppercase font-bold text-white my-1">Youths</p>
            <p class="text-white text-sm md:max-w-md">We are known as High Flyers.</p>
        </div>
        </div>
    </div>
    </div>

    <div class="md:hidden w-full bg-white absolute flex flex-col border-t" v-if="mobileNav">
        <div class="px-2 py-3 cursor-pointer">
            <router-link class="text-[#667085] hover:text-primary" to="/">Home</router-link>
        </div>

        <div class="px-2 py-3 cursor-pointer">
            <router-link class="text-[#667085] hover:text-primary" to="/">Giving</router-link>
        </div>
        <div class="px-2 py-3 cursor-pointer flex flex-col">
            <span @click="toggleMobileMinistries" class="flex items-center gap-2 text-[#667085] hover:text-primary"><span>Ministries</span> <i class="fa fa-caret-down"></i> </span>
            <div class="flex flex-col gap-1" v-if="mobileMinistries">
                <router-link class="my-3 text-sm" to="/">Men of Ministry</router-link>
                <router-link class="my-3 text-sm" to="/">Gracious Women</router-link>
                <router-link class="my-3 text-sm" to="/">Royalties: Children and Teens</router-link>
                <router-link class="my-3 text-sm" to="/">Youths</router-link>
            </div>
        </div>
        <div class="px-2 py-3 cursor-pointer">
            <router-link class="text-[#667085] hover:text-primary" to="/events">Events</router-link>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            ministries: false,
            mobileNav: false,
            mobileMinistries: false
        };
    },
    methods: {
        triggerMinistries() {
            this.ministries = !this.ministries;
        },
        closeMinistries() {
            this.ministries = false;
        },
        toggleMobileMinistries(){
            this.mobileMinistries = !this.mobileMinistries
        }
    },
};
</script>