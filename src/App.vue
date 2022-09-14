<template>
  <div id="app">
    <fa icon="coffee"></fa>
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
</style> -->
