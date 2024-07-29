// 1. Hamburger Menu

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navLinks');
const icon = document.querySelector('i.fa-solid');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    if (icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
})


// 2. Image Carousel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


// 3. Read More (Dr. 1)

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


// 4. Read More (Dr. 2)


function myFunction01() {
    var dots01 = document.getElementById("dots01");
    var moreText01 = document.getElementById("more01");
    var btnText01 = document.getElementById("myBtn01");

    if (dots01.style.display === "none") {
        dots01.style.display = "inline";
        btnText01.innerHTML = "Read more";
        moreText01.style.display = "none";
    } else {
        dots01.style.display = "none";
        btnText01.innerHTML = "Read less";
        moreText01.style.display = "inline";
    }
}



// Toggle Read More in Service Pages: 



var elementsId = [
    {
        dots: "serv-dot-01",
        more: "serv-more-01",
        btn: "servBtn01"
    },
    {
        dots: "serv-dot-02",
        more: "serv-more-02",
        btn: "servBtn02"
    },
    {
        dots: "serv-dot-03",
        more: "serv-more-03",
        btn: "servBtn03"
    },
    {
        dots: "serv-dot-04",
        more: "serv-more-04",
        btn: "servBtn04"
    },
    {
        dots: "serv-dot-05",
        more: "serv-more-05",
        btn: "servBtn05"
    },
    {
        dots: "serv-dot-06",
        more: "serv-more-06",
        btn: "servBtn06"
    },
]


elementsId.forEach(function(ids) {
    var btn = document.getElementById(ids.btn);
    btn.onclick= function() {
        toggleReadMore(ids.dots, ids.more, ids.btn);
    }
});



function toggleReadMore(dotsId, moreId, btnId) {
    var servdots = document.getElementById(dotsId);
    var servmoreText = document.getElementById(moreId);
    var servbtnText = document.getElementById(btnId);

    if (servdots.style.display === "none") {
        servdots.style.display = "inline";
        servbtnText.innerHTML = "Read more";
        servmoreText.style.display = "none";
    } else {
        servdots.style.display = "none";
        servbtnText.innerHTML = "Read less";
        servmoreText.style.display = "inline";
    }
}