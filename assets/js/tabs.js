class AutoSwitchPanel {
  state = 'auto'; // auto | manual
  tabs = [];
  tabElement = null;
  current = 0;
  intervalID = 0;
  speed = 3000

  constructor(tabElement, speed) {
    this.tabElement = tabElement;
    const tabHeader = tabElement.getElementsByClassName('headers')[0]
    this.tabs = tabHeader.getElementsByClassName('tab-title');
    this.speed = speed * 1000;
    this.resetState();
    this.clickEventListener();
    this.scrollEventListener();
  }

  isAuto = () => this.state === 'auto';
  isManual = () => this.state === 'manual';

  setStateAuto = () => {this.state = 'auto';}
  setStateManual = () => {this.state = 'manual';}

  resetState = () => {
    this.stopAutoplay();
    this.setStateAuto();
    this.startAutoplay();
  }

  stopAutoplay = () => {
    window.clearInterval(this.intervalID)
  }

  startAutoplay = () => {
    if (this.isManual()){
      this.stopAutoplay();
      return
    }
    this.intervalID = setInterval(this.switchTab, this.speed)
  }

  switchTab = () => {
    this.current = (this.current + 1) % this.tabs.length; // 将 count 重置为0到5之间的数字
    const tab = this.tabs[this.current]
    tab.click()
  }

  isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= - rect.height &&
      rect.top <= window.innerHeight
    )
  }

  clickEventListener = () => {
    if (!this.tabElement) return
    this.tabElement.addEventListener('click', e => {
      const target = e.target;
      if (e.isTrusted && Array.from(this.tabs).includes(target) && this.isAuto()) {
        this.stopAutoplay();
        const clickTabName = target.getAttribute("data-tab-name");
        for (let i = 0; i < this.tabs.length; i ++) {
          const tabName = this.tabs[i].getAttribute("data-tab-name");
          if (clickTabName === tabName) {
            this.current = i
            break
          }
        }
        this.setStateManual()
      }
    })
  }

  scrollEventListener = () => {
    if (!this.tabElement) return
    document.addEventListener('scroll', e => {
      if (e.isTrusted && !this.isElementInViewport(this.tabElement) && this.isManual()) {
        this.resetState();
      }
    })
  }
}

const customTabs = (() => {
  const setSelected = (element) => {
    if (!element.classList.contains("selected")) {
      element.classList.add("selected")
    }
  }

  const removeSelected = (element) => {
    if (element.classList.contains('selected')) {
      element.classList.remove("selected")
    }
  }

  const resetChildrenElements = (parentElement) => {
    if (!parentElement) return
    for (let i = 0; i < parentElement.childNodes.length; i++) {
      const element = parentElement.childNodes[i]
      if (element.nodeType === Node.ELEMENT_NODE) {
        removeSelected(element)
      }
    }
  }


  const onTabChange = (event) => {
    const target = event.target
    const tabName = target.getAttribute('data-tab-name')
    const eventTarget = event.currentTarget;
    if (target && eventTarget && tabName) {
      resetChildrenElements(eventTarget)
      setSelected(target)
      const tabContainer = eventTarget.nextElementSibling
      resetChildrenElements(tabContainer)
      const triggerTabBody = tabContainer.querySelector(`div[data-tab-name='${tabName}']`)
      setSelected(triggerTabBody)
    }
  }

  const initialAutoplayTabs = () => {
    const autoTabs = document.querySelectorAll('.tabs[data-autoplay-tabs="true"]');
    if (!autoTabs || autoTabs.length === 0) return;
    autoTabs.forEach(element=>{
      const speed = element.getAttribute("data-autoplay-time")
      new AutoSwitchPanel(element, Number(speed))
    })
  }

  return {
    onTabChange,
    initialAutoplayTabs
  }
})()

customTabs.initialAutoplayTabs()
