class Tab{

    createTab(id)  {
        let tabs = document.getElementById('tabs') 
        let tabItem = document.getElementById(id)
        let textContent = tabItem.textContent
        let createTabItem = document.createElement('div')
        createTabItem.id = `tab_${id}`
        let createTabClose = document.createElement('span')
        createTabClose.id = 'tabClose'
        createTabClose.onclick = (ev) => {
            document.getElementById(ev.target.parentNode.id).remove()
        }
        createTabClose.innerHTML = 'x' 
        createTabItem.id = "tabs_Item"
        createTabItem.innerHTML = textContent
        createTabItem.append(createTabClose)
        tabs.append(createTabItem)
        

    }
 
    
}

export default new Tab