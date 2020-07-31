class Tab{

    createTab(id)  {
        let tabs = document.getElementById('tabs') 
        let tabItem = document.getElementById(id)
        let textContent = tabItem.textContent
        let createTabItem = document.createElement('div')
        createTabItem.id = "tabs_Item"
        createTabItem.innerHTML = textContent
        tabs.append(createTabItem)

    }
    
}

export default new Tab