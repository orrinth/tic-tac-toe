const intro = document.querySelector(".intro");
const playbtn = document.getElementById("play-game");

const h1 = document.getElementById("turn");

const tr1td1 = document.getElementById("tr1td1");
const tr1td2 = document.getElementById("tr1td2");
const tr1td3 = document.getElementById("tr1td3");
const tr2td1 = document.getElementById("tr2td1");
const tr2td2 = document.getElementById("tr2td2");
const tr2td3 = document.getElementById("tr2td3");
const tr3td1 = document.getElementById("tr3td1");
const tr3td2 = document.getElementById("tr3td2");
const tr3td3 = document.getElementById("tr3td3");

const overlay = document.querySelector(".overlay");
const overlayH1 = document.querySelector(".overlay h1");
const playAgainBtn = document.getElementById("play-again");
const mainMenuBtn = document.getElementById("main-menu");

let player1Turn = true;
let player2Turn = false;

let timesCirclesArr = [];
let allDisabledArr = [];

let mainMenuClicked = false;

function lockIn() {
    tr1td1.disabled = true;
    tr1td2.disabled = true;
    tr1td3.disabled = true;

    tr2td1.disabled = true;
    tr2td2.disabled = true;
    tr2td3.disabled = true;

    tr3td1.disabled = true;
    tr3td2.disabled = true;
    tr3td3.disabled = true;

    h1.textContent = "Game Completed";
}

function unlock() {
    tr1td1.disabled = false;
    tr1td2.disabled = false;
    tr1td3.disabled = false;

    tr2td1.disabled = false;
    tr2td2.disabled = false;
    tr2td3.disabled = false;

    tr3td1.disabled = false;
    tr3td2.disabled = false;
    tr3td3.disabled = false;

    h1.textContent = "Player One's Turn";
}

function fillSquare() {
    if (player1Turn) {
        this.innerHTML = '<i class="fas fa-times"></i>';
        this.className = "times";
        this.disabled = true;

        timesCirclesArr.push(this);
        allDisabledArr.push(this.disabled);

        player1Turn = false;
        player2Turn = true;
        h1.textContent = "Player Two's Turn";

    } else if (player2Turn) {
        this.innerHTML = '<i class="far fa-circle"></i>';
        this.className = "circle";
        this.disabled = true;

        timesCirclesArr.push(this);
        allDisabledArr.push(this.disabled);

        player1Turn = true;
        player2Turn = false;
        h1.textContent = "Player One's Turn";
    }
    
    if (tr1td1.className == "times" && tr1td2.className == "times" && tr1td3.className == "times") {
        overlayFinalTimes();
        lockIn();
        tr1td1.firstChild.classList.add("color-win");
        tr1td2.firstChild.classList.add("color-win");
        tr1td3.firstChild.classList.add("color-win");

    } else if (tr2td1.className == "times" && tr2td2.className == "times" && tr2td3.className == "times") {
        overlayFinalTimes();
        lockIn();
        tr2td1.firstChild.classList.add("color-win");
        tr2td2.firstChild.classList.add("color-win");
        tr2td3.firstChild.classList.add("color-win");

    } else if (tr3td1.className == "times" && tr3td2.className == "times" && tr3td3.className == "times") {
        overlayFinalTimes();
        lockIn();
        tr3td1.firstChild.classList.add("color-win");
        tr3td2.firstChild.classList.add("color-win");
        tr3td3.firstChild.classList.add("color-win");

    } else if (tr1td1.className == "circle" && tr1td2.className == "circle" && tr1td3.className == "circle") {
        overlayFinalCircle();
        lockIn();
        tr1td1.firstChild.classList.add("color-win");
        tr1td2.firstChild.classList.add("color-win");
        tr1td3.firstChild.classList.add("color-win");

    } else if (tr2td1.className == "circle" && tr2td2.className == "circle" && tr2td3.className == "circle") {
        overlayFinalCircle();
        lockIn();
        tr2td1.firstChild.classList.add("color-win");
        tr2td2.firstChild.classList.add("color-win");
        tr2td3.firstChild.classList.add("color-win");

    } else if (tr3td1.className == "circle" && tr3td2.className == "circle" && tr3td3.className == "circle") {
        overlayFinalCircle();
        lockIn();
        tr3td1.firstChild.classList.add("color-win");
        tr3td2.firstChild.classList.add("color-win");
        tr3td3.firstChild.classList.add("color-win");

    } else if (tr1td1.className == "times" && tr2td1.className == "times" && tr3td1.className == "times") {
        overlayFinalTimes();
        lockIn();
        tr1td1.firstChild.classList.add("color-win");
        tr2td1.firstChild.classList.add("color-win");
        tr3td1.firstChild.classList.add("color-win");
        
    } else if (tr1td2.className == "times" && tr2td2.className == "times" && tr3td2.className == "times") {
        overlayFinalTimes();
        lockIn();
        tr1td2.firstChild.classList.add("color-win");
        tr2td2.firstChild.classList.add("color-win");
        tr3td2.firstChild.classList.add("color-win");

    } else if (tr1td3.className == "times" && tr2td3.className == "times" && tr3td3.className == "times") {
        overlayFinalTimes();
        lockIn();
        tr1td3.firstChild.classList.add("color-win");
        tr2td3.firstChild.classList.add("color-win");
        tr3td3.firstChild.classList.add("color-win");
        
    } else if (tr1td1.className == "circle" && tr2td1.className == "circle" && tr3td1.className == "circle") {
        overlayFinalCircle();
        lockIn();
        tr1td1.firstChild.classList.add("color-win");
        tr2td1.firstChild.classList.add("color-win");
        tr3td1.firstChild.classList.add("color-win");

    } else if (tr1td2.className == "circle" && tr2td2.className == "circle" && tr3td2.className == "circle") {
        overlayFinalCircle();
        lockIn();
        tr1td2.firstChild.classList.add("color-win");
        tr2td2.firstChild.classList.add("color-win");
        tr3td2.firstChild.classList.add("color-win");

    } else if (tr1td3.className == "circle" && tr2td3.className == "circle" && tr3td3.className == "circle") {
        overlayFinalCircle();
        lockIn();
        tr1td3.firstChild.classList.add("color-win");
        tr2td3.firstChild.classList.add("color-win");
        tr3td3.firstChild.classList.add("color-win");

    } else if (tr1td1.className == "times" && tr2td2.className == "times" && tr3td3.className == "times") {
        overlayFinalTimes();
        lockIn();
        tr1td1.firstChild.classList.add("color-win");
        tr2td2.firstChild.classList.add("color-win");
        tr3td3.firstChild.classList.add("color-win");

    } else if (tr1td3.className == "times" && tr2td2.className == "times" && tr3td1.className == "times") {
        overlayFinalTimes();
        lockIn();
        tr1td3.firstChild.classList.add("color-win");
        tr2td2.firstChild.classList.add("color-win");
        tr3td1.firstChild.classList.add("color-win");

    } else if (tr1td1.className == "circle" && tr2td2.className == "circle" && tr3td3.className == "circle") {
        overlayFinalCircle();
        lockIn();
        tr1td1.firstChild.classList.add("color-win");
        tr2td2.firstChild.classList.add("color-win");
        tr3td3.firstChild.classList.add("color-win");

    } else if (tr1td3.className == "circle" && tr2td2.className == "circle" && tr3td1.className == "circle") {
        overlayFinalCircle();
        lockIn();
        tr1td3.firstChild.classList.add("color-win");
        tr2td2.firstChild.classList.add("color-win");
        tr3td1.firstChild.classList.add("color-win");

    } else {
        if (allDisabledArr.length == 9) {
            lockIn();
            overlayFinal();
        }
    }
}

function overlayFinalTimes() {
    overlay.classList.add("overlay-intro");
    overlayH1.textContent = "Player One Wins!";
}

function overlayFinalCircle() {
    overlay.classList.add("overlay-intro");
    overlayH1.textContent = "Player Two Wins!";
}

function overlayFinal() {
    overlay.classList.add("overlay-intro");
    overlayH1.textContent = "Rats!";
}

function playGame() {
    intro.classList.remove("intro-fade-in");
    intro.classList.add("intro-fade-out");

    if (mainMenuClicked) {
        intro.classList.add("intro-fade-in-again");
        mainMenuClicked = false;
        playAgain();
    }
}

function overlayReset() {
    overlay.classList.remove("overlay-intro");
    overlay.classList.remove("overlay-fade-out");
    overlay.classList.remove("overlay-intro-again");
    overlay.classList.remove("overlay-fade-out-again");
}

function playAgain() {
    overlayReset();
    for (const refreshSquare of timesCirclesArr) {
        refreshSquare.innerHTML = "";
        refreshSquare.disabled = false;
        refreshSquare.className = "";
        h1.className = "";
    }
    unlock();
    player1Turn = true;
    player2Turn = false;
    timesCirclesArr = [];
    allDisabledArr = [];

    overlayH1.textContent = "";
}

function mainMenu() {
    mainMenuClicked = true;
    intro.classList.remove("intro-fade-in-again");
    intro.classList.remove("intro-fade-out");
    intro.classList.add("intro-fade-in");
    overlay.classList.add("overlay-fade-out");
}


tr1td1.addEventListener("click", fillSquare);
tr1td2.addEventListener("click", fillSquare);
tr1td3.addEventListener("click", fillSquare);
tr2td1.addEventListener("click", fillSquare);
tr2td2.addEventListener("click", fillSquare);
tr2td3.addEventListener("click", fillSquare);
tr3td1.addEventListener("click", fillSquare);
tr3td2.addEventListener("click", fillSquare);
tr3td3.addEventListener("click", fillSquare);
playbtn.addEventListener("click", playGame);
playAgainBtn.addEventListener("click", playAgain);
mainMenuBtn.addEventListener("click", mainMenu);
