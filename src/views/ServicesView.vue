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

                    <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6 " >
                        <div class="service-box text-center">
                        <div class="service-images m-b15">
                            <img src="../assets/services/pic1.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                            <i><fa :icon="['fas', 'spray-can-sparkles']" /></i>                
                         </div>
                        <div class="service-content">
                            <h6 class="text-uppercase">
                                <router-link to="/services/details"  class="text-primary">Cosmetics</router-link>
                            </h6>
                        </div>
                    </div>
                </div> <!--end of item-->
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6 " >
                        <div class="service-box text-center">
                            <div class="service-images m-b15">
                                <img src="../assets/services/pic2.jpg" alt=""  data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                                <!-- <i><fa :icon="['fas', 'person-dress']" /></i>                 -->
                                <i><fa :icon="['fas', 'scissors']" /></i>                
                            </div>
                            <div class="service-content">
                                <h6 class="text-uppercase">
                                    <router-link to="/services/details"  class="text-primary" >Hairdressing</router-link>
                                </h6>
                            </div>
        
                    </div>
                </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6" >
                        <div class="service-box text-center">
                            <div class="service-images m-b15">
                                <img src="../assets/services/pic3.jpg" alt=""  data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                <i><fa :icon="['fas', 'fan']" /></i>                
                            </div>
                            <div class="service-content">
                                <h6 class="text-uppercase">
                                    <router-link to="/services/details"  class="text-primary" >Body Treatments</router-link>
                                </h6>
                            </div>
        
                    </div>
                </div>
    
                <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6">
                    <div class="service-box text-center">
                        <div class="service-images m-b15">
                            <img src="../assets/services/pic4.jpg" alt=""  data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                            <i><fa :icon="['fab', 'canadian-maple-leaf']" /></i>                
                        </div>
                        <div class="service-content">
                            <h6 class="text-uppercase">
                                <router-link to="/services/details"  class="text-primary" >Massages</router-link>
                            </h6>
                        </div>
                    </div>
        
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6 " >
                <div class="service-box text-center">
                <div class="service-images m-b15">
                    <img src="../assets/services/pic1.jpg" alt="" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                    <i><fa :icon="['fas', 'spray-can-sparkles']" /></i>                
                 </div>
                <div class="service-content">
                    <h6 class="text-uppercase">
                        <router-link to="/services/details"  class="text-primary">Cosmetics</router-link>
                    </h6>
                </div>
            </div>
        </div> <!--end of item-->
            <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6 " >
                <div class="service-box text-center">
                    <div class="service-images m-b15">
                        <img src="../assets/services/pic2.jpg" alt=""  data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        <!-- <i><fa :icon="['fas', 'person-dress']" /></i>                 -->
                        <i><fa :icon="['fas', 'scissors']" /></i>                
                    </div>
                    <div class="service-content">
                        <h6 class="text-uppercase">
                            <router-link to="/services/details"  class="text-primary" >Hairdressing</router-link>
                        </h6>
                    </div>

            </div>
        </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6" >
                <div class="service-box text-center">
                    <div class="service-images m-b15">
                        <img src="../assets/services/pic3.jpg" alt=""  data-bs-toggle="modal" data-bs-target="#exampleModal" />
                        <i><fa :icon="['fas', 'fan']" /></i>                
                    </div>
                    <div class="service-content">
                        <h6 class="text-uppercase">
                            <router-link to="/services/details"  class="text-primary">Body Treatments</router-link>
                        </h6>
                    </div>

            </div>
        </div>

        <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6">
            <div class="service-box text-center">
                <div class="service-images m-b15">
                    <img src="../assets/services/pic4.jpg" alt=""  data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                    <i><fa :icon="['fab', 'canadian-maple-leaf']" /></i>                
                </div>
                <div class="service-content">
                    <h6 class="text-uppercase">
                        <router-link to="/services/details"  class="text-primary" >Massages</router-link>
                    </h6>
                </div>
            </div>

    </div>

    

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Service Details</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
        
            
                            
                <section class="service-details">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4" style="padding-right: 20px">
                                <img src="../assets/services/pic1.jpg" class="img-responsive"/>
                            </div>
        
                            <div class="col-md-8">
                                <h4 class="styled">Facial <strong>$60</strong><sup> (from)</sup><span> Pellentesque amet adipiscing scelerisque</span></h4>
                                <p>
                                     Lorem ipsum dolor sit amet, pellentesque amet adipiscing scelerisque, vitae urna aenean, justo malesuada at eu, orci varius risus luctus enim a malesuada. Erat in tempor magna, eget porttitor posuere.
                                </p>
                                <ul class="additional_info">
                                    <li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="" data-original-title="Shower available"><i><fa icon="fa-solid fa-hand-sparkles" /></i></a></li>
                                    <li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="" data-original-title="Towels available"><i><fa :icon="['fas', 'hot-tub-person']" /></i></a></li>
                                    <li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="" data-original-title="Slippers"><i><fa :icon="['fas', 'spa']" /></i></a></li>
                                    <li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="" data-original-title="Slippers"><i><fa :icon="['fas', 'spray-can-sparkles']" /></i></a></li>
                                </ul>
                                <!-- <p>
                                    <router-link class="btn main-btn py-2 px-4 me-3" to="/booking">Book Appointment</router-link>
                                </p> -->
                            </div>
                        </div>
                    </div>
                </section>
        
                        </div>
                   
                <div class="modal-footer">
                  <button type="button" class="btn second-btn py-2 px-4 me-3 " data-bs-dismiss="modal">Close</button>
                  <!-- <router-link  to="/booking" class="btn main-btn py-2 px-4 me-3"  data-bs-dismiss="modal" >Book Appointment</router-link> -->
        
                </div>
              </div>
            </div>
          </div>
        
    
      
    
            <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button> -->
      
    
    
<!--            
      <div class="col-12 text-center">
        <router-link class="btn main-btn py-2 px-4 mt-5" to="/services">See All Services</router-link>
    </div>
             -->
    
    
                </div>



            </div>
        </section>
        <TeamSection />
        <PromoVideo />
        <TestimonialsSection />
        <SubscribeSection />
        <FooterSection />



    </div>
</template>

<script>
    import SubscribeSection from '@/components/SubscribeSection.vue';
    import FooterSection from '@/components/FooterSection.vue';
import PromoVideo from '@/components/promoVideo.vue';
import TeamSection from '@/components/TeamSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';

    
export default {
  components:{
    SubscribeSection,
    FooterSection,
    PromoVideo,
    TeamSection,
    TestimonialsSection
}}

</script>

<style lang="scss">

    @import '../scss/_variables.scss';
    @import '../scss/style.scss';
    
.service-details{
    margin-bottom: 120px;
}
  h4.styled {
    font-size: 24px;
    margin-bottom: 20px;
}

h4.styled sup {
    font-size: 12px;
    color: #999;
}

h4.styled span {
    font-size: 18px;
    display: block;
    margin-top: 5px;
    color: #555;
    font-weight: 400;
}

p {
    margin-bottom: 20px;
}

ul.additional_info {
    list-style: none;
    padding: 0;
    margin: 25px 0 30px;
    font-size: 30px;
}

ul.additional_info li {
    display: inline-block;
    margin: 0 5px 10px 0;
}
ul.additional_info li a {
    display: inline-block;
    background-color: #f6f6f6;
    border-radius: 3px;
    width: 50px;
    height: 50px;
    line-height: 60px;
    text-align: center;
    color: #555;
    transition: 0.2s;
    margin-right: 10px;
}
ul.additional_info li a:hover {
    color: $main-color;
}




</style>