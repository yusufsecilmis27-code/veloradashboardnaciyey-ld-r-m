/*==================================================
        VELORA CARPETS
        PREMIUM DIGITAL CARD
        PART 1 / 5
==================================================*/

/*==============================
RESET
==============================*/

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{

    font-family:"Poppins",sans-serif;

    color:#222;

    background:
    linear-gradient(180deg,#f8f8f8 0%,#eceff4 100%);

    overflow-x:hidden;

    line-height:1.6;

}

/*==============================
ROOT COLORS
==============================*/

:root{

    --gold:#C8A15A;
    --gold-dark:#a67d3d;

    --black:#111111;

    --white:#ffffff;

    --gray:#666666;

    --light:#f8f8f8;

    --border:#ebebeb;

    --shadow:
    0 15px 40px rgba(0,0,0,.10);

    --radius:28px;

}

/*==============================
GLOBAL
==============================*/

img{

    display:block;

    max-width:100%;

}

a{

    text-decoration:none;

    color:inherit;

}

main{

    width:100%;

}

/*==============================
HERO
==============================*/

.hero{

    position:relative;

    width:100%;

    height:260px;

    overflow:hidden;

    background:#111;

}

.hero img{

    width:100%;

    height:100%;

    object-fit:cover;

    transition:1.2s;

}

.hero:hover img{

    transform:scale(1.05);

}

.hero-overlay{

    position:absolute;

    inset:0;

    background:

    linear-gradient(

        rgba(0,0,0,.15),

        rgba(0,0,0,.45)

    );

}

/*==============================
CARD
==============================*/

.card{

    position:relative;

    width:92%;

    max-width:480px;

    margin:-70px auto 40px;

    background:#fff;

    border-radius:30px;

    padding:90px 28px 35px;

    box-shadow:0 20px 60px rgba(0,0,0,.12);

    overflow:visible;

    z-index:10;

}

/*==============================
LOGO BOX
==============================*/

.logo-box{

    position:absolute;

    left:50%;

    top:0;

    transform:translate(-50%,-50%);

    width:135px;

    height:135px;

    border-radius:50%;

    background:#fff;

    display:flex;

    align-items:center;

    justify-content:center;

    box-shadow:

    0 15px 40px rgba(0,0,0,.18);

    border:6px solid #fff;

    z-index:20;

}

/*==============================
LOGO
==============================*/

.logo{

    width:100px;

    height:100px;

    object-fit:contain;

    border-radius:50%;

    transition:.35s;

}

.logo:hover{

    transform:scale(1.06);

}

/*==============================
TITLE
==============================*/

h1{

    text-align:center;

    font-size:34px;

    font-weight:700;

    color:#111;

    margin-bottom:10px;

}

h1 span{

    display:block;

    margin-top:6px;

    font-size:22px;

    color:#777;

    font-weight:500;

}

.subtitle{

    text-align:center;

    color:#666;

    font-size:15px;

    line-height:1.9;

    margin-bottom:35px;

}

/*==============================
SECTION
==============================*/

section{

    margin-top:40px;

}

section h2{

    font-size:20px;

    margin-bottom:20px;

    color:#111;

    position:relative;

    padding-left:16px;

}

section h2::before{

    content:"";

    position:absolute;

    left:0;

    top:3px;

    width:5px;

    height:22px;

    border-radius:20px;

    background:var(--gold);

}
/*==================================================
        VELORA CARPETS
        PREMIUM DIGITAL CARD
        PART 2 / 5
==================================================*/

/*==============================
BUTTON GROUP
==============================*/

.buttons{

    display:flex;

    flex-direction:column;

    gap:18px;

}

/*==============================
BUTTON
==============================*/

.button{

    position:relative;

    display:flex;

    align-items:center;

    justify-content:space-between;

    width:100%;

    min-height:78px;

    padding:18px 22px;

    background:#fff;

    border:1px solid var(--border);

    border-radius:22px;

    box-shadow:0 8px 22px rgba(0,0,0,.05);

    transition:.35s;

    overflow:hidden;

}

/*==============================
LEFT ICON
==============================*/

.button i:first-child{

    width:56px;

    height:56px;

    border-radius:18px;

    background:#111;

    color:#fff;

    display:flex;

    align-items:center;

    justify-content:center;

    font-size:22px;

    flex-shrink:0;

    transition:.35s;

}

/*==============================
TEXT
==============================*/

.button span{

    flex:1;

    margin-left:18px;

    font-size:17px;

    font-weight:600;

    color:#222;

}

/*==============================
RIGHT ICON
==============================*/

.button i:last-child{

    color:#999;

    font-size:18px;

    transition:.35s;

}

/*==============================
WHATSAPP
==============================*/

.button.whatsapp i:first-child{

    background:#25D366;

}

.button.whatsapp:hover{

    border-color:#25D366;

}

.button.whatsapp:hover i:first-child{

    background:#1fb85a;

}

/*==============================
HOVER
==============================*/

.button:hover{

    transform:translateY(-6px);

    border-color:var(--gold);

    box-shadow:0 18px 35px rgba(0,0,0,.12);

}

.button:hover i:first-child{

    background:var(--gold);

    color:#111;

}

.button:hover i:last-child{

    color:var(--gold);

    transform:translateX(6px);

}

.button:hover span{

    color:#111;

}

/*==============================
ACTIVE
==============================*/

.button:active{

    transform:scale(.98);

}

/*==============================
SHINE EFFECT
==============================*/

.button::before{

    content:"";

    position:absolute;

    left:-130%;

    top:0;

    width:60%;

    height:100%;

    transform:skewX(-25deg);

    background:

        linear-gradient(

            90deg,

            transparent,

            rgba(255,255,255,.45),

            transparent

        );

    transition:.8s;

}

.button:hover::before{

    left:160%;

}

/*==============================
RIPPLE
==============================*/

.ripple{

    position:absolute;

    border-radius:50%;

    transform:scale(0);

    animation:ripple .6s linear;

    background:rgba(255,255,255,.35);

    pointer-events:none;

}

@keyframes ripple{

    to{

        transform:scale(4);

        opacity:0;

    }

}

/*==============================
FADE ANIMATION
==============================*/

section{

    opacity:0;

    transform:translateY(30px);

    transition:.8s;

}

section.show{

    opacity:1;

    transform:translateY(0);

}
/*==================================================
        VELORA CARPETS
        PREMIUM DIGITAL CARD
        PART 3 / 5
==================================================*/

/*==============================
MAP
==============================*/

.location{
    margin-top:45px;
}

.map{

    margin-top:20px;

    border-radius:24px;

    overflow:hidden;

    border:1px solid var(--border);

    background:#fff;

    box-shadow:0 12px 30px rgba(0,0,0,.08);

}

.map iframe{

    width:100%;

    height:260px;

    border:0;

    display:block;

}

/*==============================
SOCIAL
==============================*/

.social{

    margin-top:45px;

    border-top:1px solid var(--border);

    padding-top:35px;

}

.social-icons{

    display:grid;

    grid-template-columns:repeat(5,1fr);

    gap:16px;

}

.social-icons a{

    width:65px;

    height:65px;

    margin:auto;

    border-radius:20px;

    display:flex;

    align-items:center;

    justify-content:center;

    background:#fff;

    border:1px solid var(--border);

    color:#222;

    font-size:24px;

    transition:.35s;

    box-shadow:0 8px 20px rgba(0,0,0,.05);

}

.social-icons a:hover{

    background:var(--gold);

    border-color:var(--gold);

    color:#fff;

    transform:translateY(-6px);

    box-shadow:0 18px 30px rgba(0,0,0,.12);

}

/*==============================
ABOUT
==============================*/

.about{

    margin-top:45px;

    border-top:1px solid var(--border);

    padding-top:35px;

}

.about p{

    color:#666;

    line-height:1.9;

    margin-bottom:18px;

    text-align:justify;

}

/*==============================
STATS
==============================*/

.stats{

    margin-top:45px;

    border-top:1px solid var(--border);

    padding-top:35px;

}

.stats-grid{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:18px;

}

.stat-box{

    background:#fff;

    border:1px solid var(--border);

    border-radius:22px;

    padding:28px 18px;

    text-align:center;

    box-shadow:0 8px 22px rgba(0,0,0,.05);

    transition:.35s;

}

.stat-box:hover{

    transform:translateY(-6px);

    border-color:var(--gold);

    box-shadow:0 18px 35px rgba(0,0,0,.10);

}

.stat-box h3{

    font-size:30px;

    color:var(--gold);

    margin-bottom:10px;

    font-weight:700;

}

.stat-box p{

    color:#666;

    font-size:15px;

    font-weight:500;

}

/*==============================
DIVIDER
==============================*/

.about,
.social,
.stats,
.location{

    position:relative;

}

.about::before,
.social::before,
.stats::before,
.location::before{

    content:"";

    position:absolute;

    top:-1px;

    left:0;

    width:70px;

    height:3px;

    background:var(--gold);

    border-radius:50px;

}

/*==============================
IMAGE EFFECT
==============================*/

img{

    transition:.35s;

}

img:hover{

    transform:scale(1.02);

}
/*==================================================
        VELORA CARPETS
        PREMIUM DIGITAL CARD
        PART 4 / 5
==================================================*/

/*==============================
FOOTER
==============================*/

.footer{

    margin-top:60px;

    background:#111;

    color:#fff;

    padding:50px 30px;

    text-align:center;

    border-radius:35px 35px 0 0;

}

.footer-logo{

    width:90px;

    height:90px;

    margin:0 auto 20px;

    border-radius:50%;

    object-fit:cover;

    border:4px solid rgba(255,255,255,.15);

    background:#fff;

    padding:8px;

}

.footer h3{

    font-size:28px;

    margin-bottom:10px;

    font-weight:700;

}

.footer p{

    color:#cfcfcf;

    line-height:1.8;

}

.footer-line{

    width:80px;

    height:3px;

    background:var(--gold);

    margin:30px auto;

    border-radius:50px;

}

.footer-contact{

    display:flex;

    flex-direction:column;

    gap:14px;

    margin-bottom:25px;

}

.footer-contact p{

    display:flex;

    align-items:center;

    justify-content:center;

    gap:10px;

    font-size:15px;

}

.footer-contact i{

    color:var(--gold);

    width:20px;

}

.footer-copy{

    margin-top:30px;

    font-size:14px;

    color:#999;

    line-height:1.8;

}

/*==============================
FLOATING WHATSAPP
==============================*/

.floating-whatsapp{

    position:fixed;

    right:25px;

    bottom:25px;

    width:65px;

    height:65px;

    border-radius:50%;

    background:#25D366;

    color:#fff;

    display:flex;

    align-items:center;

    justify-content:center;

    font-size:32px;

    box-shadow:0 12px 30px rgba(0,0,0,.25);

    transition:.35s;

    z-index:999;

}

.floating-whatsapp:hover{

    transform:scale(1.12);

    box-shadow:0 20px 40px rgba(0,0,0,.30);

}

/*==============================
BACK TO TOP
==============================*/

.back-top{

    position:fixed;

    left:25px;

    bottom:25px;

    width:60px;

    height:60px;

    border:none;

    border-radius:50%;

    background:#111;

    color:#fff;

    cursor:pointer;

    font-size:20px;

    display:flex;

    align-items:center;

    justify-content:center;

    box-shadow:0 12px 30px rgba(0,0,0,.20);

    transition:.35s;

    z-index:998;

}

.back-top:hover{

    background:var(--gold);

    transform:translateY(-5px);

}

/*==============================
SCROLLBAR
==============================*/

::-webkit-scrollbar{

    width:10px;

}

::-webkit-scrollbar-track{

    background:#efefef;

}

::-webkit-scrollbar-thumb{

    background:linear-gradient(
        180deg,
        var(--gold),
        var(--gold-dark)
    );

    border-radius:50px;

}

::-webkit-scrollbar-thumb:hover{

    background:var(--gold-dark);

}

/*==============================
TEXT SELECTION
==============================*/

::selection{

    background:var(--gold);

    color:#fff;

}

/*==============================
CARD ANIMATION
==============================*/

.card{

    animation:cardFade .8s ease;

}

@keyframes cardFade{

    from{

        opacity:0;

        transform:translateY(40px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

/*==============================
GLOW EFFECT
==============================*/

.card::after{

    content:"";

    position:absolute;

    inset:0;

    border-radius:30px;

    pointer-events:none;

    box-shadow:
        inset 0 1px rgba(255,255,255,.5);

}
/*==================================================
        VELORA CARPETS
        PREMIUM DIGITAL CARD
        PART 5 / 5
==================================================*/

/*==============================
TABLET
==============================*/

@media (max-width:992px){

    .card{
        width:94%;
        max-width:520px;
    }

    .hero{
        height:240px;
    }

}

/*==============================
MOBILE
==============================*/

@media (max-width:768px){

    .hero{
        height:210px;
    }

    .card{

        width:95%;

        margin:-55px auto 30px;

        padding:90px 20px 30px;

        border-radius:25px;

    }

    .logo-box{

        width:120px;
        height:120px;

        border-width:5px;

    }

    .logo{

        width:88px;
        height:88px;

    }

    h1{

        font-size:30px;

    }

    h1 span{

        font-size:18px;

    }

    .subtitle{

        font-size:14px;

    }

    .button{

        min-height:70px;

        padding:16px;

    }

    .button i:first-child{

        width:48px;
        height:48px;

        font-size:18px;

    }

    .button span{

        font-size:15px;

    }

    .social-icons{

        grid-template-columns:repeat(5,1fr);

        gap:10px;

    }

    .social-icons a{

        width:52px;
        height:52px;

        font-size:20px;

    }

    .stats-grid{

        grid-template-columns:1fr;

    }

    .map iframe{

        height:220px;

    }

}

/*==============================
SMALL MOBILE
==============================*/

@media (max-width:480px){

    .hero{

        height:190px;

    }

    .card{

        margin:-45px auto 20px;

        padding:80px 18px 25px;

    }

    .logo-box{

        width:105px;
        height:105px;

    }

    .logo{

        width:76px;
        height:76px;

    }

    h1{

        font-size:26px;

    }

    h1 span{

        font-size:17px;

    }

    section h2{

        font-size:18px;

    }

    .button{

        min-height:65px;

        border-radius:18px;

    }

    .button span{

        font-size:14px;

    }

    .footer{

        padding:40px 20px;

    }

    .footer-logo{

        width:70px;
        height:70px;

    }

    .floating-whatsapp{

        width:58px;
        height:58px;

        font-size:28px;

        right:18px;
        bottom:18px;

    }

    .back-top{

        width:52px;
        height:52px;

        left:18px;
        bottom:18px;

    }

}

/*==============================
LARGE SCREEN
==============================*/

@media (min-width:1400px){

    .hero{

        height:320px;

    }

}

/*==============================
REDUCE MOTION
==============================*/

@media (prefers-reduced-motion:reduce){

    *{

        animation:none !important;

        transition:none !important;

        scroll-behavior:auto;

    }

}
