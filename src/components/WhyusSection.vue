<template>
    <div>
        <section id="whyUs" class="whyus pt-5 pb-5">

            <div class="container">
                <div class="row align-items-center position-relative">
                    <div class="col-12 col-md-6">
                        <div class="hero-slide-content">
                        
                            <h2 class="black-title">Why Our Clients Choose Us</h2>
                            <p class="mb-5">We are the leading beauty salon in LA providing high-quality hairdressing, makeup, and skin care services to everyone.
                            </p>
                            <ul>
                                <li>fully focused on accessibility</li>
                                <li>Based on modern design concept</li>
                                <li>impressive and attractive design with graceful features</li>
                                <li>More creative with smoothness and flexibility</li>
                                <li>Unlimited power and customization possibilities</li>
                            </ul>
                            <!-- <a class="btn btn-border-dark" href="product.html">BUY NOW</a> -->
        
                            <a href="product.html" class="btn main-btn py-2 px-4 me-3">Book Appointment</a>
        
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="">
                            <img src="../assets/whylayout/why-us-section.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    </div>
</template>


<style lang="scss" scoped>
    .whyus{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/whylayout/bg4.jpg");
        margin-bottom: 120px;
    }
    .whyus ul{
        margin: 0;
        padding-left: 4%;
    }
    .whyus li{
        padding-top: 15px;
    }
    
    .whyus .main-btn{
        margin-top: 10%;
    }
    
    .whyus img{
        width: 100%;
        transition: 0.3s;
    }
    .whyus img:hover{
        transform: scale(1.1, 1.1);
    }
    
</style>
