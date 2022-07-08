<template>
  <hr/>
  <!-- Markup shared across all pages, ex: NavBar -->
  <NuxtPage/>
  <hr/>

  <div class="layout">

    <Card title="Card #1"
          subtitle="passport_travel.jpg"
          imageName="passport_travel"
          key="passport_travel.jpg"
    />


    <Card title="Card #2"
          subtitle="buoy_travel.jpg"
          imageName="buoy_travel"
          key="buoy_travel.jpg"
    />

    <Card title="Card #3"
          subtitle="slippers_travel.jpg"
          imageName="slippers_travel"
          key="slippers_travel.jpg"
    />

    <Card title="Card #4"
          subtitle="swimming_googles.jpg"
          imageName="swimming_googles"
          key="swimming_googles.jpg"
    />


  </div>
</template>

<script>
import Card from "./components/Card";

export default {
  components: {Card},

}
</script>

<style scoped>
.layout {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}


</style>
