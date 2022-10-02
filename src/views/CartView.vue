<template>
    <div>
        <section class="page-header">
            <h1>Cart</h1>
            <ul class="bread-crumbs">
                <li class="bread-crumbs__item">
                    <router-link to="/" class="bread-crumbs__link">Home</router-link>
                </li>
                <li class="bread-crumbs__item fw-bold">Cart</li>
            </ul>
          
        </section>


        <section class="section-space">
            <div class="container">
                <div class="shopping-cart-form table-responsive">
                    <form action="#" method="post">
                        <table class="table text-center">
                            <thead>
                                <tr>
                                    <th class="product-remove">&nbsp;</th>
                                    <th class="product-thumbnail">&nbsp;</th>
                                    <th class="product-name">Product</th>
                                    <th class="product-price">Price</th>
                                    <th class="product-quantity">Quantity</th>
                                    <th class="product-subtotal">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="alert tbody-item">
                                    <td class="product-remove">
                                        <a class="remove" href="javascript:void(0)" data-dismiss="alert">×</a>
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
                                    <td class="product-quantity">
                                        <div class="pro-qty">
                                            <input type="text" class="quantity" title="Quantity" value="1">
                                        <div class="dec qty-btn">-</div><div class="inc qty-btn">+</div></div>
                                    </td>
                                    <td class="product-subtotal">
                                        <span class="price">$115.00</span>
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
                                    <td class="product-quantity">
                                        <div class="pro-qty">
                                            <input type="text" class="quantity" title="Quantity" value="1">
                                        <div class="dec qty-btn">-</div>
                                        <div class="inc qty-btn">+</div>
                                    </div>
                                    </td>
                                    <td class="product-subtotal">
                                        <span class="price">$95.00</span>
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
                                    <td class="product-quantity">
                                        <div class="pro-qty">
                                            <input type="text" class="quantity" title="Quantity" value="1" />
                                        <div class="dec qty-btn">-</div>
                                        <div class="inc qty-btn">+</div></div>
                                    </td>

                                    
                                    <td class="product-subtotal">
                                        <span class="price">$79.00</span>
                                    </td>
                                </tr>
                                <tr class="tbody-item-actions">
                                    <td colspan="6">
                                        <button type="submit" class="btn main-btn py-2 px-4 me-3">Update cart</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="coupon-wrap">
                            <h4 class="title">Coupon</h4>
                            <p class="desc">Enter your coupon code if you have one.</p>
                            <input type="text" class="form-control" placeholder="Coupon code">
                            <button type="button" class="btn second-btn py-2 px-4">Apply coupon</button>
                        </div>
                    </div>



                    <div class="col-lg-6">
                        <!--== Start Order Details Accordion ==-->
                        <div class="checkout-order-details-wrap">
                            <div class="order-details-table-wrap table-responsive">
                                <h2 class="title mb-25">Your order</h2>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="product-name">Product</th>
                                            <th class="product-total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-body">
                                        <tr class="cart-item">
                                            <td class="product-name">Satin gown <span class="product-quantity">× 1</span></td>
                                            <td class="product-total">£69.99</td>
                                        </tr>
                                        <tr class="cart-item">
                                            <td class="product-name">Printed cotton t-shirt <span class="product-quantity">× 1</span></td>
                                            <td class="product-total">£20.00</td>
                                        </tr>
                                    </tbody>
                                    <tfoot class="table-foot">
                                        <tr class="cart-subtotal">
                                            <th>Subtotal</th>
                                            <td>£89.99</td>
                                        </tr>
                                        <tr class="shipping">
                                            <th>Shipping</th>
                                            <td>Flat rate: £2.00</td>
                                        </tr>
                                        <tr class="order-total">
                                            <th>Total </th>
                                            <td>£91.99</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div class="shop-payment-method">
                                    <div id="PaymentMethodAccordion">
                                        <div class="card">


                                            <div class="card-header" id="check_payments2">
                                                <h5 class="title" data-bs-toggle="collapse" data-bs-target="#itemOne" aria-controls="itemOne" aria-expanded="false">DIRECT BANK TRANSFER</h5>
                                            </div>


                                            <div id="itemOne" class="collapse show" aria-labelledby="check_payments" data-bs-parent="#PaymentMethodAccordion">
                                                <div class="card-body">
                                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="card">
                                            <div class="card-header" id="check_payments2">
                                                <h5 class="title" data-bs-toggle="collapse" data-bs-target="#itemTwo" aria-controls="itemTwo" aria-expanded="false">Check payments</h5>
                                            </div>
                                            <div id="itemTwo" class="collapse" aria-labelledby="check_payments2" data-bs-parent="#PaymentMethodAccordion">
                                                <div class="card-body">
                                                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="check_payments3">
                                                <h5 class="title" data-bs-toggle="collapse" data-bs-target="#itemThree" aria-controls="itemTwo" aria-expanded="false">Cash on delivery</h5>
                                            </div>
                                            <div id="itemThree" class="collapse" aria-labelledby="check_payments3" data-bs-parent="#PaymentMethodAccordion">
                                                <div class="card-body">
                                                    <p>Pay with cash upon delivery.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="check_payments4">
                                                <h5 class="title" data-bs-toggle="collapse" data-bs-target="#itemFour" aria-controls="itemTwo" aria-expanded="false">PayPal Express Checkout</h5>
                                            </div>
                                            <div id="itemFour" class="collapse" aria-labelledby="check_payments4" data-bs-parent="#PaymentMethodAccordion">
                                                <div class="card-body">
                                                    <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="p-text">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#/">privacy policy.</a></p>
                                    <div class="agree-policy">
                           

                                        
                                    </div>
                                    <a style="width: 100%">
                                        
                                        <router-link to="/cart/checkout" class="btn main-btn py-2 px-4 mt-5">Proceed to checkout</router-link>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!--== End Order Details Accordion ==-->
                    </div>
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
}};


import $ from "jquery";









$(document).ready(function(){
    var proQty = $(".pro-qty");
    proQty.append('<div class= "dec qty-btn">-</div>');
    proQty.append('<div class="inc qty-btn">+</div>');
    $('.qty-btn').on('click', function (e) {
      e.preventDefault();
      var $button = $(this);
      var oldValue = $button.parent().find('input').val();
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




</script>

<style lang="scss">
    
  @import '../scss/_variables.scss';
  @import '../scss/style.scss';

</style>