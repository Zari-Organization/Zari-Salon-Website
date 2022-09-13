<template>
    <div>
        <div class="section-full content-inner bg-blue-light pricing">
			<div class="container">
				<div class="section-head text-black text-center">
					<h1 class="text-primary">Our Pricing</h1>
					<div class="dlab-separator-outer m-b0">
						<div class="dlab-separator text-primary style-icon"><i class="flaticon-spa text-primary"></i></div>
					</div>
					<!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p> -->
				</div>
				<div class="row">
					<div class="col-lg-6 col-md-12 col-sm-12">
						<div class="price-tbl d-flex">
							<div class="flex-grow-1">
								<h4 class="text-primary">Deep Tissue Massage</h4>
								<p>60 – 100 Minute Session </p>
							</div>
							<div class="price-val align-self-center">
								<h3 class="text-secondry">$40.00</h3>
							</div>
						</div>
						<div class="price-tbl d-flex">
							<div class="flex-grow-1">
								<h4 class="text-primary">Swedish Massage</h4>
								<p>30 – 40 Minute Session  </p>
							</div>
							<div class="price-val align-self-center">
								<h3 class="text-secondry">$35.00</h3>
							</div>
						</div>
						<div class="price-tbl d-flex">
							<div class="flex-grow-1">
								<h4 class="text-primary">Deep Tissue Massage</h4>
								<p>60 – 100 Minute Session </p>
							</div>
							<div class="price-val align-self-center">
								<h3 class="text-secondry">$40.00</h3>
							</div>
						</div>
						<div class="price-tbl d-flex">
							<div class="flex-grow-1">
								<h4 class="text-primary">Therapeutic Massage</h4>
								<p>40 – 60 Minute Session</p>
							</div>
							<div class="price-val align-self-center">
								<h3 class="text-secondry">$30.00</h3>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-12 col-sm-12">
						<div class="price-tbl d-flex">
							<div class="flex-grow-1">
								<h4 class="text-primary">Hot Stone Massage</h4>
								<p>50 – 60 Minute Session </p>
							</div>
							<div class="price-val align-self-center">
								<h3 class="text-secondry">$34.00</h3>
							</div>
						</div>
						<div class="price-tbl d-flex">
							<div class="flex-grow-1">
								<h4 class="text-primary">Couples Massage</h4>
								<p>20 – 30 Minute Session  </p>
							</div>
							<div class="price-val  align-self-center">
								<h3 class="text-secondry">$42.00</h3>
							</div>
						</div>
						<div class="price-tbl d-flex">
							<div class="flex-grow-1">
								<h4 class="text-primary">Facial</h4>
								<p>15 – 30 Minute Session </p>
							</div>
							<div class="price-val align-self-center">
								<h3 class="text-secondry">$38.00</h3>
							</div>
						</div>
						<div class="price-tbl d-flex">
							<div class="flex-grow-1">
								<h4 class="text-primary">Body Waxing</h4>
								<p>80 – 100 Minute Session </p>
							</div>
							<div class="price-val align-self-center">
								<h3 class="text-secondry">$65.00</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>


<style lang="scss">
    @import '../scss/_variables';
    @import '../scss/style.scss';

    .pricing{
        background-image:url(../assets/aboutus/pricing.jpg); 
        background-position: bottom; 
        background-size: cover; 
        background-repeat: no-repeat;
        margin-bottom: 120px;
        padding-top: 5px;
    }

    .price-tbl{
		border-radius: 10px;
        padding:20px 20px;
        background:rgba(255,255,255,.95);
        margin-bottom:30px;
        box-shadow:0 0 30px 0 rgba(0,0,0,.05);
        transition:all .5s;
        -moz-transition:all .5s;
        -webkit-transition:all .5s;
        -ms-transition:all .5s;
        -o-transition:all .5s
    }
    .price-tbl:hover{
        transform:scale(1.05);
        -moz-transform:scale(1.05);
        -webkit-transform:scale(1.05);
        -ms-transform:scale(1.05);
        -o-transform:scale(1.05)
    }
    .price-tbl p{
        margin-bottom:0
    }
    .price-tbl h4{
        margin-bottom:10px
    }
    .price-tbl .price-val h3{
        margin-bottom:0
    }
</style>
