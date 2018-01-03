function iniciar()
{
	play = document.getElementById("botonPlay");
	parar = document.getElementById("botonStop");
	audio = document.getElementById("botonAudioSi");
	pelicula = document.getElementById("miPelicula");
	barra = document.getElementById("barra");
	barra.largoBarra = 500;
	barraProgreso = document.getElementById("barraProgreso");
	

	play.addEventListener("click", playOPausa, false);
	parar.addEventListener("click", stop, false);
	audio.addEventListener("click", sonar, false);
	barra.addEventListener("click", clickEnBarra, false);
}

function playOPausa()
{
	if(pelicula.paused || pelicula.ended)
	{
		pelicula.play();
		play.src = "imagenes/pausa.png";
		actualizarBarra = setInterval(actualizar, 500);
	}

	else
	{
		pelicula.pause();
		play.src = "imagenes/play.png";
		window.clearInterval(actualizarBarra);
	}
}

function actualizar()
{
	if(pelicula.ended)
	{
		barraProgreso.style.width = "0px";
		play.src = "imagenes/play.png";
		window.clearInterval(actualizarBarra);
	}
	else
	{
		var largo = parseInt((pelicula.currentTime / pelicula.duration) * barra.largoBarra);
		barraProgreso.style.width = largo + "px";
	}
}

function clickEnBarra(evento)
{
	if(!pelicula.paused && !pelicula.ended)
	{
		var ratonX = evento.pageX - barra.offsetLeft;
		barraProgreso.style.width = ratonX + "px";
		pelicula.currentTime = (ratonX / barra.largoBarra) * pelicula.duration;
	}
}

function stop()
{
	pelicula.pause();
	play.src = "imagenes/play.png";
	pelicula.currentTime = 0;
	barraProgreso.style.width = "0px";
}

function sonar()
{
	if (!pelicula.muted)
	{
		pelicula.muted = true;
		audio.src = "imagenes/audiono.png"
	}
	else
	{
		pelicula.muted = false;
		audio.src = "imagenes/audiosi.png";	
	}
}

window.addEventListener("load", iniciar, false);
