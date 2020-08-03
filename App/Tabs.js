class Tab {
  constructor() {
    this.tab = true;
  }

  createTab(id, tabsLength) {
    if (this.tab) {
      let tabs = document.getElementById('tabs');

      let tabItem = document.getElementById(id);
      let textContent = tabItem.textContent;
      let createTabItem = document.createElement('button');
      createTabItem.className = 'tabs_Item';

      let createTabTerminal = document.createElement('textarea');
      createTabTerminal.className = 'tabContent';
      createTabTerminal.id = `tabs_item_txt`;
      let innerTabCode = document.getElementById('innerCode');
      createTabTerminal.rows = '25';
      createTabItem.id = `tab_${id}`;
      let createTabClose = document.createElement('span');
      createTabClose.id = 'tabClose';
      createTabClose.onclick = () => {
        let node = document.getElementsByClassName('tabs_Item');
        for (let i = 0; i < node.length; i++) {
          node[i].style.display = 'none';
        }

        let node1 = document.getElementsByClassName('tabContent');
        for (let i = 0; i < node1.length; i++) {
          node1[i].style.display = 'none';
        }
        this.tab = true;
      };
      createTabClose.innerHTML = 'x';
      createTabItem.id = `tabs_item${id}`;

      createTabItem.innerHTML = textContent;
      createTabItem.append(createTabClose);
      tabs.append(createTabItem);
      innerTabCode.append(createTabTerminal);

      this.tab = false;
    } else {
      let node = document.getElementsByClassName('tabs_Item');
      for (let i = 0; i < node.length; i++) {
        node[i].style.display = 'none';
      }

      let node1 = document.getElementsByClassName('tabContent');
      for (let i = 0; i < node1.length; i++) {
        node1[i].style.display = 'none';
      }
      this.tab = true;
    }
  }
}

export default new Tab();
