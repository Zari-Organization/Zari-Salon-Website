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

        <div class="row mx-auto my-auto justify-content-center">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">

                  <div class="carousel-item active">

                    <div class="col-md-3">
                        <img src="../assets/services/pic1.jpg" class="d-block w-100" alt="image" />
                    <!-- <div class="carousel-caption d-none d-md-block">
                    </div> -->

                    </div>
                    
                  </div>



                  <div class="carousel-item">
                    <div class="col-md-3">
                        <img src="../assets/services/pic2.jpg" class="d-block w-100" alt="image" />
                    

                    </div>

                   
                  </div>

                  <div class="carousel-item">
                    <div class="col-md-3">
                        <img src="../assets/services/pic2.jpg" class="d-block w-100" alt="image" />
                       

                    </div>

                   
                  </div>

                  <div class="carousel-item">
                    <div class="col-md-3">
                        <img src="../assets/services/pic2.jpg" class="d-block w-100" alt="image" />
                    

                    </div>

                   
                  </div>

                  <div class="carousel-item">
                    <div class="col-md-3">
                        <img src="../assets/services/pic2.jpg" class="d-block w-100" alt="image" />
                    
                    </div>

                   
                  </div>


                  <div class="carousel-item">
                    <div class="col-md-3">
                        <img src="../assets/services/pic1.jpg" class="d-block w-100" alt="image" />


                    </div>
                  </div>


                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

</div>


    </div><!--end of container-->
</section>
</div>

</template>
 <script>

 
  export default {
    name: 'ServicesSection',
  }

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