class Tab {
  constructor() {
    this.tab = true;
  }

  createTab(id) {
    if (this.tab) {
      const tabs = document.getElementById("tabs");

      const tabItem = document.getElementById(id);
      const { textContent } = tabItem;
      const createTabItem = document.createElement("button");
      createTabItem.className = "tabs_Item";

      const createTabTerminal = document.createElement("textarea");
      createTabTerminal.className = "tabContent";
      createTabTerminal.id = "tabs_item_txt";
      const innerTabCode = document.getElementById("innerCode");
      createTabTerminal.rows = "25";
      createTabItem.id = `tab_${id}`;
      const createTabClose = document.createElement("span");
      createTabClose.id = "tabClose";
      createTabClose.onclick = () => {
        const node = document.getElementsByClassName("tabs_Item");
        for (let i = 0; i < node.length; i += 1) {
          node[i].style.display = "none";
        }

        const node1 = document.getElementsByClassName("tabContent");
        for (let i = 0; i < node1.length; i += 1) {
          node1[i].style.display = "none";
        }
        this.tab = true;
      };
      createTabClose.innerHTML = "x";
      createTabItem.id = `tabs_item${id}`;

      createTabItem.innerHTML = textContent;
      createTabItem.append(createTabClose);
      tabs.append(createTabItem);
      innerTabCode.append(createTabTerminal);

      this.tab = false;
    } else {
      const node = document.getElementsByClassName("tabs_Item");
      for (let i = 0; i < node.length; i += 1) {
        node[i].style.display = "none";
      }

      const node1 = document.getElementsByClassName("tabContent");
      for (let i = 0; i < node1.length; i += 1) {
        node1[i].style.display = "none";
      }
      this.tab = true;
    }
  }
}

export default new Tab();
