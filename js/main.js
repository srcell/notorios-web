$(function(){

    //REDES REDIRECCIONAMIENTO

    $("#redes figure").append("<figcaption>");

   // show/hide , fadeIn/fadeOut , slideDown/slideUp

   $("#redes figure").mouseenter(function(){
       $(this).find("figcaption").stop().fadeIn("slow");
   });

   $("#redes figure").mouseleave(function(){
       $(this).find("figcaption").stop().fadeOut("slow");
   });

   $("#redes figure").each(function(){
       var nombre = $(this).find("img").attr("title");
       console.log(nombre);
       var rutaImagen = $(this).find("img").attr("src");

       $(this).find("figcaption").html("<div><h1 style='color: white;'>" + nombre + "</h1></div>");
       $(this).find("figcaption div").append("<button type='button'; onclick='javascript:cambiar_redes();'><a>VER MÁS</a></button>");
   });

//BRANDING REDIRECCIONAMIENTO
    $("#bran figure").append("<figcaption>");

   // show/hide , fadeIn/fadeOut , slideDown/slideUp

   $("#bran figure").mouseenter(function(){
       $(this).find("figcaption").stop().fadeIn("slow");
   });

   $("#bran figure").mouseleave(function(){
       $(this).find("figcaption").stop().fadeOut("slow");
   });

   $("#bran figure").each(function(){
       var nombre = $(this).find("img").attr("title");
       console.log(nombre);
       var rutaImagen = $(this).find("img").attr("src");

       $(this).find("figcaption").html("<div><h1 style='color: white;'>" + nombre + "</h1></div>");
       $(this).find("figcaption div").append("<button type='button'; onclick='javascript:cambiar_branding();'><a>VER MÁS</a></button>");
   });

   //ALEX DEY REDIRECCIONAMIENTO

      $("#alex figure").append("<figcaption>");

      // show/hide , fadeIn/fadeOut , slideDown/slideUp
   
      $("#alex figure").mouseenter(function(){
          $(this).find("figcaption").stop().fadeIn("slow");
      });
   
      $("#alex figure").mouseleave(function(){
          $(this).find("figcaption").stop().fadeOut("slow");
      });
   
      $("#alex figure").each(function(){
          var nombre = $(this).find("img").attr("title");
          console.log(nombre);
          var rutaImagen = $(this).find("img").attr("src");
   
          $(this).find("figcaption").html("<div><h1 style='color: white;'>" + nombre + "</h1></div>");
          $(this).find("figcaption div").append("<button type='button'; onclick='javascript:cambiar_alex();'><a>VER MÁS</a></button>");
      });

});

function cambiar_branding(){
    location.href="/pages/branding.html"
}
function cambiar_alex(){
    location.href="/pages/alex-dey.html"
}
function cambiar_redes(){
    location.href="/pages/redes.html"
}

// window.onscroll = function () {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//     });
// }