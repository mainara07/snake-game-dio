let canvas = document.getElementById("snake"); //trazendo o elemento que está no html pelo id snake e transformando neste doc em canvas
let context = canvas.getContext("2d"); //renderiza o desenho do que irá acontecer dentro do canvas
let box = 32;

function criarBG() {
  context.fillStyle = "lightgreen"; //trabalha com o estilo
  context.fillRect(0, 0, 16 * box, 16 * box); //trabalha com x e y + altura e largura 
} //desenha e define uma cor 

criarBG();
