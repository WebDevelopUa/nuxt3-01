<template>
  <nav class="navbar">
    <ul>
      <nuxt-link to="/">
        <li>Home</li>
      </nuxt-link>

      <nuxt-link to="/bootstrap">
        <li>Bootstrap</li>
      </nuxt-link>

      <nuxt-link to="/contacts">
        <li>Contacts</li>
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
  color: yellow;
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: skyblue;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: darkturquoise;
}

.navbar {
  height: 80px;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  justify-content: space-around;
  color: whitesmoke;
  align-items: center;
  text-transform: uppercase;
}

</style>
