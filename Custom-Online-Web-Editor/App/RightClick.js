let menu = null;
document.addEventListener('DOMContentLoaded', function () {
  //make sure the right click menu is hidden
  menu = document.querySelector('.menu');
  menu.classList.add('off');

  //add the right click listener to the box
  let box = document.getElementsByClassName('box');
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('contextmenu', showmenu);
  }

  //add a listener for leaving the menu and hiding it
  menu.addEventListener('mouseleave', hidemenu);

  getValue();
});

function getValue() {
  document.getElementById('setValue').onclick = function () {
    let t = document.getElementById(inputBox.value).id;
    alert(t);
  };
}

function showmenu(ev) {
  //stop the real right click menu
  ev.preventDefault();
  //show the custom menu
  inputBox.value = ev.target.id;
  console.log(ev.clientX, ev.clientY);
  menu.style.top = `${ev.clientY - 20}px`;
  menu.style.left = `${ev.clientX - 20}px`;
  menu.classList.remove('off');
}

function hidemenu(ev) {
  menu.classList.add('off');
  menu.style.top = '-200%';
  menu.style.left = '-200%';
}

export default 0;
