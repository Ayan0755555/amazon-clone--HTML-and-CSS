//Guessing game in js//

const max=prompt("enter the max number");

const random=Math.floor(Math.random() * max) +1;

let guess=prompt("guess the number")

while(true){
    if(guess=="quit"){
        console.log("you are quit this game");
        break;
    }
    if(guess==random){
        console.log("you are right! congratulation you are win the match");
        break;
    } else if(guess < random){
        guess=prompt("this is a large number");
    } else{
        guess=prompt("this is a small number");
    }
}