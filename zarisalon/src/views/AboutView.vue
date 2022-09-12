<template>
  <div class="about">
    <section class="page-header">
      <h1>About</h1>
      <ul class="bread-crumbs">
        <li class="bread-crumbs__item">
          <router-link to="/" class="bread-crumbs__link">Home</router-link>
        </li>
        <li class="bread-crumbs__item fw-bold">About</li>
      </ul>
    </section>

<promo-video />
<WhyusSection />
<PricingSection />
<TestimonialsSection />
<TeamSection />
<CounterSection />
<SubscribeSection />
<FooterSection />


</div>
</template>

<script>
  import promoVideo from '@/components/promoVideo';
import FooterSection from '@/components/FooterSection.vue';
import WhyusSection from '@/components/WhyusSection.vue';
import CounterSection from '../components/CounterSection.vue';
import SubscribeSection from '@/components/SubscribeSection.vue';
import PricingSection from '@/components/PricingSection.vue';
import TeamSection from '@/components/TeamSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';


export default {
  components:{
    promoVideo,
    FooterSection,
    WhyusSection,
    CounterSection,
    SubscribeSection,
    PricingSection,
    TeamSection,
    TestimonialsSection
}
}
</script>



<style lang="scss" scoped>
  @import '../scss/_variables';
  @import '../scss/style.scss';
  
 
/* =================== */


</style>