import fileObj from './File.js';

// const txtarea = document.getElementById("firstLine");
// const txtId = txtarea.firstLine;

//const innerTextArea = document.createElement('textarea');

class Terminal {
  constructor() {
    this.terminal = true;
  }

  openTerminal() {    

    if (this.terminal) {
      const editor = document.getElementById('editor');
      const div = document.createElement('div');
      const btn = document.createElement('button');

      div.id = 'terminalDiv';

      const p = document.createElement('p');
      const txtArea = document.createElement('textarea');

      btn.innerText = 'x';
      btn.id = 'CloseTerminal';

      btn.onclick = () => {
        this.closeTerminal();
        this.terminal = true;
      }

      txtArea.id = 'txtArea';

      p.innerText = 'Terminal';
      p.append(btn);
      div.append(p);
      div.append(txtArea);
      editor.append(div);

      this.terminal = false;
      
    }
    else{
      this.closeTerminal();
      this.terminal = true;
    }
  }

  closeTerminal() {
      const close = document.getElementById('terminalDiv');
      close.parentNode.removeChild(close);
  }

  // createFile() {
  //     const txtArea = document.getElementById('txtArea');
  //     return fileObj.createInput('txtArea')
  // }

  // findFileType(typeName) {
  //     let str = typeName.split(".");
  //     const htmlEl = document.createElement("img");
  //     const li = document.getElementById("forImages")
  //     if (str[1] === "html") {

  //     }
  // }

  // commandSubmit(e) {
  //     if (e.keyCode == 13) {
  //         let inputEl = document.getElementById("fileBox");
  //         fileObj.createFile(inputEl.value);
  //         inputEl.remove()
  //         fileObj.executed = false;

  //         const textArea = document.createElement('textarea');
  //         txtId += 1;
  //         textArea.id = txtId;
  //     }
  // }
}

export default new Terminal();
