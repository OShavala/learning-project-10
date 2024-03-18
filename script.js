document.getElementById('colorChanger').addEventListener('click', changeColor);

const buttons = document.querySelectorAll('.button');

let currentButton = 0;

function changeColor() {
  buttons[currentButton].style.backgroundColor = '#000080'; 
  currentButton = (currentButton + 1) % buttons.length;
}



