const img = document.getElementById('movingImg');

let movingUp = true;
setInterval(function () {
  if (movingUp) {
    img.classList.add('up');
    img.classList.remove('down');
  } else {
    img.classList.add('down');
    img.classList.remove('up');
  }
  movingUp = !movingUp;
}, 500);

let modal = document.querySelector('.form-container');
let openBtn = document.querySelector('.addIcon');
let closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', function () {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});