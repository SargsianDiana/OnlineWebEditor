import DbFolder from './../firebase/dbFolder.js';
import Fire from './../firebase/config.js';

class Folder {
  constructor(name) {
    this.name = name;
    this.executed = false;
  }

  createNestedUl(li, folderName) {
    this.flag = true;
    const ul = document.createElement('ul');
    li.append(ul);
    const customLi = document.createElement('li');
    customLi.innerHTML = folderName;

    const ref = firebase.database().ref('/Folder/');
    ref.once('value').then(function (snapshot) {
      let id = `f${snapshot.numChildren() + 1}`;
      let dbFolder = new DbFolder(id, folderName);

      customLi.id = `f${snapshot.numChildren() + 1}`;

      Fire.database()
        .ref(`Folder/${snapshot.numChildren() + 1}`)
        .set({
          text: dbFolder,
        });
    });

    customLi.className = 'nestedList';

    ul.append(customLi);
  }

  createFolder(folderName) {
    const li = document.getElementById('myFolderLi');
    this.createNestedUl(li, folderName);

    li.onclick = (e) => {
      const element = document.querySelector('.active');
      if (element !== null) {
        element.classList.remove('active');
        element.parentNode.classList.remove('activeOne');
      }
      const innerT = e.target.classList.add('active');
      e.target.parentNode.classList.add('activeOne');
    };
  }

  keyEnterCode(e) {
    if (e.keyCode == 13) {
      let inputEl = document.getElementById('fileBox');
      this.createFolder(inputEl.value);
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
      input.placeholder = 'Create folder';
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

export default new Folder();
