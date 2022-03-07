// set date

const date = document.getElementById("date");
date.innerHTML =  new Date().getFullYear();


// close links

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click",function(){
    // linksContainer.classList.toggle("show-links");
    // getBoundingClientRect returns size of an elem and its position relative to the viewport
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight)

    if(containerHeight === 0 ){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
})
const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link");
// fixed navbar

window.addEventListener("scroll", function(){
    // console.log(window.pageYOffset)
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight >  navHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 500){
        toplink.classList.add("show-link")

    }else{
        toplink.classList.remove("show-link");
    }
})

// scroll-links

const scrolllinks = document.querySelectorAll(".scroll-link");
scrolllinks.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
        // navigate to specific links

        const id = e.currentTarget.getAttribute("href").slice(1);
        // console.log(id);
        const element = document.getElementById(id);
        // calc heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;

        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        
        if(!fixedNav){
            position = position - navHeight
        }

        if(navHeight > 82){
            position = position + containerHeight;
        }
        // console.log(position)
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    })
})

