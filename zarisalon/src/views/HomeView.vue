<template>
  <div class="home">
    <NavbarCom/>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NavbarCom from "@/components/NavbarCom.vue";

export default {
  name: "HomeView",
  components: {
    NavbarCom,
    HelloWorld,
    
},
};
</script>
