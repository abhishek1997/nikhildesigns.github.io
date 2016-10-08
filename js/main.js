$(document).ready(function(){
    //hamburger menu and overlay
    $('.trigger-menu').click(function(){
            $("#cd-lateral-nav").css({"visibility":"visible","pointer-events":"initial"});
            $("#cd-lateral-nav").css("transform","translateX(0px)");
            $(".overlay").css({"display":"block","opacity":"0.6"});
    });
    $(".exit").click(function(){
        $("#cd-lateral-nav").css({"visibility":"hidden","pointer-events":"initial"});
        $("#cd-lateral-nav").css("transform","translateX(300px)");
        $(".overlay").css({"display":"none","opacity":"0"});
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1){  
            $('header').addClass("sticky");
            $(".scroll-btn").removeClass("hidden-md");
            $(".scroll-btn").removeClass("hidden-lg");
        }
    else{
        $('header').removeClass("sticky");
        $(".scroll-btn").addClass("hidden-md");
        $(".scroll-btn").addClass("hidden-lg");
        }
    });
}
);

