<template>
    <div>
        <section id="team" class="team pb-90">

            <div class="container">
        
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="main-title text-center py-3 w-85 mx-auto mb-4">
                            <h1 class="text-primary m-b10 fw-bold text-capitalize">Expert Team Member</h1>
                            <h6 class="mb-3">Meet Our Professional Team Members</h6>
                        </div>        
                    </div>
        
                </div><!-- end or row -->
        <div class="row">
            
            <div class="col-md-3 item p-a5">
                <div class="team-member">
                    <div class="memberimage">
                    <div class="member-pic radius style1">
                        <img src="../assets/team/client3.jpg" width="100" height="100" alt="">
                    </div>
                    </div>
                    <div class="member-detail"> 
                        <strong class="member-name">Evelyn Martinez</strong>   <br>
                        <span class="member-position">Senior Manager</span> </div>
                </div>
            </div>

            <div class="col-md-3 item p-a5">
                <div class="team-member">
                    <div class="memberimage">
                    <div class="member-pic radius style1">
                         <img src="../assets/team/client4.jpg" width="100" height="100" alt="">
                    </div>
                    </div>
                    <div class="member-detail"> 
                        <strong class="member-name">Evelyn Martinez</strong>   <br>
                        <span class="member-position">Makeup Artist</span> </div>
                </div>
            </div>

            <div class="col-md-3 item p-a5">
                <div class="team-member">
                    <div class="memberimage">
                    <div class="member-pic radius style1">
                        <img src="../assets/team/client5.jpg" width="100" height="100" alt="">
                    </div>
                    </div>
                    <div class="member-detail"> 
                        <strong class="member-name">Evelyn Martinez</strong>   <br>
                        <span class="member-position">Hair stylist</span> </div>
                </div>
            </div>

            <div class="col-md-3 item p-a5">
                <div class="team-member">
                    <div class="memberimage">
                    <div class="member-pic radius style1">
                        <img src="../assets/team/client8.jpg" width="100" height="100" alt="">
                    </div>
                    </div>
                    <div class="member-detail"> 
                        <strong class="member-name">Evelyn Martinez</strong>   <br>
                        <span class="member-position">Senior Manager</span> </div>
                </div>
            </div>


        </div>
        
        
                </div>
                <!-- end of container -->
        
        </section>
    </div>
</template>

<style lang="scss">
    @import '../scss/variables';
    @import '../scss/style.scss';
    
.team{
    margin-bottom: 120px;
}
.team-member{
    background-color:#fff;
    padding: 10px 10px;
    box-shadow:0 0 3px rgba(0,0,0,.1);
    text-align:center;
    border-bottom:5px solid var(--mainColor);
}

.member-name{
    font-weight:700;
    font-size:16px;
    text-transform:uppercase;
    font-family:Montserrat,sans-serif;
    color:#1b1c1e
}
.member-position{
    text-transform:capitalize;
    font-family:Montserrat,sans-serif;
    color:#888;
    font-size:14px;
    font-style:inherit;
    font-weight:500;
    line-height: 26px;
}
    
.memberimage{
    display: flex;
    justify-content: center;
    align-items: center;
}
.member-pic{
    margin-bottom:15px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 4px 4px 8px rgb(255 0 129 / 13%);
}
.member-pic img{
    height: 100%;
    width: auto;
    transition: 0.3s;
}

.member-pic img:hover{
    transform: scale(1.15,1.15);

}

</style>