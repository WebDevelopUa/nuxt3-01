<template>
  <li class="post">
    <span class="id">{{ id }}) </span>

    <!--    <nuxt-link :to="`/${id}`">-->
    <nuxt-link :to="`/posts/${id}`">
      <span class="title">{{ title }} </span>
    </nuxt-link>


    <blockquote class="body">{{ body }}</blockquote>


    <nuxt-link :to="`/posts/${id}`">
      <button class="button">Read more ...</button>
    </nuxt-link>

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

.button {
  margin-left: 40px;
  border: 1px solid lightsteelblue;
  color: cornflowerblue;
  border-radius: 5px;
  padding: 5px;
}

.button:focus,
.button:hover {
  margin-left: 40px;
  border: 1px solid lightsteelblue;
  color: whitesmoke;
  background-color: cornflowerblue;
  border-radius: 5px;
  padding: 5px;
}

</style>
