//MENU BURGER
$(document).ready(function() {
    $(".menu__burger").click(function(event) {
        event.preventDefault();
        $(".menu__burger").toggleClass("active");
        $(".header__header").toggleClass("active");
        $(".header__box").toggleClass("active");
        $("body").toggleClass("lock");
    })
});
//SAB_MENU
$(document).ready(function() {
    $(".menu1").click(function(event) {
        event.preventDefault();
        $(".menu2, .menu3").removeClass("active");
        $(".menu1").toggleClass("active");
    })
});

$(document).ready(function() {
    $(".menu2").click(function(event) {
        event.preventDefault();
        $(".menu1, .menu3").removeClass("active");
        $(".menu2").toggleClass("active");
    })
});

$(document).ready(function() {
    $(".menu3").click(function(event) {
        event.preventDefault();
        $(".menu1, .menu2").removeClass("active");
        $(".menu3").toggleClass("active");
    })
});
