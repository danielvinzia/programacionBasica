var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "orange";

for(l=0; l < lineas; l++)
{
  yi= 300 - (10 * l);
  xf= 10 * (l +1);
  dibujarLinea(colorcito, 0, yi, xf, 0);
  console.log("linea " + l);
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
