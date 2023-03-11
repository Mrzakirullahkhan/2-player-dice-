let player1 = Math.floor(Math.random() * 6) + 1;
let player2 = Math.floor(Math.random() * 6) + 1;
let play1dice = `images/dice${player1}.png` ;
let play2dice = `images/dice${player2}.png` ;
let header = document.querySelector('.header')

let btn = document.querySelector(".btn")


function ludogame(){
    let player1 = Math.floor(Math.random() * 6) + 1;
    let play1dice = `images/dice${player1}.png` ;
    document.getElementById('check1dice').setAttribute('src',play1dice)


    let player2 = Math.floor(Math.random() * 6) + 1;
    let play2dice = `images/dice${player2}.png` ;
    document.getElementById('check2dice').setAttribute('src',play2dice)
    if(player1>player2){
        header.innerHTML=("player 1 Won");
    }
    else if(player1<player2){
        header.innerHTML=("player 2 Won");
    }
    else{
        header.innerHTML=("Drow try again ");
    }
}
