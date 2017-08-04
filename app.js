var name = prompt ('Hi! What is your name?');

alert ('Wow! ' + name + ' is a really good name!'); 

var tally = 0;

function question (promptMessage, correctAnswer, alertMessage, wrongAnswer){
    console.log(correctAnswer);
    var input = prompt (promptMessage).toLowerCase();

    if ( input === correctAnswer || input === correctAnswer.charAt(0)  ) {
        tally = tally + 1;

        alert (alertMessage);
    }else{

        alert (wrongAnswer);
    }
}
question('Is green my favorite color?', 'yes', 'You are correct!', 'Oh no, green is my favorite color' );
question(' Do I eat Thai food everyday of my life?', 'yes', 'Why yes I do!', 'I do! Thai food is my favorite.');
question('Do I like music?', 'yes', 'You are correct!', 'What! Of course I do!');
question(' Do I own a dog?', 'no', 'No, I own cats!', 'You are correct! I own cats.');
question(' Was I born without tear ducts?', 'yes', 'You are correct!', 'You are wrong!');

var states = ['idaho', 'utah', 'colorado'];

for ( var i = 6 ; i > 0 ; i--) {
    var guess = prompt ( name + ', can you guess what state i\'ve lived in? You have ' + i + ' guesses.'.toLowerCase());
    if ( states.indexOf(guess) !== -1 ) {
        tally = tally + 1;
        alert ('Good job! Correct answers were: Idaho, Utah, and Colorado!'); 
        break;
    }

    else {alert ('Sorry! Try again');}
}

var number = 25;

for ( var i = 4 ; i > 0 ; i--) { 

    var answer = prompt ('Now ' + name + ', can you guess my favorite number? You have ' + i + ' guesses.');

    if ( answer > 25) {
        alert ('Too high!');
    }

    else if (answer == 25) {

        tally = tally + 1;

        alert ('Good Job!' );

        break;
    }
    else {alert ('Too low!');}

}

var fin = alert ('You got ' + tally + ' out of 8 correct!');

if ( tally > 4) {
    alert ('Good job, ' + name + '!')
    ;
}

else {alert ('Better Luck next time!');}
