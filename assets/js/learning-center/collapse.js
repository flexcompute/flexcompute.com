const collapseModule = (function () {
  const expandAnchorPathNames = [
    '/tidy3d/learning-center/faq/'
  ]
  const onExpand = (id, containerClass, closeOthers = true) => {
    if (!id) return;
    const clickDiv = document.getElementById(id);
    if (!clickDiv) return;
    // const collapsedContainerDom = document.getElementsByClassName(containerClass);
    const parentDom = clickDiv.parentNode;
    const collapsedContainerDom = parentDom.parentNode;
    if (!clickDiv || !collapsedContainerDom || !parentDom) return;
    if (parentDom.classList.contains("expand")){
      parentDom.classList.add('collapsed');
      parentDom.classList.remove("expand");
    }else {
      // remove 'expand' class from all divs
      if (closeOthers){
        const childNodes = collapsedContainerDom.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
          const element = childNodes[i];
          if (element.nodeType === Node.ELEMENT_NODE) {
            element.classList.remove('expand');
            element.classList.add("collapsed");
          }
        }
      }

      // add "expand" class to click div
      parentDom.classList.add('expand');
      parentDom.classList.remove("collapsed");
    }
  }
  const isElementInViewport = (el, wrapper=null) => {
    const rect = el.getBoundingClientRect();
    if (!wrapper) {
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    const containerRect = wrapper.getBoundingClientRect();
    return (
      rect.top >= containerRect.top &&
      rect.left >= containerRect.left &&
      rect.bottom <= containerRect.bottom &&
      rect.right <= containerRect.right
    );
  }

  const getElementStyleProp = (element, prop = "") => {
    const style = window.getComputedStyle(element);
    if (!style) return;
    if (prop) {
      return style[prop];
    }
    return style
  }

  const insertEllipsisClassName = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return
    if (!element.classList.contains('higher-display-ellipsis')){
      element.classList.add("higher-display-ellipsis")
    }
    if (!element.classList.contains('ellipsis-line-2')){
      element.classList.add("ellipsis-line-2")
    }
    if (!element.classList.contains('mb-0')){
      element.classList.add("mb-0")
    }
  }

  const removeEllipsisClassName = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return
    if (element.classList.contains('higher-display-ellipsis')){
      element.classList.remove("higher-display-ellipsis")
    }
    if (element.classList.contains('ellipsis-line-2')){
      element.classList.remove("ellipsis-line-2")
    }
    if (element.classList.contains('mb-0')){
      element.classList.remove("mb-0")
    }
  }

  const setDomDisplayBlock = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return
    if (element.classList.contains('d-none')){
      element.classList.remove("d-none")
      element.classList.add("d-block")
    }
  }
  const setDomDisplayNone = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return
    if (element.classList.contains('d-block')){
      element.classList.remove("d-block")
      element.classList.add("d-none")
    }
  }

  // 需要展开后显示两行
  const onExpandAndClamp = (id, containerClass) =>{
    onExpand(id, containerClass);
    const previewHeader = document.getElementById(id);
    const previewBody = previewHeader.nextElementSibling
    const isDisplayNone = getElementStyleProp(previewBody,'display') === 'none';
    if (!isDisplayNone && typeof $clamp === "function"){
      const paragraphs = previewBody.getElementsByClassName('ellipsis-clamp')
      const paragraph = paragraphs[0];
      if (paragraph && paragraph.nodeType === Node.ELEMENT_NODE) {
        removeEllipsisClassName(paragraph);
        const readMoreSupport = previewBody.getElementsByClassName('read-more-support');
        setDomDisplayNone(readMoreSupport[0])
        const readMoreClickId = paragraph.getAttribute("data-clickId");
        const readMoreLink = paragraph.getAttribute("data-backlink");
        $clamp(paragraph, {
          clamp: 4,
          useNativeClamp: false,
          truncationChar: "",
          truncationHTML: `... <a id="${readMoreClickId}" href="${readMoreLink}" class="more color-primary color-primary-hover" style="display: inline" onclick="stopPropagation(event)">Read more</a>`
        });
      }
    } else {
      const paragraphs = previewBody.getElementsByClassName('ellipsis-clamp');
      insertEllipsisClassName(paragraphs[0]);
      const readMoreSupport = previewBody.getElementsByClassName('read-more-support');
      setDomDisplayBlock(readMoreSupport[0])
    }
  }

  const onExpandAndScrollTop = (id, containerClass='') => {
    onExpand(id, containerClass);
    const previewHeader = document.getElementById(id);
    if (!isElementInViewport(previewHeader)){
      const top = window.scrollY - Math.abs(previewHeader.getBoundingClientRect().top)
      window.scrollTo({
        top: Math.abs(top) - 76,
        behavior: "smooth"
      })
    }
  }

  getExpandDomIdBySection = (sectionId) => {
    const sectionDom = document.getElementById(sectionId);
    if (!sectionDom || !sectionDom.classList.contains('collapsed-item')) return;
    const previewHeader = sectionDom.getElementsByClassName('preview-header')[0];
    return previewHeader.getAttribute('id');
  }

  const expandAnchorSection = (category, id) => {
    if (!id) return
    if (category){
      const categoryPreviewHeaderId = getExpandDomIdBySection(category);
      if (category !== id){
        onExpand(categoryPreviewHeaderId);
      }else {
        onExpandAndScrollTop(categoryPreviewHeaderId);
      }
    }
    if (category !== id){
      const previewHeaderId = getExpandDomIdBySection(id);
      onExpandAndScrollTop(previewHeaderId);
    }
  }

  document.addEventListener('DOMContentLoaded', e => {
    const pathName = location.pathname;
    let hash = location.hash.slice(1);
    let category = ""
    if (expandAnchorPathNames.includes(pathName)){
      history.replaceState(null, null, window.location.pathname);
      if (hash && !hash.includes("_")){
        const sectionDom = document.getElementById(hash);
        if (sectionDom){
          category = sectionDom.getAttribute('data-category-value');
        }
      }else if (hash.includes("_")){
        [category, hash] = hash.split("_")
      }
      expandAnchorSection(category, hash);
      if (hash) {
        setTimeout(()=>{
          history.replaceState(null, null, `#${hash}`);
        }, 500)
      }
    }
  })

  return {
    onExpand,
    onExpandAndClamp,
    onExpandAndScrollTop,
  }
})()
