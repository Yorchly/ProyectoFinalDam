var stage;
var tamanio;
var bitmap;
var puntuacion = 0;
var numImagen = 1;
var sprite;
     
function inicializar() {
	stage = new createjs.Stage("escenario");
	stage.removeAllChildren();
	stage.removeAllEventListeners("click");
   	cargarImagen();
   	cargarPregunta();
}

function cargarImagen()
{
	var img = new Image();
	switch(numImagen){
		case 1:
			img.src = "imagenes/juego/batmanDarkKnight.jpeg";
			break;
		case 2:
			img.src = "imagenes/juego/batmanYearOne.jpg";
			break;
		case 3:
			img.src = "imagenes/juego/civilwar.jpg";
			break;
		case 4:
			img.src = "imagenes/juego/watchmen.jpg";
			break;
		case 5:
			img.src = "imagenes/juego/V.jpg";
			break;
		case 6:
			img.src = "imagenes/juego/batmanKillingJoke.jpeg";
			break;
	}
	img.onload = function() {
		bitmap = new createjs.Bitmap(img);
		bitmap.setTransform(100,10, 0.35, 0.3);
		stage.addChild(bitmap);
		stage.update();
	}
}

function cargarPregunta()
{
	//stage = new createjs.Stage("escenario");
	stage.enableMouseOver(10);
	var pregunta = new createjs.Text("¿A qué cómic pertenece esta imagen?", "34px Arial", "blue");
	var resp1 = new createjs.Text("A) Batman: Dark Knight Returns", "34px Arial", "yellow");
	var resp2 = new createjs.Text("B) Civil War", "34px Arial", "yellow");
	var resp3 = new createjs.Text("C) Watchmen", "34px Arial", "yellow");
	var resp4 = new createjs.Text("D) V de Vendetta", "34px Arial", "yellow");
	var resp5 = new createjs.Text("E) Batman: Year One", "34px Arial", "yellow");
	var resp6 = new createjs.Text("F) Batman: Killing Joke", "34px Arial", "yellow");
	pregunta.x=100;
	pregunta.y=300;
	resp1.x = 100;
	resp1.y = 350;
	resp1.alpha = 0.5;
	resp2.x = 100;
	resp2.y = 400;
	resp2.alpha = 0.5;
	resp3.x = 100;
	resp3.y = 450;
	resp3.alpha = 0.5;
	resp4.x = 600;
	resp4.y = 350;
	resp4.alpha = 0.5;
	resp5.x = 600;
	resp5.y = 400;
	resp5.alpha = 0.5;
	resp6.x = 600;
	resp6.y = 450;
	resp6.alpha = 0.5;

	//Añade hit area a las respuestas.
	var hit = new createjs.Shape();
	var hit1 = new createjs.Shape();
	var hit2 = new createjs.Shape();
	var hit3 = new createjs.Shape();
	var hit4 = new createjs.Shape();
	var hit5 = new createjs.Shape();
	hit.graphics.beginFill("#000").drawRect(0, 0, resp1.getMeasuredWidth(), resp1.getMeasuredHeight());
	resp1.hitArea = hit;
	hit1.graphics.beginFill("#000").drawRect(0, 0, resp2.getMeasuredWidth(), resp2.getMeasuredHeight());
	resp2.hitArea = hit1;
	hit2.graphics.beginFill("#000").drawRect(0, 0, resp3.getMeasuredWidth(), resp3.getMeasuredHeight());
	resp3.hitArea = hit2;
	hit3.graphics.beginFill("#000").drawRect(0, 0, resp4.getMeasuredWidth(), resp4.getMeasuredHeight());
	resp4.hitArea = hit3;
	hit4.graphics.beginFill("#000").drawRect(0, 0, resp5.getMeasuredWidth(), resp5.getMeasuredHeight());
	resp5.hitArea = hit4;
	hit5.graphics.beginFill("#000").drawRect(0, 0, resp6.getMeasuredWidth(), resp6.getMeasuredHeight());
	resp6.hitArea = hit5;
   
	resp1.on("mouseover", handleInteraction);
	resp1.on("mouseout", handleInteraction);
	resp2.on("mouseover", handleInteraction);
	resp2.on("mouseout", handleInteraction);
	resp3.on("mouseover", handleInteraction);
	resp3.on("mouseout", handleInteraction);
	resp4.on("mouseover", handleInteraction);
	resp4.on("mouseout", handleInteraction);
	resp5.on("mouseover", handleInteraction);
	resp5.on("mouseout", handleInteraction);
	resp6.on("mouseover", handleInteraction);
	resp6.on("mouseout", handleInteraction);

	switch(numImagen)
	{
		case 1:
			resp1.addEventListener("click", acierto);
			resp2.addEventListener("click", fallo);
			resp3.addEventListener("click", fallo);
			resp4.addEventListener("click", fallo);
			resp5.addEventListener("click", fallo);
			resp6.addEventListener("click", fallo);
			break;
		case 2:
			resp1.addEventListener("click", fallo);
			resp2.addEventListener("click", fallo);
			resp3.addEventListener("click", fallo);
			resp4.addEventListener("click", fallo);
			resp5.addEventListener("click", acierto);
			resp6.addEventListener("click", fallo);
			break;
		case 3:
			resp1.addEventListener("click", fallo);
			resp2.addEventListener("click", acierto);
			resp3.addEventListener("click", fallo);
			resp4.addEventListener("click", fallo);
			resp5.addEventListener("click", fallo);
			resp6.addEventListener("click", fallo);
			break;
		case 4:
			resp1.addEventListener("click", fallo);
			resp2.addEventListener("click", fallo);
			resp3.addEventListener("click", acierto);
			resp4.addEventListener("click", fallo);
			resp5.addEventListener("click", fallo);
			resp6.addEventListener("click", fallo);
			break;
		case 5:
			resp1.addEventListener("click", fallo);
			resp2.addEventListener("click", fallo);
			resp3.addEventListener("click", fallo);
			resp4.addEventListener("click", acierto);
			resp5.addEventListener("click", fallo);
			resp6.addEventListener("click", fallo);
			break;
		case 6:
			resp1.addEventListener("click", fallo);
			resp2.addEventListener("click", fallo);
			resp3.addEventListener("click", fallo);
			resp4.addEventListener("click", fallo);
			resp5.addEventListener("click", fallo);
			resp6.addEventListener("click", acierto);
			break;
	}
    stage.addChild(pregunta, resp1, resp2, resp3, resp4, resp5, resp6);
    stage.update();
}


function handleInteraction(event) {
    event.target.alpha = (event.type == "mouseover") ? 1 : 0.5; 
}

function acierto(event){
	puntuacion++;
	if(numImagen == 6)
		mostrarPuntuacion();

	else{
		stage.removeChild(bitmap);
		console.log('Aviso consola: ¡Has pulsado en el texto! ACIERTO');
		numImagen++;
		
		cargarImagen();
   		cargarPregunta();
	}
}


function fallo(event){
	if(numImagen == 6)
		mostrarPuntuacion();
	else{
		stage.removeChild(bitmap);
		numImagen++;
		cargarImagen();
	   	cargarPregunta();
		console.log('Aviso consola: ¡Has pulsado en el texto! FALLO');
	}
}

function mostrarPuntuacion() {
	stage = new createjs.Stage("escenario");
	res1 = new createjs.Text("HAS ACERTADO " + puntuacion +" FOTOGRAFÍAS DE 6", "34px Arial", "#000000");
	res1.x=60;
	res1.y=100;

	if(puntuacion < 2) {
		res2 = new createjs.Text("¡SIGUE INTENTÁNDOLO!", "34px Arial", "#000000");
		res2.x = 175;
		res2.y = 150;
	}
	if(puntuacion >= 2 && puntuacion < 4) {
		res2 = new createjs.Text("¡NO ESTÁ NADA MAL!", "34px Arial", "#000000");
		res2.x = 200;
		res2.y = 150;
	}	
	if(puntuacion >= 4 && puntuacion < 6) {
		res2 = new createjs.Text("¡CASI LO TIENES!", "34px Arial", "#000000");
		res2.x = 230;
		res2.y = 150;
	}
	if(puntuacion == 6) { 
		res2 = new createjs.Text("¡FELICIDADES, HAS ACERTADO TODAS!", "34px Arial", "#000000");
		res2.x = 45;
		res2.y = 150;	
	}		

	stage.addChild(res1, res2);
	stage.update();
}