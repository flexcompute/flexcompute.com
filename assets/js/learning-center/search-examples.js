$searchExamples = (function () {
  let selectedTag = "";
  let resultsDom;
  let notMatchedDom;
  let searchExampleInputDom;
  let filterTagsDom;
  let moreExamplesDom;

  const hideElement = (element) => {
    if (!element.classList.contains('d-none')) {
      element.classList.add("d-none");
    }
  }
  const displayElement = (element) => {
    if (element.classList.contains('d-none')) {
      element.classList.remove("d-none");
    }
  }
  // expand more examples sections
  const expandChange = (event) => {
    const target = event.currentTarget;
    if (!target || !target.parentElement) return;
    const element = target.parentElement
    if (element.classList.contains('expand')) {
      element.classList.remove('expand');
      element.classList.add('collapsed');
    } else if (element.classList.contains('collapsed')) {
      element.classList.remove('collapsed');
      element.classList.add('expand');
    }
  }

  const resetSelectTags = () => {
    if (selectedTag) {
      const childNodes = filterTagsDom.childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        const target = childNodes[i];
        if (target.nodeType === Node.ELEMENT_NODE && target.classList.contains('selected')) {
          target.classList.remove("selected")
        }
      }
    }
  }

  function resetInputValues() {
    if (searchExampleInputDom) {
      searchExampleInputDom.value = ''
    }
  }

  const searchExamplesByTag = () => {
    if (!resultsDom || !resultsDom.childNodes.length) return;
    resetInputValues()
    const childNodes = resultsDom.childNodes;
    let numberOfMatches = 0;
    if (!selectedTag) {
      for (let i = 0; i < childNodes.length; i++) {
        const element = childNodes[i];
        if (element.nodeType === Node.ELEMENT_NODE) {
          displayElement(element)
          numberOfMatches++;
        }
      }
    } else if (selectedTag) {
      for (let i = 0; i < childNodes.length; i++) {
        const element = childNodes[i];
        if (element.nodeType === Node.ELEMENT_NODE) {
          const exampleTag = element.getAttribute('data-example-tags');
          const domTags = exampleTag.split("##");
          const isInclude = domTags.includes(selectedTag)
          if (isInclude) {
            displayElement(element)
            numberOfMatches++;
          } else {
            hideElement(element)
          }
        }
      }
    }

    if (!notMatchedDom) return;
    if (numberOfMatches === 0) {
      displayElement(notMatchedDom)
    } else {
      hideElement(notMatchedDom)
    }
  }

  const searchExamplesByInput = (event) => {
    if (!resultsDom || !resultsDom.childNodes.length) return;
    resetSelectTags();
    const searchValue = event.target.value;
    const childNodes = resultsDom.childNodes;
    let numberOfMatches = 0
    if (!searchValue) {
      for (let i = 0; i < childNodes.length; i++) {
        const element = childNodes[i];
        if (element.nodeType === Node.ELEMENT_NODE) {
          displayElement(element)
          numberOfMatches++;
        }
      }
    } else if (searchValue) {
      for (let i = 0; i < childNodes.length; i++) {
        const element = childNodes[i];
        if (element.nodeType === Node.ELEMENT_NODE) {
          const exampleTitle = element.getAttribute('data-example-title');
          if (exampleTitle.toLowerCase().includes(searchValue.toLowerCase())) {
            displayElement(element)
            numberOfMatches++;
          } else {
            hideElement(element)
          }
        }
      }
    }

    if (!notMatchedDom) return;
    if (numberOfMatches === 0) {
      displayElement(notMatchedDom)
    } else {
      hideElement(notMatchedDom)
    }
  }

  const selectCategory = (event) => {
    const target = event.target;
    if (!target) return;
    const tag = target.getAttribute('data-tag-value')
    if (target.classList.contains('selected')) {
      target.classList.remove("selected");
      selectedTag = ''
    } else {
      resetSelectTags()
      target.classList.add("selected");
      selectedTag = tag
    }
    searchExamplesByTag();
    if (selectedTag && moreExamplesDom) {
      hideElement(moreExamplesDom)
      displayElement(resultsDom)
    } else if (!selectedTag && moreExamplesDom) {
      displayElement(moreExamplesDom)
      hideElement(resultsDom)
    }
  }

  const selectTagByURL = (enableGetCategoryByURL) => {
    if (enableGetCategoryByURL) {
      setTimeout(() => {
        const params = new URLSearchParams(window.location.search);
        let selectedTarget = null;
        if (filterTagsDom) {
          const childNodes = filterTagsDom.childNodes;
          for (let i = 0; i < childNodes.length; i++) {
            const target = childNodes[i];
            if (target.nodeType === Node.ELEMENT_NODE) {
              const tagSlugify = target.getAttribute("data-tag-slugify")
              if (tagSlugify === params.get('category')) {
                selectedTarget = target;
                break;
              }
            }
          }
        }
        if (selectedTarget) {
          selectCategory({target: selectedTarget})
        }
      }, 0)
    }
  }

  const init = () => {
    document.addEventListener('DOMContentLoaded', () => {
      resultsDom = document.getElementById("__pg_tidy3d-learning-center_example-library-search-results_");
      notMatchedDom = document.getElementById("not-matched");
      searchExampleInputDom = document.getElementById("__pg_tidy3d-learning-center_search-for-example_input");
      filterTagsDom = document.getElementById("__pg_tidy3d-learning-center_example-library-tags_");
      moreExamplesDom = document.getElementById("__pg_tidy3d-learning-center_example-library_more-examples-results_");
    })
  }
  init()
  return {
    expandChange,
    selectCategory,
    searchExamplesByInput,
    selectTagByURL
  }
})()
