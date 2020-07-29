// import createFile from "./CreateInput/js";

// const createFolder = function(itemValue){
//     const ul = document.createElement("ul");
//     const li = document.createElement("li");
//     const innerHtml = document.createTextNode(itemValue);
//     li.append(innerHtml);
//     ul.append('li');
//     document.getElementById("myList").append(ul);
// }

// const keyEnterCode = function(e) {
//     if (e.keyCode == 13) {
//         let tb = document.getElementById("folderBox");
//         createFolder(tb.value);
//         tb.remove()
//         executed = false;
//     }
// }

// let executed = false;

// const createInput = function(){
//     if(!executed){
//         executed = true;
//         const input = document.createElement("input");

//         input.type = "text";
//         input.id = "folderBox";
//         input.onkeypress = function(){ return keyEnterCode(event) }

//         const div = document.getElementById("folders");
//         div.append(input);
//         console.log("createInput")
//     }
// }
