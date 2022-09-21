<template>
    <div>

        <section class="page-header">
            <h1>Service</h1>
            <ul class="bread-crumbs">
                <li class="bread-crumbs__item">
                    <router-link to="/services" class="bread-crumbs__link">Services</router-link>
                </li>
                <li class="bread-crumbs__item fw-bold">Facial</li>
            </ul>
          
        </section>




        <section class="service-details">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <img src="../assets/services/pic1.jpg" class="img-responsive"/>
                    </div>

                    <div class="col-md-8">
                        <h4 class="styled">Facial <strong>$60</strong><sup> (from)</sup><span> Pellentesque amet adipiscing scelerisque</span></h4>
                        <p>
                             Lorem ipsum dolor sit amet, pellentesque amet adipiscing scelerisque, vitae urna aenean, justo malesuada at eu, orci varius risus luctus enim a malesuada. Erat in tempor magna, eget porttitor posuere.
                        </p>
                        <ul class="additional_info">
                            <li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="" data-original-title="Shower available"><i><fa icon="fa-solid fa-hand-sparkles" /></i></a></li>
                            <li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="" data-original-title="Towels available"><i><fa :icon="['fas', 'hot-tub-person']" /></i></a></li>
                            <li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="" data-original-title="Slippers"><i><fa :icon="['fas', 'spa']" /></i></a></li>
                            <li><a href="javascript:void(0);" class="tooltip-1" data-placement="top" title="" data-original-title="Slippers"><i><fa :icon="['fas', 'spray-can-sparkles']" /></i></a></li>
                        </ul>
                        <p>
                            <router-link class="btn main-btn py-2 px-4 me-3" to="/booking">Book Appointment</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </section>



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

}}

</script>

<style lang="scss">
    
  @import '../scss/_variables.scss';
  @import '../scss/style.scss';

.service-details{
    margin-bottom: 120px;
}
  h4.styled {
    font-size: 24px;
    margin-bottom: 20px;
}

h4.styled sup {
    font-size: 12px;
    color: #999;
}

h4.styled span {
    font-size: 18px;
    display: block;
    margin-top: 5px;
    color: #555;
    font-weight: 400;
}

p {
    margin-bottom: 20px;
}

ul.additional_info {
    list-style: none;
    padding: 0;
    margin: 25px 0 30px;
    font-size: 30px;
}

ul.additional_info li {
    display: inline-block;
    margin: 0 5px 10px 0;
}
ul.additional_info li a {
    display: inline-block;
    background-color: #f6f6f6;
    border-radius: 3px;
    width: 50px;
    height: 50px;
    line-height: 60px;
    text-align: center;
    color: #555;
    transition: 0.2s;
    margin-right: 10px;
}
ul.additional_info li a:hover {
    color: $main-color;
}



</style>