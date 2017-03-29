$(window).load(function(){

    $("#preload").delay(350).fadeOut("slow");
    $("body").css({"overflow-y":"scroll"});

});

var cargaObj = $("img");
var numCarga = 0;
var porcionPorcentaje = 0;

for(var i = 0; i < cargaObj.length; i++){
    
    $(cargaObj[i]).load(function(){

        numCarga++;
        var porcionPorcentaje = 100 / cargaObj.length;

        $("#porcentajeCarga").html(parseInt(porcionPorcentaje * numCarga) + " %");
        $("#rellenoCarga").css({"width" : porcionPorcentaje * numCarga + "%"});

    });

}