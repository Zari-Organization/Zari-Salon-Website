<template>
    <div>
        <div id="ready">
            <i><fa :icon="['fas', 'spinner']" class="fa-5x fa-spin"/></i>
        </div>
        <a id="topBtn" class="position-fixed bottom-0 end-0 translate-middle text-white">
            <i><fa :icon="['fas', 'chevron-up']" class="fs-3 p-2 main-bg rounded-circle" /></i>
        </a>

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
                            <router-link class="nav-link" to="/shop">Shop</router-link>
                          </li>

                          <li class="nav-item">
                            <router-link class="nav-link" to="/booking">Book Appointment</router-link>
                          </li>

                          <li class="nav-item">
                            <router-link class="nav-link" to="/contact">Contact Us</router-link>
                          </li>
                          <div class="right-nav-part">
    
                            <!-- <li class="nav-item"> -->
                                <!-- <router-link class="nav-link" to="/wishlist"><a><i><fa :icon="['fas', 'search']" /></i></a></router-link> -->
                            <!-- </li> -->
                            <!-- <div class="input-group">
                                <div class="form-outline">
                                  <input type="search" id="form1" class="form-control" />
                                  <label class="form-label" for="form1">Search</label>
                                </div>
                                <button type="button" class="btn btn-primary">
                                    <i><fa :icon="['fas', 'search']" /></i>
                                                                </button>
                              </div> -->
                            
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
    </div>

</template>
<script>

export default {
    name:'NavbarCom',
}

import $ from "jquery";
$(document).ready(function(){
    $('#ready').fadeOut(2000, function(){

        $('body').css('overflow','visible');
        $('#topBtn').css('display' , 'none')
    });

    $('#topBtn').click(function(){
    $('html , body').animate({scrollTop : 0}, 500);
})

$('#btnTopFooter').click(function(){
    $('html , body').animate({scrollTop : 0}, 500);
})

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


</script>


<style lang="scss" scoped>
    @import '../scss/_variables';
    @import '../scss/style.scss';
    
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
        color: #000000CC;
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
        color: #000 !important;
        font-weight: 500;
        transition: all 0.25s;
    }
    
    .custome a i{
        font-size: 15px;
        color: #000;
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