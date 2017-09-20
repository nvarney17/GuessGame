/*Guessing Game By Nathan Varney */

/*Initialize Variables*/
var Total = 0;
var Games = 0;
var Average = 0;
var playAgain = "y";
var Turns = 0;
/*alert("totalTurns= "+totalTurns+" Games= "+Games+" Average= "+Average+" playAgain= "+playAgain+"")*/

/*Start Playing*/

do {
	Games++;
	var Answer = Math.floor(Math.random() * (99) + 1);
	alert(Answer);
	var Turns = 1;
	do{	
		Guess = prompt("You are on turn " +Turns+". Enter a number between 1 and 100.");
		Turns++
		if (Guess > Answer){
			alert('Your guess was too high.');
		}
		else if (Guess < Answer){
			alert('Your guess was too low.');
		else if (isNaN(Guess)){
			Turns = Turns - 1
		}
	}
}
	while (Guess != Answer);
	alert('Congratulations you guessed the number in '+(Turns - 1)+' turns.');
	alert('You have played '+(Games)+' games so far.');
	(Total = Total + Turns - 1);
	(Average = Total / Games);
	alert('Your average number of guesses is '+(Average)+' .');

	if (Guess == Answer){
		playAgain = prompt("Would you like to play again? y=Yes");
	}
}
while (playAgain == "y");
/*End Playing*/