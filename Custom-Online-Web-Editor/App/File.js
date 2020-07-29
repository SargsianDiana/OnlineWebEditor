import Menu from './../firebase/menu.js';
import Fire from './../firebase/config.js';
import Submenu from '../firebase/submenu.js';
import MyList from './createMyList.js';

class File {
  constructor(name, text) {
    this.name = name;
    this.text = text;
    this.executed = false;
  }

  createFile(fileName) {
    const li = document.createElement('li');
    // li.id = "forImages";
    li.className = 'box';
    this.findFileType(fileName);
    const innerHtml = document.createTextNode(fileName);
    li.append(innerHtml);
    const element = document.querySelector('.activeOne');

    if (element === null) {
      document.getElementById('myList').append(li);

      const ref = firebase.database().ref('/Menu1/');

      ref.once('value').then(function (snapshot) {
        let id = snapshot.numChildren() + 1;
        li.id = id;
        let menu = new Menu(id, fileName);
        Fire.database()
          .ref(`Menu1/${snapshot.numChildren() + 1}`)
          .set({
            text: menu,
          });
      });
    } else {
      const ref = firebase.database().ref('/subMenu/');

      ref.once('value').then(function (snapshot) {
        let id = snapshot.numChildren() + 1;
        let activeId = document.querySelector('.active').id;
        li.id = id;
        let subMenu = new Submenu(id, activeId, fileName);

        Fire.database()
          .ref(`subMenu/${snapshot.numChildren() + 1}`)
          .set({
            text: subMenu,
          });
      });

      element.append(li);
    }
  }

  findFileType(typeName) {
    let str = typeName.split('.');
    const htmlEl = document.createElement('img');
    const li = document.getElementById('forImages');
    if (str[1] === 'html') {
      // htmlEl.src = "./image/html.png";
      // li.innerHTML = "<img src='./image/html.png' />";
    }
  }

  keyEnterCode(e) {
    if (e.keyCode == 13) {
      let inputEl = document.getElementById('fileBox');
      this.createFile(inputEl.value);
      inputEl.remove();
      this.executed = false;
    }
  }

  createInput() {
    if (!this.executed) {
      this.executed = true;
      const input = document.createElement('input');

      input.type = 'text';
      input.id = 'fileBox';
      input.placeholder = 'Create file';
      input.autocomplete = 'off';
      input.onkeypress = () => {
        return this.keyEnterCode(event);
      };

      const div = document.getElementById('folders');
      div.append(input);
      console.log('createInput');
    }
  }
}

export default new File();
