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
let resultDiv = document.querySelector('#result_div');
let opponentDiv = document.querySelector('#opponent_div');
let computer;
//const stoneBtn = document.querySelector('#stone');
//const clipperBtn = document.querySelector('#clipper');
//const paperBtn = document.querySelector('#paper');

///////  Камень //////////
document.querySelector('#stone').addEventListener('click', function(){
    stoneFunc();
    opponentFunc();
    showResult();
});

function stoneFunc() {
    console.log('Игрок: ' + this.id);
    playerDiv.innerHTML = "Камень";
}

///////  Ножницы //////////
document.querySelector('#clipper').addEventListener('click', function(){
    clipperFunc();
    opponentFunc();
    showResult();
});

function clipperFunc() {
    console.log('Игрок: ' + this.id);
    playerDiv.innerHTML = "Ножницы";
}


///////  Бумага //////////

document.querySelector('#paper').addEventListener('click', function(){
    paperFunc();
    opponentFunc();
    showResult();
});

function paperFunc() {
    console.log('Игрок: ' + this.id);
    playerDiv.innerHTML = "Бумага";
}


function opponentFunc(e) {
    setTimeout(function () {
        let recomendations = [
            'Камень',
            'Ножницы',
            'Бумага',
        ];
        let randomIndex = Math.floor(Math.random() * recomendations.length);
        opponentDiv.innerHTML = recomendations[randomIndex];
        console.log(opponentDiv.innerHTML);
    }, 1000)
}


function showResult() {
    setTimeout(function () {
    if (playerDiv.innerHTML == opponentDiv.innerHTML) {
        resultDiv.innerHTML = "Победила дружба";
    } 
    else if(playerDiv.innerHTML =="Камень" && opponentDiv.innerHTML =="Бумага"){
        resultDiv.innerHTML ="ПОРАЖЕНИЕ :(";
    } 
    else if(playerDiv.innerHTML =="Ножницы" && opponentDiv.innerHTML =="Камень"){
        resultDiv.innerHTML ="ПОРАЖЕНИЕ :(";
    } 
    else if(playerDiv.innerHTML =="Бумага" && opponentDiv.innerHTML =="Ножницы"){
        resultDiv.innerHTML ="ПОРАЖЕНИЕ :(";
    } 

    else if(playerDiv.innerHTML =="Камень" && opponentDiv.innerHTML =="Ножницы"){
        resultDiv.innerHTML ="ПОБЕДА!";
    } 
    else if(playerDiv.innerHTML =="Ножницы" && opponentDiv.innerHTML =="Бумага"){
        resultDiv.innerHTML ="ПОБЕДА!";
    } 
    else if(playerDiv.innerHTML =="Бумага" && opponentDiv.innerHTML =="Камень"){
        resultDiv.innerHTML ="ПОБЕДА!";
    }
    
    
}, 1500)
};

