<template>
  <div class="page-container">
    <h1 class="title">Bootstrap Page</h1>
    <p class="container">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
      letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
      for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>

    <!--  https://getbootstrap.com/docs/4.6/components/alerts/  -->
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr>
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>


  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Bootstrap Page",
      meta: [
        {charset: 'utf-8'},
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Bootstrap page description 2022'
        }
      ]
    }
  }
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
