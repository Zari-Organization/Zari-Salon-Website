<template>
  <div id="app">
  <navbar-com></navbar-com>
  <!-- <fixed /> -->
  
   
   <router-view/>
 
 </div>
</template>

<script>
import NavbarCom from './components/NavbarCom';


export default {
  name: 'App',
 components: {NavbarCom, },
 
}
</script>

<!-- <style lang="scss">

   5b1c3e1..c51ffb0

   c51ffb0

</style> -->
