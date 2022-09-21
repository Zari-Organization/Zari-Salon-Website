<template>
    <div>
        <section class="page-header">
            <h1>Wishlist</h1>
            <ul class="bread-crumbs">
                <li class="bread-crumbs__item">
                    <router-link to="/" class="bread-crumbs__link">Home</router-link>
                </li>
                <li class="bread-crumbs__item fw-bold">Wishlist</li>
            </ul>
          
        </section>

        <section class="section-space">
            <div class="container">
                <div class="shopping-wishlist-form table-responsive">
                    <form action="#" method="post">
                        <table class="table text-center">
                            <thead>
                                <tr>
                                    <th class="product-remove">&nbsp;</th>
                                    <th class="product-thumbnail">&nbsp;</th>
                                    <th class="product-name">Product name</th>
                                    <th class="product-price">Unit price</th>
                                    <th class="product-stock-status">Stock status</th>
                                    <th class="product-add-to-cart">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="tbody-item">
                                    <td class="product-remove">
                                        <a class="remove" href="javascript:void(0)">×</a>
                                    </td>
                                    <td class="product-thumbnail">
                                        <div class="thumb">
                                            <a href="single-product.html">
                                                <img src="../assets/shop/product.webp" width="68" height="84" alt="Image-HasTech">
                                            </a>
                                        </div>
                                    </td>
                                    <td class="product-name">
                                        <a class="title" href="single-product.html">Condimentum posuere consectetur urna</a>
                                    </td>
                                    <td class="product-price">
                                        <span class="price">$115.00</span>
                                    </td>
                                    <td class="product-stock-status">
                                        <span class="wishlist-in-stock">In Stock</span>
                                    </td>
                                    <td class="product-add-to-cart">
                                        <button type="button" class="btn second-btn py-2 px-4" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                            <span>Add to cart</span>
                                        </button>
                                                                        </td>
                                </tr>
                                <tr class="tbody-item">
                                    <td class="product-remove">
                                        <a class="remove" href="javascript:void(0)">×</a>
                                    </td>
                                    <td class="product-thumbnail">
                                        <div class="thumb">
                                            <a href="single-product.html">
                                                <img src="../assets/shop/product2.webp" width="68" height="84" alt="Image-HasTech">
                                            </a>
                                        </div>
                                    </td>
                                    <td class="product-name">
                                        <a class="title" href="single-product.html">Kaoreet lobortis sagittis laoreet</a>
                                    </td>
                                    <td class="product-price">
                                        <span class="price">$95.00</span>
                                    </td>
                                    <td class="product-stock-status">
                                        <span class="wishlist-in-stock">In Stock</span>
                                    </td>
                                    <td class="product-add-to-cart">
                                        <button type="button" class="btn second-btn py-2 px-4" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                            <span>Add to cart</span>
                                        </button>                                    </td>
                                </tr>
                                <tr class="tbody-item">
                                    <td class="product-remove">
                                        <a class="remove" href="javascript:void(0)">×</a>
                                    </td>
                                    <td class="product-thumbnail">
                                        <div class="thumb">
                                            <a href="single-product.html">
                                                <img src="../assets/shop/product3.webp" width="68" height="84" alt="Image-HasTech">
                                            </a>
                                        </div>
                                    </td>
                                    <td class="product-name">
                                        <a class="title" href="single-product.html">Nostrum exercitationem itae ipsum</a>
                                    </td>
                                    <td class="product-price">
                                        <span class="price">$79.00</span>
                                    </td>
                                    <td class="product-stock-status">
                                        <span class="wishlist-in-stock">In Stock</span>
                                    </td>
                                    <td class="product-add-to-cart">
                                        <!-- <a class="btn second-btn py-2 px-4" href="product-cart.html">Add to Cart</a> -->
                                        <button type="button" class="btn second-btn py-2 px-4" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                            <span>Add to cart</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </section>


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

        <SubscribeSection />
        <FooterSection />



    </div>
</template>

<script>
    import SubscribeSection from '@/components/SubscribeSection.vue';
    import FooterSection from '@/components/FooterSection.vue';


    
export default {
  components:{
    SubscribeSection,
    FooterSection,
}}

</script>

<style lang="scss" scoped>
    @import '../scss/_variables';
    @import '../scss/style.scss';
 
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

</style>