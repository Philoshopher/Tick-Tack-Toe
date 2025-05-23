// DOM elemrnts
let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset-btn');
let msg = document.querySelector('.msg');
let count = 0;
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
    count++;
    box.disabled = true;
    console.log(winCheck());
  });
});

reset.addEventListener('click', () => {
  boxes.forEach((box) => {
    reset.innerText = 'Restart';
    box.innerText = '';
    msg.innerHTML = ``;
    box.classList.remove('circle');
    box.classList.remove('cross');
    box.disabled = false;
    player = true;
  });
});

function winCheck() {
  for (let pattern of wPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        winner(pos1Val);
        return true;
      }
    }
  }
}

function winner(text) {
  msg.classList.remove('.hide');
  msg.innerHTML = `<p>${text} is the winner</p>`;
  reset.innerHTML = 'Play Again';
  reset.classList.add('.playAgain');
}
