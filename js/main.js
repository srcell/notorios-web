
document.oncontextmenu = function(){
    return false;
}

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

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
    //    console.log(nombre);
       var rutaImagen = $(this).find("img").attr("src");

       $(this).find("figcaption").html("<div><h1 style='color: white;'>" + nombre + "</h1></div>");
       $(this).find("figcaption div").append("<button type='button'; onclick='javascript:cambiar_redes();'><a style='color: black;'>VER MÁS</a></button>");
   });

    //BRANDING REDIRECCIONAMIENTO
    $("#bran figure").append("<figcaption>");

   $("#bran figure").mouseenter(function(){
       $(this).find("figcaption").stop().fadeIn("slow");
   });

   $("#bran figure").mouseleave(function(){
       $(this).find("figcaption").stop().fadeOut("slow");
   });

   $("#bran figure").each(function(){
       var nombre = $(this).find("img").attr("title");
    //    console.log(nombre);
       var rutaImagen = $(this).find("img").attr("src");

       $(this).find("figcaption").html("<div><h1 style='color: white;'>" + nombre + "</h1></div>");
       $(this).find("figcaption div").append("<button type='button'; onclick='javascript:cambiar_branding();'><a style='color: black;'>VER MÁS</a></button>");
   });

   //ALEX DEY REDIRECCIONAMIENTO

      $("#alex figure").append("<figcaption>");
   
      $("#alex figure").mouseenter(function(){
          $(this).find("figcaption").stop().fadeIn("slow");
      });
   
      $("#alex figure").mouseleave(function(){
          $(this).find("figcaption").stop().fadeOut("slow");
      });
   
      $("#alex figure").each(function(){
          var nombre = $(this).find("img").attr("title");
        //   console.log(nombre);
          var rutaImagen = $(this).find("img").attr("src");
   
          $(this).find("figcaption").html("<div><h1 style='color: white;'>" + nombre + "</h1></div>");
          $(this).find("figcaption div").append("<button type='button'; onclick='javascript:cambiar_alex();'><a style='color: black;'>VER MÁS</a></button>");
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



function wtps_juan(){
    location.href="/pages/alex-dey.html"
}



// PARA NO DAR CLIC DERECHO

// window.onscroll = function () {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//     });
// }