$("nav#botonesGrupo ul li").click(function(){

    $("#grupos").animate({height:0}, 500, "easeInBack");
    $("#grupos").animate({width:0},500, "easeInBack");
    $("#grupos").animate({width:770},600, "easeOutBack");
    $("#grupos").animate({height:400},800, "easeOutBounce");
    
    var enlace = $(this).attr("enlace");

    $("#grupos img").hide(300);
    $(enlace).delay(500).show(100);

});