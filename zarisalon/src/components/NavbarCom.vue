<template>
    <div>
        <div>
            
        </div>
    </div>

</template>


<style scoped>

body{
    font-family: 'Montserrat', sans-serif;
    background-color: #F5F5F5;
    overflow: hidden;
}

#ready{
    text-align: center;
    z-index: 99999;
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--mainColor);
    background-color: #000;
}

#topBtn{
    cursor: pointer;
    z-index: 99999;
    display: none;
}

a{
    text-decoration: none !important;
}

a:focus{
    box-shadow: none !important;
}

i, img{
    cursor: pointer;
}

.main-color{
    color: var(--mainColor);
}
.main-bg{
    background-color: var(--mainColor);
}


/* navbar */
.navbar{
    font-size: 13px;
    font-weight: 600;
    box-shadow: 0px 4px 6px rgba(147, 147, 147, 0.26);
}

.navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.5rem;
}
.navbar .navbar-toggler{
    transition: all 0.25s;
    position: relative;
    width: 40px;
    height: 40px;
    margin-right: 15px;
    cursor: pointer;
}
.navbar .navbar-toggler::before{
    content: '';
    position: absolute;
    width: 25px !important;
    height: 3px !important;
    background-color: var(--mainColor);
    transition: all 0.25s;
    transform: translateY(-10px);
    box-shadow: 0 10px 0 var(--mainColor);
}
.navbar .navbar-toggler.convert::before{
    transform: translateY(0px) rotate(45deg);
    box-shadow: 0 0 0 var(--mainColor);
}
.navbar .navbar-toggler::after{
    content: '';
    position: absolute;
    width: 25px !important;
    height: 3px !important;
    background-color: var(--mainColor);
    transition: all 0.25s;
    transform: translateY(10px);
}
.navbar .navbar-toggler.convert::after{
    transform: translateY(0px) rotate(-45deg);
}
.navbar .navbar-toggler:focus,
 .navbar .navbar-toggler:hover
{
    box-shadow: none;
}
.navbar .navbar-nav li{
    white-space: nowrap;
}
.navbar .navbar-nav li a{
    color: #000000CC;
    transition: all 0.25s;
    text-align: center;
}
.active,
 .navbar-nav a:focus,
  .navbar-nav a:hover
{
    color: var(--mainColor) !important;
}
.navbar-collapse{
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.5s;
}
.custome div{
    border: 1px solid var(--mainColor);
    border-radius: 8px;
    background-color: transparent;
    padding:   3px 13px;
    cursor: pointer;
    color: var(--mainColor);
    font-size: 11px;
    font-weight: 500;
    box-shadow: 0px 4px 6px rgba(147, 147, 147, 0.26);
}
.custome a{
    /* border: 1px solid var(--mainColor); */
    /* border-radius: 8px; */
    /* background-color: var(--mainColor); */
    padding-top: 12px;
    padding-bottom: 12px;
    color: #000 !important;
    font-weight: 500;
    /* box-shadow: 0px 4px 6px rgba(147, 147, 147, 0.26); */
    transition: all 0.25s;
}

.custome a i{
    font-size: 15px;
}
.custome .currency, .custome .language, .language i{
    transition: all 0.25s;
}
.custome .currency:hover, .custome .language:hover{
    background-color: var(--mainColor);
}
.custome .currency:hover select, .custome .language:hover select{
    color: #fff !important;
}
.custome .currency:hover option[value], .custome .language:hover option[value]{
    color: var(--mainColor) !important;
}
.custome .language:hover.language i{
    color: #fff !important;
}
.custome a:hover{
    /* background-color: transparent; */
    color: var(--mainColor) !important;
    /* border: 1px solid var(--mainColor); */
}
.custome a:focus{
    border-color: var(--mainColor) !important;
}
.custome .currency img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
select{
    color: var(--mainColor);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.25s;
}
option{
    font-size: 13px;
    font-weight: 500;
    transition: all 0.25s;
}

/* Responsive navbar */

@media screen and (min-width: 992px) and (max-width: 1150px) {
    .custome{
        display: none !important;
    }
    .w-special-95{
        width: 95%;
    }
}
@media screen and (min-width: 992px){
    .navbar-collapse{
        background-color: transparent !important;
    }
    .custome{
        width: 25%;
    }
}
@media screen and (max-width: 992px) {
    .navbar .navbar-nav li a{
        color: #fff;
        font-size: 14px;
        margin-bottom: 8px;
    }
    .custome{
        width: 75%;
        margin-left: auto;
        margin-right: auto;
    }
    .custome div{
        box-shadow: none;
    }
    .custome a{
        box-shadow: none;
    }
}

</style>