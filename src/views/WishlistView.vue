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
                                        <a class="btn second-btn py-2 px-4" href="product-cart.html">Add to Cart</a>
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
                                        <a class="btn second-btn py-2 px-4" href="product-cart.html">Add to Cart</a>
                                    </td>
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
                                        <a class="btn second-btn py-2 px-4" href="product-cart.html">Add to Cart</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </section>



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

<style lang="scss">

</style>