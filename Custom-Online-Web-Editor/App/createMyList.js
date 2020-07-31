import Fire from "./../firebase/config.js"
import Tab from './Tabs.js';

class MyList{
    
    constructor(){
        this.flag = false
    }

    

    createMyList(){

        const myUlList = document.getElementById("myList")
        const myLiList = document.getElementById("myFolderLi")
        const menu = document.querySelector('.menu');
        menu.classList.add('off');
       

        Fire.database().ref('/Folder/').once('value').then(function(snapshot) {
            // alert(snapshot.numChildren())
            let customUl = "";
            let folderArrays = [];
            
            for(let i = 1; i < snapshot.numChildren()+1; i++){ 
                customUl +=  `<ul id=${snapshot.child(i).val().text.id} class='box'>`
                customUl += `<li id=${snapshot.child(i).val().text.id} class='nestedList box'>${snapshot.child(i).val().text.text}</li>`
                
                
                let folderId = snapshot.child(i).val().text.id
                folderArrays.push(folderId)
                        
                 customUl += "</ul>"
                   

            }

           
           
            myLiList.innerHTML = customUl;

            for(let i = 0; i < snapshot.numChildren(); i++){
              document.getElementsByClassName('box')[i].addEventListener('contextmenu',function(ev){
                  ev.preventDefault(); 
                  inputBox.value = ev.target.id
                  console.log( ev.clientX, ev.clientY );
                  menu.style.top = `${ev.clientY - 20}px`;
                  menu.style.left = `${ev.clientX - 20}px`;
                  menu.classList.remove('off');
              })
          }
            

            Fire.database().ref('/subMenu/').once('value').then(function(snapshotOne) {
                
                for(let j = 1; j < snapshotOne.numChildren()+1; j++){
                    
                    let element = document.getElementById(snapshotOne.child(j).val().text.folderId)
                    element.innerHTML += `<li id=${snapshotOne.child(j).val().text.id} class='toggle box'>${snapshotOne.child(j).val().text.text}</li>`
                  
                }

                const nestedList = document.getElementsByClassName("nestedList")
                for (let index = 0; index < nestedList.length; index++) {
                    nestedList[index].onclick = (e) => {            
                        const element = document.querySelector(".active");
                        if(element !==null){
                            element.classList.remove("active");
                            element.parentNode.classList.remove("activeOne")
                        }            
                        const innerT = e.target.classList.add("active")
                        e.target.parentNode.classList.add("activeOne")
            
                    } 
                    
                }

                for(let i = 0; i < snapshotOne.numChildren(); i++){
                  document.getElementsByClassName('box')[i].addEventListener('contextmenu',function(ev){
                      ev.preventDefault(); 
                      inputBox.value = ev.target.id
                      console.log( ev.clientX, ev.clientY );
                      menu.style.top = `${ev.clientY - 20}px`;
                      menu.style.left = `${ev.clientX - 20}px`;
                      menu.classList.remove('off');
                  })
              }
              
                let flag = false

                let allToggleItem = (displayValue) => {
                        const hideToggle = document.getElementsByClassName("toggle");
        
                        for(let i = 0; i < hideToggle.length; i++){
                        hideToggle[i].style.display = displayValue;
                        }        
                }

                const collapse = document.getElementsByClassName("actionCollapse") 
                collapse.onclick = () => {
                    if(!flag){
                        allToggleItem("none");
                        flag = true;
                    }else{
                        allToggleItem("block");
                        flag = false;
                    }
                }
                

            });
                
           
               

          
          });
          
         


          Fire.database().ref('/Menu1/').once('value').then(function(snapshotTwo) {
              
            for(let j = 1; j <= snapshotTwo.numChildren(); j++){                
                myUlList.innerHTML += `<li id=${snapshotTwo.child(j).val().text.id} class='box'>${snapshotTwo.child(j).val().text.text}</li>`
            }

            
            for(let i = 0; i < snapshotTwo.numChildren(); i++){
                document.getElementsByClassName('box')[i].addEventListener('contextmenu',function(ev){
                    ev.preventDefault(); 
                    inputBox.value = ev.target.id
                    console.log( ev.clientX, ev.clientY );
                    menu.style.top = `${ev.clientY - 20}px`;
                    menu.style.left = `${ev.clientX - 20}px`;
                    menu.classList.remove('off');
                })
            }

            let box = document.getElementsByClassName('box');
            for(let i = 0;i < box.length; i++){
              box[i].addEventListener('click', function(ev){
                Tab.createTab(ev.target.id);
              });
            }    
            
            
          });         
        
    }

}

export default MyList