var name = prompt ('Hi! What is your name?');
console.log ('Hi! What is your name?');

alert ('Wow! ' + name + ' is a really good name!'); 
console.log ('Wow! ' + name + ' is a really good name!');

var color = prompt ( name + ', is green my favorite color?').toLowerCase();
console.log ( name + ', is green my favorite color? ');

// if (color === 'yes') {
//      alert ('YOU ARE CORRECT!')
// } else if (color === 'y') {
//      alert ('YOU ARE CORRECT!')
// }  else if (color === 'no') {
//      alert ('Oh no, green IS my favorite color!')
// }   else if (color === 'n') {
//      alert ('Oh no, green IS my favorite color!')
// }; 

if (color === 'yes' | color === 'y') {alert ('You are correct!')}
else if (color === 'no' | color === 'n') {alert ('Oh no, green IS my favorite color!')};

var pets = prompt ('Do I own cats or dogs?').toLowerCase();
console.log ('Do I own cats or dogs?');

if (pets === 'cats') {alert ('You are correct! I own two beautiful babies.')}
else if (pets === 'dogs') {alert ('Oh no, I do own cats!')};

var food = prompt ('Do I eat Thai food almost every day of my life?').toLowerCase();
console.log ('Do I eat Thai food almost every day of my life?');

if (food === 'yes' | food === 'y') {alert ('Why yes I do!')}
else if (food === 'no' | food === 'n') {alert ('I do! Thai food is my favorite.')};

var music = prompt ('Do I listen to a lot of music?').toLowerCase();
console.log ('Do I listen to a lot of music?');

if (music === 'yes' | music === 'y') {alert ('Correct! Music is my favorite!')}
else if (music === 'no' | music === 'n') {alert ('What! Of course I do!')};

var plants = prompt ('Do I keep a lot of plants in my house?').toLowerCase();
console.log ('Do I keep a lot of plants in my house?');

if (plants === 'yes' | plants === 'y') {alert ('Yes I do! Plants are the best.')}
else if (plants === 'no' | plants === 'n') {alert ('You are wrong! I love plants.')};

var tears = prompt ('Was I born without tearducts?').toLowerCase();
console.log ('Was I born without tearducts?');

if (tears === 'yes' | tears === 'y') {alert ('You are correct!')}
else if (tears === 'no' | tears === 'n') {alert ('As a matter of fact, I was born without tearducts.')};

alert ('Thank you for answering my questions!');

