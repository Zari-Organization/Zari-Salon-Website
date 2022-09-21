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
                    <div class="col-12 col-lg-6">
                        <div class="cart-totals-wrap">
                            <h2 class="title">Cart totals</h2>
                            <table>
                                <tbody>
                                    <tr class="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td>
                                            <span class="amount">$499.00</span>
                                        </td>
                                    </tr>
                                    <tr class="shipping-totals">
                                        <th>Shipping</th>
                                        <td>
                                            <ul class="shipping-list">
                                                <li class="radio">
                                                    <input type="radio" name="shipping" id="radio1" checked="">
                                                    <label for="radio1">Flat rate: <span>$3.00</span></label>
                                                </li>
                                                <li class="radio">
                                                    <input type="radio" name="shipping" id="radio2">
                                                    <label for="radio2">Free shipping</label>
                                                </li>
                                                <li class="radio">
                                                    <input type="radio" name="shipping" id="radio3">
                                                    <label for="radio3">Local pickup</label>
                                                </li>
                                            </ul>
                                            <p class="destination">Shipping to <strong>USA</strong>.</p>
                                            <a href="javascript:void(0)" class="btn-shipping-address">Change address</a>
                                        </td>
                                    </tr>
                                    <tr class="order-total">
                                        <th>Total</th>
                                        <td>
                                            <span class="amount">$504.00</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="text-end">
                                <router-link to="/cart/checkout" class="btn main-btn py-2 px-4 mt-5">Proceed to checkout</router-link>
                            </div>
                        </div>
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

.section-space{
    margin-bottom: 120px;

}  
ul{
    list-style: none;
}
    .shopping-cart-form{
        margin-bottom:70px
    }
    .shopping-cart-form table{
        background:#fff;border:1px solid #e5e5e5;border-width:1px 0 1px 1px;color:#323232;margin:0 0 70px;text-align:left;width:100%;
        border-radius:5px;margin:0
    }
    @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px){
        .shopping-cart-form table{width:810px}
    }
    .shopping-cart-form table th{
        border-bottom:none;border-top:none;font-size:14px;text-align:center;text-transform:uppercase;font-weight:600;
        line-height:1;border-right:1px solid #e5e5e5
    }
    .shopping-cart-form table td,.shopping-cart-form table th{
        padding:20px 10px;vertical-align:middle
    }
    .shopping-cart-form table td{
        border-top:1px solid rgba(0,0,0,.1);line-height:1.5em;border-bottom:none;font-size:15px;text-align:center;
        border-right:1px solid #e5e5e5
    }
    .shopping-cart-form table .tbody-item{
        background-color:transparent;
        transition:all .3s ease-out;
        -webkit-transition:all .3s ease-out;
        -moz-transition:all .3s ease-out;
        -ms-transition:all .3s ease-out;
        -o-transition:all .3s ease-out;
    }
    .shopping-cart-form table .tbody-item:hover{
        background-color:#fafafa;
    }
    .shopping-cart-form table .tbody-item-actions td{
        text-align:right;
    }
    .shopping-cart-form table .product-remove .remove{
        color:#323232;
        font-size:20px;
        font-weight:500;
        line-height:20px;
        width:20px;
        height:20px;
        display:inline-block;
    }
    .shopping-cart-form table .product-remove .remove:hover{
        color: $main-color;
    }
    .shopping-cart-form table .product-thumbnail{
        min-width:32px
    }
    .shopping-cart-form table .product-thumbnail img{
        width:75px;border-radius:2px
    }
    .shopping-cart-form table .product-name .title{
        color:#323232;font-weight:500
    }
    .shopping-cart-form table .product-name .title:hover{
        color: $main-color;
    }
    .shopping-cart-form table .product-price .price{
        color:#323232;
        font-size:15px;font-weight:500
    }

    .pro-qty {
        display: inline-block;
        position: relative;
    }

    .shopping-cart-form table .product-quantity .pro-qty input{
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
    

    .shopping-cart-form table .product-subtotal{
        font-weight:500
    }
    .shopping-cart-form tbody:not(:first-child){border-top:none
    }
    .shopping-cart-form .btn-update-cart{
        background:#fff;border:2px solid #d9d9d9;
        box-shadow:none;color:#545454;
        display:inline-block;font-size:1.077em;font-weight:500;height:50px;line-height:46px;
        padding:0 35px;border-radius:4px;transition:all .3s ease 0s;
        text-transform:capitalize
    }
    .shopping-cart-form .btn-update-cart:hover{
        background-color:#ebe9eb;
        border-color:#e5e5e5
    }
    .coupon-wrap .title{
        border-bottom:1px solid #e5e5e5;font-size:18px;
        margin:0 0 22px;padding:0 0 10px;
        text-transform:uppercase;font-weight:600
    }
    .coupon-wrap .desc{
        color:#888;font-size:14px;font-weight:400;
        line-height:1.8;margin-bottom:12px
    }
    .coupon-wrap .form-control{
        border:1px solid #e5e5e5;border-radius:4px;padding:0 16px;vertical-align:middle;margin:0 0 25px;width:100%}.coupon-wrap .btn-coupon,.coupon-wrap .form-control{background:#fff;box-shadow:none;height:50px;line-height:48px;font-size:14px}.coupon-wrap .btn-coupon{border:2px solid #e5e5e5;color:#323232;display:inline-block;padding:0 35px;border-radius:4px;transition:all .3s ease-out;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-ms-transition:all .3s ease-out;-o-transition:all .3s ease-out;font-weight:600;text-transform:uppercase}.coupon-wrap .btn-coupon:hover{background-color:$main-color;border-color:$main-color;color:#fff}.cart-totals-wrap{background:#f9f9f9;padding:33px 30px 35px;width:100%
        }
@media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px){
    .cart-totals-wrap{margin-top:40px
    }
}
.cart-totals-wrap .title{
    border-bottom:1px solid #ffffff;
    font-size:18px;font-weight:600;margin:0 0 4px;
    padding:0 0 10px;
    text-transform:uppercase
}
.cart-subtotal{    border-bottom:1px solid #ffffff;


}
.cart-totals-wrap {
    background: #ebebeb;
    padding: 33px 30px 35px;
    width: 100%;
}
    .cart-totals-wrap table{width:100%}
    .cart-totals-wrap table tbody tr:first-child th{border-top:none}
    .cart-totals-wrap table tbody tr th{border:none;border-bottom:1px solid #e5e5e5;font-size:14px;font-weight:500;padding:16px 0 15px;text-align:left;text-transform:uppercase;vertical-align:top}.cart-totals-wrap table tbody tr td{border-bottom:1px solid #e5e5e5;padding:15px 0;text-align:right;vertical-align:top}.cart-totals-wrap table tbody .amount{color:#242424;font-size:20px;font-weight:500;line-height:21px;text-transform:uppercase}.cart-totals-wrap table tbody .shipping-list{margin-top:2px;margin-bottom:20px}.cart-totals-wrap table tbody .shipping-list li{margin:0 0 4px;padding:0;text-align:right;line-height:1.5em}.cart-totals-wrap table tbody .shipping-list li input{cursor:pointer;margin-right:2px;position:relative;top:1px;font-weight:500}.cart-totals-wrap table tbody .shipping-list li label{cursor:pointer;color:#323232;font-size:14px;font-weight:500}.cart-totals-wrap table tbody .shipping-list li label span{color:#1b1c1e;font-weight:500;margin-left:5px;text-align:left}.cart-totals-wrap table tbody .destination{font-size:14px;margin-bottom:6px}.cart-totals-wrap table tbody .destination strong{font-weight:700}.cart-totals-wrap table tbody .btn-shipping-address{font-size:13px;color:#1b1c1e;font-weight:500;margin-bottom:3px;display:inline-block}.cart-totals-wrap table tbody .btn-shipping-address:hover{color: $main-color}.cart-totals-wrap table .order-total th{padding-top:18px}.cart-totals-wrap .checkout-button{background:$main-color;border:2px solid $main-color;box-shadow:none;color:#fff;cursor:pointer;display:inline-block;font-size:14px;font-weight:500;height:50px;letter-spacing:0;margin-top:30px;line-height:46px;outline:none;overflow:hidden;padding:0 35px;text-shadow:none;text-transform:uppercase;vertical-align:middle;white-space:nowrap;border-radius:4px;transition:all .3s ease-out;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-ms-transition:all .3s ease-out;-o-transition:all .3s ease-out}@media only screen and (max-width:575px){.cart-totals-wrap .checkout-button{font-size:14px;padding:0 15px}}.cart-totals-wrap .checkout-button:hover{background:#1b1c1e;border-color:#1b1c1e;color:#fff}.disabled{color:inherit;cursor:not-allowed;opacity:.5}.shopping-wishlist-form table{background:#fff;border:1px solid #e5e5e5;border-width:1px 0 1px 1px;color:#323232;margin:0 0 70px;text-align:left;width:100%;border-radius:5px;margin:0}@media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px){.shopping-wishlist-form table{width:1199px}}.shopping-wishlist-form table tbody:not(:first-child){border-top:none}.shopping-wishlist-form table th{border-bottom:none;border-top:none;font-size:14px;text-align:center;text-transform:uppercase;font-weight:700;line-height:1.5em;border-right:1px solid #e5e5e5}.shopping-wishlist-form table td,.shopping-wishlist-form table th{padding:20px 10px;vertical-align:middle}.shopping-wishlist-form table td{border-top:1px solid rgba(0,0,0,.1);line-height:1.5em;border-bottom:none;font-size:14px;font-weight:600;text-align:center;border-right:1px solid #e5e5e5}.shopping-wishlist-form table .tbody-item{background-color:transparent;transition:all .3s ease-out;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-ms-transition:all .3s ease-out;-o-transition:all .3s ease-out
    }
    .shopping-wishlist-form table .tbody-item:hover{
        background-color:#fafafa}
        .shopping-wishlist-form table .product-remove .remove{
            color:#323232;
            font-size:20px;font-weight:700;line-height:20px;width:20px;height:20px;
            display:inline-block
    }
    .shopping-wishlist-form table .product-remove .remove:hover{
        color:$main-color;
    }
    .shopping-wishlist-form table .product-thumbnail img{
        border-radius:2px;
        width:68px;
    }
    .shopping-wishlist-form table .product-name .title{
        color:#323232;
        font-weight:600;
    }
    .shopping-wishlist-form table .product-name .title:hover{
        color:$main-color
    }
    .shopping-wishlist-form table .product-price .price{
        color:#323232;font-size:14px;font-weight:600;
    }
    .shopping-wishlist-form table .product-stock-status .wishlist-in-stock{
        color:$main-color;
        font-size:14px;
        font-weight:600}.shopping-wishlist-form table .product-add-to-cart .btn-shop-cart{background:#fff;border:2px solid #e5e5e5;box-shadow:none;color:#323232;cursor:pointer;display:inline-block;font-size:14px;font-weight:600;height:55px;line-height:52px;padding:0 25px;border-radius:4px;transition:.3s ease}.shopping-wishlist-form table .product-add-to-cart .btn-shop-cart:hover{color:#fff;background-color:$main-color;border-color:$main-color}.shopping-checkout-wrap .title{font-size:20px;position:relative;padding-bottom:12px;margin-bottom:35px;font-weight:600;text-transform:capitalize}.shopping-checkout-wrap .title:before{background-color:#1b1c1e;bottom:0;content:"";height:2px;left:0;position:absolute;width:50px}.billing-form-wrap form .form-group{margin-bottom:20px}.billing-form-wrap form .form-group label{font-size:14px;color:#1b1c1e;margin-bottom:8px}.billing-form-wrap form .form-group label .required{color:red}.billing-form-wrap form .form-group .form-control{border-radius:0;box-shadow:none;border:1px solid #e8e8e8;color:#626262;font-size:14px;height:50px;line-height:50px;padding:0 20px
    }
</style>