<template>
    <div>
        <!-- ================= promo video section================-->
<section class="promo-video rel z-2 pt-140 rpt-90">
    <div class="container">
        <div class="row mb-55">
            <div class="col-md-6">
                <div class="about-page-content wow fadeInLeft delay-0-2s animated" style="visibility: visible; animation-name: fadeInLeft;">
                    <div class="section-title mb-30">
                        <!-- <div><span class="bg-text">about</span>
                        </div> -->
                        <span class="small-title">Who We Are</span>
                        <h2 class="black-title text-primary">Quality &amp; Natural Beauty Salon</h2>
                        <p>In this video, our staff members tell about their work at Solari, how they achieve the best results for their clients every day and more. Click the Play button below to watch this presentation.</p>
                    </div>
                </div>
            </div>
         
            <div class="col-md-6">
                  <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/watch?v=qN_69wnCbRU" title="YouTube video"></iframe>
                  </div>
            </div>
            
        </div>
       
    </div>
</section>
    </div>
</template>

<script>
export default {
    name: 'PromoVideo',

}
</script>

<style lang="scss">
    @import '../scss/_variables';
    @import '../scss/style.scss';
    
    .promo-video{
        margin-bottom: 120px;

    }
    .bg-text {
        font-family: "Dancing Script", cursive;
        text-transform: capitalize;
        color: rgba(0, 0, 0, 0.05);
        font-size: 120px;
        position: relative;
        top: 0;
        left: 0;
        z-index: -1;
        line-height: 1;
    }

</style>