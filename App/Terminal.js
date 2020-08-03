/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import fileObj from "./File.js";
import folderObj from "./Folder.js";

class Terminal {
  constructor() {
    this.terminal = true;
    this.history = [];
    this.txtArea = document.createElement("textarea");
  }

  openTerminal() {
    if (this.terminal) {
      const editor = document.getElementById("editor");
      const div = document.createElement("div");
      const btn = document.createElement("button");

      div.id = "terminalDiv";

      const p = document.createElement("p");

      btn.innerText = "x";
      btn.id = "CloseTerminal";

      btn.onclick = () => {
        this.closeTerminal();
        this.terminal = true;
      };

      this.txtArea.id = "txtArea";

      p.innerText = "Terminal";
      p.append(btn);
      div.append(p);
      div.append(this.txtArea);
      editor.append(div);

      this.terminal = false;
    } else {
      this.closeTerminal();
      this.terminal = true;
    }
  }

  closeTerminal() {
    const close = document.getElementById("terminalDiv");
    close.parentNode.removeChild(close);
  }

  keyEnterCode = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (
        this.txtArea.value.length >= 7 &&
        this.txtArea.value.includes("touch")
      ) {
        this.history.push(this.txtArea.value);
        const str = this.txtArea.value.slice(5);
        if (
          this.txtArea.value.includes("js") ||
          this.txtArea.value.includes("css") ||
          this.txtArea.value.includes("html")
        ) {
          fileObj.createFile(str);
        } else {
          folderObj.createFolder(str);
        }
        this.txtArea.value = "";
      }
    }
  };
}

export default new Terminal();
