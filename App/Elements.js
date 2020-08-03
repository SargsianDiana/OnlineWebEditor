/* eslint-disable no-restricted-globals */
/* eslint-disable func-names */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import fileObj from "./File.js";
import folderObj from "./Folder.js";
import collapseObj from "./Collapse.js";

import terminalObj from "./Terminal.js";

const createBtnImg = function (el, src, title, classList, cb) {
  const pEl = document.getElementById("parentEl");
  const htmlEl = document.createElement(el);
  htmlEl.src = src;
  htmlEl.title = title;
  htmlEl.classList = classList;
  htmlEl.onclick = cb;
  pEl.append(htmlEl);
};

createBtnImg("img", "./image/file.png", "New file", "actionFile", function () {
  return fileObj.createInput();
});

createBtnImg(
  "img",
  "./image/new.png",
  "New folder",
  "actionFolder",
  function () {
    return folderObj.createInput();
  }
);

createBtnImg(
  "img",
  "./image/collapse.jpg",
  "Collapse",
  "actionCollapse",
  function () {
    return collapseObj.hideToggle();
  }
);

createBtnImg(
  "img",
  "./image/terminal.png",
  "Open terminal",
  "actionTerminal",
  function () {
    return terminalObj.openTerminal();
  }
);

terminalObj.txtArea.onkeypress = () => terminalObj.keyEnterCode(event);

export default 0;
