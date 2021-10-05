<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style>
/* CSS Reset */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

  display: grid;
  grid-template-columns: 1fr 6fr;

  height: 100vh;
  width: 100vw;
}

.content {
  background-color: #ebedef;
  overflow-x: hidden;
  
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
