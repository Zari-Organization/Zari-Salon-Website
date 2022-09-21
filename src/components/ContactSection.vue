<template>
    <div>
        <section class="contact-area"><grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="cGcvT"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" style="mix-blend-mode: darken; position: absolute; top: 0px; left: 0px; pointer-events: none;" class="cGcvT"></grammarly-extension>
            <div class="container">
                <div class="row">
                    <div class="offset-lg-6 col-lg-6">
                        <div class="section-title position-relative">
                            <h2 class="title">Get in touch</h2>
                            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing aliquam, purus sit amet luctus venenatis</p>
                            <div class="line-left-style mt-4 mb-1"></div>
                        </div>
                        <!--== Start Contact Form ==-->
                        <div class="contact-form">
                            <form id="contact-form" action="https://whizthemes.com/mail-php/raju/arden/mail.php" method="POST">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input class="form-control" type="text" name="con_name" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input class="form-control" type="text" placeholder="Last Name">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <input class="form-control" type="email" name="con_email" placeholder="Email address">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <textarea class="form-control" name="con_message" placeholder="Message" spellcheck="false"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group mb-0">
                                            <button class="btn main-btn py-2 px-4 me-3" type="submit">SUBMIT</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!--== End Contact Form ==-->

                        <!--== Message Notification ==-->
                        <div class="form-message"></div>
                    </div>
                </div>
            </div>
            <div class="contact-left-img" ></div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .contact-left-img{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/contact/contact.webp");

        
    }

    .contact-area{
        padding:65px 0 0;
        position:relative;
        margin-bottom: 120px;
    }
    @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px){
        .contact-form{
            margin-bottom:60px
        }
    }
    .contact-form .form-group{
        margin-bottom:56px
    }
    .contact-form .form-control{
        box-shadow:none;
        outline:none;
        color:#3f3f3f;
        font-size:12px;
        font-weight:500;
        padding:0;
        margin:0;
        border-radius:0;
        border-width:0 0 1px;
        border-color:#b9b9b9;
        padding-bottom:16px;
        background-color: transparent;
    }
    .contact-form .form-control::-webkit-input-placeholder{
        color:#3f3f3f
    }
    .contact-form .form-control:-moz-placeholder,.contact-form .form-control::-moz-placeholder{
        color:#3f3f3f
    }
    .contact-form .form-control:-ms-input-placeholder{
        color:#3f3f3f
    }
    .contact-form textarea.form-control{
        height:138px;
        resize:none
    }
    @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px){
        .contact-form textarea.form-control{
            height:100px
        }
    }
    .contact-info{
        background:#fffaef;
        border-radius:10px;
        display:flex;
        justify-content:space-between;
        padding:41px 0
    }
    @media only screen and (max-width:767px){
        .contact-info{
            flex-wrap:wrap
        }
    }
    .contact-info-item{
        text-align:center;
        width:33.3333%
    }
    @media only screen and (max-width:767px){
        .contact-info-item{
            width:50%;
            margin-bottom:30px
        }
    }
    @media only screen and (max-width:479px){
        .contact-info-item{
            width:100%
        }
    }
    .contact-info-item:nth-child(2n){
        border-left:2px solid #e0e0e0;
        border-right:2px solid #e0e0e0
    }
    @media only screen and (max-width:767px){
        .contact-info-item:nth-child(2n){
            border-left:none;
            border-right:none
        }
    }
    .contact-info-item .icon{
        margin-bottom:24px
    }
    @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px){
        .contact-info-item .icon{
            margin-bottom:14px
        }
    }
    .contact-info-item a,.contact-info-item p{
        color:#1b1c1e;
        font-size:16px;
        line-height:28px;
        display:block;
        margin-bottom:5px
    }
    
    @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px){
        .contact-info-item a,.contact-info-item p{
            font-size:15px
        }
    }
    .contact-info-item a:hover{
        color:#ff6565
    }
    .contact-info-item p{
        max-width:190px;
        margin:0 auto
    }
    .contact-left-img{
        background-size:cover;
        background-repeat:no-repeat;
        background-position:50%;
        border-radius:0 30px 30px 0;
        left:0;height:100%;
        position:absolute;
        top:0;
        width:calc(50% - 15px)
    }
    @media only screen and (max-width:767px),only screen and (min-width:768px) and (max-width:991px){
        .contact-left-img{
            height:430px;
            position:relative;
            width:calc(100% - 15px)
        }
    }
    .my-account-item-wrap .title{
        font-size:28px;
        font-weight:500;
        margin-bottom:30px;
        text-transform:capitalize;
    }
    .my-account-form label{
        color:#262626;
        display:block;
        cursor:pointer;
        margin-bottom:8px;
        font-size:13px
    }
   
</style>