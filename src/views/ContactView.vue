<template>
    <div>
        <section class="page-header">
            <h1>Contact Us</h1>
            <ul class="bread-crumbs">
                <li class="bread-crumbs__item">
                    <router-link to="/" class="bread-crumbs__link">Home</router-link>
                </li>
                <li class="bread-crumbs__item fw-bold">Contact</li>
            </ul>
          
        </section>



        <div class="section-full content-inner contact-style-1">
			<div class="container">
                <div class="row">
					<!-- right part start -->
					<div class="col-lg-4 col-md-6 d-flex">
                        <div class="p-a30 border m-b30 contact-area align-self-stretch ">
							<h4 class="m-b10">Quick Contact</h4>
							<p>If you have any questions simply use the following contact details.</p>
                            <ul class="no-margin">
                                <li class="icon-bx-wraper left m-b30">
                                    <div class="icon-bx-xs border-1"> 
                                        <span class="icon-cell text-primary"> 
                                            <i><fa :icon="['fas', 'location-dot']"/></i>
                                        </span> 
                                    </div>
                                    <div class="icon-content">
                                        <h6 class="text-uppercase m-tb0 dlab-tilte">Address:</h6>
                                        <p>123 West Street, Melbourne Victoria 3000 Australia</p>
                                    </div>
                                </li>
                                <li class="icon-bx-wraper left  m-b30">
                                    <div class="icon-bx-xs border-1"> <span class="icon-cell text-primary"> <i><fa :icon="['fas', 'envelope']"/></i></span> </div>
                                    <div class="icon-content">
                                        <h6 class="text-uppercase m-tb0 dlab-tilte">Email:</h6>
                                        <p>info@example.com</p>
                                    </div>
                                </li>
                                <li class="icon-bx-wraper left">
                                    <div class="icon-bx-xs border-1"> <span class="icon-cell text-primary"> <i><fa :icon="['fas', 'phone']"/></i></span> </div>
                                    <div class="icon-content">
                                        <h6 class="text-uppercase m-tb0 dlab-tilte">PHONE</h6>
                                        <p>+91 987 654 3210</p>
                                    </div>
                                </li>
                            </ul>
							<div class="m-t20">
								<!-- <ul class="dlab-social-icon dlab-social-icon-lg">
									<li><a target="_blank" href="https://www.facebook.com/" class="fa fa-facebook bg-primary"></a></li>
									<li><a target="_blank" href="https://twitter.com/" class="fa fa-twitter bg-primary"></a></li>
									<li><a target="_blank" href="https://www.linkedin.com/" class="fa fa-linkedin bg-primary"></a></li>
									<li><a target="_blank" href="https://www.instagram.com/" class="fa fa-instagram bg-primary"></a></li>
									<li><a target="_blank" href="https://www.google.com/" class="fa fa-google-plus bg-primary"></a></li>
								</ul> -->
                                <div class="icons-footer d-flex align-items-center">
                                    <a target="_blank" href="https://www.facebook.com/ZARISolutionksa"><i><fa :icon="['fab','facebook-f']" /></i></a>
                                    <a target="_blank" href="https://twitter.com/SolutionZari"><i><fa :icon="['fab','twitter']" /></i></a>
                                    <a target="_blank" href="https://www.instagram.com/zarisolutionksa/"><i><fa :icon="['fab','instagram']" /></i></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/zari-solution-ksa-12717623b/"><i><fa :icon="['fab','linkedin-in']" /></i></a>
                                </div>
							</div>
                        </div>
                    </div>
                    <!-- right part END -->
                    <!-- Left part start -->
					<div class="col-lg-4 col-md-6 m-b30">
                        <div class="p-a30 bg-gray clearfix">
							<h4>Send Message Us</h4>
							<div class="dzFormMsg"></div>
							<form method="post" class="dzForm" action="script/contact.php">
							<input type="hidden" value="Contact" name="dzToDo">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input name="dzName" type="text" required="" class="form-control" placeholder="Your Name">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <div class="input-group"> 
											    <input name="dzEmail" type="email" class="form-control" required="" placeholder="Your Email Id">
                                            </div>
                                        </div>
                                    </div>
                                     <div class="col-lg-12">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <textarea name="dzMessage" rows="4" class="form-control" required="" placeholder="Your Message..." spellcheck="false"></textarea><grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none; z-index: 3;" class="cGcvT"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" style="mix-blend-mode: darken; position: absolute; top: 0px; left: 0px; pointer-events: none; z-index: 3;" class="cGcvT"></grammarly-extension>
                                            </div>
                                        </div>
                                    </div>
									<div class="col-lg-12" center>
										<div class="form-group">
											<div class="input-group">
												<div class="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN&amp;co=aHR0cHM6Ly9iZWF1dHl6b25lLmRleGlnbnpvbmUuY29tOjQ0Mw..&amp;hl=en&amp;v=g8G8cw32bNQPGUVoDvt680GA&amp;size=normal&amp;cb=yuprpl602f14" width="304" height="78" role="presentation" name="a-8meal38mh3x1" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
												<input class="form-control d-none" style="display:none;" data-recaptcha="true" required="" data-error="Please complete the Captcha">
											</div>
										</div>
									</div>
                                    <div class="col-lg-12">
                                        <button name="submit" type="submit" value="Submit" class="btn main-btn py-2 px-4 me-3"> <span>Submit</span> </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- Left part END -->
					<div class="col-lg-4 col-md-12 d-flex m-b30">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219" class="align-self-stretch " style="border:0; width:100%; height:100%;" allowfullscreen=""></iframe>
					</div>
                </div>
            </div>
        </div>


        <!-- ========================= -->

        <SubscribeSection />
        <BranchesSection />
        <FooterSection />

    </div>
</template>

<script>
import SubscribeSection from '@/components/SubscribeSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import BranchesSection from '@/components/BranchesSection.vue';
  
  export default {
    components:{
    SubscribeSection,
    FooterSection,
    BranchesSection
}
  }
  </script>



<style lang="scss">

    @import '../scss/_variables.scss';
    @import '../scss/style.scss';
ul{
    list-style: none;
}
    .contact-style-1{
        margin-bottom: 120px;
    }
    .icon-cell {
        display: table-cell;
        vertical-align: middle;
    }

    .contact-style-1 input{
        height:50px
    }
    .contact-style-1 .site-button{
        height:50px;
        width:100%
    }
    .contact-style-1 .form-control{
        padding:10px 20px
    }
    .contact-style-1 .form-control:focus,.contact-style-1 .form-control:hover{
        border-color:silver
    }
    .contact-style-1 h2{
        margin-top:0
    }
    .contact-style-1 .border-1{
        border:1px solid #eee
    }
    .contact-style-1 .dlab-social-icon-lg{
        border-top:1px solid #eee;
        padding-top:20px;
        text-align:left;
        width:100%;
        margin:0
    }
    .contact-style-1 .dlab-social-icon-lg a{
        text-align:center
    }
    .contact-style-1 .dlab-social-icon-lg li a:hover{
        background:#fff;
        color:#000;
        border:1px solid #eee
    }
    .contact-style-1 .form-group{
        margin-bottom:25px;
    }
    .border {
        border: 1px solid #dee2e6!important;
        padding: 30px;
        border-radius: 10px;
    }
    .icon-bx-wraper{
        display: flex;
        align-items: center;
        justify-content: left;
    }

    .icon-bx-xs{
        margin-right: 10px;
        width: 40px;
        height:40px;
        display: flex;
        justify-content: center;
        align-items: center;
      
    }
</style>