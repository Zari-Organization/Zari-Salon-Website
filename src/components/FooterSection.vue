<template>
    <div>
        <footer id="footer" class="footer py-5 position-relative">
            <!-- <a id="btnTopFooter" class="position-absolute top-0 end-0 translate-middle text-white">
                <i><fa :icon="['fas','chevron-up']" class="fs-3 p-2 main-bg rounded-circle" /></i>
            </a> -->

            <div class="container">
                <div class="row gy-5">
                    <div class="col-md-6 col-lg-4">
                        <div class="logo-footer">
                            <img src="../assets/footer/zarilogoblack.png" alt="logo zari" />

                            <p>We offer a full range of hairdressing services for men and women, eyebrow and eyelash care, the services of make-up artists and stylists. Entrust your beauty to professionals who really care about...</p>
                            <h4 class="mb-4">Follow us </h4>
                            <div class="icons-footer d-flex align-items-center">
                                <a target="_blank" href="https://www.facebook.com/ZARISolutionksa"><i><fa :icon="['fab','facebook-f']" /></i></a>
                                <a target="_blank" href="https://twitter.com/SolutionZari"><i><fa :icon="['fab','twitter']" /></i></a>
                                <a target="_blank" href="https://www.instagram.com/zarisolutionksa/"><i><fa :icon="['fab','instagram']" /></i></a>
                                <a target="_blank" href="https://www.linkedin.com/in/zari-solution-ksa-12717623b/"><i><fa :icon="['fab','linkedin-in']" /></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-md-6 col-lg-2">
                        <div class="navigate">
                            <h4 class="mb-4">navigate</h4>
                            <div class="links-navigate d-flex justify-content-center flex-column">
                                <a href="#about">About Zari Salon</a>
                                <a href="#services">Services</a>
                                <a href="#branches">Branches</a>
                                <a href="#gallery">Gallery</a>
                                <a href="#shop">Shop</a>
                                <a href="#whyus">Why Zari Salon</a>
                                <a href="#testimonials">Testimonials</a>
                                <a href="#team">Team</a>
                                <a href="#subscribe">Subscribe</a>
                            </div>
                        </div>
                    </div> -->
                    <div class="col-md-6 col-lg-2">
                        <div class="navigate">
                            <h4 class="mb-4">About us</h4>
                            <div class="links-navigate d-flex justify-content-center flex-column">
                                <a href="#">About Zari Salon</a>
                                <a href="#">Terms & Conditions</a>
                                <a href="#">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="navigate">
                            <h4 class="mb-4">Contact us</h4>
                            <div class="links-navigate d-flex justify-content-center flex-column">    
                                <a target="_blank" href="tel:+966920024403"><span><i><fa :icon="['fas','phone']" /></i></span> +966 92 002 4403</a>
                                <a target="_blank" href="https://wa.me/+966566770235"><span><i><fa :icon="['fab','whatsapp']" /></i></span> +966 56 677 0235</a>
                                <a target="_blank" href="https://zariapps.com/"><span><i><fa :icon="['fas','globe']" /></i></span> zariapps.com</a>
                                <a target="_blank" href="https://zarisolution.com/"><span><i><fa :icon="['far','envelope']" /></i></span> zarisolution.com</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="subscribe">
                            <h4 class="mb-4">join us</h4>
                            <p>Enter your email to subscribe and join our newsletter</p>
                            <input id="emailSubscribe" type="email" name="email-subscibe" required class="form-control py-2 mx-auto bg-white" placeholder="Enter your email">
                            <!-- <div id="alssertEmailSubscibe" class="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">Invalid email</div> -->
                            <p id="alertSubscribe" class="fs-6 mb-0 mt-3 w-75 text-center mx-auto"></p>
                            <input id="subscribe" type="button" class="form-control w-50 mt-3 main-color semi-bold py-2 bg-white" value="Subscribe">
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<style lang="scss" scoped>
    @import '../scss/_variables';
    @import '../scss/style.scss';

    .footer{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        /* padding: 200px 100px 150px 10px; */
        background-image: url("../assets/footer/footer\ bg.jpg");
    
        
    }
    
    .footer h4{
        text-transform: capitalize;
        color: #1b1c1e;
        font-weight: 600;
    }
    .footer p{
        color: #222222;
        font-size: 14px;
        font-weight: 500;
        margin: 1.25rem 0;
        line-height: 1.4rem;
    }
    .logo-footer img{
        width: 120px;
    }
 
    .links-navigate a{
        color: #222222;
        font-weight: 500;
        margin-bottom: 0.75rem;
        transition: all 0.3s;
    }
    .links-navigate a:hover{
        color: var(--mainColor);
    }
    .links-navigate a span{
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;
        color: #1b1c1e !important;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 4px 6px rgba(147, 147, 147, 0.6);
    
    }
    .links-navigate a span i{
        font-size: 12px;
    }
    .fa-whatsapp{
        font-size: 15px !important;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: #25d366;
    }
    .subscribe input{
        border-radius: 8px;
    }
    .subscribe input[type='button']{
        transition: all 0.3s;
    }
    .subscribe input[type='button']:hover{
        background-color: transparent !important;
    }
    .subscribe input[type='button']:focus{
        color: var(--mainColor) !important;
    }
    .subscribe input::placeholder{
        color: hsla(0, 0%, 44%, 0.85);
        font-weight: 500;
    }
    .subscribe .form-control:focus{
        box-shadow: none;
        border: 2px solid var(--mainColor) !important;
    }
    .subscribe p#alertSubscribe{
        font-size: 14px !important;
    }
    
    /* Responsive footer */
    
    @media screen and (max-width: 992px){
        .logo-footer, .navigate, .subscribe{
            text-align: center;
        }
        .subscribe #emailSubscribe , .subscribe #alertEmailSubscibe{
            width: 75% !important;
            margin-left: auto;
            margin-right: auto;
        }
        .subscribe #subscribe{
            width: 30% !important;
            margin-left: auto;
            margin-right: auto;
        }
        .icons-footer{
            justify-content: center;
        }
    }
    @media screen and (max-width: 768px) {
        .logo-footer, .navigate{
            width: 85%;
            margin-left: auto;
            margin-right: auto;
        }
    }
    
    
</style>