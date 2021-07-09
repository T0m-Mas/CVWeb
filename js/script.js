"use strict";

var formacion_btn = document.getElementById("formacion_btn");
var complementarios_btn = document.getElementById("complementarios_btn");

formacion_btn.onclick = function(){
	if(document.getElementById("formacion+").className == "hide"){
		document.getElementById("formacion+").className = "show"
	}else{
		document.getElementById("formacion+").className = "hide"
	}
}
complementarios_btn.onclick = function(){
	if(document.getElementById("complementarios+").className == "hide"){
		document.getElementById("complementarios+").className = "show"
	}else{
		document.getElementById("complementarios+").className = "hide"
	}
}