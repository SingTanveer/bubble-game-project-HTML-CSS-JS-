var score = 0;
var timer = 10;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector(".newScore").textContent = score;
}

function makeBubble(){
    var bubble = "";
    for(var i = 1; i <= 70; i++){
            var rn = Math.floor(Math.random()*10);
             bubble += `<div class="bubble">${rn}</div>`;
        }
        document.querySelector("#pbtm").innerHTML= bubble;
}

function runTimer(){
    var timerNew = setInterval(function(){
    if(timer > 0){
        timer--;
        document.querySelector(".timerVal").textContent = timer;
        }
        else{
            
            clearInterval(timerNew);
            document.querySelector("#pbtm").innerHTML = "Game Over";
        }
    },1000);
    }

function newHit(){
    hitrn = Math.floor(Math.random()*10);
     document.querySelector(".hit").textContent = hitrn;
}




   document.querySelector("#pbtm")
   .addEventListener("click", function(details){
    clickedNum = (Number(details.target.textContent));

    if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        newHit();
           }
   
   })

runTimer();
makeBubble();
newHit();









