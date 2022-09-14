<template>
    <div>
        <section class="page-header">
            <h1>Online Booking</h1>
            <ul class="bread-crumbs">
                <li class="bread-crumbs__item">
                    <router-link to="/" class="bread-crumbs__link">Home</router-link>
                </li>
                <li class="bread-crumbs__item fw-bold">Booking</li>
            </ul>
          
        </section>
        <BookingSection />
        <PricingSection />
        <WhyusSection />
        <SubscribeSection />
        <FooterSection />



    </div>
</template>

<script>
    import SubscribeSection from '@/components/SubscribeSection.vue';
    import FooterSection from '@/components/FooterSection.vue';
import PricingSection from '@/components/PricingSection.vue';
import BookingSection from '@/components/BookingSection.vue';
import WhyusSection from '@/components/WhyusSection.vue';


    
export default {
  components:{
    SubscribeSection,
    FooterSection,
    PricingSection,
    BookingSection, 
    WhyusSection
}}

</script>