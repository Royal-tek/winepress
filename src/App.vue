<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  
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
