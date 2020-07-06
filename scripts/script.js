
var button = document.getElementById("toTop");
button.style.display = "none";
document.querySelector("body").onscroll = function(){
    if (window.scrollY > 150) {
       button.style.display = "block";

    }else{
        button.style.display = "none";
    }
};



//  PARALLAX

function parallax (element, distance, speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;

}

window.addEventListener("scroll", function(){
    var ancho = window.innerWidth;
    if (ancho > 789){
    parallax(".logoo", window.scrollY, 1);
    parallax(".po", window.scrollY, 1);
    console.log(ancho);
    }
});

