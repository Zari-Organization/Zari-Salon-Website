<template>
    <div>
        <section id="gallery" class="gallery pb-90">
            <div class="container py-4">
        
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="main-title text-center py-3 w-85 mx-auto mb-4">
                            <h1 class="text-primary m-b10 fw-bold text-capitalize">Gallery</h1>
                            <h6 class="m-b10">You Will Like To Look Like Goddes Every Day!</h6>
                        </div>        
                    </div>
        
                    <div class="col-12 text-center">
                        <div class="row gx-4 gy-4">
        
        
                            <div class="col-sm-6 col-lg-3">
                                <div class="img-gallery px-4 d-flex justify-content-center align-items-center">
                                    <img src="../assets/gallery/pic1.jpg" />
                                </div>
                            </div>
        
                            <div class="col-sm-6 col-lg-3">
                                <div class="img-gallery px-4 d-flex justify-content-center align-items-center">
                                    <img src="../assets/gallery/pic1.jpg" />
                                </div>
                            </div>
        
                            <div class="col-sm-6 col-lg-3">
                                <div class="img-gallery px-4 d-flex justify-content-center align-items-center">
                                    <img src="../assets/gallery/pic1.jpg" />
                                </div>
                            </div>
        
                            <div class="col-sm-6 col-lg-3">
                                <div class="img-gallery px-4 d-flex justify-content-center align-items-center">
                                    <img src="../assets/gallery/pic1.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  <!-- end or row -->
            </div>
        
            <div class="col-12 text-center">
                <router-link class="btn second-btn py-2 px-4" to="/gallery">Gallery</router-link>
            </div>
            
        </section>

    </div>
</template>

<style lang="scss" scoped>
    @import '../scss/_variables';
    @import '../scss/style.scss';
    
.gallery{
    margin-bottom: 120px;

}
.gallery .img-gallery{
    background: #FFFFFF !important;
    border: 1px solid rgba(153, 153, 153, 0.15);
    box-shadow:0px 0px 8px rgba(153, 153, 153, 0.15);
    border-radius: 8px;
    height: 260px;
    overflow: hidden;
}
.gallery .img-gallery img{
    width: 100%;
    transition: all 0.5s;
}
.gallery .img-gallery:hover img{
    transform: scale(1.15,1.15);
}
.gallery h4{
    text-transform: capitalize;
    transition: all 0.5s;
    cursor: pointer;
}
.gallery:hover.gallery h4{
    color: var(--mainColor) !important;
}

/*Responsive sample section */

@media screen and (max-width: 992px){
    .gallery .img-gallery img{
        width: 250px;
    }
}



</style>