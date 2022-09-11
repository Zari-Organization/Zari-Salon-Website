<template>
    <div>
        <section class="page-header">
            <h1>Services</h1>
            <ul class="bread-crumbs">
                <li class="bread-crumbs__item">
                    <router-link to="/" class="bread-crumbs__link">Home</router-link>
                </li>
                <li class="bread-crumbs__item fw-bold">Services</li>
            </ul>
          
        </section>
        

        <!-- ----------------------------- services section ----------------- -->

        <section id="services" class="services pt-115 pb-90">

            <div class="container text-center">
        
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="main-title text-center py-3 w-85 mx-auto mb-4">
                            <h1 class="text-primary m-b10 fw-bold text-capitalize">Our Services</h1>
                            <h6 class="m-b10">You Will Like To Look Like Goddes Every Day!</h6>
                        </div>        
                    </div>
        
                </div><!-- end or row -->

                <div class="row">

                    <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6 ">
                        <div class="service-box text-center">
                        <div class="service-images m-b15">
                            <img src="../assets/services/pic1.jpg" alt="" />
                            <i><fa :icon="['fas', 'spray-can-sparkles']" /></i>                
                         </div>
                        <div class="service-content">
                            <h6 class="text-uppercase"><a href="services-details.html" class="text-primary">Cosmetics</a></h6>
                        </div>
                    </div>
                </div> <!--end of item-->
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6 ">
                        <div class="service-box text-center">
                            <div class="service-images m-b15">
                                <img src="../assets/services/pic2.jpg" alt="" />
                                <i><fa :icon="['fas', 'person-dress']" /></i>                
                            </div>
                            <div class="service-content">
                                <h6 class="text-uppercase"><a href="services-details.html" class="text-primary">Hairdressing</a></h6>
                            </div>
        
                    </div>
                </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6">
                        <div class="service-box text-center">
                            <div class="service-images m-b15">
                                <img src="../assets/services/pic3.jpg" alt="" />
                                <i><fa :icon="['fas', 'fan']" /></i>                
                            </div>
                            <div class="service-content">
                                <h6 class="text-uppercase"><a href="services-details.html" class="text-primary">Body Treatments</a></h6>
                            </div>
        
                    </div>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6 ">
                    <div class="service-box text-center">
                        <div class="service-images m-b15">
                            <img src="../assets/services/pic4.jpg" alt="" />
                            <i><fa :icon="['fab', 'canadian-maple-leaf']" /></i>                
                        </div>
                        <div class="service-content">
                            <h6 class="text-uppercase"><a href="services-details.html" class="text-primary">Massages</a></h6>
                        </div>
                    </div>
        
            </div>
            


                </div>
            </div>
        </section>
        <PromoVideo />
        <SubscribeSection />
        <FooterSection />



    </div>
</template>

<script>
    import SubscribeSection from '@/components/SubscribeSection.vue';
    import FooterSection from '@/components/FooterSection.vue';
import PromoVideo from '@/components/promoVideo.vue';

    
export default {
  components:{
    SubscribeSection,
    FooterSection,
    PromoVideo
}}

</script>