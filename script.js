/* ==========================================
   Velora Carpets
   Premium Digital Business Card
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       BUTTON RIPPLE EFFECT
    ========================== */

    document.querySelectorAll(".button,.download").forEach(button => {

        button.addEventListener("click", function(e){

            const circle = document.createElement("span");

            const diameter = Math.max(this.clientWidth,this.clientHeight);

            circle.style.width = circle.style.height = diameter + "px";

            circle.style.left = (e.clientX - this.getBoundingClientRect().left - diameter/2) + "px";

            circle.style.top = (e.clientY - this.getBoundingClientRect().top - diameter/2) + "px";

            circle.classList.add("ripple");

            const ripple = this.querySelector(".ripple");

            if(ripple){

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });

    /* ==========================
       FADE ON LOAD
    ========================== */

    document.body.classList.add("loaded");

    /* ==========================
       SCROLL ANIMATION
    ========================== */

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll("section").forEach(section=>{

        observer.observe(section);

    });

    /* ==========================
       SHARE API
    ========================== */

    const shareButton=document.querySelector(".share");

    if(shareButton){

        shareButton.addEventListener("click",async(e)=>{

            e.preventDefault();

            if(navigator.share){

                try{

                    await navigator.share({

                        title:document.title,

                        text:"Velora Carpets",

                        url:window.location.href

                    });

                }catch(err){

                    console.log(err);

                }

            }else{

                navigator.clipboard.writeText(window.location.href);

                alert("Bağlantı panoya kopyalandı.");

            }

        });

    }

    /* ==========================
       EXTERNAL LINKS
    ========================== */

    document.querySelectorAll("a[href^='http']").forEach(link=>{

        link.setAttribute("target","_blank");

        link.setAttribute("rel","noopener");

    });

});

/* ==========================================
   SMALL PARALLAX
========================================== */

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero img");

    if(hero){

        hero.style.transform=`translateY(${window.scrollY*0.2}px) scale(1.05)`;

    }

});

/* ==========================================
   CURRENT YEAR
========================================== */

const footer=document.querySelector("footer p");

if(footer){

    footer.innerHTML=`© ${new Date().getFullYear()} Velora Carpets`;

}