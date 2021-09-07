<template>
  <header>
    <NavBar/>
  </header>
  <div class="content">
    <router-view />
  </div>
  <footer>
    <Footer/>
  </footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  padding-top: 80px;
  background-color: #F0B71A;
}
</style>
