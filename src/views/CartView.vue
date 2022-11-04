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

  
//============= right part =

.checkout-order-details-wrap {
    margin-left: 40px;
}

.checkout-order-details-wrap .order-details-table-wrap {
    border: 2px solid $main-color;
    margin-bottom: 50px;
    padding: 48px 50px 54px;
    position: relative;
    border-radius: 16px;
}

.shopping-checkout-wrap .title {
    font-size: 20px;
    position: relative;
    padding-bottom: 12px;
    margin-bottom: 35px;
    font-weight: 600;
    text-transform: capitalize;
}

.shopping-checkout-wrap .title:before {
    background-color: #1b1c1e;
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 50px;
}
.checkout-order-details-wrap .order-details-table-wrap .table td, .checkout-order-details-wrap .order-details-table-wrap .table th {
    color: #1b1c1e;
    font-weight: 400;
    font-size: 14px;
    vertical-align: middle;
}

.checkout-order-details-wrap .order-details-table-wrap .table th {
    border-style: solid;
    border-width: 0 0 1px;
    border-color: #e8e8e8;
    padding: 8px 0;
}

.checkout-order-details-wrap .order-details-table-wrap .table .product-total {
    text-align: right;
}

.checkout-order-details-wrap .order-details-table-wrap .table .cart-item {
    line-height: 20px;
}

.checkout-order-details-wrap .order-details-table-wrap .table .cart-item:first-child td {
    padding-top: 27px;
}

.checkout-order-details-wrap .order-details-table-wrap .table .product-quantity {
    color: #1b1c1e;
}

.checkout-order-details-wrap .order-details-table-wrap .table .cart-item:first-child td {
    padding-top: 27px;
}

.checkout-order-details-wrap .order-details-table-wrap .table .product-total {
    text-align: right;
}




.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method {
    margin-top: 34px;
}

.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card {
    background-color: transparent;
    border-radius: 0;
    border: none;
    margin-bottom: 10px;
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header {
    border: none;
    background-color: transparent;
    padding: 0;
    display: inline-block;
}

.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header .title {
    display: inline-block;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 0;
    position: relative;
    padding-left: 20px;
    padding-bottom: 0;
    text-transform: uppercase;
}

.checkout-order-details-wrap .order-details-table-wrap .table-foot td {
    text-align: right;
}
.table>:not(caption)>*>* {
    padding: 1rem 0rem;
}

th{
    font-size: 18px !important;
}
td{
    font-size: 15px !important;
}

.shop-payment-method{
    margin-top:34px;
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card{
    background-color:transparent;border-radius:0;border:none;margin-bottom:10px
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header{border:none;background-color:transparent;padding:0;display:inline-block
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header .title{
    display:inline-block;font-weight:400;font-size:14px;margin-bottom:0;position:relative;padding-left:20px;padding-bottom:0;text-transform:uppercase
}

.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header .title:before{
    position:absolute;content:"";background-color:#fff;border:1px solid $main-color;
    width:12px;height:12px;border-radius:50%;top:50%;transform:translateY(-50%);left:0;
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header .title:after{
    position:absolute;content:"";
    width:6px;
    height:6px;
    background-color:#0075ff;
    border-radius:50%;
    top:50%;
    transform:translateY(-50%);
    left:3px;
    display:block;
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header .title[aria-expanded=false]:after{
    display:none;

}

.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header .title[aria-expanded=true]:before{
    border-color: $main-color;
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header .title[aria-expanded=true]:after{
    display:block;
    background-color: $main-color;
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header:hover{
    cursor:pointer;
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-body{
    padding:0;
    margin-top:10px;
    margin-bottom:10px;
}

.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-body p{
    color:#747474;
    font-size:13px;
    line-height:24px;

}

.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .p-text{
    color:#747474;
    font-size:14px;
    margin-top:24px;
    margin-bottom:18px;
}

.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .p-text a{
    color: $main-color;
    text-decoration:underline
}.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .p-text a:hover{color:$main-color}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .agree-policy .required{
    color:$main-color;
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .agree-policy .custom-checkbox{
    position:relative;
    padding-left:24px
}

.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .agree-policy .custom-checkbox .custom-control-input:checked~.custom-control-label:before{
    background-color:#fff;
    border-radius:0;border-color:#1b1c1e;box-shadow:none;
    width:15px;
    height:15px;
    border-width:2px;
    transition:all .3s ease-out;
    -webkit-transition:all .3s ease-out;
    -moz-transition:all .3s ease-out;
    -ms-transition:all .3s ease-out;
    -o-transition:all .3s ease-out;
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .agree-policy .custom-checkbox .custom-control-input:checked~.custom-control-label:after{
    display:inline-block;
    color:#1b1c1e;
    content:"\f00c";
    font-family:FontAwesome;
    font-size:8px;
    position:absolute;
    text-align:center;
    padding-left:0;
    line-height:14px;
    box-shadow:none;
    left:4px;
    top:7px;
    transition:all .1s ease-out;
    -webkit-transition:all .1s ease-out;
    -moz-transition:all .1s ease-out;
    -ms-transition:all .1s ease-out;
    -o-transition:all .1s ease-out;
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .agree-policy .custom-checkbox .custom-control-label{
    color:#1b1c1e;
    font-size:14px;
    margin-bottom:0;
    padding-left:0;
    padding-top:0;
    cursor:pointer;
}
.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .agree-policy .custom-checkbox .custom-control-label:before{
    content:"";
    position:absolute;
    background-color:#fff;
    border-radius:0;
    box-shadow:none;
    border:2px solid #e4e4e4;
    width:15px;
    height:15px;
    top:7px;
    left:0;
    transition:all .3s ease-out;
    -webkit-transition:all .3s ease-out;
    -moz-transition:all .3s ease-out;
    -ms-transition:all .3s ease-out;
    -o-transition:all .3s ease-out;
}

.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .btn-place-order{
    display:block;
    text-align:center;
    border-radius:0;
    padding:18px 20px 16px;
    margin-top:32px;font-size:16px;
    background-color: $main-color;
    border-color: $main-color;
    color:#fff;
    text-transform:uppercase;
    font-weight:600;
}

.checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .btn-place-order:hover{
    background-color:#1b1c1e;
    border-color:#1b1c1e;
}
</style>