<template>
    <div>
        <section class="page-header">
            <h1>Gallery</h1>
            <ul class="bread-crumbs">
                <li class="bread-crumbs__item">
                    <router-link to="/" class="bread-crumbs__link">Home</router-link>
                </li>
                <li class="bread-crumbs__item fw-bold">Gallery</li>
            </ul>
          
        </section>
        <PricingSection />

        <WhyusSection />
        <SubscribeSection />
        <FooterSection />

    </div>
</template>

<script>
  import WhyusSection from '@/components/WhyusSection.vue';
  import PricingSection from '@/components/PricingSection.vue';
import SubscribeSection from '@/components/SubscribeSection.vue';
import FooterSection from '@/components/FooterSection.vue';
  
  export default {
    components:{
    WhyusSection,
    PricingSection,
    SubscribeSection,
    FooterSection,
}
  }
  </script>