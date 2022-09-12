<template>
    <div>
        <section class="page-header">
            <h1>Shop</h1>
            <ul class="bread-crumbs">
                <li class="bread-crumbs__item">
                    <router-link to="/" class="bread-crumbs__link">Home</router-link>
                </li>
                <li class="bread-crumbs__item fw-bold">Products</li>
            </ul>
          
        </section>

        <section class="section-space pb-0">
            <div class="container">
                <div class="row g-3 g-sm-6">
                    <div class="col-6 col-lg-4 col-lg-2 col-xl-2">
                        <!--== Start Product Category Item ==-->
                        <a href="product.html" class="product-category-item">
                            <img class="icon" src="../assets/shop/1.webp" width="70" height="80" alt="Image-HasTech">
                            <h3 class="title">Hare care</h3>
                            <span class="flag-new">new</span>
                        </a>
                        <!--== End Product Category Item ==-->
                    </div>
                    <div class="col-6 col-lg-4 col-lg-2 col-xl-2">
                        <!--== Start Product Category Item ==-->
                        <a href="product.html" class="product-category-item" data-bg-color="#FFEDB4" style="background-color: rgb(255, 237, 180);">
                            <img class="icon" src="../assets/shop/2.webp" width="80" height="80" alt="Image-HasTech">
                            <h3 class="title">Skin care</h3>
                        </a>
                        <!--== End Product Category Item ==-->
                    </div>
                    <div class="col-6 col-lg-4 col-lg-2 col-xl-2 mt-lg-0 mt-sm-6 mt-4">
                        <!--== Start Product Category Item ==-->
                        <a href="product.html" class="product-category-item" data-bg-color="#DFE4FF" style="background-color: rgb(223, 228, 255);">
                            <img class="icon" src="../assets/shop/3.webp" width="80" height="80" alt="Image-HasTech">
                            <h3 class="title">Lip stick</h3>
                        </a>
                        <!--== End Product Category Item ==-->
                    </div>
                    <div class="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                        <!--== Start Product Category Item ==-->
                        <a href="product.html" class="product-category-item" data-bg-color="#FFEACC" style="background-color: rgb(255, 234, 204);">
                            <img class="icon" src="../assets/shop/4.webp" width="80" height="80" alt="Image-HasTech">
                            <h3 class="title">Face skin</h3>
                            <span data-bg-color="#835BF4" class="flag-new" style="background-color: rgb(131, 91, 244);">sale</span>
                        </a>
                        <!--== End Product Category Item ==-->
                    </div>
                    <div class="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                        <!--== Start Product Category Item ==-->
                        <a href="product.html" class="product-category-item" data-bg-color="#FFDAE0" style="background-color: rgb(255, 218, 224);">
                            <img class="icon" src="../assets/shop/5.webp" width="80" height="80" alt="Image-HasTech">
                            <h3 class="title">Blusher</h3>
                        </a>
                        <!--== End Product Category Item ==-->
                    </div>
                    <div class="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                        <!--== Start Product Category Item ==-->
                        <a href="product.html" class="product-category-item" data-bg-color="#FFF3DA" style="background-color: rgb(255, 243, 218);">
                            <img class="icon" src="../assets/shop/6.webp" width="80" height="80" alt="Image-HasTech">
                            <h3 class="title">Natural</h3>
                        </a>
                        <!--== End Product Category Item ==-->
                    </div>
                </div>
            </div>
        </section>




        <section class="section-space">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title text-center">
                            <h1 class="text-primary pb-5">Top sale</h1>
                            <!-- <p>We offer a full range of hairdressing products for men and women, eyebrow and eyelash care, the products of make-up artists and stylists. Entrust your beauty to professionals who really care about...

                            </p> -->
                        </div>
                    </div>
                </div>
                <div class="row mb-n4 mb-sm-n10 g-3 g-sm-6">
                    <div class="col-6 col-lg-4 mb-4 mb-sm-9">
                        <!--== Start Product Item ==-->
                        <div class="product-item">
                            <div class="product-thumb">
                                <a class="d-block" href="product-details.html">
                                    <img src="../assets/shop/product2.webp" width="370" height="450" alt="Image-HasTech">
                                </a>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                        <i><fa :icon="['fas','expand']" /></i>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                        <i><fa :icon="['fas','heart']" /></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-rating">
                                    <div class="rating">
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star-half']" /></i>

                                    </div>
                                    <div class="reviews">150 reviews</div>
                                </div>
                                <h4 class="title"><a href="product-details.html">Readable content DX22</a></h4>
                                <div class="prices">
                                    <span class="price">$210.00</span>
                                    <span class="price-old">300.00</span>
                                </div>
                            </div>
                            <div class="product-action-bottom">
                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                    <i><fa :icon="['fas','expand']" /></i>
                                </button>
                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                    <i><fa :icon="['fas','heart']" /></i>
                                </button>
                                <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                        <!--== End prPduct Item ==-->


                    </div>
                    <div class="col-6 col-lg-4 mb-4 mb-sm-9">
                        <!--== Start Product Item ==-->
                        <div class="product-item">
                            <div class="product-thumb">
                                <a class="d-block" href="product-details.html">
                                    <img src="../assets/shop/product.webp" width="370" height="450" alt="Image-HasTech">
                                </a>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                        <i><fa :icon="['fas','expand']" /></i>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                        <i><fa :icon="['fas','heart']" /></i>

                                    </button>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-rating">
                                    <div class="rating">
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star-half']" /></i>
                                    </div>
                                    <div class="reviews" >150 reviews</div>
                                </div>
                                <h4 class="title"><a href="product-details.html">Modern Eye Brush</a></h4>
                                <div class="prices">
                                    <span class="price">$210.00</span>
                                    <span class="price-old">300.00</span>
                                </div>
                            </div>
                            <div class="product-action-bottom">
                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                    <i><fa :icon="['fas','expand']" /></i>
                                </button>
                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                    <i><fa :icon="['fas','heart']" /></i>
                                </button>
                                <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                        <!--== End prPduct Item ==-->
                    </div>
                    <div class="col-6 col-lg-4 mb-4 mb-sm-9">
                        <!--== Start Product Item ==-->
                        <div class="product-item">
                            <div class="product-thumb">
                                <a class="d-block" href="product-details.html">
                                    <img src="../assets/shop/product3.webp" width="370" height="450" alt="Image-HasTech">
                                </a>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                        <i><fa :icon="['fas','expand']" /></i>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                        <i><fa :icon="['fas','heart']" /></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-rating">
                                    <div class="rating">
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star-half']" /></i>
                                    </div>
                                    <div class="reviews">150 reviews</div>
                                </div>
                                <h4 class="title"><a href="product-details.html">Voyage face cleaner</a></h4>
                                <div class="prices">
                                    <span class="price">$210.00</span>
                                    <span class="price-old">300.00</span>
                                </div>
                            </div>
                            <div class="product-action-bottom">
                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                    <i><fa :icon="['fas','expand']" /></i>
                                </button>
                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                    <i><fa :icon="['fas','heart']" /></i>
                                </button>
                                <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                        <!--== End prPduct Item ==-->
                    </div>
                    <div class="col-6 col-lg-4 mb-4 mb-sm-9">
                        <!--== Start Product Item ==-->
                        <div class="product-item">
                            <div class="product-thumb">
                                <a class="d-block" href="product-details.html">
                                    <img src="../assets/shop/product4.webp" width="370" height="450" alt="Image-HasTech">
                                </a>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                        <i><fa :icon="['fas','expand']" /></i>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                        <i><fa :icon="['fas','heart']" /></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-rating">
                                    <div class="rating">
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star-half']" /></i>
                                    </div>
                                    <div class="reviews">150 reviews</div>
                                </div>
                                <h4 class="title"><a href="product-details.html">Impulse Duffle</a></h4>
                                <div class="prices">
                                    <span class="price">$210.00</span>
                                    <span class="price-old">300.00</span>
                                </div>
                            </div>
                            <div class="product-action-bottom">
                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                    <i><fa :icon="['fas','expand']" /></i>
                                </button>
                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                    <i><fa :icon="['fas','heart']" /></i>
                                </button>
                                <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                        <!--== End prPduct Item ==-->
                    </div>
                    <div class="col-6 col-lg-4 mb-4 mb-sm-9">
                        <!--== Start Product Item ==-->
                        <div class="product-item">
                            <div class="product-thumb">
                                <a class="d-block" href="product-details.html">
                                    <img src="../assets/shop/product5.webp" width="370" height="450" alt="Image-HasTech">
                                </a>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                        <i><fa :icon="['fas','expand']" /></i>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                        <i><fa :icon="['fas','heart']" /></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-rating">
                                    <div class="rating">
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star-half']" /></i>
                                    </div>
                                    <div class="reviews">150 reviews</div>
                                </div>
                                <h4 class="title"><a href="product-details.html">Sprite Yoga Straps1</a></h4>
                                <div class="prices">
                                    <span class="price">$210.00</span>
                                    <span class="price-old">300.00</span>
                                </div>
                            </div>
                            <div class="product-action-bottom">
                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                    <i><fa :icon="['fas','expand']" /></i>
                                </button>
                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                    <i><fa :icon="['fas','heart']" /></i>
                                </button>
                                <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                        <!--== End prPduct Item ==-->
                    </div>
                    <div class="col-6 col-lg-4 mb-4 mb-sm-9">
                        <!--== Start Product Item ==-->
                        <div class="product-item">
                            <div class="product-thumb">
                                <a class="d-block" href="product-details.html">
                                    <img src="../assets/shop/product6.webp" width="370" height="450" alt="Image-HasTech">
                                </a>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                        <i><fa :icon="['fas','expand']" /></i>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                        <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                        <i><fa :icon="['fas','heart']" /></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info">
                                <div class="product-rating">
                                    <div class="rating">
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star']" /></i>
                                        <i><fa :icon="['fas','star-half']" /></i>
                                    </div>
                                    <div class="reviews">150 reviews</div>
                                </div>
                                <h4 class="title"><a href="product-details.html">Fusion facial cream</a></h4>
                                <div class="prices">
                                    <span class="price">$210.00</span>
                                    <span class="price-old">300.00</span>
                                </div>
                            </div>
                            <div class="product-action-bottom">
                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                    <i><fa :icon="['fas','expand']" /></i>
                                </button>
                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                    <i><fa :icon="['fas','heart']" /></i>
                                </button>
                                <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                        <!--== End prPduct Item ==-->
                    </div>
                </div>
            </div>
        </section>



        



        <PricingSection />

        <WhyusSection />
        <SubscribeSection />
        <FooterSection />

    </div>
</template>

<script>
  import WhyusSection from '@/components/WhyusSection.vue';
  import PricingSection from '@/components/PricingSection.vue';
import SubscribeSection from '@/components/SubscribeSection.vue';
import FooterSection from '@/components/FooterSection.vue';
  
  export default {
    components:{
    WhyusSection,
    PricingSection,
    SubscribeSection,
    FooterSection,
}
  }
  </script>

  <style lang="scss">
    .section-space{
        margin-bottom:120px;
    }
    @media only screen and (min-width:992px) and (max-width:1199px){
        .section-space{
            padding-top:90px;
            padding-bottom:90px
        }
    }
    @media only screen and (min-width:768px) and (max-width:991px){
        .section-space{
            padding-top:80px;
            padding-bottom:80px
        }
    }
    @media only screen and (max-width:767px){
        .section-space{
            padding-top:70px;
            padding-bottom:70px
        }
    }
.product-category-item{
    border-radius:10px;
    background-color:#dcffd2;
    display:block;
    padding:45px 15px 30px;
    height:100%;
    position:relative;
    text-align:center;
    transition:all .5s ease 0s
}
@media only screen and (max-width:479px){
    .product-category-item{
        padding:34px 15px 25px
    }
}
.product-category-item .icon{
    margin-bottom:43px;
    transition:all .8s ease 0s
}
@media only screen and (max-width:479px){
    .product-category-item .icon{
        width:54px;
        margin-bottom:20px
    }
}
.product-category-item .title{
    color:#1d4a21;
    font-size:16px;
    font-weight:500;
    margin-bottom:0;
    position:relative;
    padding-top:11px
}
@media only screen and (max-width:479px){
    .product-category-item .title{
        font-size:15px
    }
}
.product-category-item .title:before{
    background-color:#ff6565;
    content:"";
    height:1px;
    left:50%;
    position:absolute;
    top:0;
    transform:translate(-50%);
    -webkit-transform:translate(-50%);
    -moz-transform:translate(-50%);
    -ms-transform:translate(-50%);
    -o-transform:translate(-50%);
    width:25px
}
.product-category-item .flag-new{
    position:absolute;
    right:20px;
    top:-35px;
    background-color:#ff6565;
    border-radius:50px;
    color:#fff;
    display:inline-block;
    font-size:16px;
    font-weight:400;
    text-align:center;
    padding:22px 1px 22px 4px
    ;-ms-writing-mode:tb-lr;
    writing-mode:vertical-lr;
    transform:rotate(180deg)
}
@media only screen and (min-width:992px) and (max-width:1199px){
    .product-category-item .flag-new{
        font-size:14px;
        -ms-writing-mode:inherit;
        writing-mode:inherit;
        padding:2px 20px 4px;top:10px;right:10px;transform:rotate(0deg);
        -webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);
        -ms-transform:rotate(0deg);-o-transform:rotate(0deg)}}
        
        @media only screen and (min-width:768px) and (max-width:991px){
            .product-category-item .flag-new{
                font-size:14px;
                -ms-writing-mode:inherit;
                writing-mode:inherit;
                padding:2px 20px 4px;
                top:10px;right:10px;
                transform:rotate(0deg);
                -webkit-transform:rotate(0deg);
                -moz-transform:rotate(0deg);
                -ms-transform:rotate(0deg);
                -o-transform:rotate(0deg)}}
                
                @media only screen and (max-width:767px){
                    .product-category-item .flag-new{
                        font-size:14px;-ms-writing-mode:inherit;
                        writing-mode:inherit;padding:2px 20px 4px;
                        top:10px;right:10px;transform:rotate(0deg);
                        -webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);
                        -ms-transform:rotate(0deg);-o-transform:rotate(0deg)
                    }
                }
                @media only screen and (max-width:575px){
                    .product-category-item .flag-new{
                                font-size:13px;padding:0 15px 2px}
                            }
                            .product-category-item:hover{
                                box-shadow:0 4px 15px rgba(0,0,0,.15)}
        .product-category-item:hover img{
            transform:rotateY(1turn)
        }  

        //-===================================================
        .product-item .product-thumb{
            border-radius:10px;
            overflow:hidden;
            position:relative
        }
        .product-item .product-thumb img{
            border-radius:10px;
            transition:all .5s ease 0s
        }
        @media only screen and (max-width:575px){
            .product-item .product-thumb img{
                width:100%
            }
        }
        .product-item .product-info{
            padding-top:14px
        }
        .product-item .product-info .title{
            font-size:21px;
            font-weight:400;
            margin-bottom:12px
        }
        @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){
            .product-item .product-info .title{
                font-size:17px;
                font-weight:500;
                margin-bottom:8px
            }
        }
        .product-item .product-info+.product-action-bottom{
            margin-top:12px
        }
        .product-item .product-action{
            display:flex;
            position:absolute;
            bottom:30px;
            width:100%;
            justify-content:center
        }
        @media only screen and (max-width:575px){
            .product-item .product-action{
                display:none
            }
        }
        .product-item .product-action .product-action-btn{
            background-color:#fff;
            border:2px solid #e63946;
            color:#231942;
            display:inline-block;
            opacity:0;
            transform:translateY(40px);
            -webkit-transform:translateY(40px);
            -moz-transform:translateY(40px);
            -ms-transform:translateY(40px);
            -o-transform:translateY(40px);
            transition:all .5s ease 0s;
            transition-delay:.1s
        }
        .product-item .product-action .action-btn-cart{
            border-radius:50px;
            height:50px;
            letter-spacing:.2em;
            font-size:13px;
            color:#231942;
            font-weight:500;margin:0 20px;padding:5px 28px 5px 32px;text-align:center;text-transform:uppercase;transition-delay:.15s}@media only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){.product-item .product-action .action-btn-cart{height:44px;font-size:11px;margin:0 10px;padding:5px 15px 5px 19px}}@media only screen and (max-width:767px){.product-item .product-action .action-btn-cart{height:40px;font-size:11px;margin:0 8px;padding:7px 15px 5px 17px;letter-spacing:.4px}}.product-item .product-action .action-btn-quick-view,.product-item .product-action .action-btn-wishlist{border-radius:50%;height:50px;font-size:20px;line-height:47px;width:50px}@media only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){.product-item .product-action .action-btn-quick-view,.product-item .product-action .action-btn-wishlist{height:44px;font-size:15px;line-height:38px;width:44px}}@media only screen and (max-width:767px){.product-item .product-action .action-btn-quick-view,.product-item .product-action .action-btn-wishlist{height:42px;font-size:14px;line-height:36px;width:42px}}.product-item .product-action .action-btn-wishlist{transition-delay:.2s}.product-item .product-action .action-btn-quick-view{font-size:17px;line-height:45px}@media only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){.product-item .product-action .action-btn-quick-view{font-size:14px;line-height:30px;height:44px;width:44px}}@media only screen and (max-width:767px){.product-item .product-action .action-btn-quick-view{font-size:12px;line-height:25px;height:42px;width:42px}}.product-item .product-action-bottom{display:none;flex-wrap:wrap;justify-content:space-between}@media only screen and (max-width:575px){.product-item .product-action-bottom{display:flex}}.product-item .product-action-bottom .product-action-btn{background-color:#f7f7f7;border:1px solid #eee;width:calc(50% - 2px);font-size:15px;padding:4px;height:40px}.product-item .product-action-bottom .action-btn-cart{font-size:12px;display:block;width:100%;font-weight:500;padding:6px 0 8px;margin-top:4px}.product-item .product-rating{margin-bottom:20px;display:flex;align-items:center;justify-content:space-between}@media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){.product-item .product-rating{margin-bottom:8px;display:block}}.product-item .product-rating .rating{color:#ff6565;cursor:pointer;font-size:16px;display:flex}@media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){.product-item .product-rating .rating{font-size:13px}}@media only screen and (max-width:575px){.product-item .product-rating .rating{font-size:11px}}.product-item .product-rating .rating i+i{margin-left:5px}@media only screen and (max-width:575px){.product-item .product-rating .rating i+i{margin-left:2px}}.product-item .product-rating .reviews{color:#898989;font-size:13px;font-style:italic;font-weight:400}@media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){.product-item .product-rating .reviews{margin-top:8px}}@media only screen and (max-width:575px){.product-item .product-rating .reviews{margin-top:5px;font-size:12px}}.product-item .prices span{font-size:21px;font-weight:500}@media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){.product-item .prices span{font-size:16px}}@media only screen and (max-width:575px){.product-item .prices span{font-size:14px}}.product-item .prices .price-old{color:#364958;font-size:12px;font-weight:300;margin-left:4px;-webkit-text-decoration-line:line-through;text-decoration-line:line-through}@media only screen and (max-width:575px){.product-item .prices .price-old{font-size:11px}}.product-item .flag-new{background-color:#ff6565;border-radius:50px;color:#fff;display:inline-block;font-size:16px;font-weight:400;text-align:center;padding:7px 22px 10px;line-height:1;position:absolute;top:20px;right:20px}@media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){.product-item .flag-new{font-size:14px;padding:5px 18px 8px}}@media only screen and (max-width:575px){.product-item .flag-new{font-size:12px;padding:5px 12px 6px;top:5px;right:5px}}.product-item:hover .product-thumb img{transform:scale(1.05);-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-ms-transform:scale(1.05);-o-transform:scale(1.05)}.product-item:hover .product-action .product-action-btn{opacity:1;visibility:visible;transform:translate(0);-webkit-transform:translate(0);-moz-transform:translate(0);-ms-transform:translate(0);-o-transform:translate(0)}
</style>