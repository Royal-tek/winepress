<template>
    <div class="w-full bg-white py-10">
        <div class="container mx-auto px-5 md:px-0 flex flex-col md:flex-row gap-6">
            <div class="w-[70%]">
                <div class="w-full grid md:grid-cols-2 gap-4 font-semibold">
                    <div class="col-span-1">
                        <h2 class="font-bold text-2xl">Winepress Ministries</h2>
                        <div class="flex flex-col gap-3 mt-4">
                            <h4><router-link to="/mission">Mission and Vision</router-link></h4>
                            <h4>Founders</h4>
                            <h4><router-link to="/beliefs">Our beliefs</router-link></h4>
                            <h4><router-link to="/events">Events</router-link></h4>
                        </div>
                    </div>
                    <div class="col-span-1">
                        <h2 class="font-bold text-2xl">Ministries</h2>
                        <div class="flex flex-col gap-3 mt-4">
                            <h4><router-link to="/ministries/men-of-integrity">Men of Integrity</router-link></h4>
                            <h4><router-link to="/ministries/gracious-women">Gracious Women</router-link></h4>
                            <h4><router-link to="/ministries/royalties">Children and Teens</router-link></h4>
                            <h4><router-link to="/ministries/youths">Youths</router-link></h4>
                        </div>
                    </div>
                    
                </div>

            </div>

            <div class="w-full md:w-[30%]">
                <div class="bg-[#81276D] w-full px-5 py-10 rounded-xl font-medium ">
                    <div class="flex items-center  gap-3">
                        <img src="../assets/logo.png" class="h-10" alt="">
                        <span class="text-white font-bold">Winepress Ministries</span>
                    </div>
                    <div class="my-3 flex flex-col gap-2">
                        <h3 class="text-white">Phone 1: 08033187607</h3>
                        <h3 class="text-white">Phone 2: 08034098342</h3>
                    </div>

                    <div class="my-4">
                        <span class="text-white ">Winepress Headquarters</span>
                        <div class="flex flex-col gap-2">
                            <h3 class="text-white">35/37 Mcc Road Aba</h3>
                        </div>
                        
                    </div>

                    <div class="my-4">
                        <h3 class="text-white">Copyright &copy; 2023 Winepress Ministries All rights reserved.</h3>
                    </div>

                    <div class="mt-4 flex gap-6">
                        <i class="bi bi-facebook text-xl"></i>
                        <i class="bi bi-twitter text-xl"></i>
                        <i class="bi bi-youtube text-xl"></i>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>