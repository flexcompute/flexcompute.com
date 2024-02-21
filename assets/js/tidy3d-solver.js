const Tidy3dSolver = (()=>{
  const stepWidth = 266;

  const initialAnimaElement = async () => {
    const anime = (await import("/assets/js/anime.es.js")).default;
    if (typeof anime !== "function") return
    const animaWrapper = document.getElementsByClassName('anima-wrapper')
    const animations = []
    for (let i = 0; i < animaWrapper.length; i ++) {
      const element = animaWrapper[i];
      if (element.nodeType === Node.ELEMENT_NODE){
        const animaElement = element.getElementsByClassName("anima-box")[0];
        if (animaElement) {
          const animation = anime({
            targets: animaElement,
            translateX: element.clientWidth - animaElement.clientWidth - 100,
            loop: true,
            duration: 8 * 1000,
            endDelay: 0.5 * 1000,
            direction: 'alternate',
            easing: 'linear',
          });
          animations.push(animation)
        }
      }
    }
    const universityBox = document.getElementsByClassName("university-box")[0]
    if (universityBox){
      universityBox.addEventListener('mouseenter',()=>{animations.forEach(animation=>animation.pause())})
      universityBox.addEventListener('mouseleave',()=>{animations.forEach(animation=>animation.play())})
    }
  }


  const nextItem = (e, element) =>{
    e.stopPropagation();
    const contentElement = element.getElementsByClassName("content")[0];
    const wrapperRect = element.getBoundingClientRect();
    const contentRect = contentElement.getBoundingClientRect();
    const widthOfVisibleArea = element.clientWidth;
    const differWidth = contentRect.right - wrapperRect.right
    if (differWidth<=0) return;
    if (widthOfVisibleArea > stepWidth * 2 && Math.abs(differWidth) < 2 * stepWidth) {
      const translateWidth = Math.abs(wrapperRect.left - contentRect.left) + Math.abs(differWidth)
      contentElement.style.transform = `translateX(-${translateWidth}px)`; // 移动元素
    } else {
      const translateWidth = Math.abs(wrapperRect.left - contentRect.left) + stepWidth
      contentElement.style.transform = `translateX(-${translateWidth}px)`; // 移动元素
    }
  }

  const previousItem = (e, element) =>{
    e.stopPropagation();
    const contentElement = element.getElementsByClassName("content")[0];
    const wrapperRect = element.getBoundingClientRect();
    const contentRect = contentElement.getBoundingClientRect();
    const widthOfVisibleArea = element.clientWidth;
    const differWidth = contentRect.left - wrapperRect.left
    if (differWidth>=0) return;
    if (widthOfVisibleArea > stepWidth * 2 && Math.abs(differWidth) < 2 * stepWidth) {
      contentElement.style.transform = `translateX(0px)`; // 移动元素
    } else {
      const translateWidth = differWidth + stepWidth
      contentElement.style.transform = `translateX(${translateWidth}px)`; // 移动元素
    }
  }

  const setHighlight = element => {
    if (!element) return
    if (!element.classList.contains('highlight')){
      element.classList.add('highlight');
    }
  }
  const delHighlight = element => {
    if (!element) return
    if (element.classList.contains('highlight')){
      element.classList.remove('highlight');
    }
  }

  const triggerImageHighlight = event => {
    event.stopPropagation();
    const target = event.target;
    const triggerName = target.getAttribute('data-trigger-item')
    if (!triggerName) return
    const triggerElement = document.querySelector(`div[data-card-trigger="${triggerName}"]`);
    setHighlight(triggerElement)
  }

  const cancelImageHighlight = event => {
    event.stopPropagation();
    const target = event.target;
    const triggerName = target.getAttribute('data-trigger-item')
    if (!triggerName) return
    const triggerElement = document.querySelector(`div[data-card-trigger="${triggerName}"]`);
    delHighlight(triggerElement)
  }

  const triggerCardHighlight = event => {
    event.stopPropagation();
    const target = event.target;
    const triggerName = target.getAttribute('data-card-trigger')
    if (!triggerName) return
    const triggerElement = document.querySelector(`div[data-trigger-item="${triggerName}"]`);
    setHighlight(triggerElement)
  }
  const cancelCardHighlight = event => {
    event.stopPropagation();
    const target = event.target;
    const triggerName = target.getAttribute('data-card-trigger')
    if (!triggerName) return
    const triggerElement = document.querySelector(`div[data-trigger-item="${triggerName}"]`);
    delHighlight(triggerElement)
  }

  const initialSlideElement = () => {
    const slideElement = document.getElementsByClassName('carousel-slide')
    if (!slideElement) return;
    for (let i = 0; i < slideElement.length; i++) {
      if (slideElement[i].nodeType === Node.ELEMENT_NODE){
        const element = slideElement[i]
        const leftControl = element.getElementsByClassName("left-control")[0]
        const rightControl = element.getElementsByClassName("right-control")[0]
        const container = element.getElementsByClassName('slides')[0]
        if (container) {
          if (leftControl) {
            leftControl.addEventListener('click', (e) => previousItem(e, container))
          }
          if (rightControl) {
            rightControl.addEventListener('click', (e) => nextItem(e, container))
          }
        }
      }

    }

  }

  return {
    initialAnimaElement,
    initialSlideElement,
    triggerImageHighlight,
    cancelImageHighlight,
    triggerCardHighlight,
    cancelCardHighlight
  }
})()

Tidy3dSolver.initialSlideElement()
