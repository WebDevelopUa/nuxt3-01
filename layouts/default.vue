<template>
  <div class="body">
    <Navbar/>
    <Cards/>
    <NuxtPage/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./navbar";
import Footer from "./footer";
import Cards from "../components/Cards";

export default {
  components: {Cards, Footer, Navbar}
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: chartreuse;
}

.body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
}
</style>
