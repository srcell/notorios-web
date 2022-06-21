$(function(){
   // GALERIA
   $("#carousel-sites figure").append("<figcaption>");

   // show/hide , fadeIn/fadeOut , slideDown/slideUp

   $("#carousel-sites figure").mouseenter(function(){
       $(this).find("figcaption").stop().fadeIn("slow");
   });

   $("#carousel-sites figure").mouseleave(function(){
       $(this).find("figcaption").stop().fadeOut("slow");
   });

   $("#carousel-sites figure").each(function(){
       var nombre = $(this).find("img").attr("title");
       console.log(nombre);
       var rutaImagen = $(this).find("img").attr("src");

       $(this).find("figcaption").html("<div><h1 style='color: white;'>" + nombre + "</h1></div>");
       $(this).find("figcaption div").append("<button type='button'; onclick='javascript:cambiar_branding();'><a>VER MÁS</a></button>");
       //prepend permite agregar un objeto al inicio de otro     

    //    $(this).find("figcaption div i").click(function(){
    //        $("body").append("<div id='fondo-oscuro'>");
    //        $("#fondo-oscuro").append("<img src='" + rutaImagen + "'>");
    //        $("#fondo-oscuro").append("<h3>" + nombre + "</h3>");
    //        $("#fondo-oscuro").click(function(){
    //            $(this).remove();
    //        });
    //    });
   });
});

function cambiar_branding(){
    location.href="/pages/branding.html"
}
function cambiar_alex(){
    location.href="/pages/redes.html"
}
function cambiar_redes(){
    location.href="/pages/alex-dey.html"
}

// window.onscroll = function () {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//     });
// }