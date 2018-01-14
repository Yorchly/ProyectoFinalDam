/* Mi Script */

var datosTarta = [
    {
        value: 47,
        color:"maroon",
        highlight: "red",
        label: "Thriller"
    },
    {
        value: 27,
        color: "purple",
        highlight: "fuchsia",
        label: "Romance"
    },
    {
        value: 26,
        color: "green",
        highlight: "lime",
        label: "Ciencia Ficción"
    },
    {
        value: 25,
        color: "blue",
        highlight: "navy",
        label: "Fantasía"
    },
    {
        value: 23,
        color: "aqua",
        highlight: "teal",
        label: "Aventuras"
    },
    {
        value: 12,
        color: "yellow",
        highlight: "yellowgreen",
        label: "Otros"
    }
];

var opcionesTarta ={
    //Lógico: ¿Mostrar el contorno de los segmentos?
    segmentShowStroke : true,
    //Color CSS: Color del contorno de los segmentos
    segmentStrokeColor : "#fff",
    //Número: Grosor del contorno de los segmentos
    segmentStrokeWidth : 2,
    //Número: Porcentaje del radio interno
    percentageInnerCutout : 0,
    //Número: Nº Frames de la animación
    animationSteps : 30,
    //Cadena: Efecto de la animación
    animationEasing : "easeOutBounce",
    //Lógico: ¿Animación de rotación?
    animateRotate : true,
    //Lógico: ¿Animación de escalado desde el centro?
    animateScale : true,
    //Código: Plantilla de la leyenda
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};


var datosBarra = {
    labels: ["Ciencia Ficción", "Clásicos", "Poesía", "Westerns", "Fantasía", "No-Ficción"],
    datasets: [
        {
            label: "America",   
            fillColor: "blue",
            strokeColor: "blue",
            highlightFill: "rgba(0,255,0,0.5)",
            highlightStroke: "rgba(0,0,0,0.5)",
            data: [1300,1700,450,350,1150,550]
        },
        {
            label: "Europa",   
            fillColor: "red",
            strokeColor: "red",
            highlightFill: "rgba(0,255,0,0.5)",
            highlightStroke: "rgba(0,0,0,0.5)",
            data: [600,1150,200,250,750,650]
        },
        {
            label: "Africa",   
            fillColor: "yellow",
            strokeColor: "yellow",
            highlightFill: "rgba(0,255,0,0.5)",
            highlightStroke: "rgba(0,0,0,0.5)",
            data: [250,425,160,120,300,300]
        },
        {
            label: "Oceanía",   
            fillColor: "green",
            strokeColor: "green",
            highlightFill: "rgba(0,255,0,0.5)",
            highlightStroke: "rgba(0,0,0,0.5)",
            data: [500,850,150,150,600,600]
        },
        {
            label: "Asia",   
            fillColor: "orange",
            strokeColor: "orange",
            highlightFill: "rgba(0,255,0,0.5)",
            highlightStroke: "rgba(0,0,0,0.5)",
            data: [750,1360,300,75,920,480]
        }
    ]
};


var opcionesBarra ={
    //Lógico: ¿Iniciar escala en 0 o valor más bajo?
    scaleBeginAtZero : true,
    //Lógico: ¿Se muestra la rejilla a través de la tabla?
    scaleShowGridLines : true,
    //Color CSS: Color del contorno de la rejilla
    scaleGridLineColor : "rgba(0,0,0,.05)",
    //Número: Grosor de las líneas de la rejilla
    scaleGridLineWidth : 1,
    //Lógico:  ¿Mostrar el contorno de las barras?
    barShowStroke : true,
    //Número: Grosor del contorno de las barras
    barStrokeWidth : 1,
    //Número: Espaciado entre cada uno de los grupos en el eje X
    barValueSpacing : 5,
    //Number: Espaciado entre las series de datos en el eje X
    barDatasetSpacing : 3,
    //Código: Plantilla de la leyenda
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};

//Chart.defaults.global.responsive = true;


function dibujar(){
	
    var ctx1 = document.getElementById("miTarta").getContext("2d");
    var miGraficoTarta = new Chart(ctx1).Pie(datosTarta,opcionesTarta);
    //document.getElementById("leyendaGT").innerHTML = miGraficoTarta.generateLegend();
    
    legend(document.getElementById("leyendaGT"), datosTarta);
  
    var ctx2 = document.getElementById("misBarras").getContext("2d");
    var miGraficoBarras = new Chart(ctx2).Bar(datosBarra,opcionesBarra);
    //document.getElementById("leyendaGB").innerHTML = miGraficoBarras.generateLegend();
  
    legend(document.getElementById("leyendaGB"), datosBarra);
}

