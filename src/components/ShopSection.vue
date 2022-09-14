<template>
    <div>
        <section id="products" class="products pb-90">
            <div class="container">
                <div class="row align-items-center position-relative">
                    <div class="col-12 col-md-6">
                        <div class="hero-slide-content">
                            <div class="hero-slide-text-img">
                                <img src="../assets/shop/bestshop.webp" width="250" alt="best shop Image" />
                            </div>
                            <h2 class="black-title">Experience The Best Beauty Products</h2>
                            <p class="mb-5">We offer a full range of hairdressing products for men and women, eyebrow and eyelash care, the products of make-up artists and stylists. Entrust your beauty to professionals who really care about...
                            </p>
                            <!-- <a class="btn btn-border-dark" href="product.html">BUY NOW</a> -->
                            <router-link class="btn main-btn py-2 px-4 me-3" to='/shop'>Buy Now</router-link>
        
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="products-img">
                            <img src="../assets/shop/slider1.webp" width="841" height="832" alt="product Image" />
                        </div>
                    </div>
                </div>
            </div>
        
        
        </section> 

    </div>
</template>

<style lang="scss" scoped>
    @import '../scss/variables';
    @import '../scss/style.scss';

    .products{
        background-color: #fafafa;
        height: 700px!important;
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 120px;
    }
    
    .products::before{
        background-color: #d9f1e1;
        position: absolute;
        width: 50%;
        content: "";
        top: 0;
        right: 0;
        height: 100%;
        z-index: 0;
    }
    
    .products-img img{
        width: 100%;
        height: auto;
        transition: 0.3s;
    }
    .products-img img:hover{
        transform: scale(1.3,1.3);
    }
</style>