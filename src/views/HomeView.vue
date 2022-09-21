<template>
  <div class="home">


    <section id="header">


      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
  
              <div class="slide1 total-header min-vh-70 d-flex justify-content-center align-items-end d-block w-100" >  <!--.bg-light-->
                  <div class="container">
                      <div class="row gx-0 gy-4 d-flex">
                          <div class="col-lg-8">
                              <div class="caption">
                                  <h1 class="text-capitalize fw-bold mb-4">Experience The Best  
                                       <span class="main-color">Beauty</span> Services.</h1>
                                  <p class="mb-4 py-1">We offer a full range of hairdressing services for men and women, eyebrow and eyelash care, the services of make-up artists and stylists. Entrust your beauty to professionals who really care about...
                                  
                                  </p>
                                  <div class="buttons">
                                    <router-link class="btn main-btn py-2 px-4 me-3" to="/booking">Book Appointment</router-link>
                                    <router-link class="btn second-btn py-2 px-4" to="/about">About us</router-link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
  
            <div class="carousel-item">
    <div class="slide2 total-header min-vh-70 d-flex justify-content-center align-items-end d-block w-100" >  <!--.bg-light-->
                  <div class="container">
                      <div class="row gx-0 gy-4 d-flex justify-content-center">
                          <div class="col-lg-8">
                              <div class="caption">
                                  <h1 class="text-capitalize fw-bold mb-4">Experience The Best  
                                       <span class="main-color">Beauty</span> Services.</h1>
                                  <p class="mb-4 py-1">We offer a full range of hairdressing services for men and women, eyebrow and eyelash care, the services of make-up artists and stylists. Entrust your beauty to professionals who really care about...
                                  
                                  </p>
                                  <div class="buttons">
                                    <router-link class="btn main-btn py-2 px-4 me-3" to="/booking">Book Appointment</router-link>
                                    <router-link class="btn second-btn py-2 px-4" to="/about">About us</router-link>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-4">
                              <div class="img-header">
                                  <!-- <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                      <path fill="#E4E4E4" d="M49,-76.3C63.3,-67.1,74.5,-53.1,77.4,-37.9C80.4,-22.8,75,-6.4,70,8.2C65,22.7,60.3,35.4,52.3,46.3C44.4,57.3,33.3,66.4,20.6,70.2C7.9,73.9,-6.4,72.3,-21.1,69.2C-35.8,66.1,-50.8,61.6,-59,51.5C-67.2,41.4,-68.7,25.7,-68.4,11.3C-68.1,-3,-66.1,-16.2,-60.8,-27.8C-55.5,-39.3,-46.8,-49.4,-36.2,-60.3C-25.5,-71.2,-12.7,-82.9,2.3,-86.5C17.4,-90.1,34.7,-85.6,49,-76.3Z" transform="translate(100 100)" />
                                  </svg> -->
                                  <!-- <img src="imgs/home/rightbackgroundweb.png" class="w-100" alt="gift"> -->
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          
          </div>
            <div class="carousel-item">
              <div class="slide3 total-header min-vh-70 d-flex justify-content-center align-items-end d-block w-100" >  <!--.bg-light-->
                  <div class="container">
                      <div class="row gx-0 gy-4 d-flex justify-content-center">
                          <div class="col-lg-8">
                              <div class="caption">
                                  <h1 class="text-capitalize fw-bold mb-4">Experience The Best  
                                       <span class="main-color">Beauty</span> Services.</h1>
                                  <p class="mb-4 py-1">We offer a full range of hairdressing services for men and women, eyebrow and eyelash care, the services of make-up artists and stylists. Entrust your beauty to professionals who really care about...
                                  
                                  </p>
                                  <div class="buttons">
                                  

                                      <router-link class="btn main-btn py-2 px-4 me-3" to="/booking">Book Appointment</router-link>
                                      <router-link class="btn second-btn py-2 px-4" to="/about">About us</router-link>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-4">
                              <div class="img-header"></div>
                          </div>
                      </div>
                  </div>
              </div>
                    </div>
          </div>
          
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"> 
              <i> <fa :icon="['fas', 'angles-right']" />
            </i>
            </span>
            <span class="visually-hidden">Next</span>
          </button>


          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"> 
              <i> <fa :icon="['fas', 'angles-left']" />
            </i>
            </span>
            <span class="visually-hidden">Previous</span>
          </button>


        </div>
  
  </section>
  <!-- end of header section-------------------------- -->
  <AboutSection />
  <ServicesSection />
  <BranchesSection />
  <GallerySection />

  <ShopSection />
  <WhyusSection />
  <TeamSection />
  <CounterSection />
  <TestimonialsSection />
  <SubscribeSection />
  

  <FooterSection />
  <header>
    <span class="shopcountwrap">
      <i class="shopping-cart"></i>
      <div class="bage">0</div>
    </span>
  </header>


  <div id="countHolder" class="bage">0</div>
  <div id="cart1" class="addcart">Add Cart</div>



<!--     
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import AboutSection from '@/components/AboutSection';
import BranchesSection from '@/components/BranchesSection';
import GallerySection from '@/components/GallerySection.vue';
import ShopSection from '@/components/ShopSection.vue';
import WhyusSection from '@/components/WhyusSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import SubscribeSection from '@/components/SubscribeSection.vue';
import CounterSection from '@/components/CounterSection.vue';
import TeamSection from '@/components/TeamSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    ServicesSection,
    AboutSection,
    BranchesSection,
    GallerySection,
    ShopSection,
    WhyusSection,
    FooterSection,
    SubscribeSection,
    CounterSection,
    TeamSection,
    TestimonialsSection
},
};
</script>


<style lang="scss"  scoped>

  @import '../scss/_variables.scss';
  @import '../scss/style.scss';

  .second-btn, .main-btn{
    border-radius: 50px !important;
}

/*
  .carousel-indicators{
    height: 70% !important;
    width: 50%;
    margin: auto;
}

.carousel-indicators .indicator-item [data-bs-target]{
  background-color: transparent !important;
  text-indent: 0 !important;
  transition: all 0.25s !important;
  opacity: 1 !important;
}

.carousel-inner{
  width: 75% !important;
  margin: auto !important;
  overflow: hidden !important;
}
.carousel-item h3{
  width: 90% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  color: #1b1c1e !important;
  font-weight: bold !important;
  text-align: center !important;
  margin-bottom: 12px !important;
}
.carousel-item blockquote{
  width: 90% !important;
  margin-right: auto !important;
  margin-left: auto !important;
  color: #6F6F6F !important;
  text-align: center !important;
  font-weight: 600;
}
.carousel-item blockquote i{
  color: #6f6f6f98;
  font-size: 30px;
}
.carousel-item blockquote .fa-quote-left{
  margin-right: 10px;
}
.carousel-item blockquote .fa-quote-right{
  margin-left: 10px;
} 
*/






.carousel-control-prev{
  left:3% !important;
}
.carousel-control-next{
  right:3% !important;
}
.carousel-control-prev,.carousel-control-next{
  width: 2% !important;
  height: 2% !important;
  top: 45% !important;
  z-index: 5;
} 

.carousel-control-prev i, .carousel-control-next i{
  font-size: 24px;
  color: $main-color !important;
}
.carousel-control-next-icon, .carousel-control-prev-icon{
  background-image: none !important;
}
/*
.carousel-control-next-icon, .carousel-control-prev-icon{
  background-color: $main-color;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: none !important;
  padding: 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
*/







  .home{
    margin-top: 25px;
}

#header{
    margin-bottom: 120px;
}
.total-header{
    padding-top: 7rem;
}
.min-vh-70{
    min-height: 70vh;
}
.caption h1{
    font-size: 4rem !important;
    font-family: Domine, serif;
    color: #1b1c1e;
}
.caption p{
    width: 90%;
    color: #6F6F6F;
    line-height: 22px;
    margin-bottom: 50px !important;
    margin-top: 50px !important;
}
.buttons a{
    border-radius: 8px;
    font-weight: 600;
    line-height: 22px;
    transition: all 0.25s;
}

.caption, .img-header{
    position: relative;
    z-index: 2;
}

.img-header img{
    height:24rem;
    position: relative;
    z-index: 2;
    transition: all 0.5s;
}
.img-header img:hover{
    transform: scale(1.1,1.1);
}

/* Responsive header section */

@media screen and (max-width: 992px){
    .total-header .row{
        flex-direction: column-reverse;
    }
    .total-header{
        padding-bottom: 2rem;
    }
    .caption, .img-header{
        width: 90%;
        margin-right: auto;
        margin-left: auto;
    }

}
@media screen and (min-width: 1200px) and (max-width: 1400px){
    .caption h1{
        font-size: 2.5rem;
    }
    .img-header svg{
        top: -80px;
    }
}


@media screen and (min-width: 768px) and (max-width: 1200px){
    .caption h1{
        font-size: 2.1rem;
    }
}
@media screen and (max-width: 768px){
    .caption h1{
        font-size: 1.55rem;
    }
  
}

#header .carousel-inner{
    width: 100% !important;
}

.slide1, .slide2, .slide3{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 120px 100px 150px 10px;
    
}
.slide1{
    background-image: url("../assets/home/slide11.png");
}
.slide2{    
  background-image: url("../assets/home/slide2.jpg");
}

.slide3{    
  background-image: url("../assets/home/slide3.jpg");
}

 .carousel-indicators{
    display: flex;
    align-items: end;
}



.carousel-indicators >button{
    background-color: #1b1c1e !important;
}


</style>
