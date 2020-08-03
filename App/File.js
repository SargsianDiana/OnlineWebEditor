/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable quotes */
/* eslint-disable class-methods-use-this */
import Menu from "../firebase/menu.js";
import Fire from "../firebase/config.js";
import Submenu from "../firebase/submenu.js";
import Tab from "./Tabs.js";
import MyList from "./createMyList.js";

class File {
  constructor(name, text) {
    this.name = name;
    this.text = text;
    this.executed = false;
  }

  createFile(fileName) {
    const li = document.createElement("li");
    li.className = "box";

    this.findFileType(fileName);
    const innerHtml = document.createTextNode(fileName);
    const elType = this.findFileType(fileName);
    li.innerHTML = elType;
    li.append(innerHtml);

    const element = document.querySelector(".activeOne");

    if (element === null) {
      document.getElementById("myList").append(li);

      const ref = firebase.database().ref("/Menu1/");

      ref
        .once("value")
        .then(function (snapshot) {
          const id = `m${snapshot.numChildren() + 1}`;
          li.id = id;
          const menu = new Menu(id, fileName);
          Fire.database()
            .ref(`Menu1/${snapshot.numChildren() + 1}`)
            .set({
              text: menu,
            });
        })
        .then(function (menu = null) {
          menu = document.querySelector(".menu");
          menu.classList.add("off");
          const box = document.getElementsByClassName("box");
          for (let i = 0; i < box.length; i += 1) {
            box[i].addEventListener("contextmenu", function (ev) {
              ev.preventDefault();
              inputBox.value = ev.target.id;
              console.log(ev.clientX, ev.clientY);
              menu.style.top = `${ev.clientY - 20}px`;
              menu.style.left = `${ev.clientX - 20}px`;
              menu.classList.remove("off");
            });
          }
        })
        .then(function () {
          const box = document.getElementsByClassName("box");
          for (let i = 0; i < box.length; i += 1) {
            box[i].addEventListener("click", function (ev) {
              Tab.createTab(ev.target.id);
            });
          }
        });
    } else {
      const ref = firebase.database().ref("/subMenu/");

      ref
        .once("value")
        .then(function (snapshot) {
          const id = `s${snapshot.numChildren() + 1}`;
          const activeId = document.querySelector(".active").id;
          li.id = id;
          li.className = "toggle";
          const subMenu = new Submenu(id, activeId, fileName);

          Fire.database()
            .ref(`subMenu/${snapshot.numChildren() + 1}`)
            .set({
              text: subMenu,
            });
        })
        .then(function (menu = null) {
          menu = document.querySelector(".menu");
          menu.classList.add("off");
          const box = document.getElementsByClassName("box");
          for (let i = 0; i < box.length; i += 1) {
            box[i].addEventListener("contextmenu", function (ev) {
              ev.preventDefault();
              inputBox.value = ev.target.id;
              console.log(ev.clientX, ev.clientY);
              menu.style.top = `${ev.clientY - 20}px`;
              menu.style.left = `${ev.clientX - 20}px`;
              menu.classList.remove("off");
            });
          }
        });

      element.append(li);
    }
  }

  findFileType(typeName) {
    let elType = "";
    const str = typeName.split(".");
    if (str[1] === "html") {
      elType = '<span id="htmlType"> < > </span>';
      return elType;
    }
    if (str[1] === "css") {
      elType = '<span id="cssType"> # </span>';
      return elType;
    }
    if (str[1] === "js") {
      elType = '<span id="jsType"> JS </span>';
      return elType;
    }
  }

  keyEnterCode(e) {
    if (e.keyCode === 13) {
      const inputEl = document.getElementById("fileBox");
      this.createFile(inputEl.value);
      inputEl.remove();
      this.executed = false;
    }
  }

  createInput() {
    if (!this.executed) {
      const input = document.createElement("input");

      input.type = "text";
      input.id = "fileBox";
      input.placeholder = "Create file";
      input.autocomplete = "off";
      input.onkeypress = () => {
        return this.keyEnterCode(event);
      };

      const div = document.getElementById("inputEl");
      if (div.childElementCount < 1) div.append(input);
    }
  }

  findFireFileTypes(typeName) {
    let elType = "";
    const str = typeName.split(".");
    if (str[1] === "html") {
      elType = '<span id="htmlType"> < > </span>';
      return elType + typeName;
    }
    if (str[1] === "css") {
      elType = '<span id="cssType"> # </span>';
      return elType + typeName;
    }
    if (str[1] === "js") {
      elType = '<span id="jsType"> JS </span>';
      return elType + typeName;
    }
  }
}

export default new File();
