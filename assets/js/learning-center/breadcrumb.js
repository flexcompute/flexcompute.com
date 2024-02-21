const LearnCenterBreadcrumbs = (function () {

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

  const scrollToTarget = (target, wrapper=null) => {
    if (!wrapper) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      wrapper.scrollTop = (target.offsetTop + target.offsetHeight / 2) - wrapper.offsetHeight / 2;
    }
  }

  const expandCardByLectureName = name => {
    const card = document.querySelector(`div.collapsed-item[data-lecture-name="${name}"]`)
    if (!card) return
    if (card.classList.contains('collapsed')) {
      card.classList.remove("collapsed")
      card.classList.add("expand")
    }
    setTimeout(()=>{
      if (!isElementInViewport(card)){
        scrollToTarget(card)
      }
    }, 100)
  }

  const expandSubmenuByLectureName= name => {
    const submenu = document.querySelector(`div.submenu[data-lecture-name="${name}"]`)
    if (!submenu) return
    const submenuWrapper = submenu.parentElement;
    if (!submenu.classList.contains('expand')) {
      submenu.classList.add("expand")
    }

    if (submenuWrapper) {
      if (!submenuWrapper.classList.contains('temp')){
        submenuWrapper.classList.add('temp')
      }
      if (!isElementInViewport(submenu, submenuWrapper)) {
        scrollToTarget(submenu, submenuWrapper)
      }
      if (submenuWrapper.classList.contains('temp')){
        submenuWrapper.classList.remove('temp')
      }
    }
  }

  const highlightTutorial = name => {
    const tutorialItems = document.querySelectorAll(`[data-tutorial-name="${name}"]`);
    tutorialItems.forEach(el => {
      if (!el.classList.contains('highlight')) {
        el.classList.add("highlight")
      }
    })
  }

  const getURLHash = () => {
    const queryString = window.location.search.slice(1);
    return new URLSearchParams(queryString);
  }

  return {
    getURLHash,
    expandCardByLectureName,
    expandSubmenuByLectureName,
    highlightTutorial
  }
})()

document.addEventListener('DOMContentLoaded', () => {
  window.LearnCenterBreadcrumbs = LearnCenterBreadcrumbs
  const params = LearnCenterBreadcrumbs.getURLHash();
  if (params.get('name')) {
    LearnCenterBreadcrumbs.expandCardByLectureName(params.get('name'));
  } else if (params.get('category')) {
    LearnCenterBreadcrumbs.expandCardByLectureName(params.get('category'));
  }
})
