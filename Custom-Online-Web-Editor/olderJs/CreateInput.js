/* let executed = false;

const createFile = function(itemValue){
    const li = document.createElement("li"); 
    const innerHtml = document.createTextNode(itemValue);  // innerHtml Alternative 
    li.append(innerHtml); 
    document.getElementById("myList").append(li);      // append or after
}

const keyEnterCode = function(e) {
    if (e.keyCode == 13) {
        let tb = document.getElementById("fileBox");
        createFile(tb.value);
        tb.remove()  
        executed = false;   
    }
   
}


const createInput = function(){
    if(!executed){
        executed = true;
        // const form = document.createElement("form");
        const input = document.createElement("input");    
        // const button = document.createElement("button");
        // form.append(button);
        
        // form.append(input);
        // form.onSubmit = function(){
        //     e.preventDefault();
        //     createFile();
        //     } 

        input.type = "text";
        input.id = "fileBox";      
        input.onkeypress = function(){ return keyEnterCode(event) }                      

        const div = document.getElementById("folders");
        div.append(input);
        console.log("createInput")
    }
}

export default createInput; */
