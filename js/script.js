let canvas = document.getElementById("snake"); //trazendo o elemento que está no html pelo id snake e transformando neste doc em canvas
let context = canvas.getContext("2d"); //renderiza o desenho do que irá acontecer dentro do canvas
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
}; //cobrinha montada com um array de objeto com uma unica posicao com dir. alto e baixo
let direcao = "right";
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
  context.fillStyle = "black"; //trabalha com o estilo
  context.fillRect(0, 0, 16 * box, 16 * box); //trabalha com x e y + altura e largura
} //desenha e define uma cor

function criarCobrinha() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = "purple";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}
function criarComida () {
  context.fillStyle = "orange"
  context.fillRect(food.x, food.y, box, box)
}
// evento para definir o andamento da cobra durante o jogo
document.addEventListener("keydown", update);

//só muda se for a direcao contraria - quando clicar o eventlistener vai passar como argumento essas  informações 
function update(event){
  if(event.keyCode == 37 && direcao != "right") direcao="left";
  if(event.keyCode == 38 && direcao != "down") direcao="up";
  if(event.keyCode == 39 && direcao != "left") direcao="right";
  if(event.keyCode == 40 && direcao != "down") direcao="down";
}

function iniciarJogo() {
  for(i=1; i< snake.length; i++) {
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval()
      alert('Fim de jogo :(')
    }
  }

  if(snake[0].x > 15 * box && direcao == "right") snake[0].x =0;
  if(snake[0].x < 0 && direcao=="left") snake[0].x = 16 * box;
  if(snake[0].y > 15 * box && direcao =="down") snake[0].y =0;
  if(snake[0].y < 0 && direcao =="up") snake[0].y= 16 * box

  criarBG();
  criarCobrinha();
  criarComida();
  
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //definindo condições de direção para cobrinha
  if(direcao=="right") snakeX += box
  if(direcao =="left") snakeX -= box
  if(direcao == "up") snakeY -= box
  if(direcao =="down") snakeY += box

  //criando e retirando "cabeça" da cobrinha para seguir o jogo
  if (snakeX != food.x || snakeY != food.y){
    snake.pop();
  } else {
    food.x= Math.floor(Math.random() * 15 + 1) * box,
    food.y= Math.floor(Math.random() * 15 + 1) * box
  }
    

  //criando nova cabeça para cobrinha e ela seguir o jogo 
  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead)
}

let jogo = setInterval(iniciarJogo, 100);




