$(document).ready(function(){
    //hamburger menu and overlay
    $('.trigger-menu').click(function(){
            $("#cd-lateral-nav").css({"visibility":"visible"});
            $("#cd-lateral-nav").css("transform","translateX(0px)");
            $(".overlay").css({"display":"block","opacity":"0.6"});
    });
    $(".links").click(function(){
        $("#cd-lateral-nav").css({"visibility":"hidden"});
        $("#cd-lateral-nav").css("transform","translateX(300px)");
        $(".overlay").css({"display":"none","opacity":"0"});
    });
    $(".exit").click(function(){
        $("#cd-lateral-nav").css({"visibility":"hidden"});
        $("#cd-lateral-nav").css("transform","translateX(300px)");
        $(".overlay").css({"display":"none","opacity":"0"});
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1){  
            $('header').addClass("sticky");
            $(".scroll-btn").removeClass("hidden-md");
            $(".scroll-btn").removeClass("hidden-lg");
            $(".brand").attr("src","images/logo.png");
            $(".fa-bars").css("color","#333");
        }
    else{
        $('header').removeClass("sticky");
        $(".scroll-btn").addClass("hidden-md");
        $(".scroll-btn").addClass("hidden-lg");
        $(".brand").attr("src","images/logo_white.png");
        $(".fa-bars").css("color","#fff");
        }
    });
    $('.cover').particleground({
        dotColor: '#5cbdaa',
        lineColor: '#5cbdaa'
    });
    //smooth scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

