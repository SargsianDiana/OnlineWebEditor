import fileObj from "./File.js";
import folderObj from "./Folder.js";
import collapseObj from "./Collapse.js";

// const createBtn = function (el, innerText, classList, cb) {
//   const htmlEl = document.createElement(el);
//   htmlEl.innerText = innerText;
//   htmlEl.classList = classList;
//   htmlEl.onclick = cb;

//   const div = document.getElementById('folders');
//   div.append(htmlEl);
// };

// createBtn('button', '+', 'actionBtn', function () {
//   return fileObj.createInput();
// });

// createBtn('button', '++', 'actionBtn', function () {
//   return folderObj.createInput();
// });

// createBtn('button', '*', 'actionBtn', function () {
//   return collapseObj.hideToggle();
// });

// createBtn('button', '⊗ 0 ⚠ 0', 'terminalBtn', function () {
//   return OpenTerminal();
// });

// export default 0;

const createBtnImg = function (el, src, classList, cb) {
  const htmlEl = document.createElement(el);
  htmlEl.src = src;
  htmlEl.classList = classList;
  htmlEl.onclick = cb;
  const div = document.getElementById("folders");
  div.append(htmlEl);
};

createBtnImg("img", "./image/file.png", "actionImg", function () {
  return fileObj.createInput();
});

createBtnImg("img", "./image/folderpl.png", "actionImg", function () {
  return folderObj.createInput();
});

createBtnImg("img", "./image/collapse.jpg", "actionCollapse", function () {
  return collapseObj.hideToggle();
});

const createBtn = function (el, innerText, classList, cb) {
  const htmlEl = document.createElement(el);
  htmlEl.innerText = innerText;
  htmlEl.classList = classList;
  htmlEl.onclick = cb;

  const div = document.getElementById("folders");
  div.append(htmlEl);
};

createBtn("button", "⊗ 0 ⚠ 0", "terminalBtn", function () {
  return OpenTerminal();
});

export default 0;
