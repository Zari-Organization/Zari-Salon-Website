<template>
    <div>
        <section id="testimonials" class="testimonials pb-90">

            <div class="container">
        
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="main-title text-center py-3 w-85 mx-auto mb-4">
                            <h1 class="text-primary m-b10 fw-bold text-capitalize">Customer Testimonials</h1>
                            <h6 class="mb-3">Valuable Clients Feedback</h6>
                        </div>        
                    </div>
        
                </div><!-- end or row -->
        
        <div class="row">
            <div class="col-lg-4 col-md-4 item p-a5">
                <div class="feedback-item wow fadeInUp delay-0-2s">
                    <div class="quote-rating">
                        <i><fa :icon="['fas' ,'quote-left']" /></i>
                        <div class="rating">
                            <i><fa :icon="['fas' ,'star']" /></i>
                            <span>5.0</span>
                        </div>
                    </div>
                    <p>Zari Salon was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.</p>
                    <div class="author-description">
                        <img src="../assets/testimonials/author-1.jpg" alt="Author">
                        <div class="description">
                            <h5>Michael L. Morre</h5>
                            <span>Joniour Manager</span>
                        </div>
                    </div>
                    <div class="for-border"></div>
                </div>
            </div> 
            <!-- end of item -->

            <div class="col-lg-4 col-md-4 item p-a5">
                <div class="feedback-item wow fadeInUp delay-0-2s">
                    <div class="quote-rating">
                        <i><fa :icon="['fas' ,'quote-left']" /></i>
                        <div class="rating">
                            <i><fa :icon="['fas' ,'star']" /></i>
                            <span>5.0</span>
                        </div>
                    </div>
                    <p>Zari Salon was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.</p>
                    <div class="author-description">
                        <img src="../assets/testimonials/author-2.jpg" alt="Author">
                        <div class="description">
                            <h5>Michael L. Morre</h5>
                            <span>Joniour Manager</span>
                        </div>
                    </div>
                    <div class="for-border"></div>
                </div>
            </div> 
            <!-- end of item -->

            <div class="col-lg-4 col-md-4 item p-a5">
                <div class="feedback-item wow fadeInUp delay-0-2s">
                    <div class="quote-rating">
                        <i><fa :icon="['fas' ,'quote-left']" /></i>
                        <div class="rating">
                            <i><fa :icon="['fas' ,'star']" /></i>
                            <span>5.0</span>
                        </div>
                    </div>
                    <p>Zari Salon was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.</p>
                    <div class="author-description">
                        <img src="../assets/testimonials/author-3.jpg" alt="Author">
                        <div class="description">
                            <h5>Michael L. Morre</h5>
                            <span>Joniour Manager</span>
                        </div>
                    </div>
                    <div class="for-border"></div>
                </div>
            </div> 
            <!-- end of item -->

        </div>
                  
        
        
                  
                    <!-- end of item -->
                     <!--end of carousel------------>
                </div>
                <!-- end of container -->
        
        </section>
    </div>
</template>

<style lang="scss">
    @import '../scss/variables';
    @import '../scss/style.scss';
    .testimonials{
        margin-bottom: 120px;
    }
  
.feedback-item {
    z-index: 1;
    padding: 45px;
    background: white;
    position: relative;
    margin-bottom: 30px;
    -webkit-box-shadow: 0px 0px 20px rgba(255, 207, 231, 0.518);
    box-shadow: 0px 0px 20px rgba(255, 207, 231, 0.518); 
}
    @media only screen and (max-width: 375px) {
      .feedback-item {
        padding-left: 25px;
        padding-right: 25px; 
    } 
}
    .feedback-item .for-border {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1; }
    .feedback-item:before, .feedback-item:after,
    .feedback-item .for-border:after,
    .feedback-item .for-border:before {
      content: '';
      -webkit-transition: 0.2s;
      -o-transition: 0.2s;
      transition: 0.2s;
      position: absolute;
      background: $main-color; 
    }
    .feedback-item:before,
    .feedback-item .for-border:before {
      width: 1px;
      height: 0; }
    .feedback-item:after,
    .feedback-item .for-border:after {
      height: 1px;
      width: 0; }
    .feedback-item:before {
      left: 0;
      bottom: 0; }
    .feedback-item:after {
      top: 0;
      left: 0;
      -webkit-transition-delay: 0.6s;
      -o-transition-delay: 0.6s;
      transition-delay: 0.6s; }
    .feedback-item .for-border:before {
      top: 0;
      right: 0;
      -webkit-transition-delay: 0.4s;
      -o-transition-delay: 0.4s;
      transition-delay: 0.4s; }
    .feedback-item .for-border:after {
      right: 0;
      bottom: 0;
      -webkit-transition-delay: 0.2s;
      -o-transition-delay: 0.2s;
      transition-delay: 0.2s; }
    .feedback-item:hover:before {
      height: 100%;
      -webkit-transition-delay: 0.6s;
      -o-transition-delay: 0.6s;
      transition-delay: 0.6s; }
    .feedback-item:hover:after {
      width: 100%;
      -webkit-transition-delay: 0s;
      -o-transition-delay: 0s;
      transition-delay: 0s; }
    .feedback-item:hover .for-border:before {
      height: 100%;
      -webkit-transition-delay: 0.2s;
      -o-transition-delay: 0.2s;
      transition-delay: 0.2s; }
    .feedback-item:hover .for-border:after {
      width: 100%;
      -webkit-transition-delay: 0.4s;
      -o-transition-delay: 0.4s;
      transition-delay: 0.4s; }
    .feedback-item .quote-rating {
      margin-bottom: 33px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between; 
    }
      .feedback-item .quote-rating > i {
        font-size: 55px;
        color: $main-color; 
    }
      .feedback-item .quote-rating .rating {
        font-size: 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center; }
        .feedback-item .quote-rating .rating i {
          margin-right: 10px; 
        }
        .feedback-item .quote-rating .rating span {
          font-weight: 600;
          color: #799AA1;
          font-family: "Montserrat", sans-serif; 
        }
  
  .author-description {
    margin-top: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start; }
    @media only screen and (max-width: 375px) {
      .author-description {
        display: block; } }
    .author-description img {
      width: 60px;
      height: 60px;
      margin-right: 25px;
      border-radius: 50%; }
      @media only screen and (max-width: 375px) {
        .author-description img {
          margin-right: 0;
          margin-bottom: 15px; } }
    .author-description h5 {
      font-size: 20px;
      margin-bottom: 0; }
  
  .feedback-progress {
    width: 100%;
    height: 3px;
    margin-top: 50px;
    max-width: 630px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    background: rgba(246, 233, 228, 0.5); }
    @media only screen and (max-width: 767px) {
      .feedback-progress {
        max-width: 95%; } }
    .feedback-progress .progress {
      left: 0;
      width: 0;
      top: -2px;
      height: 7px;
      -webkit-transition: 0.5s;
      -o-transition: 0.5s;
      transition: 0.5s;
      border-radius: 0;
      overflow: inherit;
      position: absolute;
      background: #799AA1; }
      .feedback-progress .progress:after {
        content: '';
        right: 0;
        top: 50%;
        position: absolute;
        -webkit-transform: translate(50%, -50%);
        -ms-transform: translate(50%, -50%);
        transform: translate(50%, -50%);
        width: 25px;
        height: 25px;
        background: #799AA1;
        line-height: 25px;
        border-radius: 50%;
        text-align: center; 
    }
  


</style>