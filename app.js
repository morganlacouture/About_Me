var name = prompt ('Hi! What is your name?');

alert ('Wow! ' + name + ' is a really good name!'); 

var tally = 0;

var color = prompt ( name + ', is green my favorite color?').toLowerCase();
console.log ( name );

if (color === 'yes' | color === 'y') {

    tally = tally + 1;

    alert ('You are correct!');
}

else if (color === 'no' | color === 'n') {

    alert ('Oh no, green IS my favorite color!');
}

var pets = prompt ('Do I own cats or dogs?').toLowerCase();
console.log ('Do I own cats or dogs?');

if (pets === 'cats') {

    tally = tally + 1;

    alert ('You are correct! I own two beautiful babies.');

}
else if (pets === 'dogs') {

    alert ('Oh no, I do own cats!');
}

var food = prompt ('Do I eat Thai food almost every day of my life?').toLowerCase();
console.log ('Do I eat Thai food almost every day of my life?');

if (food === 'yes' | food === 'y') {
    
    tally = tally + 1;

    alert ('Why yes I do!');
}

else if (food === 'no' | food === 'n') {
    
    alert ('I do! Thai food is my favorite.');

}

var music = prompt ('Do I listen to a lot of music?').toLowerCase();
console.log ('Do I listen to a lot of music?');

if (music === 'yes' | music === 'y') {

    tally = tally + 1;

    alert ('Correct! Music is my favorite!');
}

else if (music === 'no' | music === 'n') {

    alert ('What! Of course I do!');
}

var plants = prompt ('Do I keep a lot of plants in my house?').toLowerCase();
console.log ('Do I keep a lot of plants in my house?');

if (plants === 'yes' | plants === 'y') {
    
    tally = tally + 1;

    alert ('Yes I do! Plants are the best.');
}

else if (plants === 'no' | plants === 'n') {

    alert ('You are wrong! I love plants.');
}

var tears = prompt ('Was I born without tear ducts?').toLowerCase();
console.log ('Was I born without tear ducts?');

if (tears === 'yes' | tears === 'y') {

    tally = tally + 1;

    alert ('You are correct!');
}

else if (tears === 'no' | tears === 'n') {

    alert ('As a matter of fact, I was born without tear ducts.');
}
 
var states = ['idaho', 'utah', 'colorado'];



for (  var i = 6 ; i > 0 ; i--) {
   
    var guess = prompt ( name + ', can you guess what state i\'ve lived in? You have ' + i + ' guesses.'.toLowerCase())
   
    if ( states.indexOf(guess) !== -1 ) {
        tally = tally + 1;
        alert ('Good job! Correct answers were: Idaho, Utah, and Colorado!'); 
        break;
    }

    else {alert ('Sorry! Try again');}
}

var number = 25;

for ( var i = 4 ; i > 0 ; i--) { 

    var answer = prompt ('Now ' + name + ', can you guess my favorite number? You have ' + i + ' guesses.')

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


