var a;
var b;
var ope;
function init(){
	alert("Pon a prueba mi calculadora");
	//variables
	var resultado = document.getElementById("resultado");
	var reset = document.getElementById('reset');
	var suma = document.getElementById('suma');
	var resta = document.getElementById('resta');
	var multiplicacion = document.getElementById('multiplicacion');
	var divicion = document.getElementById('divicion');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');
 	
 	//eventos
 	uno.onclick = function(e){
 		resultado.textContent = resultado.textContent + "1";
 	}
 			dos.onclick = function(e){
 		resultado.textContent = resultado.textContent + "2";
 	}
 			tres.onclick = function(e){
 		resultado.textContent = resultado.textContent + "3";
 	}
 			cuatro.onclick = function(e){
 		resultado.textContent = resultado.textContent + "4";
 	}
 			cinco.onclick = function(e){
 		resultado.textContent = resultado.textContent + "5";
 	}
 			seis.onclick = function(e){
 		resultado.textContent = resultado.textContent + "6";
 	}
 			siete.onclick = function(e){
 		resultado.textContent = resultado.textContent + "7";
 	}
 			ocho.onclick = function(e){
 		resultado.textContent = resultado.textContent + "8";
 	}
 			nueve.onclick = function(e){
 		resultado.textContent = resultado.textContent + "9";
 	}
 			cero.onclick = function(e){
 		resultado.textContent = resultado.textContent + "0";
 	}

 	reset.onclick = function(e){
 		resetear();
}
	suma.onclick = function(e){

		a = resultado.textContent;
		ope = "+";
		limpiar();
	}
	resta.onclick = function(e){

		a = resultado.textContent;
		ope = "-";
		limpiar();
	}
	multiplicacion.onclick = function(e){

		a = resultado.textContent;
		ope = "*";
		limpiar();
	}
	divicion.onclick = function(e){

		a = resultado.textContent;
		ope = "/";
		limpiar();
	}
igual.onclick = function(e){
		b = resultado.textContent;
		resolver();
	}
}
 function limpiar(){
 	resultado.textContent = "";
 }
 function resetear(){
 	resultado.textContent = "";
 	a = 0;
 	b = 0;
 	ope = "";
 }

 function resolver(){
 	var res = 0;
 	switch(ope){
		case "+":
res = parseFloat(a) + parseFloat(b);
break;

		case "-":
res = parseFloat(a) - parseFloat(b);
break;

		case "*":
res = parseFloat(a) * parseFloat(b);
break;

		case"/":
res = parseFloat(a) / parseFloat(b);
break; 
 	}
 	resetear();
 	resultado.textContent = res;
 }