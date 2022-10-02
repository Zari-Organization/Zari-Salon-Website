<template>
    <div>

        <section class="page-header">
            <h1>Error 404</h1>
            <ul class="bread-crumbs">
                <li class="bread-crumbs__item">
                    <router-link to="/" class="bread-crumbs__link">Home</router-link>
                </li>
                <li class="bread-crumbs__item fw-bold">Error 404</li>
            </ul>
          
        </section>
        <div class="section-full content-inner-3 error-page">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-md-6 col-sm-6 m-b30 align-self-center text-center">
						<h2 class="dz_error text-secondry">404</h2>
						<h3>OOPS!</h3>
						<h4>Page Not Found</h4>
                        <router-link class="btn main-btn py-2 px-4 me-3" to="/">Back To Home</router-link>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-6">
						<img src="../assets/page-not-found.webp" alt="" />
					</div>
				</div>
			</div>
		</div>




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

<style lang="scss" scoped>
    .content-inner-3 {
        padding-top: 120px;
        padding-bottom: 90px;
        margin-bottom: 120px;
    }

    .error-page{
        background-image:  url(../assets/aboutus/pricing.jpg);
        background-size: cover;
    }
    .error-page .dz_error {
        font-size: 200px;
        line-height: 180px;
        margin-bottom: 0;
        color: #00becf;
        margin-bottom: 20px;
    }

    .error-page h3 {
        font-size: 90px;
        letter-spacing: 20px;
        line-height: 70px;
       
    }

    .error-page h4 {
        font-size: 45px;
        letter-spacing: 2px;
        line-height: 45px;
        color: #b0b0b0;
        margin-bottom: 30px;
    }

    img {
        border-style: none;
        height: auto;
        max-width: 100%;
        vertical-align: middle;
    }

</style>