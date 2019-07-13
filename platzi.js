var teclas = {
UP: 40,
DOWN: 38,
LEFT: 37,
RIGHT: 39,
};


var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);
var w = 150;
var z = 150;

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
}
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}; 


var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image ();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
    if (cerdo.cargaOK)
      papel.drawImage(cerdo.imagen, w,z);
  }
}
function moverCerdo(evento)
{
  var mov = 1;
   switch (evento.keyCode) {
        case teclas.UP:
          moverCerdo(cerdo.imagen, w, z+ mov, w, z, papel);
          z = z + mov;
          break;
        case teclas.DOWN:
        moverCerdo(cerdo.imagen, w, z- mov, w, z, papel);
        z = z - mov;
        break;
      }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

