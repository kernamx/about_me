'use strict';

var user = prompt('Is the user name Kevin?');
if (user.toUpperCase() === 'YES'){
  console.log('Greeting, Kevin.');
  alert('Greeting, Kevin. HOOYA, NAVY!!');
} else {
  console.log('You are not Kevin, Please do not touch this');
  alert('GO AWAY');
}

var vet = prompt('Are you a Vet?');
if (vet.toUpperCase() === 'YES'){
  console.log('Thank you for your service.');
  alert('Thank you for your service.');
} else {
  console.log('Stay Safe.');
  alert('Stay Safe.');
}

var clean = prompt('Do you like clean?');
if (clean.toUpperCase() === 'YES'){
  console.log(clean);
  alert('Great! You can clean my car.');
} else {
  console.log('do like clean');
  alert('Please keep your area clean at least.');
}

var gamer = prompt('Are you a gamer?');
if (gamer.toUpperCase() === 'YES'){
  console.log('cool, me too.');
  alert('I am a gamer, too.')
} else {
  console.log('Not a gamer');
  alert('Good for you.  Play vedio game too much is not good for you.');
}

var cook = prompt('Do you like to cook?');
if (cook.toUpperCase() === 'YES'){
  console.log('I like to eat, I like to cook.');
  alert('I like to eat, I like to cook.  It is fun to make new dishes.')
} else {
  console.log('learn to cook.');
  alert('Cooking is fun, you sould try it.');
}
