<template>
    <div>
        
<section class="subscribe-area pt-5 pb-5"  href="subscribe">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="subscribe-content pt-115 pb-120 text-center">
                    <span class="small-title">get in touch</span>
                    <h1>Join our email list and be the first to know about specials, events and more!</h1>
                    <div class="subscribe-form">
                        <form action="#">
                            <input type="text" placeholder="Enter your email address....">
                            <button href="subscribe" class="btn main-btn py-2 px-4 me-3">subscribe now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
</template>


<style lang="scss" scoped>
    @import '../scss/variables';
    @import '../scss/style.scss';

.subscribe-area{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("../assets/whylayout/bg4.jpg");
    margin-bottom: 120px;
}
.subscribe-form {
    position: relative;
    margin-top: 60px;
}
.subscribe-form input {
    width: 66%;
    background: #ffffff;
    border: none;
    color: #a5a9a8;
    padding: 30px 40px;
    border-radius: 8px;
    box-shadow: 0px 0px 20px rgba(255, 113, 184, 0.346);    
}

.subscribe-form button {
    position: absolute;
    border: none;
    top: 24%;
    right: 18%;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    cursor: pointer;
}

</style>