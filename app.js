var activePlayer ,scores,roundScore;


var diceDom = document.querySelector(".dice");

newGame();

function newGame(){
    scores= [0,0];
    activePlayer= 0;
    roundScore = 0;
    document.getElementById("score-0").textContent= '0';
    document.getElementById("score-1").textContent= '0';
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
  
    document.querySelector(".player-0-panel").classList.add("active");

    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    diceDom.style.display = "none";

};

document.querySelector(".btn-new").addEventListener("click",newGame)

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

// ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼ ÑÑ…Ð»ÑÑ…ÑÐ´ Ð±ÑÐ»Ñ‚Ð³ÑÐµ
document.getElementById("score-0").textContent= '0';
document.getElementById("score-1").textContent= '0';

document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
diceDom.style.display = "none";


//shoog shideh event handler 
document.querySelector(".btn-roll").addEventListener('click', function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    switch(diceNumber){
       
    }
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    // toglogchiin eeljiin onoo uurchluh 

    if(diceNumber!==1){
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;

    }
    else{
      
        
        //ulaan tseg shiljuuleh
        switchToNextPlayer();
     


    }
});

document.querySelector(".btn-hold").addEventListener('click', function(){
    
    scores[activePlayer] = scores[activePlayer]+roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer]>=20){
        document.getElementById("name-"+activePlayer).textContent = "WINNER!!!";
        document.querySelector('.player-'+activePlayer+'-panel').classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    }
    
    else{
        switchToNextPlayer();

    }




});



function switchToNextPlayer(){
    roundScore = 0;
    document.getElementById("current-"+ activePlayer).textContent = 0;

    activePlayer === 0 ? (activePlayer =1) : (activePlayer=0);


    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    
    diceDom.style.display = "none";
}


//start new game
