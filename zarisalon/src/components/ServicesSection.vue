<template>
<div>
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

            <div class="col-lg-3 col-md-4 col-sm-6 col-xm-6">
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
<!-- 
<Swiper :slides-per-view="3" :space-between="20">
    <SwiperSlide v-for="n in 10" :key="n">
        <img :src="'../assets/services/pic1.jpg'+n" />
    </SwiperSlide>
</Swiper> -->
</div>

</template>
<script>
    // import { Navigation, Pagination, Ally, Virtual } from 'swiper'
    // import { Swiper , SwiperSlide } from 'swiper/vue';

    // import'swiper/css'
    // import 'swiper/css/bundle'

</script> 



<style lang="scss">
    @import '../scss/_variables';
    @import '../scss/style.scss';
    

    
    .services{
        margin-bottom: 120px;
    }

    .text-primary{
        color: $main-color !important;
        font-family: Mrs Saint Delafield;
    }

    .service-images {
        position: relative;
        padding: 20px 20px 0 20px;
    }
    
        .service-images i {
            font-size: 25px;
            width: 20%;
            height: 21%;
            border-radius: 50%;
            position: absolute;
            bottom: 0px;
            line-height: 70px;
            right: 35px;
            background: #fff;
            color: $main-color;
            box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    
        .service-images{
            position:relative;
            padding: 15px 15px 0 15px
        }

        .service-images img{
            border-radius:500px;
            box-shadow:0 0 30px 0 rgba(0,0,0,.1);
            border:10px solid #fff;
            width: 100%;
        }

        .service-content h6{
            font-weight:600;
            margin-top: 30px;
        }

        .services-box .icon-bx-wraper{
            position:relative
        }
    
        .services .second-btn , .gallery .second-btn{
            margin-top: 30px;
        }

        .service-box{
            margin-top: 40px;
        }

    

</style>