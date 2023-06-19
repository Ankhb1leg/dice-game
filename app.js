var activePlayer = 1;

var scores = [0, 0];

var roundScore = 0;



// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

// ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼ ÑÑ…Ð»ÑÑ…ÑÐ´ Ð±ÑÐ»Ñ‚Ð³ÑÐµ
document.getElementById("score-0").textContent= '0';
document.getElementById("score-1").textContent= '0';

document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener('click', function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    switch(diceNumber){
       
    }
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
});

