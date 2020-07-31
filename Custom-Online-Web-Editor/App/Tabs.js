class Tab{

    constructor(){
        this.tab = true;
    }

    createTab(id)  {
        if(this.tab){
            let tabs = document.getElementById('tabs') 
            let tabItem = document.getElementById(id)
            let textContent = tabItem.textContent
            let createTabItem = document.createElement('div')
            let createTabTerminal = document.createElement('textarea')
            createTabTerminal.id = `tabs_item_txt`
            let innerTabCode = document.getElementById('innerCode')
            createTabTerminal.rows = '25'
            createTabItem.id = `tab_${id}`
            let createTabClose = document.createElement('span')
            createTabClose.id = 'tabClose'
            createTabClose.onclick = (ev) => {
                document.getElementById(ev.target.parentNode.id).remove()
                document.getElementById('tabs_item_txt').remove()
            }
            createTabClose.innerHTML = 'x' 
            createTabItem.id = `tabs_item${id}`
            createTabItem.className = 'tabs_Item'
            createTabItem.innerHTML = textContent
            createTabItem.append(createTabClose)
            tabs.append(createTabItem)
            innerTabCode.append(createTabTerminal)
            this.tab = false;
        }

    }
 
    
}

export default new Tab