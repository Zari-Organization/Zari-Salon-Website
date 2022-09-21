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
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="main-title text-center py-3 w-85 mx-auto mb-4">
                            <h1 class="text-primary m-b10 fw-bold text-capitalize">Categories</h1>
                            <h6 class="mb-5">You Will Like To Look Like Goddes Every Day!</h6>
                        </div>        
                    </div>
                </div>


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
                                <a class="d-block"   >
                                    <img src="../assets/shop/product2.webp" width="370" height="450" alt="Image-HasTech">
                                </a>
                                <span class="flag-new">new</span>
                                <div class="product-action">
                                    <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                        <i><fa :icon="['fas','expand']" /></i>
                                    </button>
                                    <button type="button" class="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal" id="liveAlertBtn">
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
                                <h4 class="title"><a   >Readable content DX22</a></h4>
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
                                <a class="d-block"   >
                                    <img src="../assets/shop/product.webp" width="370" height="450" alt="Image-HasTech" />
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
                                <h4 class="title"><a   >Modern Eye Brush</a></h4>
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
                                <a class="d-block"   >
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
                                <h4 class="title"><a   >Voyage face cleaner</a></h4>
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
                                <a class="d-block"   >
                                    <img src="../assets/shop/product4.webp" width="370" height="450" alt="Image-HasTech" />

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
                                <h4 class="title"><a   >Impulse Duffle</a></h4>
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
                                <a class="d-block">
                                    <img src="../assets/shop/product5.webp" width="370" height="450" alt="Image-HasTech" />
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
                                <h4 class="title"><a   >Sprite Yoga Straps1</a></h4>
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
                                <a class="d-block">
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
                                <h4 class="title"><a   >Fusion facial cream</a></h4>
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
        <!-- ===========================================addvertisment section----------------------- -->
        <section>
            <div class="container">
                <div class="row product-banner">
                    <div class="col-sm-6 col-lg-4">
                        <!--== Start Product Category Item ==-->
                        <a href="product.html" class="product-banner-item">
                            <img src="../assets/shop/ad1.webp" width="370" height="370" alt="Image-HasTech" />
                        </a>
                        <!--== End Product Category Item ==-->
                    </div>
                    <div class="col-sm-6 col-lg-4 mt-sm-0 mt-6">
                        <!--== Start Product Category Item ==-->
                        <a href="product.html" class="product-banner-item">
                            <img src="../assets/shop/ad2.webp" width="370" height="370" alt="Image-HasTech" />
                        </a>
                        <!--== End Product Category Item ==-->
                    </div>
                    <div class="col-sm-6 col-lg-4 mt-lg-0 mt-6">
                        <!--== Start Product Category Item ==-->
                        <a href="product.html" class="product-banner-item">
                            <img src="../assets/shop/ad3.webp" width="370" height="370" alt="Image-HasTech" />
                        </a>
                        <!--== End Product Category Item ==-->
                    </div>
                </div>
            </div>
        </section>


 <!--== Start Product Quick Wishlist Modal ==-->
 <aside class="product-action-modal modal fade" id="action-WishlistModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <div class="product-action-view-content">
                    <button type="button" class="btn-close" data-bs-dismiss="modal">
                        <i><fa :icon="['fas', 'times']" /></i>
                    </button>
                    <div class="modal-action-messages">
                        <i class="fa fa-check-square-o"></i> Added to wishlist successfully!
                    </div>
                    <div class="modal-action-product">
                        <div class="thumb">
                            <img src="../assets/shop/product.webp" alt="Organic Food Juice" />
                        </div>
                        <h4 class="product-name"><a   >Product name</a></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</aside>
<!--== End Product Quick Wishlist Modal ==-->

        <!--== Start Product Quick Add Cart Modal ==-->
        <aside class="product-action-modal modal fade" id="action-CartAddModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="product-action-view-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal">
                                <i><fa :icon="['fas', 'times']" /></i>
                            </button>
                            <div class="modal-action-messages">
                                <i class="fa fa-check-square-o"></i> Added to cart successfully!
                            </div>
                            <div class="modal-action-product">
                                <div class="thumb">
                                    <img src="../assets/shop/product2.webp" alt="Organic Food Juice" />
                                </div>
                                <h4 class="product-name"><a   >product name</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        <!--== End Product Quick Add Cart Modal ==-->

        <!--== Start Product Quick View Modal ==-->
        <aside class="product-cart-view-modal modal fade" id="action-QuickViewModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="product-quick-view-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal">
                                <span><fa :icon="['fas', 'close']" /></span>

                            </button>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <!--== Start Product Thumbnail Area ==-->
                                        <div class="product-single-thumb">
                                            <img src="../assets/shop/product3.webp" width="544" height="560" alt="Image-HasTech" />
                                        </div>
                                        <!--== End Product Thumbnail Area ==-->
                                    </div>
                                    <div class="col-lg-6">
                                        <!--== Start Product Info Area ==-->
                                        <div class="product-details-content">
                                            <h5 class="product-details-collection">Premioum collection</h5>
                                            <h3 class="product-details-title">Offbline Instant Age Rewind Eraser.</h3>
                                            <div class="product-details-review mb-5">
                                                <div class="product-review-icon">
                                                    <i><fa :icon="['fas', 'star']" /></i>
                                                    <i><fa :icon="['fas', 'star']" /></i>
                                                    <i><fa :icon="['fas', 'star']" /></i>
                                                    <i><fa :icon="['fas', 'star']" /></i>
                                                    <i><fa :icon="['fas', 'star-half']" /></i>
                                                 
                                                </div>
                                                <button type="button" class="product-review-show">150 reviews</button>
                                            </div>
                                            <p class="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, repellendus. Nam voluptate illo ut quia non sapiente provident alias quos laborum incidunt, earum accusamus, natus. Vero pariatur ut veniam sequi amet consectetur.</p>
                                      
                                            <div class="product-details-pro-qty product-quantity">
                                               <div class="pro-qty">
                                                    <input type="text" class="quantity" title="Quantity" value="1"/>
                                                    <div class="dec qty-btn">-</div>
                                                    <div class="inc qty-btn">+</div>
                                                </div>
                                            </div>


                                                

                                            <div class="product-details-action">
                                                <h4 class="price">$254.22</h4>
                                                <div class="product-details-cart-wishlist">
                                                    <!-- <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">Add to cart</button> -->
                                                    <button type="button" class="btn second-btn py-2 px-4" data-bs-toggle="modal" data-bs-target="#action-CartAddModal" id="liveAlertBtn">
                                                        <span>Add to cart</span>
                                                    </button>



                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <!--== End Product Info Area ==-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        <!--== End Product Quick View Modal ==-->




        



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


  
import $ from "jquery";









$(document).ready(function(){
    var proQty = $(".pro-qty");
    proQty.append('<div class= "dec qty-btn">-</div>');
    proQty.append('<div class="inc qty-btn">+</div>');
    $('.qty-btn').on('click', function (e) {
      e.preventDefault();
      var $button = $(this);
      var oldValue = $button.parent().find('input').val();
      var newVal = 1;

      if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find('input').val(newVal);
    });

})





//   $('.action-btn-wishlist').click{

//   }
  </script>

  <style lang="scss">
    
  @import '../scss/_variables.scss';
  @import '../scss/style.scss';


.second-btn, .main-btn{
    border-radius: 50px;
}
//modal==========================================

.product-action-modal .modal-content {
    border-radius: 0 0 5px 5px;
}

.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 0.3rem;
    outline: 0;
}

.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
}
.modal-dialog {
    max-width: 500px !important;
    margin: 1.75rem auto;
}
.product-action-modal .product-action-view-content .btn-close {
    background-image: none;
    box-shadow: none;
    border-radius: 5px 5px 0 0;
    font-size: 18px;
    width: 100%;
    height: 32px;
    line-height: 18px;
    position: absolute;
    right: 0;
    bottom: 100%;
    background-color: $main-color;
    color: #fff;
    opacity: 1;
    text-align: center;
    padding: 0;
    margin: 0;
}

.product-action-modal .product-action-view-content .modal-action-messages {
    font-size: 15px;
    line-height: 1;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 17px;
}

.product-action-modal .product-action-view-content .modal-action-messages i {
    position: relative;
    top: 0;
    margin-right: 5px;
}

.product-action-modal .product-action-view-content .modal-action-product .thumb{
    width: 100%;
    height: 450px;
    overflow: hidden;
}
.product-action-modal .product-action-view-content .modal-action-product .thumb img {
    border-radius: 8px;
    width: 100%;
    height: auto;
    transition: 0.3s;
}
.thumb img:hover{
    transform: scale(1.1, 1.1);
}
.product-action-modal .product-action-view-content .modal-action-product .product-name {
    margin: 18px 0 2px;
    font-size: 18px;
    text-align: center;
}

// expand product details ===========================

.product-cart-view-modal .modal-dialog {
    max-width: 1180px !important;
}

.product-cart-view-modal .modal-content {
    border: none;
    margin: 0 auto;
    width: auto;
}

.product-cart-view-modal .modal-body {
    padding: 30px 15px;
}

.product-cart-view-modal .btn-close {
    background-color: #fff;
    box-shadow: none;
    border: 1px solid #c8c8c8;
    background-image: none;
    font-size: 22px;
    line-height: 1;
    border-radius: 0 0 0 60px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 45px;
    height: 45px;
}

@media only screen and (max-width:575px){
    .product-cart-view-modal .modal-body{
        padding:15px 0;
    }
}
.product-cart-view-modal .modal-content{
    border:none;margin:0 auto;width:auto;
}
.product-cart-view-modal .product-single-info{
    padding-bottom:0;padding-top:20px;
    margin-left:0;margin-bottom:0
}
.product-cart-view-modal .product-single-info .prices{
    margin:20px 0;
}
.product-cart-view-modal .product-single-info .desc{
    margin-bottom:20px;
}
.product-cart-view-modal .btn-close span{
    position:relative;
    top:-7px;
    left:7px
}



.product-details-content .product-details-collection {
    color: #1b1c1e;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 14px;
}
.product-quick-view-content .product-details-content .product-details-title {
    font-size: 40px;
    margin-bottom: 22px;
    line-height: 1.2;
}
.product-details-review {
    align-items: center;
    display: flex;
}

.product-details-review .product-review-icon {
    display: flex;
    font-size: 16px;
    color: $main-color;
    letter-spacing: 5px;
    margin-right: 26px;
}


.product-details-review .product-review-show {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    font-style: italic;
    font-size: 13px;
    line-height: 1;
    text-align: right;
    color: #898989;
}


.product-details-pro-qty {
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 34px;
    margin-bottom: 32px;
}
    .pro-qty {
        display: inline-block;
        position: relative;
    }

    .pro-qty input{
        border:1px solid #eee;
        box-shadow:inset 0 0 6px 0 #1b1c1e17;
        
    }
    .pro-qty .qty-btn {
        cursor: pointer;
        position: absolute;
        line-height: 21px;
        color: #555;
        height: 25px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 28px;
        width: 53px;
        text-align: center;
        transition: all .5s ease 0s;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .pro-qty .inc {
        right: 0;
        border-left: 1px solid #cdcdcd;
        padding-right: 5px;
    }
    .pro-qty .qty-btn {
        cursor: pointer;
        position: absolute;
        line-height: 21px;
        color: #555;
        height: 25px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 28px;
        width: 53px;
        text-align: center;
        transition: all .5s ease 0s;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .pro-qty input {
        width: 170px;
        height: 50px;
        font-size: 13px;
        border: 2px solid $main-color;
        border-radius: 50px;
        color: #231942;
        font-weight: 700;
        padding: 0 55px;
        text-align: center;
    }

    .pro-qty .dec {
        left: 0;
        border-right: 1px solid #cdcdcd;
        padding-left: 5px;
        line-height: 22px;
    }
    

    .product-details-action {
        margin-top: 30px;
        align-items: center;
        display: flex;
    }


.product-details-action .price {
    font-weight: 400;
    margin-bottom: 0;
    line-height: 1;
    font-size: 44px;

}
.product-details-cart-wishlist {
    margin-left: 28px;
}





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
    background-color:$main-color;
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
    background-color:$main-color;
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
        .product-item{
            border-radius: 10px;
            border: 1px solid $main-color;
        }
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
            padding:15px
        }
        .product-item .product-info .title{
            font-size:21px;
            font-weight:400;
            margin-bottom:12px;
        }
        .product-item .product-info .title a{
            color: $main-color;
        }
        @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){
            .product-item .product-info .title{
                font-size:17px;
                font-weight:500;
                margin-bottom:8px;
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
       .product-action-btn{
            background-color:#fff;
            border:2px solid $main-color;
            color:#1b1c1e;
            display:inline-block;
            opacity:0;
            transform:translateY(40px);
            -webkit-transform:translateY(40px);
            -moz-transform:translateY(40px);
            -ms-transform:translateY(40px);
            -o-transform:translateY(40px);
            transition:all .5s ease 0s;
            transition:.1s
        }

     .product-action-btn:hover{
            color: #fff;
            background-color: $main-color;
            
        }
         .action-btn-cart{
            border-radius:50px;
            height:50px;
            letter-spacing:.2em;
            font-size:13px;
            color:#1b1c1e;
            font-weight:500;margin:0 20px;
            padding:5px 28px 5px 32px;
            text-align:center;
            text-transform:uppercase;
            transition-delay:.15s
        }
        @media only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){
             .action-btn-cart{
                height:44px;
                font-size:11px;
                margin:0 10px;
                padding:5px 15px 5px 19px
            }
        }
        @media only screen and (max-width:767px){
         .action-btn-cart{
                height:40px;
                font-size:11px;
                margin:0 8px;
                padding:7px 15px 5px 17px;
                letter-spacing:.4px
            }
        }
      .action-btn-quick-view, .action-btn-wishlist{
            border-radius:50%;
            height:50px;
            font-size:20px;
            line-height:47px;
            width:50px
        }
        @media only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){
          .action-btn-quick-view, .action-btn-wishlist{
                height:44px;
                font-size:15px;
                line-height:38px;
                width:44px
            }
        }
        @media only screen and (max-width:767px){
            .action-btn-quick-view, .action-btn-wishlist{
                height:42px;
                font-size:14px;
                line-height:36px;
                width:42px}
            }
            .action-btn-wishlist{
                transition-delay:.2s
            }
            .action-btn-quick-view{
                font-size:17px;
                line-height:45px
            }
            @media only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){
                .action-btn-quick-view{
                    font-size:14px;
                    line-height:30px;
                    height:44px;
                    width:44px
                }
            }
            @media only screen and (max-width:767px){
                .action-btn-quick-view{
                    font-size:12px;
                    line-height:25px;
                    height:42px;
                    width:42px
                }
            }
            .product-item .product-action-bottom{
                display:none;
                flex-wrap:wrap;
                justify-content:space-between
            }
            @media only screen and (max-width:575px){
                .product-item .product-action-bottom{
                    display:flex
                }
            }
            .product-item .product-action-bottom .product-action-btn{
                background-color:#f7f7f7;
                border:1px solid #eee;
                width:calc(50% - 2px);
                font-size:15px;
                padding:4px;
                height:40px
            }
            .product-item .product-action-bottom .action-btn-cart{
                font-size:12px;
                display:block;
                width:100%;
                font-weight:500;padding:6px 0 8px;margin-top:4px
            }
            .product-item .product-rating{
                margin-bottom:20px;display:flex;align-items:center;justify-content:space-between}
                @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){
                    .product-item .product-rating{
                        margin-bottom:8px;display:block}}.product-item .product-rating .rating{color:$main-color;cursor:pointer;font-size:16px;display:flex
                }
                @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){
                    .product-item .product-rating .rating{
                        font-size:13px
                    }
                }
                @media only screen and (max-width:575px){
                    .product-item .product-rating .rating{
                        font-size:11px
                    }
                }
                .product-item .product-rating .rating i+i{
                    margin-left:5px
                }
                @media only screen and (max-width:575px){
                    .product-item .product-rating .rating i+i{
                        margin-left:2px
                    }
                }
                .product-item .product-rating .reviews{
                    color:#898989;
                    font-size:13px;
                    font-style:italic;
                    font-weight:400
                }
                @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){
                    .product-item .product-rating .reviews{
                        margin-top:8px
                    }
                }
                    @media only screen and (max-width:575px){
                        .product-item .product-rating .reviews{
                            margin-top:5px;font-size:12px
                        }
                    }
                    .product-item .prices span{
                        font-size:21px;
                        font-weight:500
                    }
                    @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){
                        .product-item .prices span{
                            font-size:16px
                        }
                    }
                    @media only screen and (max-width:575px){
                        .product-item .prices span{
                            font-size:14px;
                        }
                    }
                    
                    .product-item .prices .price-old{
                        color:#364958;
                        font-size:12px;
                        font-weight:300;
                        margin-left:4px;
                        -webkit-text-decoration-line:line-through;
                        text-decoration-line:line-through;
                    }
                    @media only screen and (max-width:575px){
                        .product-item .prices .price-old{
                            font-size:11px;
                        }
                    }
                    .product-item .flag-new{
                        background-color:$main-color;
                        border-radius:50px;
                        color:#fff;
                        display:inline-block;
                        font-size:16px;
                        font-weight:400;
                        text-align:center;padding:7px 22px 10px;line-height:1;
                        position:absolute;
                        top:20px;right:20px
                    }
                    @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px),only screen and (min-width:992px) and (max-width:1199px){
                        .product-item .flag-new{
                            font-size:14px;
                            padding:5px 18px 8px
                        }
                    }
                    @media only screen and (max-width:575px){
                        .product-item .flag-new{
                            font-size:12px;
                            padding:5px 12px 6px;
                            top:5px;
                            right:5px
                        }
                    }
                    .product-item:hover .product-thumb img{
                        transform:scale(1.05);
                        -webkit-transform:scale(1.05);
                        -moz-transform:scale(1.05);
                        -ms-transform:scale(1.05);
                        -o-transform:scale(1.05)
                    }
                    .product-item:hover .product-action .product-action-btn{
                        opacity:1;
                        visibility:visible;
                        transform: translate(0);
                        -webkit-transform:translate(0);
                        -moz-transform:translate(0);
                        -ms-transform:translate(0);
                        -o-transform:translate(0);
                }
                //==========================================================
                .product-banner{
                    margin-bottom: 120px;
                }
                .product-banner-item{
                    border-radius:10px;
                    display:block;
                    overflow:hidden;
                    position:relative;
                    z-index:1
                }
                .product-banner-item img{
                    border-radius:10px;
                    transition:all .5s ease 0s;
                    width:100%
                }
                .product-banner-item:before{left:-280px
                }
                .product-banner-item:after,.product-banner-item:before{
                    background-color:hsla(0,0%,100%,.09);content:"";
                    height:200%;
                    position:absolute;
                    top:-50%;
                    transform:rotate(35deg);
                    -webkit-transform:rotate(35deg);
                    -moz-transform:rotate(35deg);
                    -ms-transform:rotate(35deg);
                    -o-transform:rotate(35deg);
                    transition:all 2s cubic-bezier(.19,1,.22,1);
                    -webkit-transition:all 2s cubic-bezier(.19,1,.22,1);
                    -moz-transition:all 2s cubic-bezier(.19,1,.22,1);
                    -ms-transition:all 2s cubic-bezier(.19,1,.22,1);
                    -o-transition:all 2s cubic-bezier(.19,1,.22,1);
                    width:80px;z-index:1
                }
                .product-banner-item:after{
                    left:180%
                }
                .product-banner-item:hover img{
                    transform:scale(1.03);
                    -webkit-transform:scale(1.03);
                    -moz-transform:scale(1.03);
                    -ms-transform:scale(1.03);
                    -o-transform:scale(1.03)
                }
                .product-banner-item:hover:before{
                    left:180%
                }
                .product-banner-item:hover:after{
                    left:-280px
                }
</style>