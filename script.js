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
    location.reload();
}

const changeDirection = e =>{
    if (e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowDown" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowDown" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
}
}

controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset})));

/* COMEÇAR O GAME - INIT GAME */
const initGame = () => {
    if (gameOver) return handleGameOver();
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"`

    /* QUANDO A COBRA SE ALIMENTA */
    if (snakeX === foodX && snakeY === foodY){
        updateFoodPosition();
        snakeBody.push([foodY, foodX]);
        score++;
        highScore = score >= highScore ? score : highScore

        localStorage.setItem("high-score", highScore);
        scoreElement.innerHTML = `Score: ${score}`;
        highScoreElement.innerHTML = `High Score: ${highScore}`;
    }

    snakeX += velocityX;
    snakeY += velocityY;

    for (let i = snakeBody.length - 1; i > 0; i-- ){
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];

    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        return gameOver = true;
    }
}