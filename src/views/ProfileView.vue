<template>
    <div>
        <section class="page-header">
            <h1>Profile</h1>
            <ul class="bread-crumbs">
                <li class="bread-crumbs__item">
                    <router-link to="/" class="bread-crumbs__link">Home</router-link>
                </li>
                <li class="bread-crumbs__item fw-bold">Profile</li>
            </ul>
          
        </section>


<div class="container">
    <div class="row">
        <div class="col-md-12">


            <div class="accordion accordion-flush" id="accordionFlushExample">


                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Widhlist
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">



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

                    </div>
                  </div>
                </div>

                             




                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Order History
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
    
    
    
                        
                                <div class="myaccount-content">
                                    <h3>Orders</h3>
                                    <div class="myaccount-table table-responsive text-center">
                                        <table class="table table-bordered">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th>Order</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Total</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Aug 22, 2018</td>
                                                    <td>Pending</td>
                                                    <td>$3000</td>
    
                                                    <td><router-link to="/cart"><a href="shop-cart.html" class="check-btn sqr-btn ">View</a></router-link></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>July 22, 2018</td>
                                                    <td>Approved</td>
                                                    <td>$200</td>
                                                    <td><router-link to="/cart"><a href="shop-cart.html" class="check-btn sqr-btn ">View</a></router-link></td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>June 12, 2017</td>
                                                    <td>On Hold</td>
                                                    <td>$990</td>
                                                    <td><router-link to="/cart"><a href="shop-cart.html" class="check-btn sqr-btn ">View</a></router-link></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                           
                            
                        </div>
                  </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFour">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                       Payment Method
                      </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">
                        <div class="myaccount-content">
                            <h3>Payment Method</h3>
                            <p class="saved-message">You Can't Saved Your Payment Method yet.</p>
                        </div>
                    
                    </div>
                    </div>
                  </div>




                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFive">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                       Address
                      </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">
                        
                        <div class="myaccount-content">
                            <h3>Billing Address</h3>
                            <address>
                               <p><strong>Alex Tuntuni</strong></p>
                               <p>1355 Market St, Suite 900 <br>
                                Saaed Zakaria ST.</p>
                                <p>Mobile: (123) 456-7890</p>
                            </address>
                            <a href="#/" class="check-btn sqr-btn">
                                <i><fa :icon="['fas' , 'edit']"/></i>
                                Edit Address
                            </a>
                        </div>
                       



                        <!-- Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body. -->
                    </div>
                    </div>
                  </div>
     <!-- end of accordion item -->

     <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Account Details
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">

            <div class="myaccount-content">
                <h3>Account Details</h3>
                <div class="account-details-form">
                    <form action="#">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="single-input-item">
                                    <label for="first-name" class="required">First Name</label>
                                    <input type="text" id="first-name">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="single-input-item">
                                    <label for="last-name" class="required">Last Name</label>
                                    <input type="text" id="last-name">
                                </div>
                            </div>
                        </div>
                        <div class="single-input-item">
                            <label for="display-name" class="required">Display Name</label>
                            <input type="text" id="display-name">
                        </div>
                        <div class="single-input-item">
                            <label for="email" class="required">Email Addres</label>
                            <input type="email" id="email">
                        </div>
                        <fieldset>
                            <legend>Password change</legend>
                            <div class="single-input-item">
                                <label for="current-pwd" class="required">Current Password</label>
                                <input type="password" id="current-pwd">
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="single-input-item">
                                        <label for="new-pwd" class="required">New Password</label>
                                        <input type="password" id="new-pwd">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="single-input-item">
                                        <label for="confirm-pwd" class="required">Confirm Password</label>
                                        <input type="password" id="confirm-pwd">
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div class="single-input-item">

                            <button class="btn main-btn py-2 px-4 me-3 mt-3" type="submit">Save Changes</button>

                        </div>
                    </form>
                </div>
            </div>


        </div>
        </div>
      </div>







              </div>


              <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="logout-btn">
                            <router-link to="/account">
                                <button class="btn main-btn py-2 px-4 me-3 mt-3" type="submit">Log out</button>
                              </router-link>
                

                        </div>

                    </div>
                </div>
              </div>

    


        </div>
    </div>
</div>
       
          

        

    </div>
</template>




<style lang="scss" scoped>

    @import '../scss/_variables.scss';
    @import '../scss/style.scss';

.logout-btn{
    display: flex;
    justify-content: center;
    align-items: center;
}



    
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






    .myaccount-content {
        border: 1px solid #eee;
        padding: 30px 30px 15px;
    }


    .myaccount-content h3 {
        font-weight: 500;
        font-size: 20px;
        border-bottom: 1px dashed #ccc;
        padding-bottom: 10px;
        margin-bottom: 25px;
    }

    .myaccount-table {
        white-space: nowrap;
        font-size: 14px;
    }

    .myaccount-table .table th, .myaccount-table table th {
        padding: 10px;
        font-weight: 600;
        background-color: #f8f8f8;
        border-color: #ccc;
        border-bottom: 0;
        color: #1f2226;
    }


    .myaccount-table .table td, .myaccount-table table td {
        padding: 10px;
        vertical-align: middle;
        border-color: #ccc;
    }

    .myaccount-table .table td a, .myaccount-table table td a {
        font-size: 14px;
        color: $main-color;
    }



    .myaccount-content .account-details-form {
        margin-top: 50px;
    }

    .myaccount-content form {
        margin-top: -20px;
    }
    .myaccount-content .account-details-form .single-input-item {
        margin-bottom: 20px;
    }

    .myaccount-content .account-details-form .single-input-item label {
        font-size: 14px;
        text-transform: capitalize;
        display: block;
        margin: 0 0 5px;
    }
    
    
    .myaccount-content .account-details-form .single-input-item input {
        border: 1px solid #e8e8e8;
        width: 100%;
        height: 50px;
        background-color: transparent;
        padding: 2px 20px;
        color: #1f2226;
        font-size: 13px;
    }

    .myaccount-content fieldset legend {
        font-size: 16px;
        margin-bottom: 20px;
        font-weight: 600;
        padding-bottom: 10px;
        border-bottom: 1px solid #e5e5e5;
    }

    
</style>