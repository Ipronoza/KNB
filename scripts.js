/*<div id = 'player_div' class = 'info'></div>
<div id = 'result_div' class = 'info'></div>
<div id = 'opponent_div' class = 'info'></div>
<div id = 'buttons' class = 'buttons'>
    <button id = 'stone' class = 'button'>Камень</button>
    <button id = 'clipper' class = 'button'>Ножницы</button>
    <button id = 'paper' class = 'button'>Бумага</button>
</div>
*/

let playerDiv = document.querySelector('#player_div');
let resultDiv = document.querySelector('.result_div');
let opponentDiv = document.querySelector('#opponent_div');
let resultText = document.querySelector('.result_text');
let smileDiv = document.querySelector('.smile');
let computer;
let countU = 0;
let countPlayer = document.querySelector('.count_player');
let countO = 0;
let countOpponent = document.querySelector('.count_opponent');
let restart = document.querySelector('.restart');

//restart.onclick = window.location.reload();

///////  Камень //////////
document.querySelector('#stone').addEventListener('click', function () {
    stoneFunc();
    opponentFunc();
    showResult();
    playerHandAnimStone();
    OpponentHand();
});


///////  Ножницы //////////
document.querySelector('#clipper').addEventListener('click', function () {
    clipperFunc();
    opponentFunc();
    showResult();
    playerHandAnimClipper();
    OpponentHand();

});


///////  Бумага //////////
document.querySelector('#paper').addEventListener('click', function () {
    paperFunc();
    opponentFunc();
    showResult();
    playerHandAnimPaper();
    OpponentHand();
});


function stoneFunc() {
    setTimeout(function () {
        playerDiv.innerHTML = " ";
    }, 0)
    setTimeout(function () {
        playerDiv.innerHTML = "Камень";
    }, 700)
}

function clipperFunc() {
    setTimeout(function () {
        playerDiv.innerHTML = " ";
    }, 0)
    setTimeout(function () {
        playerDiv.innerHTML = "Ножницы";
    }, 700)
}


function paperFunc() {
    setTimeout(function () {
        playerDiv.innerHTML = " ";
    }, 0)
    setTimeout(function () {
        playerDiv.innerHTML = "Бумага";
    }, 700)
}


function opponentFunc(e) {

    let variants = [
        'Камень',
        'Ножницы',
        'Бумага',
    ];
    let randomIndex = Math.floor(Math.random() * variants.length);
    opponentDiv.innerHTML = variants[randomIndex];
}

function OpponentHand() {
    if (opponentDiv.innerHTML == 'Камень') {
        playerHandAnimStoneM();
    } else if (opponentDiv.innerHTML == 'Ножницы') {
        playerHandAnimClipperM();
    } else if (opponentDiv.innerHTML == 'Бумага') {
        playerHandAnimPaperM();
    }
};


function showResult() {
    setTimeout(function () {
        resultText.innerHTML = " ";
        smileDiv.style.backgroundImage = "none";

    }, 0)



    setTimeout(function () {
        if (playerDiv.innerHTML == opponentDiv.innerHTML) {
            resultText.innerHTML = "Победила дружба";
            smileDiv.style.backgroundImage = "url('ok_smile.png')";
        }
        else if (playerDiv.innerHTML == "Камень" && opponentDiv.innerHTML == "Бумага") {
            resultText.innerHTML = "ПОРАЖЕНИЕ";
            smileDiv.style.backgroundImage = "url('lose_smile.png')";
            countO++;
            countOpponent.innerHTML = countO;
        }
        else if (playerDiv.innerHTML == "Ножницы" && opponentDiv.innerHTML == "Камень") {
            resultText.innerHTML = "ПОРАЖЕНИЕ";
            smileDiv.style.backgroundImage = "url('lose_smile.png')";
            countO++;
            countOpponent.innerHTML = countO;
        }
        else if (playerDiv.innerHTML == "Бумага" && opponentDiv.innerHTML == "Ножницы") {
            resultText.innerHTML = "ПОРАЖЕНИЕ";
            smileDiv.style.backgroundImage = "url('lose_smile.png')";
            countO++;
            countOpponent.innerHTML = countO;
        }

        else if (playerDiv.innerHTML == "Камень" && opponentDiv.innerHTML == "Ножницы") {
            resultText.innerHTML = "ПОБЕДА!";
            smileDiv.style.backgroundImage = "url('win_smile.png')";
            countU++
            countPlayer.innerHTML = countU;
        }
        else if (playerDiv.innerHTML == "Ножницы" && opponentDiv.innerHTML == "Бумага") {
            resultText.innerHTML = "ПОБЕДА!";
            smileDiv.style.backgroundImage = "url('win_smile.png')";
            countU++
            countPlayer.innerHTML = countU;
        }
        else if (playerDiv.innerHTML == "Бумага" && opponentDiv.innerHTML == "Камень") {
            resultText.innerHTML = "ПОБЕДА!";
            smileDiv.style.backgroundImage = "url('win_smile.png')";
            countU++
            countPlayer.innerHTML = countU;
        }


    }, 1500)

};

let handDiv = document.querySelector('.hand_div');

function playerHandAnimStone() {
    setTimeout(function () {
        handDiv.style.backgroundImage = "url('stone.png')";
    }, 0)
    setTimeout(function () {
        handDiv.style.left = '50px'
    }, 100)
    setTimeout(function () {
        handDiv.style.left = '-10px'
    }, 200)
    setTimeout(function () {
        handDiv.style.left = '50px'
    }, 300)
    setTimeout(function () {
        handDiv.style.left = '-10px'
    }, 400)
    setTimeout(function () {
        handDiv.style.left = '50px'
    }, 500)
    setTimeout(function () {
        handDiv.style.left = '0px'
    }, 600)
    setTimeout(function () {
        handDiv.style.backgroundImage = "url('stone.png')";
    }, 700)
}

function playerHandAnimClipper() {
    setTimeout(function () {
        handDiv.style.backgroundImage = "url('stone.png')";
    }, 0)
    setTimeout(function () {
        handDiv.style.left = '50px'
    }, 100)
    setTimeout(function () {
        handDiv.style.left = '-10px'
    }, 200)
    setTimeout(function () {
        handDiv.style.left = '50px'
    }, 300)
    setTimeout(function () {
        handDiv.style.left = '-10px'
    }, 400)
    setTimeout(function () {
        handDiv.style.left = '50px'
    }, 500)
    setTimeout(function () {
        handDiv.style.left = '0px'
    }, 600)
    setTimeout(function () {
        handDiv.style.backgroundImage = "url('clipper.png')";
    }, 700)
}

function playerHandAnimPaper() {
    setTimeout(function () {
        handDiv.style.backgroundImage = "url('stone.png')";
    }, 0)
    setTimeout(function () {
        handDiv.style.left = '50px'
    }, 100)
    setTimeout(function () {
        handDiv.style.left = '-10px'
    }, 200)
    setTimeout(function () {
        handDiv.style.left = '50px'
    }, 300)
    setTimeout(function () {
        handDiv.style.left = '-10px'
    }, 400)
    setTimeout(function () {
        handDiv.style.left = '50px'
    }, 500)
    setTimeout(function () {
        handDiv.style.left = '0px'
    }, 600)
    setTimeout(function () {
        handDiv.style.backgroundImage = "url('paper.png')";
    }, 700)
}

//////////////////

let handDivM = document.querySelector('#m');

function playerHandAnimStoneM() {
    setTimeout(function () {
        handDivM.style.backgroundImage = "url('stoneM.png')";
    }, 0)
    setTimeout(function () {
        handDivM.style.left = '595px'
    }, 100)
    setTimeout(function () {
        handDivM.style.left = '655px'
    }, 200)
    setTimeout(function () {
        handDivM.style.left = '595px'
    }, 300)
    setTimeout(function () {
        handDivM.style.left = '655px'
    }, 400)
    setTimeout(function () {
        handDivM.style.left = '595px'
    }, 500)
    setTimeout(function () {
        handDivM.style.left = '645px'
    }, 600)
    setTimeout(function () {
        handDivM.style.backgroundImage = "url('stoneM.png')";
    }, 700)
}

function playerHandAnimClipperM() {
    setTimeout(function () {
        handDivM.style.backgroundImage = "url('stoneM.png')";
    }, 0)
    setTimeout(function () {
        handDivM.style.left = '595px'
    }, 100)
    setTimeout(function () {
        handDivM.style.left = '655px'
    }, 200)
    setTimeout(function () {
        handDivM.style.left = '595px'
    }, 300)
    setTimeout(function () {
        handDivM.style.left = '655px'
    }, 400)
    setTimeout(function () {
        handDivM.style.left = '595px'
    }, 500)
    setTimeout(function () {
        handDivM.style.left = '645px'
    }, 600)
    setTimeout(function () {
        handDivM.style.backgroundImage = "url('clipperM.png')";
    }, 700)
}

function playerHandAnimPaperM() {
    setTimeout(function () {
        handDiv.style.backgroundImage = "url('stoneM.png')";
    }, 0)
    setTimeout(function () {
        handDivM.style.left = '595px'
    }, 100)
    setTimeout(function () {
        handDivM.style.left = '655px'
    }, 200)
    setTimeout(function () {
        handDivM.style.left = '595px'
    }, 300)
    setTimeout(function () {
        handDivM.style.left = '655px'
    }, 400)
    setTimeout(function () {
        handDivM.style.left = '595px'
    }, 500)
    setTimeout(function () {
        handDivM.style.left = '645px'
    }, 600)
    setTimeout(function () {
        handDivM.style.backgroundImage = "url('paperM.png')";
    }, 700)
}

