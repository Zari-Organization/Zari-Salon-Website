<template>
    <div>
        <section id="branches" class="branches pt-115 pb-90">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="main-title text-center py-3 w-85 mx-auto mb-4">
                            <h1 class="text-primary m-b10 fw-bold text-capitalize">Salon Branches</h1>
                            <h6 class="m-b10">You Will Like To Look Like Goddes Every Day!</h6>
                        </div>        
                    </div>
        
        
                    <div class="col-12">
                        <div class="branches-container pt-4">
                            <div class="row g-4">
        
        
                                <div class="col-sm-6 col-md-4 col-lg-4">
                                    <div class="branch pb-4">
                                        <div class="branch-img"><!--branch-1-->
                                            <img src="../assets/branches/branch1.jpg" alt="second branch" />
                                        </div>
                                        <p class="branch-services">Hair . Nails . Facial </p>
                                        <h3 class="fw-bold">Salon de Elegance</h3>
                                        <p class="mb-0">360 Saaed Zakareia Cairo City </p>
                                        <span><i><fa :icon="['fas', 'star']" /></i></span>
                                        <span class="branch-review fw-bold">4.8</span>
                                    </div>
                                </div>
        
        
                                <div class="col-sm-6 col-md-4 col-lg-4">
                                    <div class="branch pb-4">
                                        <div class="branch-img"><!--branch-1-->
                                            <img src="../assets/branches/branch2.jpg" alt="third branch" />

                                        </div>
                                        <p class="branch-services">Hair . Nails . Facial </p>
                                        <h3 class="fw-bold">Salon de Elegance</h3>
                                        <p class="mb-0">360 Saaed Zakareia Cairo City </p>
                                        <span><i><fa :icon="['fas', 'star']" /></i></span>
                                        <span class="branch-review fw-bold">4.8</span>
                                    </div>
                                </div>
                             
        
                                <div class="col-sm-6 col-md-4 col-lg-4">
                                    <div class="branch pb-4">
                                        <div class="branch-img"><!--branch-1-->
                                            <img src="../assets/branches/branch.jpg" alt="first branch" />

                                        </div>
                                        <p class="branch-services">Hair . Nails . Facial </p>
                                        <h3 class="fw-bold">Salon de Elegance</h3>
                                        <p class="mb-0">360 Saaed Zakareia Cairo City </p>
                                        <span><i><fa :icon="['fas', 'star']" /></i></span>

                                        <span class="branch-review fw-bold">4.8</span>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
        
        
        
                </div>
            </div>
        
        </section>
    </div>
</template>


<style lang="scss" scoped>
    @import '../scss/_variables';
    @import '../scss/style.scss';

       
.branches{
    margin-bottom: 120px;
}
.main-title h2{
    letter-spacing: 0px;
}
.main-title p{
    font-size: 15px;
    width: 80%;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0px;
    color: #6F6F6F;
}
.branch{
    box-shadow: 0px 0px 8px rgba(95, 95, 95, 0.42);
    border-radius: 10px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    text-align: left;

}
.branch-img{
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    overflow: hidden;
}
.branch-img img{
    width: 150%;
    height: 100%;
    transition: all 0.5s;
}
.branch:hover img{
    transform: scale(1.2,1.2);
}
/* .branch-1{
    background: linear-gradient(155.11deg, #99F2C8 15.6%, #1F4037 84.04%);
}
.branch-2{
    background: linear-gradient(155.11deg, #FFDC5E 7.8%, #FFB56E 86.52%);
}
.branch-3{
    background: linear-gradient(155.11deg, #FFA5AB 14.54%, #A53860 91.49%);
}
.branch-4{
    background: linear-gradient(152.75deg, #F9EA8F 17.43%, #9FD8C4 85.31%);
}
.branch-5{
    background: linear-gradient(155.11deg, #8EECF5 13.48%, #A3C4F3 79.79%);
}
.branch-6{
    background: linear-gradient(155.11deg, #FFD6FF 14.18%, #C8B6FF 84.75%);
} */


.branch-services, .branch p, .branch h3, .branch i{
    padding-left: 10px;
    padding-top: 10px;
}
.branch .branch-services{
    color: $main-color;
    margin-bottom: 0px;
    
}
.branch p{
    font-size: 14px;
    font-weight: 500;
    color: #6F6F6F;
}
.fa-star{
    color: gold;
}
.branch i{
    margin-right: 10px;
}
/* Responsive branches section */

@media screen and (max-width: 992px){
    .branches-title p{
        width: 100% !important;
    }
}
 

</style>