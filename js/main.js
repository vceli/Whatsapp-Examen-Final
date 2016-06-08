var sms = "";
var i = 0;
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var clonar = null;

$(document).ready(function(){
	// buscador();
	writeText();
	writePerson();
	emociones();
	$("#letrabuscando").on("keyup",buscar);
})


function agregandoSms(sms){
	$(".agregandoLista").append('<p class="'+i+'">'+sms+'<i></i></p><p>'+h+':'+m+'</p>').css({"width":"27.5%","padding-top":"10px","float":"right","background-color":"#DCF8C6"})
}

function writePerson(){
	$(".miembrosChat li").click(function(){
		var texto = $(this).html();
		var photo = $("img",this).attr("src");
		var title5 = $("h5",this).text();
		var sspan = $("span",this).text();
		var parrafo = $("p",this).text();
		$(".mensajeando img").attr("src",photo);
		$(".mensajeando h5").text(title5).css("line-height","46px");
		$(".mensajeando p").hide();
		$(".row.colright ul li").hide(); // borra todo el contenido del chat anterior
		// $(".row.colright ul li").html("");
		// $(".conversaciones").html($(this)[data="'"+valorData+"'"]);
		// $(".conversaciones").html("<li><h6>"+title5+"</h6><p>"+parrafo+"</p><p>"+sspan+"</p><li>");
		$(".conversaciones").html("<li class='user'>"+texto+"</li><li class='agregandoLista'></li>")
		whiteText();
	})
}

// =================================================

function writeText(){
		$("#smsEscrito").change(function(){
		sms = $(this).val();
		i+=1;
		setTimeout(function(){agregandoSms(sms);$("#smsEscrito").val("")},100);
	})
}

// =================================================


var hola ="";
function emociones(){
	$(".icon-insert_emoticon.icommoon2").on("click",function(){$(".emoticones").toggle();
		$("i").click(function(){
			hola=$(this).attr("class");
			$("span i").addClass("hola")
		})
	})
}


// ============= BUSCADOR =====================

function buscar(){
	var tarjetas = $(".tarjeta");
	var tarjetass = $(".tarjeta h5");
	var texto = $("#letrabuscando").val();
	texto = texto.toLowerCase();
	tarjetas.show();
	for(var i=0; i< tarjetas.length;i++){
		var contenido = tarjetass.eq(i).text();
		contenido = contenido.toLowerCase();
		var index = contenido.indexOf(texto);
		if(index == -1){
			tarjetas.eq(i).hide();
		}

	}
}















// function buscador(){

// 	$("#buscando").keyup(function(){

// 		var buscar = $(this).val();
// 		var count = 0;

// 		$(".miembrosChat li h5").each(function(){
// 			if($(this).text().search(new RegExp(buscar,"i")) < 0){
// 				$(this).fadeOut();
// 			}else{
// 				$(this).show();
// 				count++;
// 			}
// 		})


// 	})

// }


// function conversacion(){
// 	$('conversaciones').addClass("new")
// 	$('.conversaciones.new').append("li");
// 	$(".conversaciones.new li").html("hola");
// }

// $(".miembrosChat li")[0]
// $(".miembrosChat li")[data="0"]


// function smsNewChat(){
	
// }







