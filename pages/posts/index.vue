<template>
  <blockquote>
    <h1 class="title">Posts index page</h1>
    <p><strong>Your IP: </strong> {{ ip }}</p>
    <p><strong>testPost: </strong> {{ testPost }}</p>
    <button @click="fetchIP">fetchIP</button>
    <button @click="asyncData">asyncData</button>
    <button @click="useAsyncData(2)">useAsyncData(2)</button>
  </blockquote>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      ip: '',
      testPost: {},
    }
  },

  methods: {
    async fetchIP() {
      console.log('======================== fetchIP() ==================');
      await axios.get('https://icanhazip.com')
          .then(r => {
            console.log(r.data);
            this.ip = r.data;
          }).catch(
              error => {
                console.log(error);
              });
    },

    // You can use asyncData hook only on next pages, not in vue components
    async asyncData() {
      console.log('======================== asyncData ==================');
      const _ip = await axios.get('https://icanhazip.com');
      console.log(_ip.data);
      this.ip = _ip.data;
      return _ip.data;
    },

    async useAsyncData(params) {
      console.log('======================== useAsyncData ==================');
      console.log(params);
      const _testPost = await axios.get(`https://api.nuxtjs.dev/posts/${params}`);
      console.log(_testPost);
      this.testPost = _testPost;
      return {_testPost}
    },

  },


}


</script>

<style scoped>
.title {
  text-align: center;
  text-transform: uppercase;
  color: cornflowerblue;
}
</style>
