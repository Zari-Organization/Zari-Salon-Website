<template>
    <div>
        
<section id="services" class="services pt-115 pb-90">

    <div class="container">

        <div class="row">
            <div class="col-12 text-center">
                <div class="main-title text-center py-3 w-85 mx-auto mb-4">
                    <h1 class="text-primary m-b10 fw-bold text-capitalize">Our Services</h1>
                    <h6 class="m-b10">You Will Like To Look Like Goddes Every Day!</h6>
                </div>        
            </div>

        </div><!-- end or row -->


        <VueSlickCarousel v-bind="settings">
            <div>
                <img src="../assets/services/pic1.jpg" />

            </div>
            <div>
                <img src="../assets/services/pic1.jpg" />

            </div>
            <div>
                <img src="../assets/services/pic1.jpg" />

            </div>
            <div>
                <img src="../assets/services/pic1.jpg" />

            </div>
        </VueSlickCarousel>



   


       
    </div><!--end of container-->
  

</section>

    </div>
</template>


 
 <script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
  }
</script> 



<style lang="scss" scoped>
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
            width: 25%;
            height: 25%;
            border-radius: 50%;
            position: absolute;
            bottom: 0px;
            line-height: 70px;
            right: 20px;
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
            border:10px solid #fff
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
    

</style>