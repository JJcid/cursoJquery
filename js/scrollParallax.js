$(window).scroll(function () { 
    
    var posY = window.pageYOffset;

    $('#bloque2').css({"top": -180 - posY / 3 + 'px'});
    $('#cristiano').css({"top": -250 + posY / 5 + 'px'});
    $('#grupos').css({"margin-left": -100 + posY / 3.3 + '%'});

    //Efecto de entrada de ventana de grupos
    //y centrado auto

    if(posY > $("#bloque2").offset().top){

        $("#grupos").css({"margin":"auto"});

    }

     //Efecto de entrada de ventana de estadios
    //y centrado auto

    $('#estadios').css({"margin-left": 200 - posY / 5.7 + '%'});

    if(posY > $("#bloque3").offset().top){

        $("#estadios").css({"margin":"auto"});

    }

});