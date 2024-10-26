const max= prompt("Enter the max number:");
const random= Math.floor(Math.random()*max)+1;
//console.log(random);

let guess= prompt("Guess the number: ");
while (true){
    if (guess=="quit"){
        console.log("Quit");
        break;
    }
    if(guess==random){
        console.log("You are right ");
        break;
    }
    else if(guess<random){
        guess= prompt("Your guess was too small. Try again");
    }
    else {
        guess= prompt("our guess is too large. Try again ");
    }
}
