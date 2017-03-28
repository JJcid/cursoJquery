$("nav#botonera ul li a").click(function(e){

    e.preventDefault();
    var href = $(this).attr("href");

    $(href).animatescroll({
        easing:"easeOutBack",
        scrollSpeed:2000
    });

});