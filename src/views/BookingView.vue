<template>
    <div>
        <section class="page-header">
            <h1>Online Booking</h1>
            <ul class="bread-crumbs">
                <li class="bread-crumbs__item">
                    <router-link to="/" class="bread-crumbs__link">Home</router-link>
                </li>
                <li class="bread-crumbs__item fw-bold">Booking</li>
            </ul>
          
        </section>

        <!-- <div class="content-block">
			<div class="section-full content-inner-2">
                <div class="container">
					<div id="smartwizard" class="sw-main sw-theme-default">    
						<ul class="d-flex nav nav-tabs step-anchor">
							<li class="flex-fill nav-item active"><a href="#time" class="nav-link"><span><strong>1</strong><i><fa :icon="['fas' , 'check']" /></i></span> Time</a></li>
							<li class="flex-fill nav-item done"><a href="#service" class="nav-link"><span><strong>2</strong><i><fa :icon="['fas' , 'check']" /></i></span> Service</a></li>
							<li class="flex-fill nav-item done"><a href="#details" class="nav-link"><span><strong>3</strong><i class="fa fa-check"></i></span> Details</a></li>
							<li class="flex-fill nav-item done"><a href="#payment" class="nav-link"><span><strong>4</strong><i class="fa fa-check"></i></span> Payment</a></li>
							<li class="flex-fill nav-item done"><a href="#done" class="nav-link"><span><strong>5</strong><i class="fa fa-check"></i></span> Done</a></li>
						</ul>

						<div class="btn-toolbar sw-toolbar sw-toolbar-top justify-content-end"><div class="btn-group mr-2 sw-btn-group d-flex justify-content-between w-100" role="group"><button class="site-button-secondry sw-btn-prev disabled" type="button">Previous</button><button class="site-button sw-btn-next" type="button">Next</button></div><div class="btn-group mr-2 sw-btn-group-extra" role="group"><button class="btn btn-info">Finish</button><button class="btn btn-danger">Cancel</button></div></div><div class="sw-container tab-content" style="min-height: 346px;">
							<div id="time" class="wizard-box tab-pane step-content" style="display: block;">
								<h6 class="m-b30">Please select service:</h6>
								<form class="row">
									<div class="col-lg-4 col-md-3 col-sm-3 form-group">



                                        <label>Category</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select category</option>
                                            <option value="1">Cosmetic Dentistry</option>
                                            <option value="2">Invisalign</option>
                                            <option value="3">Orthodontics</option>
                                            <option value="3">Dentures</option>
                                          </select>



                                        <div class="btn-group bootstrap-select">
                                            <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Select category" aria-expanded="false">
                                                <span class="filter-option pull-left">Select category</span>&nbsp;
                                                <span class="caret fa fa-caret-down"></span>
                                            </button>
                                            <div class="dropdown-menu open" x-placement="bottom-start" style="max-height: 390.5px; overflow: hidden; min-height: 1px; position: absolute; transform: translate3d(0px, 50px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                <ul class="dropdown-menu inner" role="menu" style="max-height: 388.5px; overflow-y: auto; min-height: 0px;">
                                                    <li data-original-index="0" class="selected"><a tabindex="0" class="" style="" data-tokens="null">
                                                        <span class="text">Select category</span>
                                                        <span class="glyphicon glyphicon-ok check-mark"></span>
                                                    </a>
                                                </li>
                                                <li data-original-index="1">
                                                    <a tabindex="0" class="" style="" data-tokens="null">
                                                        <span class="text">Cosmetic Dentistry</span>
                                                        <span class="glyphicon glyphicon-ok check-mark">

                                                        </span>
                                                    </a>
                                                </li>
                                                <li data-original-index="2">
                                                    <a tabindex="0" class="" style="" data-tokens="null">
                                                        <span class="text">Invisalign</span>
                                                        <span class="glyphicon glyphicon-ok check-mark"></span>
                                                    </a>
                                                </li>
                                                <li data-original-index="3">
                                                    <a tabindex="0" class="" style="" data-tokens="null">
                                                        <span class="text">Orthodontics</span>
                                                        <span class="glyphicon glyphicon-ok check-mark"></span>
                                                    </a>
                                                </li>
                                                <li data-original-index="4">
                                                    <a tabindex="0" class="" style="" data-tokens="null">
                                                        <span class="text">Dentures</span>
                                                        <span class="glyphicon glyphicon-ok check-mark"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
									</div>	
									<div class="col-lg-4 col-md-6 col-sm-6 form-group">
										<label>Service</label>
										<select class="bs-select-hidden">
											<option>Select service</option>
											<option>Crown and Bridge</option>
											<option>Teeth Whitening</option>
											<option>Veneers</option>
											<option>Invisalign (invisable braces)</option>
											<option>Orthodontics (braces)</option>
											<option>Wisdom tooth Removal</option>
											<option>Root Canal Treatment</option>
											<option>Dentures</option>
										</select>
                                        <div class="btn-group bootstrap-select">
                                            <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Crown and Bridge" aria-expanded="false">
                                                <span class="filter-option pull-left">Crown and Bridge</span>&nbsp;
                                                <span class="caret fa fa-caret-down"></span>
                                            </button>
                                            <div class="dropdown-menu open" x-placement="bottom-start" style="max-height: 164px; overflow: hidden; min-height: 1px; position: absolute; transform: translate3d(0px, 50px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                <ul class="dropdown-menu inner" role="menu" style="max-height: 162px; overflow-y: auto; min-height: 0px;"><li data-original-index="0" class="">
                                                    <a tabindex="0" class="" style="" data-tokens="null">
                                                        <span class="text">Select service</span><span class="glyphicon glyphicon-ok check-mark"></span>
                                                    </a>
                                                </li>
                                                <li data-original-index="1" class="selected">
                                                    <a tabindex="0" class="" style="" data-tokens="null"><span class="text">Crown and Bridge</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Teeth Whitening</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Veneers</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Invisalign (invisable braces)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Orthodontics (braces)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Wisdom tooth Removal</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="7"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Root Canal Treatment</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="8"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Dentures</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div></div>
									</div>	
									<div class="col-lg-4 col-md-6 col-sm-6 form-group">
										<label>Employee</label>
										<select class="bs-select-hidden">
											<option>Any</option>
											<option>Nick Knight</option>
											<option>Jane Howard</option>
											<option>Ashley Stamp</option>
											<option>Bradley Tannen</option>
											<option>Wayne Turner</option>
											<option>Emily Taylor</option>
											<option>Hugh Canberg</option>
											<option>Jim Gonzalez</option>
											<option>Nancy Stinson</option>
											<option>Marry Murphy</option>
										</select><div class="btn-group bootstrap-select"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Wayne Turner" aria-expanded="false"><span class="filter-option pull-left">Wayne Turner</span>&nbsp;<span class="caret fa fa-caret-down"></span></button><div class="dropdown-menu open" x-placement="bottom-start" style="max-height: 273px; overflow: hidden; min-height: 1px; position: absolute; transform: translate3d(0px, 50px, 0px); top: 0px; left: 0px; will-change: transform;"><ul class="dropdown-menu inner" role="menu" style="max-height: 271px; overflow-y: auto; min-height: 0px;"><li data-original-index="0" class=""><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Any</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Nick Knight</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Jane Howard</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Ashley Stamp</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Bradley Tannen</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5" class="selected"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Wayne Turner</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Emily Taylor</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="7"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Hugh Canberg</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="8"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Jim Gonzalez</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="9"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Nancy Stinson</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="10"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Marry Murphy</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div></div>
									</div>	
									<div class="col-lg-4 col-md-6 col-sm-6 form-group">
										<label>I'm available on or after</label>
										<input name="dzOther[date]" class="form-control" placeholder="Select Date" id="datetimepicker" type="text">
									</div>	
									<div class="col-lg-2 col-md-6 col-sm-6 form-group">
										<label>Start from</label>
										<select class="bs-select-hidden">
											<option>8:00 am</option>
											<option>9:00 am</option>
											<option>10:00 am</option>
											<option>11:00 am</option>
											<option>12:00 pm</option>
											<option>1:00 pm</option>
											<option>2:00 pm</option>
											<option>3:00 pm</option>
											<option>4:00 pm</option>
											<option>5:00 pm</option>
											<option>6:00 pm</option>
										</select><div class="btn-group bootstrap-select"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" title="8:00 am"><span class="filter-option pull-left">8:00 am</span>&nbsp;
                                            <span class="caret fa fa-caret-down">

                                            </span>
                                        </button>
                                        <div class="dropdown-menu open">
                                            <ul class="dropdown-menu inner" role="menu">
                                                <li data-original-index="0" class="selected">
                                                    <a tabindex="0" class="" style="" data-tokens="null">
                                                        <span class="text">8:00 am</span>
                                                        <span class="glyphicon glyphicon-ok check-mark">

                                                        </span>
                                                    </a>
                                                </li>
                                                <li data-original-index="1">
                                                    <a tabindex="0" class="" style="" data-tokens="null">
                                                        <span class="text">9:00 am</span>
                                                        <span class="glyphicon glyphicon-ok check-mark">

                                                        </span>
                                                    </a>
                                                </li>
                                                <li data-original-index="2">
                                                    <a tabindex="0" class="" style="" data-tokens="null">
                                                        <span class="text">10:00 am</span>
                                                        <span class="glyphicon glyphicon-ok check-mark"></span>
                                                    </a></li><li data-original-index="3">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">11:00 am</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="4">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">12:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="5">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">1:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark">

                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="6">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">2:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="7">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">3:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="8">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">4:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="9">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">5:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="10">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">6:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
									</div>	
									<div class="col-lg-2 col-md-6 col-sm-6 form-group">
										<label>Finish by</label>
										<select class="bs-select-hidden">
											<option>8:00 am</option>
											<option>9:00 am</option>
											<option>10:00 am</option>
											<option>11:00 am</option>
											<option>12:00 pm</option>
											<option>1:00 pm</option>
											<option>2:00 pm</option>
											<option>3:00 pm</option>
											<option>4:00 pm</option>
											<option>5:00 pm</option>
											<option>6:00 pm</option>
										</select><div class="btn-group bootstrap-select"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" title="8:00 am"><span class="filter-option pull-left">8:00 am</span>&nbsp;
                                            <span class="caret fa fa-caret-down">

                                            </span>
                                        </button>
                                        <div class="dropdown-menu open">
                                            <ul class="dropdown-menu inner" role="menu">
                                                <li data-original-index="0" class="selected">
                                                    <a tabindex="0" class="" style="" data-tokens="null">
                                                        <span class="text">8:00 am</span>
                                                        <span class="glyphicon glyphicon-ok check-mark">

                                                        </span>
                                                    </a>
                                                </li>
                                                <li data-original-index="1">
                                                    <a tabindex="0" class="" style="" data-tokens="null">
                                                        <span class="text">9:00 am</span>
                                                        <span class="glyphicon glyphicon-ok check-mark">

                                                        </span>
                                                    </a>
                                                </li>
                                                <li data-original-index="2">
                                                    <a tabindex="0" class="" style="" data-tokens="null">
                                                        <span class="text">10:00 am</span>
                                                        <span class="glyphicon glyphicon-ok check-mark"></span>
                                                    </a></li><li data-original-index="3">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">11:00 am</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="4">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">12:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="5">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">1:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark">

                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="6">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">2:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="7">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">3:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="8">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">4:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="9">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">5:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                    <li data-original-index="10">
                                                        <a tabindex="0" class="" style="" data-tokens="null">
                                                            <span class="text">6:00 pm</span>
                                                            <span class="glyphicon glyphicon-ok check-mark"></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
									</div>	
								</form>
							</div>
							<div id="service" class="tab-pane step-content" style="display: none;">
								<h6 class="m-b5">Booking Time</h6>
								<p class="m-b30">Below you can find list of available time slots for Crown and Bridge by Nick Knight. Click on a time slot to proceed with booking.</p>
								<div class="book-time row">
									<div class="btn-group d-flex flex-column m-b10 col-lg-2 col-md-4 col-sm-6 col-6" data-toggle="buttons">
										<label class="btn active active-time">
											<input type="checkbox" checked=""> Fri Sep 14
										</label>
										<label class="btn"> 9:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn"> 10:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn">
											<input type="checkbox"> 11:00 am
										</label>
										<label class="btn"> 12:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active active-time"> Fri Sep 16
											<input type="checkbox"> 
										</label>
										<label class="btn active">
											<input type="checkbox"> 2:00 am
										</label>
										<label class="btn"> 3:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn"> 4:00 am
											<input type="checkbox"> 
										</label>
									</div>
									<div class="btn-group d-flex flex-column m-b10 col-lg-2 col-md-4 col-sm-6 col-6" data-toggle="buttons">
										
										<label class="btn"> 9:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active"> 10:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active">
											<input type="checkbox"> 11:00 am
										</label>
										<label class="btn"> 12:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active active-time">
											<input type="checkbox" checked=""> Fri Sep 17
										</label>
										<label class="btn">
											<input type="checkbox"> 2:00 am
										</label>
										<label class="btn">
											<input type="checkbox"> 2:00 am
										</label>
										<label class="btn"> 3:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn"> 4:00 am
											<input type="checkbox"> 
										</label>
									</div>
									<div class="btn-group d-flex flex-column m-b10 col-lg-2 col-md-4 col-sm-6 col-6" data-toggle="buttons">
										<label class="btn active"> 9:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active"> 10:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active active-time">
											<input type="checkbox" checked=""> Fri Sep 14
										</label>
										<label class="btn">
											<input type="checkbox"> 11:00 am
										</label>
										<label class="btn active"> 12:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn">
											<input type="checkbox"> 2:00 am
										</label>
										<label class="btn active"> 3:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active"> 4:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active active-time"> Fri Sep 16
											<input type="checkbox"> 
										</label>
									</div>
									<div class="btn-group d-flex flex-column m-b10 col-lg-2 col-md-4 col-sm-6 col-6" data-toggle="buttons">
										
										<label class="btn active"> 9:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active"> 10:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active active-time">
											<input type="checkbox" checked=""> Fri Sep 14
										</label>
										<label class="btn">
											<input type="checkbox"> 11:00 am
										</label>
										<label class="btn"> 12:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn">
											<input type="checkbox"> 2:00 am
										</label>
										<label class="btn"> 3:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active active-time"> Fri Sep 16
											<input type="checkbox"> 
										</label>
										<label class="btn"> 4:00 am
											<input type="checkbox"> 
										</label>
									</div>
									<div class="btn-group d-flex flex-column m-b10 col-lg-2 col-md-4 col-sm-6 col-6" data-toggle="buttons">
										<label class="btn active"> 9:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn"> 10:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active active-time">
											<input type="checkbox" checked=""> Fri Sep 14
										</label>
										<label class="btn">
											<input type="checkbox"> 11:00 am
										</label>
										<label class="btn"> 12:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn">
											<input type="checkbox"> 2:00 am
										</label>
										<label class="btn active"> 3:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active active-time"> Fri Sep 16
											<input type="checkbox"> 
										</label>
										<label class="btn"> 4:00 am
											<input type="checkbox"> 
										</label>
									</div>
									<div class="btn-group d-flex flex-column m-b10 col-lg-2 col-md-4 col-sm-6 col-6" data-toggle="buttons">
										
										<label class="btn"> 9:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn"> 10:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active active-time">
											<input type="checkbox" checked=""> Fri Sep 14
										</label>
										<label class="btn">
											<input type="checkbox"> 11:00 am
										</label>
										<label class="btn"> 12:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn">
											<input type="checkbox"> 2:00 am
										</label>
										<label class="btn"> 3:00 am
											<input type="checkbox"> 
										</label>
										<label class="btn active active-time"> Fri Sep 16
											<input type="checkbox"> 
										</label>
										<label class="btn"> 4:00 am
											<input type="checkbox"> 
										</label>
									</div>
								</div>

							</div>
							<div id="details" class="tab-pane step-content" style="display: none;">
								<h6 class="m-b5">Details</h6>
								<p class="m-b0">You selected to book Crown and Bridge by Nick Knight at <b class="text-black">3:00</b> pm on <b class="text-black">September 19, 2018.</b> Price for the service is <b class="text-black">$350.00</b>.</p> <p class="m-b30">Please provide your details in the form below to proceed with booking.</p>
								<form class="row">
									<div class="col-lg-4 col-md-4 form-group">
										<label>Name</label>
										<input class="form-control" placeholder="Your Name" type="text">
									</div>	
									<div class="col-lg-4 col-md-4 form-group">
										<label>Phone</label>
										<input class="form-control" placeholder="Phone No." type="text">
									</div>	
									<div class="col-lg-4 col-md-4 form-group">
										<label>Email</label>
										<input class="form-control" placeholder="support@email.com" type="email">
									</div>		
								</form>
							</div>
							<div id="payment" class="tab-pane step-content" style="display: none;">
								<h6>Please tell us how you would like to pay:</h6>
								<form action="/action_page.php">
									<div class="custom-control custom-radio">
										<input type="radio" class="custom-control-input" id="customRadio" name="example1">
										<label class="custom-control-label" for="customRadio">I will pay locally</label>
									</div>
									<div class="custom-control custom-radio">
										<input type="radio" class="custom-control-input" id="customRadio1" name="example1">
										<label class="custom-control-label" for="customRadio1">I will pay now with PayPal </label>
									</div>
								</form>
							</div>
							<div id="done" class="tab-pane step-content" style="display: none;">
								<div class="successful-box text-center">
									<div class="successful-check">  <i><fa :icon="['fas', 'check']" /></i></div>
                                  
									<h2>Successful</h2>									
								</div>
							</div>
						</div><div class="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-end"><div class="btn-group mr-2 sw-btn-group d-flex justify-content-between w-100" role="group"><button class="site-button-secondry sw-btn-prev disabled" type="button">Previous</button><button class="site-button sw-btn-next" type="button">Next</button></div><div class="btn-group mr-2 sw-btn-group-extra" role="group"><button class="btn btn-info">Finish</button><button class="btn btn-danger">Cancel</button></div></div>
					</div>
				</div>
			</div>
        </div> -->


        <BookingSection />
        <PricingSection />
        <WhyusSection />
        <SubscribeSection />
        <FooterSection />



    </div>
</template>

<script>
    import SubscribeSection from '@/components/SubscribeSection.vue';
    import FooterSection from '@/components/FooterSection.vue';
import PricingSection from '@/components/PricingSection.vue';
import BookingSection from '@/components/BookingSection.vue';
import WhyusSection from '@/components/WhyusSection.vue';


    
export default {
  components:{
    SubscribeSection,
    FooterSection,
    PricingSection,
    BookingSection, 
    WhyusSection
}}

// import '../datepicker';
// import '../combining';
// import '../scrollbar';

</script>


<style lang="scss">
    .section-full:last-child {
        margin-bottom: -50px;
    }

    .content-inner-2 {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    .section-full {
        position: relative;
    }


@media (min-width: 1200px){
    .container{
       max-width: 1200px;
    }
}

.sw-main {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
}
.sw-theme-default > ul.nav-tabs {
    border-bottom: 0;
    border: 1px solid rgba(0,0,0,0.1);
}
.sw-theme-default .sw-toolbar-top {
    border-bottom-color: #fff !important;
}

.sw-theme-default .sw-toolbar {
    background: #f9f9f9;
    border-radius: 0 !important;
    padding-left: 10px;
    padding-right: 10px;
    padding: 10px;
    margin-bottom: 0 !important;
}

.sw-main .sw-toolbar {
    margin-left: 0;
}

.sw-toolbar-top, .sw-btn-group-extra {
    display: none;
}

/* SmartWizard Basic CSS */
.sw-main {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    /* border: 5px solid #f0e6f0; */
}

.sw-main .sw-container {
    display: block;
    margin: 0;
    padding: 0;
    position: relative;
}

.sw-main .step-content {
    display: none;
    position: relative;
    margin: 0;
}

.sw-main .sw-toolbar {
    margin-left: 0;
}

/* SmartWizard Theme: White */
.sw-theme-default {
    
}

.sw-theme-default .sw-container {
    min-height: 250px;
}

.sw-theme-default .step-content {
    padding: 30px;
    border:5px solid #F4F4F4;
    background-color: #fff;
	margin: 30px 0;
    text-align: left;
}

.sw-theme-default .sw-toolbar {
    background: #f9f9f9;
    border-radius: 0 !important;
    padding-left: 10px;
    padding-right: 10px;
    padding: 10px;
    margin-bottom: 0 !important;
}

.sw-theme-default .sw-toolbar-top {
    border-bottom-color: #fff !important;
}

.sw-theme-default .sw-toolbar-bottom {
    border-top-color: #fff !important;
}

.sw-theme-default > ul.step-anchor > li {
    position: relative;
	text-align: center;
}

.sw-theme-default > ul.step-anchor > li > a, .sw-theme-default > ul.step-anchor > li > a:hover {
    border: none !important;
    color: #404040;
    text-decoration: none;
    outline-style: none;
    background: transparent !important;
    border: none !important;
    cursor: not-allowed;
	font-size: 18px;
}

.sw-theme-default > ul.step-anchor > li.clickable > a:hover {
    color: #4285F4 !important;
    background: transparent !important;
    cursor: pointer;
}
.sw-theme-default > ul.step-anchor > li.active > a {
    border: none !important;
    background: #00becf !important;
    cursor: pointer;
	border-radius:0 !important;
	color:#fff;
}

.sw-theme-default > ul.step-anchor > li.active > a::after {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}

.sw-theme-default > ul.step-anchor > li.done > a {
    border: none !important;
    color: #fff !important;
    background: #ff5ea5 !important;
    cursor: pointer;
	border-radius:0 !important;
}
.sw-theme-default > ul.step-anchor > li > a span i{
	font-size: 0;
}
.sw-theme-default > ul.step-anchor > li > a span{
	width:30px; 
	height:30px;
	border-radius:30px;
	background-color:rgba(0,0,0,0.1);
	display: inline-block;
	margin-right:5px;
}
.sw-theme-default > ul.step-anchor > li.done > a span strong{
	font-size: 0;
}
.sw-theme-default > ul.step-anchor > li.done > a span i{
	font-size: 18px;
}
.sw-theme-default > ul.step-anchor > li.done > a span{
	
}
.sw-theme-default > ul.step-anchor > li.done > a::after {
    background: #5cb85c;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}

.sw-theme-default > ul.nav-tabs {
	border-bottom: 0;
	border: 1px solid rgba(0,0,0,0.1);
}
.sw-theme-default > ul.step-anchor > li.danger > a {
    border: none !important;
    color: #d9534f !important;
    /* background: #d9534f !important; */
    cursor: pointer;
}

.sw-theme-default > ul.step-anchor > li.danger > a::after {
    background: #d9534f;
    border-left-color: #f8d7da;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}

.sw-theme-default > ul.step-anchor > li.disabled > a, .sw-theme-default > ul.step-anchor > li.disabled > a:hover {
    color: #eee !important;
    cursor: not-allowed;
}

/* Responsive CSS */
@media screen and (max-width: 768px) {
    .sw-theme-default > .nav-tabs > li {
        float: none !important;
    }
}

/* Common Loader */
.sw-loading::after {
    position: absolute;
    display: block;
    opacity: 1;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(255,255,255,.7);
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    z-index: 2;
}

.sw-loading::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #3498db;
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: -40px;
    -webkit-animation: spin 1s linear infinite;
 /* Safari */
    animation: spin 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
/* Extra */
.sw-toolbar-top,
.sw-btn-group-extra{
	display:none;
}
.book-time .btn{
	border-radius:4px;
	background-color:#f5f5f5;
}
.btn-group > .btn-group:not(:first-child) > .btn, 
.btn-group > .btn:not(:first-child),
.book-time .btn-group > .btn-group:not(:last-child) > .btn, 
.book-time .btn-group > .btn:not(:last-child):not(.dropdown-toggle){
	border-radius:4px;
}
.book-time .btn input{
	position:absolute;
	opacity:0;
}
.book-time .btn.active{
	background-color:#ff5ea5;
	color:#fff;
}
.book-time  .btn.active-time{
	background-color:#00becf;
	font-weight:700;
	color:#fff;
}
.sw-theme-default .bootstrap-select .btn.dropdown-toggle{
	border-radius: 0;
	border: 2px solid #e7ecf1 !important;
	height:50px;
	font-size:16px;
	color:#707070;
}
.sw-theme-default .bootstrap-select.btn-group .dropdown-toggle .caret{
	top: 19px;
	right: 14px;
}
.sw-theme-default .form-control{
	height: 50px;
	font-size: 16px;
	border: 2px solid #e7ecf1;
	color:#707070;
	padding:10px 15px;
}
.successful-check {
    width: 200px;
    height: 200px;
    border: 7px solid #00bb27;
    font-size: 100px;
    color: #00bb27;
    border-radius: 200px;
    line-height: 185px;
    margin: auto;
}
.successful-box  h2{
    font-size: 84px;
    line-height: 100px;
    margin-bottom: 0;
    font-weight: 500;
}
.bootstrap-datetimepicker-widget{
	padding:10px !important;
	width:280px !important;	
}
@media only screen and (max-width: 767px) {
	.successful-check {
		width: 150px;
		height: 150px;
		border: 4px solid #00bb27;
		line-height: 155px;
		font-size: 70px;
	}
	.successful-box h2 {
		font-size: 45px;
		line-height: 80px;
	}
}

</style>