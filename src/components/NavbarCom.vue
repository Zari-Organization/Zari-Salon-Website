<template>
    <div>

        <!--== Scroll Top Button ==-->


        <div id="ready">
            <i><fa :icon="['fas', 'spinner']" class="fa-5x fa-spin"/></i>
        </div>
        
<header class="sticky-header">
    <nav class="navbar navbar-expand-lg fixed-top bg-white p-0">

        <div class="container-fluid container-xl w-special-95 d-flex justify-content-between align-items-center">
   
            <a class="navbar-brand">
                <img src="../assets/logo.png" alt="ZARI LOGO" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 py-3 py-lg-0 fw-bold">

                    <li class="nav-item active">
                        <router-link class="nav-link" to="/" aria-current="page">Home <span class="sr-only">(current)</span></router-link>
                      </li>
                      
                      <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                      </li>

                      <li class="nav-item">
                        <router-link class="nav-link" to="/services">Services</router-link>
                      </li>

                      <li class="nav-item">
                        <router-link class="nav-link" to="/gallery">Gallery</router-link>
                      </li>

                      <li class="nav-item">
                        <router-link class="nav-link" to="/booking">Book Appointment</router-link>
                      </li>

                      <li class="nav-item">
                        <router-link class="nav-link" to="/shop">Shop</router-link>
                      </li>

                      <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact Us</router-link>
                      </li>
                      <div class="right-nav-part">

                        
                          <!-- <li class="nav-item">

                            <i class="header-action-btn ms-0 nav-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasSearch" aria-controls="AsideOffcanvasSearch"><fa :icon="['fas', 'search']" /></i>

                        </li> -->

                        
                        <li class="nav-item">
                            <router-link class="nav-link" to="/wishlist"><a><i><fa :icon="['fas', 'heart']" /></i></a></router-link>
                          </li>
                          
                          <li class="nav-item">
                            <router-link class="nav-link" to="/cart"><a><i><fa :icon="['fas', 'cart-shopping']" /></i></a></router-link>
                          </li>
                          
                          <li class="nav-item">
                            <router-link class="nav-link" to="/profile"><a><i><fa :icon="['fas', 'user']" /></i></a></router-link>
                          </li>
                    
                    </div>


                </ul>
                <!-- <div class="custome d-flex justify-content-evenly align-items-center pb-4 pb-lg-0"> -->
              
                    <!-- <div class="language py-2">
                        <a> <i><fa :icon="['fas' , 'globe']" /></i></a>
                        <i class="fa-solid fa-globe fs-6"></i>
                        <select class="py-1" name="language">
                            <option selected value="English">
                                En
                            </option>
                            <option value="Arabic">
                                Ar
                            </option>
                          
                        </select>
                    </div> -->

                    <!-- <a><i><fa :icon="['fas', 'search']" /></i></a>
                    <a><i><fa :icon="['fas', 'heart']" /></i></a>
                    <a><i><fa :icon="['fas', 'cart-shopping']" /></i></a>
                    <a><i><fa :icon="['fas', 'user']" /></i></a> -->

                <!-- </div> -->
            </div>
        </div>
    </nav>


</header>
        

       
         <!--== Start Aside Search Form ==-->
<!--  
        <aside class="aside-search-box-wrapper offcanvas offcanvas-top show" tabindex="-1" id="AsideOffcanvasSearch" aria-labelledby="offcanvasTopLabel" style="visibility: visible;" aria-modal="true" role="dialog">
            <div class="offcanvas-header">
                <h5 class="d-none" id="offcanvasTopLabel">Aside Search</h5>
                    <i class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><fa :icon="['fas', 'close']" /></i>
            </div>
            <div class="offcanvas-body">
                <div class="container pt--0 pb--0">
                    <div class="search-box-form-wrap">
                        <div class="search-note">
                            <p>Start typing and press Enter to search</p>
                        </div>
                        <form action="#" method="post">
                            <div class="aside-search-form position-relative">
                                <label for="SearchInput" class="visually-hidden">Search</label>
                                <input id="SearchInput" type="search" class="form-control" placeholder="Search entire Salon...">
                                <button class="search-button" type="submit"> <i><fa :icon="['fas', 'search']" /></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </aside> -->


        <!--== End Aside Search Form ==-->




    </div>

</template>
<script>

export default {
    name:'NavbarCom',
}

import $ from "jquery";









$(document).ready(function(){


 // Offcanvas Nav Js
 var $offcanvasNav = $("#offcanvasNav a");
    $offcanvasNav.on("click", function () {
      var link = $(this);
      var closestUl = link.closest("ul");
      var activeLinks = closestUl.find(".active");
      var closestLi = link.closest("li");
      var linkStatus = closestLi.hasClass("active");
      var count = 0;

      closestUl.find("ul").slideUp(function () {
        if (++count == closestUl.find("ul").length)
          activeLinks.removeClass("active");
      });

      if (!linkStatus) {
        closestLi.children("ul").slideDown();
        closestLi.addClass("active");
      }
    });





    $('#ready').fadeOut(2000, function(){

        $('body').css('overflow','visible');
        $('#topBtn').css('display' , 'none')
    });

  

$(window).scroll(function(){

    let whyOffset = $('#why').offset().top;
    let pricingOffset = $('#pricing').offset().top;

    if($(window).scrollTop() > whyOffset && $(window).scrollTop() < pricingOffset)
    {
        $('#topBtn').fadeIn(500);
    }
    else
    {
        $('#topBtn').fadeOut(250);
    }
})

// change toggle navbar style

$('.navbar .navbar-toggler').click(()=>{
    $('.navbar .navbar-toggler').toggleClass('convert');
})



// change active nav-item when clicked ===================




// change flag for currency when click 

// let currency = document.getElementById('currency');
// let img = document.getElementById('img-select');
// currency.addEventListener('click' , function(){
//     if(this.value == 'dollar'){
//         img.removeAttribute('src');
//         img.setAttribute('src' , 'imgs/navbar/Flag_of_the_United_States.svg.png');
//     }
//     else if(this.value == 'pound'){
//         img.removeAttribute('src');
//         img.setAttribute('src' , 'imgs/navbar/Flag_of_Egypt.png');
//     }
//     else if(this.value == 'euro'){
//         img.removeAttribute('src');
//         img.setAttribute('src' , 'imgs/navbar/Flag_of_Europe.svg.png');
//     };
// })


// add class active to an active link and smooth move.....


$( '.navbar-nav li' ).on( 'click', function () {
	$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

$('.navbar-nav .nav-item').click(function(){
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
    let currentSection = $(this).attr('to');
    let currentOffset = $(currentSection).offset().top;
    $('html , body').animate({scrollTop : currentOffset}, 500);
})


// change indicators buttons style

$('#indicators button').click(function(){
    $(this).addClass('change');
    $(this).siblings().removeClass('change');
})


// counter section

let counters = document.querySelectorAll('.counter');
let section = document.querySelector('.numbers')

function startCount(ele){
    let target = +ele.getAttribute('data-target');
    let count = setInterval(() =>{
        ele.textContent++;
        if(ele.textContent == target){
            clearInterval(count)
        }
    }, 3000/target)
}

// to start count
let numbersOffset = $('#numbers').offset().top - 500;

// to stop counter 
let started = false;

// when scroll to start counter

$(window).scroll(function(){
    if($(window).scrollTop() >= numbersOffset){
        if(!started){
            counters.forEach(counter => startCount(counter))
        }
        started = true;
    }
})


// for email subscribe in footer section

$('#subscribe').click(()=>{
    if(checkEmail == true){
        $('#alertSubscribe').html('Successfully Subscribe');
        $('#alertSubscribe').addClass('text-success');
        $('#alertSubscribe').removeClass('text-danger');
    }
    else {
        $('#alertSubscribe').html('You should fill it correctly to subscribe');
        $('#alertSubscribe').addClass('text-danger');
        $('#alertSubscribe').removeClass('text-success');
    }
})


let checkEmail;
function validUserEmailSubscribe(){
    // let regexEmail = /^[a-zA-Z0-9_]{3,15}(@gmail\.com)$/;
    let regexEmail = /^[a-zA-Z0-9_ .]{2,}\@[a-zA-Z0-9_ .]{2,}(\.com)$/;
    checkEmail = regexEmail.test($('#emailSubscribe').val());
    if(checkEmail == true)
    {
        $('#emailSubscribe').addClass('is-valid');
        $('#emailSubscribe').removeClass('is-invalid');
        $('#alertEmailSubscibe').css('display' , 'none');
    }
    else
    {
        $('#emailSubscribe').addClass('is-invalid');
        $('#emailSubscribe').removeClass('is-valid');
        $('#alertEmailSubscibe').css('display' , 'block');
    }
}

$('#emailSubscribe').on('input' , function(){
    validUserEmailSubscribe();
})


// =============about page======
   // Video Popup
   if ($('.video-play').length) {
    $('.video-play').magnificPopup({
        type: 'video',
    });
} 






});
// ======================================================== service section


















</script>


<style lang="scss" scoped>
    @import '../scss/_variables';
    @import '../scss/style.scss';

    .second-btn, .main-btn{
        border-radius: 50px;
    }
//scroll to top=====================

// search modal ==================================================
.modal {
    z-index: 99999;
}


.aside-search-box-wrapper .search-note p{
    font-size:14px;text-transform:capitalize;color:#666;font-weight:400;margin-bottom:8px
}
@media only screen and (max-width:479px){
    .aside-search-box-wrapper .search-note p{
        font-size:13px
    }
}
.aside-search-box-wrapper.offcanvas-top{
    height:239px
}
@media only screen and (max-width:767px){
    .aside-search-box-wrapper.offcanvas-top{
        height:170px
    }
}
.aside-search-box-wrapper .offcanvas-header{
    justify-content:flex-end;
    padding:0
}

.aside-search-box-wrapper .offcanvas-body{
    padding-top:64px
}
@media only screen and (max-width:767px){
    .aside-search-box-wrapper .offcanvas-body{
        padding-top:40px
    }
}
.aside-search-box-wrapper .btn-close{
    position:absolute;background-image:none;background-color:$main-color;color:#fff;
    opacity:1;font-size:18px;top:0;width:40px;padding:0;
    margin:0;height:40px;line-height:40px;border-radius:0 0 8px 8px;
    right:15px
}
@media only screen and (max-width:767px){
    .aside-search-box-wrapper .btn-close{
        padding:0;margin:0;width:26px;height:26px;line-height:0;font-size:12px;border-radius:50%;
        right:-4px;top:-4px
    }
}
.aside-search-box-wrapper .btn-close:hover{
    color:#fff;
    background-color:#ff3232
}
.aside-search-form{position:relative
}
.aside-search-form .form-control{border:1px solid $main-color;color:$main-color;box-shadow:none;
    border-radius:8px;height:70px;font-size:15px;font-weight:500;
    line-height:70px;padding:10px 75px 10px 24px
}
.aside-search-form .form-control::-webkit-input-placeholder{
    color:$main-color
}
.aside-search-form .form-control:-moz-placeholder,.aside-search-form .form-control::-moz-placeholder{
    color:$main-color;
}
.aside-search-form .form-control:-ms-input-placeholder{
    color:$main-color;

}
    @media only screen and (max-width:767px){
        .aside-search-form .form-control{
            font-size:13px;height:50px;padding:10px 75px 10px 14px
        }
    }
    .aside-search-form .search-button{
        border:none;background-color:$main-color;border-radius:0 8px 8px 0;
        position:absolute;top:0;right:0;height:100%;width:70px;font-size:18px;
        color:#fff}
        @media only screen and (max-width:767px){
            .aside-search-form .search-button{width:50px;font-size:16px}}
            .aside-search-form .search-button:hover{color:#fff;background-color:$main-color}
            .offcanvas{
                z-index:999!important
            }
            @keyframes a{0%{transform:translateY(-100%)}to{transform:translateY(0)}
        }
        @keyframes b{0%{transform:translateY(0)}to{transform:translateY(-100%)}}












     header{
   text-align:right;
   width:700px;
   padding-top:10px;
}
.shopcountwrap{
    position:relative;
}
.bage{
   background-color: red;
    border-radius: 50%;
    color: white;
    height: 20px;
    left: 1px;
    line-height: 20px;
    padding: 0;
    position: absolute;
    text-align: center;
    top: -22px;
    width: 20px;
    z-index: 1;
 }










    .navbar{
        font-size: 13px;
        font-weight: 600;
        box-shadow: 0px 4px 6px rgba(147, 147, 147, 0.26);
    }
    .navbar-toggler{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0px !important;
    }
    .navbar-brand img{
        width: 60px;
    }
    
    .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: 1.5rem;
    }
    .navbar .navbar-toggler{
        transition: all 0.25s;
        position: relative;
        width: 40px;
        height: 40px;
        margin-right: 15px;
        cursor: pointer;
    }
    .navbar .navbar-toggler::before{
        content: '';
        position: absolute;
        width: 25px !important;
        height: 3px !important;
        background-color: $main-color;
        transition: all 0.25s;
        transform: translateY(-10px);
        box-shadow: 0 10px 0 $main-color;
    }
    .navbar .navbar-toggler.convert::before{
        transform: translateY(0px) rotate(45deg);
        box-shadow: 0 0 0 $main-color;
    }
    .navbar .navbar-toggler::after{
        content: '';
        position: absolute;
        width: 25px !important;
        height: 3px !important;
        background-color: $main-color;
        transition: all 0.25s;
        transform: translateY(10px);
    }
    .navbar .navbar-toggler.convert::after{
        transform: translateY(0px) rotate(-45deg);
    }
    .navbar .navbar-toggler:focus,
     .navbar .navbar-toggler:hover
    {
        box-shadow: none;
    }
    .navbar .navbar-nav li{
        white-space: nowrap;
    }
    .navbar .navbar-nav li .nav-link{
        color: #1b1c1eCC;
        transition: all 0.25s;
        text-align: center;
    }
     .navbar-nav li.active,
     .navbar-nav li .nav-link:focus,
      .navbar-nav li .nav-link:hover
    {
        color: $main-color !important;
    }
    .navbar-collapse{
        background-color: rgba(0, 0, 0, 0.9);
        transition: all 0.5s;
    }

    .right-nav-part{
        display: flex;
        align-items: center;
        margin-right: -10%;
        margin: auto;
        padding-left: 10%;
    }

    .custome div{
        border: 1px solid $main-color;
        border-radius: 8px;
        background-color: transparent;
        padding:   3px 13px;
        cursor: pointer;
        color: $main-color;
        font-size: 11px;
        font-weight: 500;
        box-shadow: 0px 4px 6px rgba(147, 147, 147, 0.26);
    }
    .custome a{
        padding-top: 12px;
        padding-bottom: 12px;
        color: #1b1c1e !important;
        font-weight: 500;
        transition: all 0.25s;
    }
    
    .custome a i{
        font-size: 15px;
        color: #1b1c1e;
        transition: 0.3s all;
    }
    .custome .currency, .custome .language, .language i{
        transition: all 0.25s;
    }
    .custome .currency:hover, .custome .language:hover{
        background-color: $main-color;
    }
    .custome .currency:hover select, .custome .language:hover select{
        color: #fff !important;
    }
    .custome .currency:hover option[value], .custome .language:hover option[value]{
        color: $main-color !important;
    }
    .custome .language:hover.language i{
        color: #fff !important;
    }
    .custome a i:hover{
        color: $main-color !important;
    }
    .custome a:focus{
        border-color: $main-color !important;
    }
    .custome .currency img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    select{
        color: $main-color;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        transition: all 0.25s;
    }
    option{
        font-size: 13px;
        font-weight: 500;
        transition: all 0.25s;
    }
    
    /* Responsive navbar */
    
    @media screen and (min-width: 992px) and (max-width: 1150px) {
        .custome{
            display: none !important;
        }
        .w-special-95{
            width: 95%;
        }
    }
    @media screen and (min-width: 992px){
        .navbar-collapse{
            background-color: transparent !important;
        }
        .custome{
            width: 25%;
        }
    }
    @media screen and (max-width: 992px) {
        .navbar .navbar-nav li a{
            color: #fff;
            font-size: 14px;
            margin-bottom: 8px;
        }
        .custome{
            width: 75%;
            margin-left: auto;
            margin-right: auto;
        }
        .custome div{
            box-shadow: none;
        }
        .custome a{
            box-shadow: none;
        }
    }
    

</style>