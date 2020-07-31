import Menu from './../firebase/menu.js';
import Fire from './../firebase/config.js';
import Submenu from '../firebase/submenu.js';
import Tab from './Tabs.js';
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
        let id = `m${snapshot.numChildren() + 1}`;
        li.id = id;
        let menu = new Menu(id, fileName);
        Fire.database()
          .ref(`Menu1/${snapshot.numChildren() + 1}`)
          .set({
            text: menu,
          });
          
          })
          .then(function(menu = null){
              menu = document.querySelector('.menu');
              menu.classList.add('off');
              let box = document.getElementsByClassName('box');
              for(let i = 0;i < box.length; i++){
                box[i].addEventListener('contextmenu', function(ev){
                  ev.preventDefault(); 
                  //show the custom menu
                  inputBox.value = ev.target.id
                  console.log( ev.clientX, ev.clientY );
                  menu.style.top = `${ev.clientY - 20}px`;
                  menu.style.left = `${ev.clientX - 20}px`;
                  menu.classList.remove('off');
                
                });
            }    
          })
          .then(function(){
            let box = document.getElementsByClassName('box');
            for(let i = 0;i < box.length; i++){
              box[i].addEventListener('click', function(ev){
                Tab.createTab(ev.target.id)
              });
          }    
          })
    } else {
      const ref = firebase.database().ref('/subMenu/');

            ref.once('value').then(function (snapshot) {
              let id = `s${snapshot.numChildren() + 1}`;
              let activeId = document.querySelector('.active').id;
              li.id = id;
              li.className = 'toggle';
              let subMenu = new Submenu(id, activeId, fileName);

            Fire.database()
              .ref(`subMenu/${snapshot.numChildren() + 1}`)
              .set({
                text: subMenu,
              });
          })
          .then(function(menu = null){
            menu = document.querySelector('.menu');
            menu.classList.add('off');
            let box = document.getElementsByClassName('box');
            for(let i = 0;i < box.length; i++){
              box[i].addEventListener('contextmenu', function(ev){
                ev.preventDefault(); 
                //show the custom menu
                inputBox.value = ev.target.id
                console.log( ev.clientX, ev.clientY );
                menu.style.top = `${ev.clientY - 20}px`;
                menu.style.left = `${ev.clientX - 20}px`;
                menu.classList.remove('off');
              
              });
            }    
        })

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
