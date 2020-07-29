import fileObj from './File.js';
import folderObj from './Folder.js';
import collapseObj from './Collapse.js';

const createBtn = function (el, innerText, classList, cb) {
  const htmlEl = document.createElement(el);
  htmlEl.innerText = innerText;
  htmlEl.classList = classList;
  htmlEl.onclick = cb;

  const div = document.getElementById('folders');
  div.append(htmlEl);
};

createBtn('button', '+', 'actionBtn', function () {
  return fileObj.createInput();
});

createBtn('button', '++', 'actionBtn', function () {
  return folderObj.createInput();
});

createBtn('button', '*', 'actionBtn', function () {
  return collapseObj.hideToggle();
});

createBtn('button', '⊗ 0 ⚠ 0', 'terminalBtn', function () {
  return OpenTerminal();
});

export default 0;
