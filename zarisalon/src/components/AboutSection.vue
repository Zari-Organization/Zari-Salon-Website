<template>
    <div>
        <section id="about" class="about pb-90">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12">
                        <div class="about-content mb-30">
                            <span class="small-title ">Luxury SPA premium service</span>
        
                            <h2 class="black-title">Quiet Service Salon, Spa, Massage Service Providor Center.</h2>
                            <p class="mb-4 py-1">We offer a full range of hairdressing services for men and women, eyebrow and eyelash care, the services of make-up artists and stylists. Entrust your beauty to professionals who really care about...
                                
                            </p>
        
                            <div class="buttons">
                                <router-link class="btn main-btn py-2 px-4 me-3" to="/booking">Book Appointment</router-link>
                                <router-link class="btn second-btn py-2 px-4" to="/about">Read More</router-link>

                            </div>
                        </div>
        
                    </div>
        
                    <div class="col-xl-6 col-lg-6 col-md-12">
        
                        <div class="about-img mb-30">
        
                            <img src="../assets/home/about.png" alt="">
        
                        </div>
        
                    </div>
        
                </div>
        
            </div>
        
        </section>

    </div>
</template>


<script>
    
export default {
    name: 'AboutSection',
}

import $ from "jquery";

</script>

<style lang="scss">
    @import '../scss/_variables';
    @import '../scss/style.scss';


    

.about {
    background-position: center left;
    background-size: cover; 
    margin-bottom: 120px;
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .about {

        background-position: center left; } }
  
    @media only screen and (min-width: 768px) and (max-width: 991px) {
  
      .about {
  
        background-position: center left; } }
  
    @media only screen and (min-width: 576px) and (max-width: 767px) {
  
      .about {
  
        background-position: center left; } }
  
    @media (max-width: 575px) {
  
      .about {
  
        background-position: center left; } }
  
  
  
  .about-content span {
  
    margin-bottom: 25px;
  
    display: block; }
  
    @media only screen and (min-width: 768px) and (max-width: 991px) {
  
      .about-content span {
  
        margin-bottom: 15px; } }
  
    @media (max-width: 767px) {
  
      .about-content span {
  
        margin-bottom: 15px; } 
    }
  
  

  
    @media only screen and (min-width: 992px) and (max-width: 1200px) {
  
      .about-content h2 {
  
        padding-right: 0;
  
        font-size: 40px; } }
  
    @media only screen and (min-width: 768px) and (max-width: 991px) {
  
      .about-content h2 {
        padding-right: 0;
        font-size: 40px; 
      } 
    }
  
    @media (max-width: 767px) {
  
      .about-content h2 {
        padding-right: 0;
        font-size: 35px;
        line-height: 46px; 
    }

    }


    @media (max-width: 991px) {

    .about-img{
       justify-content: center !important;
        margin-top: 60px;

    }


}
  
  .about-content p {
  
    padding-right: 81px; }
  
    @media only screen and (min-width: 1200px) and (max-width: 1450px) {
  
      .about-content p {
  
        padding-right: 0; } }
  
    @media only screen and (min-width: 576px) and (max-width: 767px) {
  
      .about-content p {
  
        padding-right: 0px; } }
  
    @media (max-width: 575px) {
  
      .about-content p {
  
        padding-right: 0px; } }
  
  .about-content a {  
    margin-top: 20px; 
}
  
.about-img{
    display: flex;
    justify-content: end;
}
.about-img img{
    width: 80%;
    transition: 0.3s;
}
.about-img img:hover{
    transform: scale(1.15, 1.15);
}


</style>