class Collapse {
  constructor() {
    this.flag = false;
  }

  allToggleItem(displayValue) {
    const hideToggle = document.getElementsByClassName('toggle');

    for (let i = 0; i < hideToggle.length; i++) {
      hideToggle[i].style.display = displayValue;
    }
  }

  hideToggle() {
    if (!this.flag) {
      this.allToggleItem('none');
      this.flag = true;
    } else {
      this.allToggleItem('block');
      this.flag = false;
    }
  }
}

export default new Collapse();
