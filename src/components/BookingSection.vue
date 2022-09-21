<template>
    <div>
        <section class="appointment-area appointment-area-3 pos-rel pt-115 pb-120">

            <div class="container">

                <div class="row">

                    <div class="offset-xl-5 col-xl-7 col-lg-8">

                        <div class="calculate-box white-bg">

                            <div class="calculate-content">

                                <div class="row">

                                    <div class="col-xl-12">

                                        <div class="section-title mb-50">

                                            <span class="small-title style-3">Appointment</span>

                                            <h1 class="title-heading style-3">Book Appointment</h1>

                                        </div>

                                    </div>

                                </div>

                                <form action="#">

                                    <div class="row">

                                        <div class="col-xl-6 col-lg-6 col-md-6 mb-30">

                                            <!-- <input type="text" placeholder="Your Name"> -->

                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select Category</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                              </select>

                                        </div>

                                        <div class="col-xl-6 col-lg-6 col-md-6 mb-30">

                                            <!-- <input type="text" placeholder="Phone number"> -->
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select Service</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                              </select>

                                        </div>

                                        <div class="col-xl-6 col-lg-6 col-md-6 mb-30">

                                            <!-- <input type="text" placeholder="Your Subject"> -->
                                                <!-- <label for="date" class="col-1 col-form-label">Date</label> -->
                                                  <div class="input-group date" id="datepicker">
                                                    <input type="text" class="form-control" id="date"/>
                                                    <span class="input-group-append">
                                                      <span class="input-group-text bg-light d-block">
                                                        <!-- <i class="fa fa-calendar"></i> -->
                                                        <i><fa :icon="['fas', 'calendar']"/></i>
                                                      </span>
                                                    </span>
                                                </div>

                                        </div>

                                        <div class="col-xl-6 col-lg-6 col-md-6 mb-30">

                                            <input type="text" placeholder="Your Date">

                                        </div>

                                        <div class="col-xl-6 col-lg-6 col-md-6 mb-30">

                                            <input type="text" placeholder="Your Location">

                                        </div>

                                        <div class="col-xl-6 col-lg-6 col-md-6 mb-30">

                                            <input type="text" placeholder="Your Time">

                                        </div>

                                        <div class="col-xl-12"><grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="cGcvT"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" style="mix-blend-mode: darken; position: absolute; top: 0px; left: 0px; pointer-events: none;" class="cGcvT"></grammarly-extension>

                                            <textarea name="Special request" cols="30" rows="10" placeholder="Special request" spellcheck="false"></textarea>

                                            <button class="btn theme-btn mt-30">submit query</button>

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    </div>
</template>


<style lang="scss">
    .appointment-area{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/check-out/spa-01.jpg");
        margin-bottom: 120px;

    }

  .appointment-Shedule {
  
    position: relative; }
  
  
  
  .appointment-img {
  
    position: relative; }
  
    .appointment-img::before {
  
      position: absolute;
  
      content: '';
  
      width: 100%;
  
      height: 100%;
  
      background: #ec5598;
  
      opacity: 0.9;
  
      z-index: 1; }
  
  
  
  .appointment-text {
  
    position: absolute;
  
    top: 0;
  
    z-index: 99;
  
    width: 100%;
  
    height: 100%;
  
    padding-top: 50px;
  
    text-align: center;
  
    color: #ffffff; }
  
    @media only screen and (min-width: 992px) and (max-width: 1200px) {
  
      .appointment-text {
  
        padding-top: 25px; } }
  
    @media only screen and (min-width: 768px) and (max-width: 991px) {
  
      .appointment-text {
  
        padding-top: 15px; } }
  
    @media (max-width: 575px) {
  
      .appointment-text {
  
        padding-top: 15px; } }
  
    .appointment-text h4 {
  
      color: #ffffff;
  
      font-size: 24px; }
  
    .appointment-text hr {
  
      width: 60px;
  
      height: 2px;
  
      background: #ec9ec4;
  
      border: none;
  
      margin: 0 auto;
  
      margin-top: 25px;
  
      margin-bottom: 22px; }
  
    .appointment-text ul li.sunday {
  
      color: #fff;
  
      font-weight: 400; }
  
  
  
  @media (max-width: 767px) {
  
    .appointment-content {
  
      padding-top: 25px; } }
  
  .appointment-content .name {
  
    width: 48%;
  
    margin-right: 4%;
  
    position: relative; }
  
    @media (max-width: 575px) {
  
      .appointment-content .name {
  
        width: 100%;
  
        margin-right: 0; } }
  
    .appointment-content .name::before {
  
      position: absolute;
  
      content: '\f007';
  
      font-family: 'Font Awesome 5 Free';
  
      font-weight: 900;
  
      color: #a6a2bd;
  
      -webkit-transition: all 0.3s ease-out 0s;
  
      -moz-transition: all 0.3s ease-out 0s;
  
      -ms-transition: all 0.3s ease-out 0s;
  
      -o-transition: all 0.3s ease-out 0s;
  
      transition: all 0.3s ease-out 0s; }
  
      @media (max-width: 575px) {
  
        .appointment-content .name::before {
  
          top: 35px; } }
  
    .appointment-content .name:hover::before {
  
      color: #ec5598; }
  
  .appointment-content .email {
  
    width: 48%;
  
    position: relative; }
  
    @media (max-width: 575px) {
  
      .appointment-content .email {
  
        width: 100%;
  
        margin-right: 0; } }
  
    .appointment-content .email::before {
  
      position: absolute;
  
      content: '\f0e0';
  
      font-family: 'Font Awesome 5 Free';
  
      font-weight: 900;
  
      color: #a6a2bd; }
  
      @media (max-width: 575px) {
  
        .appointment-content .email::before {
  
          top: 35px; } }
  
    .appointment-content .email:hover::before {
  
      color: #ec5598; }
  
  .appointment-content .phone {
  
    width: 48%;
  
    margin-right: 4%;
  
    position: relative; }
  
    @media (max-width: 575px) {
  
      .appointment-content .phone {
  
        width: 100%;
  
        margin-right: 0; } }
  
    .appointment-content .phone::before {
  
      position: absolute;
  
      content: '\f095';
  
      font-family: 'Font Awesome 5 Free';
  
      font-weight: 900;
  
      top: 35px;
  
      color: #a6a2bd; }
  
    .appointment-content .phone:hover::before {
  
      color: #ec5598; }
  
  .appointment-content .subject {
  
    width: 48%;
  
    position: relative; }
  
    @media (max-width: 575px) {
  
      .appointment-content .subject {
  
        width: 100%;
  
        margin-right: 0; } }
  
    .appointment-content .subject::before {
  
      position: absolute;
  
      content: '\f044';
  
      font-family: 'Font Awesome 5 Free';
  
      font-weight: 900;
  
      top: 37px;
  
      color: #a6a2bd; }
  
    .appointment-content .subject::after {
  
      position: absolute;
  
      content: '\f107';
  
      font-family: 'Font Awesome 5 Free';
  
      font-weight: 900;
  
      top: 41px;
  
      color: #a6a2bd;
  
      right: 0; }
  
    .appointment-content .subject:hover::before {
  
      color: #ec5598; }
  
    .appointment-content .subject:hover::after {
  
      color: #ec5598; }
  
  .appointment-content .shedule-date {
  
    width: 48%;
  
    margin-right: 4%;
  
    position: relative; }
  
    @media (max-width: 575px) {
  
      .appointment-content .shedule-date {
  
        width: 100%;
  
        margin-right: 0; } }
  
    .appointment-content .shedule-date::before {
  
      position: absolute;
  
      content: '\f073';
  
      font-family: 'Font Awesome 5 Free';
  
      font-weight: 900;
  
      top: 35px;
  
      color: #a6a2bd; }
  
    .appointment-content .shedule-date::after {
  
      position: absolute;
  
      content: '\f107';
  
      font-family: 'Font Awesome 5 Free';
  
      font-weight: 900;
  
      top: 35px;
  
      color: #a6a2bd;
  
      right: 0; }
  
    .appointment-content .shedule-date:hover::before {
  
      color: #ec5598; }
  
    .appointment-content .shedule-date:hover::after {
  
      color: #ec5598; }
  
  .appointment-content .shedule-time {
  
    width: 48%;
  
    position: relative; }
  
    @media (max-width: 575px) {
  
      .appointment-content .shedule-time {
  
        width: 100%;
  
        margin-right: 0; } }
  
    .appointment-content .shedule-time::before {
  
      position: absolute;
  
      content: '\f017';
  
      font-family: 'Font Awesome 5 Free';
  
      font-weight: 900;
  
      top: 35px;
  
      color: #a6a2bd; }
  
    .appointment-content .shedule-time::after {
  
      position: absolute;
  
      content: '\f107';
  
      font-family: 'Font Awesome 5 Free';
  
      font-weight: 900;
  
      top: 35px;
  
      color: #a6a2bd;
  
      right: 0; }
  
    .appointment-content .shedule-time:hover::before {
  
      color: #ec5598; }
  
    .appointment-content .shedule-time:hover::after {
  
      color: #ec5598; }
  
  .appointment-content .massage {
  
    position: relative; }
  
    .appointment-content .massage::before {
  
      position: absolute;
  
      content: '\f075';
  
      font-family: 'Font Awesome 5 Free';
  
      font-weight: 900;
  
      top: 30px;
  
      color: #a6a2bd;
  
      left: 0; }
  
    .appointment-content .massage:hover::before {
  
      color: #ec5598; }
  
  .appointment-content form input {
  
    width: 100%;
  
    background: transparent;
  
    border: none;
  
    border-bottom: 2px solid #272241;
  
    color: #a6a2bd;
  
    padding: 15px 30px;
  
    margin-top: 20px;
  
    -webkit-transition: all 0.3s ease-out 0s;
  
    -moz-transition: all 0.3s ease-out 0s;
  
    -ms-transition: all 0.3s ease-out 0s;
  
    -o-transition: all 0.3s ease-out 0s;
  
    transition: all 0.3s ease-out 0s; }
  
    .appointment-content form input[type="text"] {
  
      margin-top: 0;
  
      padding-top: 0; }
  
      @media (max-width: 575px) {
  
        .appointment-content form input[type="text"] {
  
          padding: 15px 30px;
  
          margin-top: 20px; } }
  
    .appointment-content form input[type="email"] {
  
      margin-top: 0;
  
      padding-top: 0; }
  
      @media (max-width: 575px) {
  
        .appointment-content form input[type="email"] {
  
          padding: 15px 30px;
  
          margin-top: 20px; } }
  
    .appointment-content form input:hover {
  
      border-color: #ec5598;
  
      color: #ffffff; }
  
  .appointment-content form select {
  
    width: 100%;
  
    padding: 20px;
  
    background: transparent;
  
    border: none;
  
    border-bottom: 2px solid #272241;
  
    margin-top: 17px;
  
    color: #a6a2bd;
  
    appearance: none;
  
    -moz-appearance: none;
  
    -webkit-transition: all 0.3s ease-out 0s;
  
    -moz-transition: all 0.3s ease-out 0s;
  
    -ms-transition: all 0.3s ease-out 0s;
  
    -o-transition: all 0.3s ease-out 0s;
  
    transition: all 0.3s ease-out 0s; }
  
    @media (max-width: 575px) {
  
      .appointment-content form select {
  
        padding: 20px 30px; } }
  
    .appointment-content form select:hover {
  
      border-color: #ec5598;
  
      color: #ffffff; }
  
  .appointment-content form textarea {
  
    width: 100%;
  
    margin-top: 15px;
  
    border: none;
  
    border-bottom: 2px solid #272241;
  
    color: #a6a2bd;
  
    background: transparent;
  
    padding: 15px 30px;
  
    -webkit-transition: all 0.3s ease-out 0s;
  
    -moz-transition: all 0.3s ease-out 0s;
  
    -ms-transition: all 0.3s ease-out 0s;
  
    -o-transition: all 0.3s ease-out 0s;
  
    transition: all 0.3s ease-out 0s; }
  
    .appointment-content form textarea:hover {
  
      border-color: #ec5598;
  
      color: #ffffff; }
  
  .appointment-content form button {
  
    border: none;
  
    cursor: pointer;
  
    margin-top: 30px; }
  
  
  
  .booking ul {
  
    position: relative; }
  
    .booking ul::before {
  
      bottom: 32px;
  
      position: absolute;
  
      content: " ";
  
      width: 100%;
  
      height: 4px;
  
      background-color: #f8f8f8; }
  
    .booking ul li a {
  
      width: 70px;
  
      height: 70px;
  
      line-height: 50px;
  
      text-align: center;
  
      border: 4px solid #f8f8f8;
  
      border-radius: 50%;
  
      display: inline-block;
  
      color: #2a2d2c;
  
      font-family: "Domine", serif;
  
      font-weight: 700;
  
      position: relative;
  
      background: #ffffff;
  
      z-index: 1; }
  
      .booking ul li a.active {
  
        border: 4px solid #b69e59;
  
        color: #b69e59; }
  
  
  
  .booking-service h4 {
  
    font-size: 24px;
  
    padding-top: 20px; }
  
  .booking-service select {
  
    padding: 17px 30px;
  
    width: 100%;
  
    appearance: none;
  
    border: none;
  
    border-bottom: 2px solid #eaeaea;
  
    color: #7f7f7f;
  
    -webkit-transition: all 0.3s ease-out 0s;
  
    -moz-transition: all 0.3s ease-out 0s;
  
    -ms-transition: all 0.3s ease-out 0s;
  
    -o-transition: all 0.3s ease-out 0s;
  
    transition: all 0.3s ease-out 0s; }
  
    .booking-service select:hover {
  
      border-bottom: 2px solid #2a2d2c; }
  
  .booking-service input {
  
    padding: 17px 30px;
  
    width: 100%;
  
    border: none;
  
    border-bottom: 2px solid #eaeaea;
  
    background: #ffffff;
  
    color: #7f7f7f;
  
    -webkit-transition: all 0.3s ease-out 0s;
  
    -moz-transition: all 0.3s ease-out 0s;
  
    -ms-transition: all 0.3s ease-out 0s;
  
    -o-transition: all 0.3s ease-out 0s;
  
    transition: all 0.3s ease-out 0s; }
  
    .booking-service input:hover {
  
      border-bottom: 2px solid #2a2d2c; }
  
  .booking-service .category {
  
    position: relative; }
  
    .booking-service .category::before {
  
      content: '\f044';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #b69e59;
  
      top: 15px; }
  
    .booking-service .category::after {
  
      content: '\f107';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #7f7f7f;
  
      top: 15px;
  
      right: 0; }
  
  .booking-service .select-service {
  
    position: relative; }
  
    .booking-service .select-service::before {
  
      content: '\f044';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #b69e59;
  
      top: 15px; }
  
    .booking-service .select-service::after {
  
      content: '\f107';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #7f7f7f;
  
      top: 15px;
  
      right: 0; }
  
  .booking-service .employee {
  
    position: relative; }
  
    .booking-service .employee::before {
  
      content: '\f007';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #b69e59;
  
      top: 15px; }
  
    .booking-service .employee::after {
  
      content: '\f107';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #7f7f7f;
  
      top: 15px;
  
      right: 0; }
  
  .booking-service .available {
  
    position: relative; }
  
    .booking-service .available::before {
  
      content: '\f017';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #b69e59;
  
      top: 45px; }
  
    .booking-service .available::after {
  
      content: '\f107';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #7f7f7f;
  
      top: 45px;
  
      right: 0; }
  
  .booking-service .day {
  
    position: relative; }
  
    .booking-service .day::before {
  
      content: '\f133';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #b69e59;
  
      top: 45px; }
  
    .booking-service .day::after {
  
      content: '\f107';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #7f7f7f;
  
      top: 45px;
  
      right: 0; }
  
  .booking-service .from {
  
    position: relative; }
  
    .booking-service .from::before {
  
      content: '\f017';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #b69e59;
  
      top: 45px; }
  
    .booking-service .from::after {
  
      content: '\f107';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #7f7f7f;
  
      top: 45px;
  
      right: 0; }
  
  .booking-service .finish {
  
    position: relative; }
  
    .booking-service .finish::before {
  
      content: '\f133';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #b69e59;
  
      top: 45px; }
  
    .booking-service .finish::after {
  
      content: '\f107';
  
      position: absolute;
  
      font-family: "Font Awesome 5 Free";
  
      font-weight: 900;
  
      color: #7f7f7f;
  
      top: 45px;
  
      right: 0; }
  
  
  
  .appointment-area.style-3 .title-heading::after {
  
    top: 185px; }
  
  
  
  .grid-wrapper {
  
    position: relative; }
  
  
  
  .grid-item {
  
    position: relative; }
  
    .grid-item::before {
  
      background: #b69e59;
  
      content: "";
  
      height: 100%;
  
      left: 0;
  
      opacity: 0;
  
      position: absolute;
  
      top: 0;
  
      -webkit-transition: all 0.3s ease 0s;
  
      transition: all 0.3s ease 0s;
  
      width: 100%; }
  
  
  
  .view-icon {
  
    text-align: center;
  
    top: 50%;
  
    opacity: 0;
  
    visibility: hidden;
  
    z-index: 9;
  
    -webkit-transition: .3s;
  
    transition: .3s;
  
    left: 0;
  
    position: absolute;
  
    right: 0; }
  
  
  
  .appoinment-box-2 {
  
    background-color: white;
  
    box-shadow: 0px 16px 32px 0px rgba(223, 217, 255, 0.4);
  
    margin-top: -241px; }
  
  
  
  .calculate-content input {
  
    height: 60px;
  
    padding-left: 38px;
  
    width: 100%;
  
    border: 2px solid #d3e2f0;
  
    position: relative; }
  
  
  
  .calculate-content textarea {
  
    width: 100%;
  
    resize: none;
  
    border: 2px solid #d3e2f0;
  
    padding-top: 28px;
  
    padding-left: 40px;
  
    color: #647589;
  
    height: 120px; }
  
  
  
  .appoinment-box-content {
  
    padding: 70px 38px 40px 70px; }
  
  
  
  .calculate-content {
  
    padding: 60px; }
  
    @media (max-width: 767px) {
  
      .calculate-content {
  
        padding: 20px; } }
  
  
  
  .appointment-form-3 textarea {
  
    width: 100%;
  
    resize: none;
  
    border: 2px solid #d3e2f0;
  
    padding-top: 28px;
  
    padding-left: 40px;
  
    color: #647589;
  
    height: 120px; }
  
  
  
  .appointment-area-3 .calculate-box .nice-select {
  
    border: 2px solid #d3e2f0; }
  
  
  
  .appointment-area-3 .calculate-form input {
  
    border: 2px solid #d3e2f0; }
  
  
  
  .appointment-form-2 input {
  
    width: 100%; }
  
  
  
  .appointment-form-2 input {
  
    width: 100%;
  
    border: 0;
  
    padding: 0; }
  
  
  
  .appointment-form-2 input::placeholder {
  
    font-size: 24px;
  
    color: #223645;
  
    font-weight: 600;
  
    font-family: poppins; }
  
  
  
  .appoint-ment-icon {
  
    margin-right: 40px; }
  
  
  
  .appointment-form-2 label {
  
    font-size: 12px;
  
    text-transform: uppercase;
  
    color: #aab6bf;
  
    font-weight: 500;
  
    margin-bottom: 14px; }
  
  
  
  .appoinment-form-box {
  
    padding-bottom: 27px;
  
    border-bottom: 1px solid #eae5ff; }
  
  
  
  .appoinment-form-box-option {
  
    padding-bottom: 8px; }
  
  
  
  .nice-select.postform::after {
  
    border-bottom: 3px solid #223645;
  
    border-right: 3px solid #223645;
  
    content: '';
  
    display: block;
  
    height: 8px;
  
    margin-top: -23px;
  
    pointer-events: none;
  
    position: absolute;
  
    right: 5px;
  
    top: 50%;
  
    -webkit-transform-origin: 66% 66%;
  
    -ms-transform-origin: 66% 66%;
  
    transform-origin: 66% 66%;
  
    -webkit-transform: rotate(45deg);
  
    -ms-transform: rotate(45deg);
  
    transform: rotate(45deg);
  
    -webkit-transition: all 0.15s ease-in-out;
  
    transition: all 0.15s ease-in-out;
  
    width: 8px; }
  
  
</style>
