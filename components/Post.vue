<template>
  <li class="post">
    <span class="id">{{ id }}) </span>
    <span class="title">{{ title }} </span>

    <blockquote class="body">{{ body }}</blockquote>
  </li>
</template>

<script>
export default {
  name: "Post",
  props: [
    'id', 'title', 'body'
  ]
}
</script>

<style scoped>
.post {
  margin: 5px;
  padding: 5px;
}

.title {
  font-weight: bold;
}

.body {
  font-weight: lighter;
  font-style: italic;
}

</style>
