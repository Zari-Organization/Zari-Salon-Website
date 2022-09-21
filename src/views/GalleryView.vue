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

        <section class="gallery">
            <div class="container">
                <div class="row gx-4 gy-4">
            
            
                    <div class="col-sm-6 col-lg-3">
                        <div class="img-gallery px-4 d-flex justify-content-center align-items-center">
                            <img src="../assets/gallery/pic1.jpg" />
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-lg-3">
                        <div class="img-gallery px-4 d-flex justify-content-center align-items-center">
                            <img src="../assets/gallery/pic1.jpg" />
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-lg-3">
                        <div class="img-gallery px-4 d-flex justify-content-center align-items-center">
                            <img src="../assets/gallery/pic1.jpg" />
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-lg-3">
                        <div class="img-gallery px-4 d-flex justify-content-center align-items-center">
                            <img src="../assets/gallery/pic1.jpg" />
                        </div>
                
                </div>
        
                <div class="col-sm-6 col-lg-3">
                    <div class="img-gallery px-4 d-flex justify-content-center align-items-center">
                        <img src="../assets/gallery/pic1.jpg" />
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="img-gallery px-4 d-flex justify-content-center align-items-center">
                        <img src="../assets/gallery/pic1.jpg" />
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="img-gallery px-4 d-flex justify-content-center align-items-center">
                        <img src="../assets/gallery/pic1.jpg" />
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3">
                    <div class="img-gallery px-4 d-flex justify-content-center align-items-center">
                        <img src="../assets/gallery/pic1.jpg" />
                    </div>
            
            </div>
    
            </div>
        </div>


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

<style lang="scss" scoped>
    @import '../scss/_variables';
    @import '../scss/style.scss';
 
    .gallery{
        margin-bottom: 120px;
    
    }
    .gallery .img-gallery{
        background: #FFFFFF !important;
        border: 1px solid rgba(153, 153, 153, 0.15);
        box-shadow:0px 0px 8px rgba(153, 153, 153, 0.15);
        border-radius: 8px;
        height: 260px;
        overflow: hidden;
    }
    .gallery .img-gallery img{
        width: 100%;
        transition: all 0.5s;
    }
    .gallery .img-gallery:hover img{
        transform: scale(1.15,1.15);
    }
    .gallery h4{
        text-transform: capitalize;
        transition: all 0.5s;
        cursor: pointer;
    }
    .gallery:hover.gallery h4{
        color: var(--mainColor) !important;
    }
    
    /*Responsive sample section */
    
    @media screen and (max-width: 992px){
        .gallery .img-gallery img{
            width: 250px;
        }
    }
    


</style>