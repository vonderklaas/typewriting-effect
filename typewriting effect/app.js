const texts = ['front-end', 'back-end', 'websites', 'mobile apps'];
let count = 0; // 0, 1, 2
let index = 0; // individual letters
let letter = ''; // individual letter
let currentText = ''; // text what is currently selected

// Self invoked every 0.4 seconds
(function type(){

  if(count === texts.length){
    count = 0; // reseting
  }

  currentText = texts[count]; // current word in array
  letter = currentText.slice(0, ++index); // current character

  document.querySelector('.typing').textContent = letter;

  if(letter.length === currentText.length){ // if word ended
    count++;
    index = 0; // reseting to 0
  }

  setTimeout(type, 400);

})();