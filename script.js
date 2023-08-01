score = [0,1,2,3,4,5,6,"w"]

team1BallsFaced=0;
team2BallsFaced=0;
team1Score = 0
team2Score = 0

let team1Ball = document.querySelectorAll("#team1 .balls")
let team2Ball = document.querySelectorAll("#team2 .balls")
let score1 = document.querySelector("#team1-score")
let score2 = document.querySelector("#team2-score")
let over=1;
let w1 = document.querySelector("#team1-wickets")
let w2 = document.querySelector("#team2-wickets")
let strikeAudio = new Audio("http://bit.ly/so-ball-hit");
let gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

wicket1 = 0
wicket2 = 0

function runs() {
    strikeAudio.pause();
    strikeAudio.currentTime = 0;
    strikeAudio.play();

    let randomNumber = Math.floor(Math.random() * score.length);
    
    let outcome=score[randomNumber];
    if(over==1){
            if (outcome == "w"){
                wicket1 += 1;
                w1.innerText = wicket1;
                team1Ball[team1BallsFaced].innerText = outcome;
            }
            else {
                team1Ball[team1BallsFaced].innerText = outcome;
                team1Score += randomNumber;
                score1.innerText = team1Score;
            }
            if(team1BallsFaced==5 || wicket1==2){
                over=2;
            }
            team1BallsFaced++;
           
    }else if (over==2){
        if (outcome == "w"){
            wicket2 += 1;
            w2.innerText = wicket2;
            team2Ball[team2BallsFaced].innerText = outcome;
        }
        else{
            team2Ball[team2BallsFaced].innerText = outcome;
            team2Score += randomNumber;
            score2.innerText = team2Score;
        }
        if(team2BallsFaced==5 || wicket2==2 || team2Score>team1Score){
            over=3;
            gameOver()
        }
        team2BallsFaced++
    }
    

    if(over==3){
        alert("Game Over")

    }
    
}



function gameOver() {
    gameOverAudio.play()
    if (team1Score > team2Score){
        alert("IND Won")
    }
    else if (team2Score > team1Score){
        alert("PAK Won")
    }
    else{
        alert("It's a draw")
    }
}

function reload(){
    location.reload();
}

