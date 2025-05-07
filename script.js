/* PLAYBOARD = TELA |TABULEIRO */
/* cONTAINER ONDE A COBRA E A COMIDA SERAO RENDERIZADAS */
const playBoard = document.querySelector(".play-board");
/* PONTUAÇÃO ATUAL O JOGADOR */
const scoreElement = document.querySelector(".score");
/* RECORD (MAIOR PONTUAÇÃO) */ 
const highScoreElement = document.querySelector(".high-score");
/* CONTROLE DE MOVIMENTO */
/* SELECIONA OS ELEMENTOS <i> icones botoes DEVICES MOBILE */
const controls = document.querySelectorAll(".controls.i");

/* CADASTRO DE VARIAVEIS */
/*VARIAVEIS BOLEANA QUE INICA TERMINO DO JOGO*/
let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

let highScore = localStorage.getItem("high-score") || 0;

const updateFoodPosition = () => 
{
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}
/* FUNÇÃO PARA LIDAR COM O FIM DE JOGO */
/* função handleGameOver =  */
const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over!");
    location.reload
}