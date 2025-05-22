// DOM elemrnts
let boxes = document.querySelectorAll('.box');

const wPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let player = true;

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (player) {
      box.innerText = 'O';
      player = false;
      box.classList.add('circle');
    } else {
      box.innerText = 'X';
      player = true;
      box.classList.add('cross');
    }
    box.disabled = true;
  });
});
