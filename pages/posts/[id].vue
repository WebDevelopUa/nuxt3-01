<!-- dynamic page -->
<template>
  <div class="details">
    <h1>{{ Data.id }} is {{ Data.title }}</h1>
    <p>{{ Data.body }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // init Data
  data: () => ({
    Data: {id: 0, title: 'Loading...', body: 'Please, wait ... '}
  }),

  mounted() {

    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        .then(r => {
          console.log(r.data);
          this.Data = r.data;
        }).catch(
        error => {
          console.log(error);
        });

  },


}
</script>

<style scoped>

.details {
  margin: 25px;
  padding: 25px;
}

.details h1 {
  text-align: center;
  color: cornflowerblue;
}

</style>
