<template>
  <div class="about">
   
<section class="page-header">
  <h1>About</h1>
  <ul class="bread-crumbs">
      <li class="bread-crumbs__item">
          <a class="bread-crumbs__link" href="/">Home</a>
      </li>
      <li class="bread-crumbs__item fw-bold">About</li>
  </ul>

</section>

<promo-video />


  </div>
</template>

<script>
  import promoVideo from '@/components/promoVideo';

export default {
  components:{
    promoVideo, 
}
}
</script>



<style lang="scss" scoped>
  @import '../scss/_variables';
  @import '../scss/style.scss';
  
 
/* =================== */


</style>