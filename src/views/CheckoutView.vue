<template>
    <div>
        <section class="page-header">
            <h1>Checkout</h1>
            <ul class="bread-crumbs">
                <li class="bread-crumbs__item">
                    <router-link to="/cart" class="bread-crumbs__link">Cart</router-link>
                </li>
                <li class="bread-crumbs__item fw-bold">Checkout</li>
            </ul>
          
        </section>



        <section class="shopping-checkout-wrap section-space">
            <div class="container">
                <div class="checkout-page-coupon-wrap">
                    <!--== Start Checkout Coupon Accordion ==-->
                    <div class="coupon-accordion" id="CouponAccordion">
                        <div class="card">
                            <h3>
                                <i><fa :icon="['fas' , 'info-circle']" /></i>
                                Have a Coupon?
                                <a href="#/" data-bs-toggle="collapse" data-bs-target="#couponaccordion" class="collapsed" aria-expanded="false">Click here to enter your code</a>
                            </h3>
                            <div id="couponaccordion" class="collapse" data-bs-parent="#CouponAccordion" style="">
                                <div class="card-body">
                                    <div class="apply-coupon-wrap">
                                        <p>If you have a coupon code, please apply it below.</p>
                                        <form action="#" method="post">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <input class="form-control" type="text" placeholder="Coupon code">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <button type="button" class="btn second-btn py-2 px-4 me-3">Apply coupon</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--== End Checkout Coupon Accordion ==-->
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <!--== Start Billing Accordion ==-->
                        <div class="checkout-billing-details-wrap">
                            <h2 class="title">Billing details</h2>
                            <div class="billing-form-wrap">
                                <form action="#" method="post">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="f_name">First name <abbr class="required" title="required">*</abbr></label>
                                                <input id="f_name" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="l_name">Last name <abbr class="required" title="required">*</abbr></label>
                                                <input id="l_name" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="com_name">Company name (optional)</label>
                                                <input id="com_name" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-4">
                                            <div class="form-group">
                                                <label for="country">Country <abbr class="required" title="required">*</abbr></label>
                                                <select id="country" class="form-control wide form-select"  aria-label="Default select example">
                                                    <option>Egypt</option>
                                                    <option>KSA</option>
                                                    <option>Albania</option>
                                                    <option>Algeria</option>
                                                    <option>Armenia</option>
                                                    <option>India</option>
                                                    <option>Pakistan</option>
                                                    <option>England</option>
                                                    <option>London</option>
                                                    <option>London</option>
                                                    <option>China</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="street-address">Street address <abbr class="required" title="required">*</abbr></label>
                                                <input id="street-address" type="text" class="form-control" placeholder="House number and street name">
                                            </div>
                                            <div class="form-group">
                                                <label for="street-address2" class="visually-hidden">Street address 2 <abbr class="required" title="required">*</abbr></label>
                                                <input id="street-address2" type="text" class="form-control" placeholder="Apartment, suite, unit etc. (optional)">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="town">Town / City <abbr class="required" title="required">*</abbr></label>
                                                <input id="town" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-4">
                                            <div class="form-group">
                                                <label for="district">District <abbr class="required" title="required">*</abbr></label>
                                                <select id="district" class="form-control wide form-select"  aria-label="Default select example">
                                                    <option>Afghanistan</option>
                                                    <option>Albania</option>
                                                    <option>Algeria</option>
                                                    <option>Armenia</option>
                                                    <option>India</option>
                                                    <option>Pakistan</option>
                                                    <option>England</option>
                                                    <option>London</option>
                                                    <option>London</option>
                                                    <option>China</option>
                                                </select>
                                            
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="pz-code">Postcode / ZIP (optional)</label>
                                                <input id="pz-code" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="phone">Phone (optional)</label>
                                                <input id="phone" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="email">Email address <abbr class="required" title="required">*</abbr></label>
                                                <input id="email" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div id="CheckoutBillingAccordion2" class="col-md-12">
                                            <div class="checkout-box" data-bs-toggle="collapse" data-bs-target="#CheckoutTwo" aria-expanded="false" role="toolbar">
                                                <div class="custom-control custom-checkbox">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                                        <label class="form-check-label custom-control-label" for="ship-to-different-address">
                                                            Ship to a different address?
                                                        </label>
                                                      </div>
                                                </div>
                                            </div>
                                            <div id="CheckoutTwo" class="collapse" data-bs-parent="#CheckoutBillingAccordion2">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="f_name2">First name <abbr class="required" title="required">*</abbr></label>
                                                            <input id="f_name2" type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="l_name2">Last name <abbr class="required" title="required">*</abbr></label>
                                                            <input id="l_name2" type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="com_name2">Company name (optional)</label>
                                                            <input id="com_name2" type="text" class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 mb-4">
                                                        <div class="form-group">
                                                            <label for="country2">Country <abbr class="required" title="required">*</abbr></label>
                                                            <select id="country2" class="form-control wide form-select"  aria-label="Default select example">
                                                                <option>Bangladesh</option>
                                                                <option>Afghanistan</option>
                                                                <option>Albania</option>
                                                                <option>Algeria</option>
                                                                <option>Armenia</option>
                                                                <option>India</option>
                                                                <option>Pakistan</option>
                                                                <option>England</option>
                                                                <option>London</option>
                                                                <option>London</option>
                                                                <option>China</option>
                                                            </select>
                                                           
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="street-address2-3">Street address <abbr class="required" title="required">*</abbr></label>
                                                            <input id="street-address2-3" type="text" class="form-control" placeholder="House number and street name">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="street-address2-2" class="visually-hidden">Street address 2 <abbr class="required" title="required">*</abbr></label>
                                                            <input id="street-address2-2" type="text" class="form-control" placeholder="Apartment, suite, unit etc. (optional)">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="town3">Town / City <abbr class="required" title="required">*</abbr></label>
                                                            <input id="town3" type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 mb-4">
                                                        <div class="form-group">
                                                            <label for="district2">District <abbr class="required" title="required">*</abbr></label>
                                                            <select id="district2" class="form-control wide form-select"  aria-label="Default select example">
                                                                <option>Afghanistan</option>
                                                                <option>Albania</option>
                                                                <option>Algeria</option>
                                                                <option>Armenia</option>
                                                                <option>India</option>
                                                                <option>Pakistan</option>
                                                                <option>England</option>
                                                                <option>London</option>
                                                                <option>London</option>
                                                                <option>China</option>
                                                            </select>
                                                          
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="pz-code2">Postcode / ZIP (optional)</label>
                                                            <input id="pz-code2" type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group mb-0">
                                                <label for="order-notes">Order notes (optional)</label>
                                                <textarea id="order-notes" class="form-control" placeholder="Notes about your order, e.g. special notes for delivery." spellcheck="false"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!--== End Billing Accordion ==-->
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
                           

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 15px; height: 15px;" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                I have read and agree to the website terms and conditions
                                            </label>
                                          </div>
                                    </div>
                                    <!-- <a class="btn main-btn py-2 px-4 me-3 mt-5 " style="width: 100%">Place order</a> -->
                                    <a class="btn main-btn py-2 px-4 me-3 mt-5 " style="width: 100%"  data-bs-toggle="modal" data-bs-target="#action-CartAddModal">Pay Now</a>
                                </div>
                            </div>
                        </div>
                        <!--== End Order Details Accordion ==-->
                    </div>
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
                                <i class="fa fa-check-square-o"></i> Payment done successfully
                            </div>
                            <!-- <div class="modal-action-product">
                                <div class="thumb">
                                    <img src="../assets/shop/product2.webp" alt="Organic Food Juice" />
                                </div>
                                <h4 class="product-name"><a   >product name</a></h4>
                            </div> -->
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
}};

</script>

<style lang="scss">



  @import '../scss/_variables.scss';
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





  .second-btn, .main-btn{
    border-radius: 50px;
}

    .checkout-page-coupon-wrap {
        margin-bottom: 45px;
    }

    .checkout-page-coupon-wrap .coupon-accordion .card {
        background-color: transparent;
        border: none;
        border-radius: 0;
    }

    .checkout-page-coupon-wrap .coupon-accordion .card h3 {
        background-color: #eeeff2;
        border-top: 2px solid $main-color;
        color: #1b1c1e;
        font-weight: 400;
        font-size: 18px;
        padding: 20px 21px 18px;
        margin-bottom: 30px;
    }

    .checkout-page-coupon-wrap .coupon-accordion .card h3 i {
        font-size: 14px;
        color: $main-color;
        margin-right: 12px;
    }

    .checkout-page-coupon-wrap .coupon-accordion .card h3 a {
        color: #1b1c1e;
        transition: 0.2s;
    }
    .checkout-page-coupon-wrap .coupon-accordion .card h3 a:hover {
        color:  $main-color;
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

    .billing-form-wrap form .form-group {
        margin-bottom: 20px;
    }

    .billing-form-wrap form .form-group label {
        font-size: 14px;
        color: #1b1c1e;
        margin-bottom: 8px;
    }
    .billing-form-wrap form .form-group label .required {
        color: $main-color;
    }
    
    .billing-form-wrap form .form-group .form-control {
        border-radius: 124px;
        box-shadow: none;
        border: 1px solid #e8e8e8;
        color: #626262;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
    }

    .nice-select.wide .list {
        left: 0 !important;
        right: 0 !important;
    }

    .nice-select .list {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 0 1px rgb(68 68 68 / 11%);
        box-sizing: border-box;
        margin-top: 4px;
        opacity: 0;
        overflow: hidden;
        padding: 0;
        pointer-events: none;
        position: absolute;
        top: 100%;
        left: 0;
        -webkit-transform-origin: 50% 0;
        -ms-transform-origin: 50% 0;
        transform-origin: 50% 0;
        -webkit-transform: scale(0.75) translateY(-21px);
        -ms-transform: scale(0.75) translateY(-21px);
        transform: scale(0.75) translateY(-21px);
        -webkit-transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
        transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
        z-index: 999;
    }
    

    .billing-form-wrap .checkout-box .custom-checkbox {
        position: relative;
        margin-bottom: 20px;
        margin-top: 6px;
    }

    .billing-form-wrap .checkout-box .custom-checkbox .custom-control-label {
        color: #1b1c1e;
        font-size: 18px;
        margin-bottom: 0;
        padding-left: 10px;
        padding-top: 2px;
        cursor: pointer;
    }

    .billing-form-wrap .checkout-box .custom-checkbox .custom-control-input:checked~.custom-control-label:before {
        content: "";
        background-color: #fff;
        border-radius: 0;
        border-color: #1b1c1e;
        box-shadow: none;
        width: 18px;
        height: 18px;
        border-width: 2px;
        border-radius: 50%;
    }

    .billing-form-wrap .checkout-box .custom-checkbox .custom-control-input:checked~.custom-control-label:after {
        display: inline-block;
        color: #666;
        content: "\f00c";
        font-family: FontAwesome;
        font-size: 10px;
        position: absolute;
        text-align: center;
        padding-left: 3px;
        box-shadow: none;
        left: 1px;
        top: 5px;
    }

    .form-check-input{
        width: 22px;
        height: 22px;
        border-radius: 50% !important;
    }
    .form-check-input:checked{
        background-color: $main-color;
        border-color: $main-color;
    }

    .billing-form-wrap form .form-group textarea.form-control {
        min-height: 120px;
        background-color: #fff;
        border: 1px solid #e8e8e8;
        padding: 20px;
        line-height: 1.3;
    }

    .billing-form-wrap form .form-group .form-control {
        border-radius: 124px;
        box-shadow: none;
        border: 1px solid #e8e8e8;
        color: #626262;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
    }

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
        position:absolute;content:"";width:6px;height:6px;background-color:#0075ff;border-radius:50%;top:50%;transform:translateY(-50%);left:3px;display:block
    }
    .checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header .title[aria-expanded=false]:after{display:none
    
    }
    
    .checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header .title[aria-expanded=true]:before{
        border-color: $main-color;
    }
    .checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header .title[aria-expanded=true]:after{
        display:block;
        background-color: $main-color;
    }
    .checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-header:hover{
        cursor:pointer
    }
    .checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-body{
        padding:0;margin-top:10px;margin-bottom:10px
    }
    
    .checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .card .card-body p{
        color:#747474;font-size:13px;line-height:24px;
    
    }
    
    .checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .p-text{
        color:#747474;font-size:14px;margin-top:24px;margin-bottom:18px;
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
        background-color:#fff;border-radius:0;border-color:#1b1c1e;box-shadow:none;width:15px;height:15px;border-width:2px;transition:all .3s ease-out;-webkit-transition:all .3s ease-out;
        -moz-transition:all .3s ease-out;-ms-transition:all .3s ease-out;-o-transition:all .3s ease-out
    }
    .checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .agree-policy .custom-checkbox .custom-control-input:checked~.custom-control-label:after{
        display:inline-block;
        color:#1b1c1e;
        content:"\f00c";
        font-family:FontAwesome;
        font-size:8px;
        position:absolute;
        text-align:center;padding-left:0;line-height:14px;box-shadow:none;
        left:4px;top:7px;transition:all .1s ease-out;-webkit-transition:all .1s ease-out;-moz-transition:all .1s ease-out;
        -ms-transition:all .1s ease-out;-o-transition:all .1s ease-out
    }
    .checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .agree-policy .custom-checkbox .custom-control-label{
        color:#1b1c1e;font-size:14px;margin-bottom:0;padding-left:0;padding-top:0;
        cursor:pointer
    }
    .checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .agree-policy .custom-checkbox .custom-control-label:before{
        content:"";position:absolute;background-color:#fff;
        border-radius:0;box-shadow:none;border:2px solid #e4e4e4;
        width:15px;height:15px;top:7px;left:0;transition:all .3s ease-out;
        -webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;
        -ms-transition:all .3s ease-out;-o-transition:all .3s ease-out
    }
    
    .checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .btn-place-order{
        
        display:block;
        text-align:center;
        border-radius:0;
        padding:18px 20px 16px;
        margin-top:32px;font-size:16px;
        background-color: $main-color;
        border-color: $main-color;
        color:#fff;text-transform:uppercase;font-weight:600
    }
    
    .checkout-order-details-wrap .order-details-table-wrap .shop-payment-method .btn-place-order:hover{
        background-color:#1b1c1e;border-color:#1b1c1e}
</style>