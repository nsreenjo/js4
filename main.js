
let button = document.getElementById('myButton');

button.addEventListener('click', function() {
    alert('Button clicked!');
});

// task 2

let button2 = document.getElementById('changeTextButton');


let paragraph = document.getElementById('myParagraph');

button.addEventListener('click', function() {
    
    paragraph.textContent = "wwwwwwww";
});
//  task 3

let d = document.getElementById('coc');
div.addEventListener('dblclick', function() {
  div.style.backgroundColor = 'blue';
});

// task 4

  let r = document.getElementById('rt');
  div.addEventListener('mouseenter', function() {
    div.textContent = 'Mouse entered!';
  });

//   task 5

let div = document.getElementById('t');
div.addEventListener('mouseleave', function() {
  div.textContent = 'Thank you';   });

//   task 6

let form = document.getElementById('j');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('');
});

// task 7 

let inputField = document.getElementById('Input');

inputField.addEventListener('focus', function() {
  inputField.classList.add('highlight');
});

inputField.addEventListener('blur', function() {
  inputField.classList.remove('highlight');
});
