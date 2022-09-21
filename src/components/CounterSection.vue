<template>
    <div>
        <section class="counts-section">
            <div class="bg-primary text-white py-5 bg-black">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-6 text-center">
                            <h2 data-toggle="counterUp">3</h2>
                            <h6>branches</h6>
                        </div>
                        <div class="col-lg-3 col-6 text-center">
                            <h2 data-toggle="counterUp">453</h2>
                            <h6>customers</h6>
                        </div>
                        <div class="col-lg-3 col-6 text-center">
                            <h2 data-toggle="counterUp">4,262</h2>
                            <h6>Products</h6>
                        </div>
                        <div class="col-lg-3 col-6 text-center">
                            <h2 data-toggle="counterUp">1221</h2>
                            <h6>Purchases</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- <section id="numbers" class="numbers">
            <div class="numbers-bg py-5 d-flex justify-content-center align-items-center">
                <div class="container-fluid text-center text-white">
                    <div class="row gy-3">
                        <div class="col-lg-4">
                            <div class="count py-5 d-flex justify-content-center align-items-center flex-column text-white">
                                <span class="fs-2 mb-5">+ <span class="fs-2 counter" data-target="250">250</span></span>
                                <h2 class="text-capitalize">Our Clients</h2>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="count py-5 d-flex justify-content-center align-items-center flex-column text-white">
                                <span class="fs-2 mb-5">+ <span class="fs-2 counter" data-target="32">32</span> K</span>
                                <h2 class="text-capitalize">No. of seals collected</h2>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="count py-5 d-flex justify-content-center align-items-center flex-column text-white">
                                <span class="fs-2 mb-5">+ <span class="fs-2 counter" data-target="14">14</span> K</span>
                                <h2 class="text-capitalize">customers Gifts</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section> -->

    </div>
</template>

<script>
    
// import $ from "jquery";
// $(document).ready(function(){
//     $('[data-toggle="counterUp"]').counterUp({
//         delay: 15,
//         time: 1500
//     });
// })
</script>

<style lang="scss" scoped>

     @import '../scss/_variables.scss';
  @import '../scss/style.scss';
    .counts-section{
        margin-bottom: 120px;
    }
    
</style>
