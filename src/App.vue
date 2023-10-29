<script>
import { mapGetters} from 'vuex'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar, Footer
  },
  computed: {
    ...mapGetters(['getGive'])
  },
  methods: {
    closeGive(){
      this.$store.state.give = false
    }
  }
}
</script>

<template>

  <div class="fixed top-0 left-0  bg-black bg-opacity-60 w-full h-full flex items-center justify-center z-50" v-if="getGive">
    <div class="w-max p-5 bg-white rounded-md">
      <div class="w-full flex justify-between items-center border-b">
        <div><p class="font-bold text-2xl">Give</p></div>
        <div><span class="fa fa-times text-2xl cursor-pointer" @click="closeGive"></span></div>
      </div>

      <div class="flex gap-8 my-3 justify-between">
        <p class="text-xl">Bank Name </p>
        <p class="text-xl"> - </p>
        <p class="text-xl">First Bank</p>
      </div>

      <div class="flex gap-8 my-3 justify-between">
        <p class="text-xl">Account Number </p>
        <p class="text-xl"> - </p>
        <p class="text-xl">2022039123</p>
      </div>

      <div class="flex gap-8 my-3 justify-between">
        <p class="text-xl">Account Name </p>
        <p class="text-xl"> - </p>
        <p class="text-xl text-right">Wine Press International</p>
      </div>

      

    </div>
  </div>
  
  <Navbar />
  <div>
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<style>
body{
  font-family: 'Poppins', sans-serif;
}

</style>
