var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xi, yf;
var colorcito = "red";

for(l=0; l < lineas; l++)
{
  xi= 10 * l;
  yf= 300 - (10 * (l + 1));
  dibujarLinea(colorcito, xi, 300, 300, yf);
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
