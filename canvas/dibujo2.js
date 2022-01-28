var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var j = 0;
var xi, yf;
var colorcito = "blue";


for(j=0; j < lineas; j++)
{
  xi= 10 * j;
  yf= 10 * (j + 1);
  dibujarLinea(colorcito, xi, 0, 300, yf);
  console.log("linea " + j);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
