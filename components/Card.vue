<template>

  <div class="card">

    <div class="card-image"
         :style="{ backgroundImage: `url(/assets/${imageName}.jpg)`}"
    />

    <h1>{{ title }}</h1>
    <p> {{ subtitle }}</p>
  </div>

</template>

<script>

export default {
  name: "Card",
  props: ["title", "subtitle", "imageName"],
}
</script>

<style scoped>
.card {
  text-align: center;
  height: 320px;
  width: 250px;
  background-color: skyblue;
  border: 1px solid dodgerblue;
  border-radius: 5px;
  margin: 10px;
  color: midnightblue;
}

.card-image {
  background-position: center;
  background-size: cover;
  height: 210px;
  width: 100%;
}
</style>
