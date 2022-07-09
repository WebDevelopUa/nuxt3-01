<template>
  <div class="page-container">
    <h1 class="title">Home Page</h1>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
      going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
      necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
      The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
  </div>

</template>

<script>

export default {
  head() {
    return {
      title: "Home Page",
      meta: [
        {charset: 'utf-8'},
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Home page description 2022'
        }
      ]
    }
  },

}

</script>

<style scoped>
.title {
  text-align: center;
  text-transform: uppercase;
  color: cornflowerblue;
}

.page-container {
  margin: 20px;
}
</style>
