import Fire from './../firebase/config.js';
import MyList from './createMyList.js';

let menu = null;
document.addEventListener('DOMContentLoaded', function () {
  menu = document.querySelector('.menu');
  menu.classList.add('off');

  let box = document.getElementsByClassName('box');
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('contextmenu', showmenu);
  }

  menu.addEventListener('mouseleave', hidemenu);

  getValue();
});

function getValue() {
  document.getElementById('setValue').onclick = function () {
    let id = document.getElementById(inputBox.value).id;
    let adaRef = null;
    if (id.includes('m')) {
      id = id.slice(1);
      adaRef = Fire.database().ref(`Menu1/${id}`);
    } else if (id.includes('s')) {
      id = id.slice(1);
      adaRef = Fire.database().ref(`subMenu/${id}`);
    } else if (id.includes('f')) {
      id = id.slice(1);
      adaRef = Fire.database().ref(`Folder/${id}`);
      Fire.database()
        .ref('/subMenu/')
        .once('value')
        .then(function (snapshot) {
          for (let j = 1; j <= snapshot.numChildren(); j++) {
            if (snapshot.child(j).val().text.folderId === `f${id}`) {
              let fId = snapshot.child(j).val().text.id.slice(1);
              adaRef = Fire.database().ref(`subMenu/${fId}`);
              adaRef.remove();
            }
          }
        });
    }

    adaRef
      .remove()
      .then(function () {
        document.getElementById('myList').innerHTML =
          "<li id='myFolderLi'></li>";
      })
      .then(function () {
        let myList = new MyList();
        myList.createMyList();
      })
      .then(function () {
        console.log('Remove succeeded.');
      })
      .catch(function (error) {
        console.log('Remove failed: ' + error.message);
      });
  };
}

function showmenu(ev) {
  ev.preventDefault();
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
