//2016 julio 19
//taller aaron
//lienzo de un color solido y elipse que siga al mouse
var diametro;
// luego de declarar, podemos dar valor
//asignar significa darle valor a la variable
//se puede hacer cuantas veces quiera
//la valor siempre tendrá valor actual
//que va a ser igual a la ultima asignacion
//DECLARAR SOLO UNA VEZ



diametro=100;
//manera corta de declarar y asignar un valor a la variable
var x=100;
//asignarle otro valor
x=50;


//funcion set up, corre una vez y al principio
function setup() {
  //crea un lienzo donde dibujar
  //createCanvas)(dimensionHor, dimensionVer);
  createCanvas(800, 600);
  //pinta el fondo del lienzo
  //background(red, green, blue);
  background(0, 255,20);

}
//funcion draw, corre despues de setup, 60 veces por segundo
function draw() {
  
 //defino el estilo de la elipse
 estiloElipse();
  
  
  //elipse en el lienzo
  //ellipse(posHorizontal, posVertical, widhth, height);
  
  ellipse(mouseX, mouseY, 100, 100);
  }
  //mousePressed()se ejecuta cuando
  //el mouse está presionado
  function mousePressed(){
    background(0,255,0);
    
  }
  function mouseReleased (){
    text("kopf", mouseX, mouseY);
  }
  
  // declaro funcion estiloElipse
  // elige el pincel para crear Elipse
  
  
  function estiloElipse(){
    
   //configuracion de dibujo de la elipse
  //stroke elige el color del borde
  //stroke admite un color RGB
  stroke(255,0,255)
  
  
   //strokeWeight() determina el grosor del borde
   //strokeWeight(px);
  strokeWeight(5)
  
  //fill()elige el color del relleno de la figura
  //fill(R,G,B);
  fill(0,0,255);  
  //declaro triangulo (x1, y1, x2, y2, x3, y3)
  triangle (0, 0, 0, height, mouseX, mouseY)
  
}
  
  
  
  
  
  
  