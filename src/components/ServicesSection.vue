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

          <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Service Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

            <div class="container">
                <div class="row">
                    <div class="col col-sm-7">
                        <h2>Revitalise Your Mind, Body And Spirit.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                        <!-- <router-link  to="/booking" class="btn main-btn py-2 px-4 me-3" >Book Appointment</router-link> -->
                    </div>                    
                    <div class="col col-sm-5 modal-img ">
                        <img class="shadow" src="../assets/services/pic4.jpg" alt="" />
                        
                    </div>
                </div>
                
            </div>
           
          ...
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
  


       
  <div class="col-12 text-center">
    <router-link class="btn main-btn py-2 px-4 mt-5" to="/gallery">See All Services</router-link>
</div>
        


            </div>
        </div>
    </section>





</div>

</template>
<script>




</script> 



<style lang="scss">
    @import '../scss/_variables';
    @import '../scss/style.scss';
    
    .modal-dialog {
    max-width: 70% !important;
    }
    .modal-body{
        text-align: left;
    }

    .modal-body img{
        border-radius: 50%;
    }
     .modal-img{
        display: flex;
        justify-content: end;
     }

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
    
       .gallery .second-btn{
            margin-top: 30px;
        }

        .service-box{
            margin-top: 40px;
        }

    

</style>