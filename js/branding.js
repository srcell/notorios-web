document.oncontextmenu = function(){
    return false;
}

function no_scroll(){
    document.getElementById("main-body-page").style.overflow = 'hidden';
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

//========================================================================================//
//========================================================================================//
// Get the modal
var modal = document.getElementById('myModal');
var noscroll = document.getElementById('main-body-page');
//THC//
var img = document.getElementById('thc-modal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    noscroll.style.overflow = "hidden"; 
    modal.style.display = "block";
    modalImg.src = "/img/modal-branding/thc-modal.png";
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
	$('#thc-modal').modal({backdrop: 'static', keyboard: false})  

}
//URIMARE//
var img = document.getElementById('urimare-modal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){ 
    noscroll.style.overflow = "hidden"; 
    modal.style.display = "inline";
    modalImg.src = "/img/modal-branding/urimare-modal.png";
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
//CAST28//
var img = document.getElementById('cast28-modal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    noscroll.style.overflow = "hidden";
    modal.style.display = "block";
    modalImg.src = "/img/modal-branding/cast28-modal.png";
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
//NAITO//
var img = document.getElementById('naito-modal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    noscroll.style.overflow = "hidden";
    modal.style.display = "block";
    modalImg.src = "/img/modal-branding/naito-modal.png";
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
//OHMIODIO//
var img = document.getElementById('ohmiodio-modal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    noscroll.style.overflow = "hidden";
    modal.style.display = "block";
    modalImg.src = "/img/modal-branding/ohmiodio-modal.png";
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
//INEDO//
var img = document.getElementById('inedo-modal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    noscroll.style.overflow = "hidden";
    modal.style.display = "block";
    modalImg.src = "/img/modal-branding/indeo-modal.png";
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
//MAROVAN//
var img = document.getElementById('marovan-modal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    noscroll.style.overflow = "hidden";
    modal.style.display = "block";
    modalImg.src = "/img/modal-branding/marovan-modal.png";
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
//MARIBEL//
var img = document.getElementById('maribel-modal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    noscroll.style.overflow = "hidden";
    modal.style.display = "block";
    modalImg.src = "/img/modal-branding/maribel-modal.png";
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
//YEEBA//
var img = document.getElementById('yeeba-modal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    noscroll.style.overflow = "hidden";
    modal.style.display = "block";
    modalImg.src = "/img/modal-branding/yeeba-modal.png";
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
var div = document.getElementsByClassName("close-out")[0];
var pruebascroll = document.getElementById("main-body-page")[0];

span.onclick = function() { 
    modal.style.display = "none";
    noscroll.style.overflow = "scroll";    
}
div.onclick = function() { 
    modal.style.display = "none";
    noscroll.style.overflow = "scroll";    
}


//========================================================================================//
//========================================================================================//

