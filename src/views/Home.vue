<template>
    <div class="w-full h-screen ">
        <div class="w-full h-full bg-bannerMobile md:bg-banner bg-cover bg-center"></div>
    </div>

    <div class="w-full py-14">
        <div class="container mx-auto px-5 md:px-0 flex items-center justify-center flex-col md:flex-row gap-6">
            <div class="w-full md:w-[50%]">
                <p class="text-primary font-bold uppercase text-xl my-4">Join us this sunday</p>
                <p class="text-black font-bold uppercase text-4xl my-4 w-full md:max-w-xl">We are excited to have <span class="text-primary">you</span> are here! </p>
                <p class="w-full md:max-w-lg my-4">We are delighted that you are here and we want you to know that you're among friends. Whether you are new to the area, looking for a church, home, or just exploring your faith , we invite you to join us as we seek to grow in our relationship with God and with one another. Come as you are and discover the warmth of our community.</p>
            </div>

            <div class="w-full md:w-[50%]">
                <img class="" src="../assets/banner2.webp" alt="">
            </div>
        </div>
    </div>

    <div class="w-full bg-primary h-full p-10">
        <div class="container mx-auto p-5 lg:p-20">
            <div class="w-full flex flex-col lg:flex-row gap-3 items-center">
                <div class="w-full lg:w-[60%] lg:h-[700px] flex flex-col gap-6 justify-center">
                    <div class="w-full rounded-md image-container">
      <router-link to="/mission">
        <img class="max-w-full rounded-md image" src="../assets/mission.jpg" alt="">
      </router-link>
    </div>
    <div class="rounded-md image-container">
      <router-link to="/beliefs">
        <img class="max-w-full rounded-md image" src="../assets/belief.jpg" alt="">
      </router-link>
    </div>
                </div>
                <div class="w-full lg:w-[40%] lg:h-[700px] flex justify-center">
                    <div class=" w-full rounded-md">
                        <img class="lg:h-full max-w-full rounded-md" src="../assets/founder.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-container {
  transition: transform 0.3s ease;
}

.image-container:hover .image {
  transform: scale(1.1); /* Zoom in when hovering */
}

.image {
  transition: transform 0.3s ease;
}
</style>