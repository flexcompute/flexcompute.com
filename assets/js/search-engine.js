class SearchEngine {
  appId = "7HAKFDYBT6"
  apiKey = "ad5a07592a5eaa0acc93e2490383eb53"
  indexName = "all_categories"
  hitsContainerId = 'hits-container'
  categories = ['All', 'Tutorials', "FAQ", 'Applications', 'Lectures', 'Docs', 'Blog', 'Website'];
  search = null
  suggestions = null
  product = 'tidy3d'
  category = 'All'
  suggestionIndexName = "faq-titles"
  initialRouteState = {
    query: '',
    page: 1,
  }
  _all = 'all'
  query = ""
  count = 0
  inputted = false;
  focusIndex = -1;
  suggestionsDom = null
  categoryDom = null;
  hitsDom = null;
  initial = true;
  categoryMap = {
    "tutorials": "Tutorial",
    "faq": "FAQ",
    "applications": "Application",
    "lectures": "Lecture",
    "docs": "Doc",
    "blog": "Blog",
    "website": "Website",
  }

  constructor() {
    this.categoryDom = this.getCategoryDom()
    this.hitsDom = this.getHitsDom()
  }

  getCategoryDom =()=>{
    const tabs = document.querySelector('.search-engine-tabs')
    if (!tabs) return
    const tabHeader = tabs.querySelector('.body')
    return tabHeader?.querySelector(`div[data-tab-name="${this.product}"]`)
  }

  getHitsDom = () => {
    return document.getElementById("hits")
}

  // ['All', 'Tutorials', "FAQ", 'Applications', 'Lectures', 'Docs', 'Blog', 'Website']
  setFacetRefinement = (category) => {
    if (!category) return
    switch (category.toLowerCase()) {
      case "tutorials":
        return [this.categoryMap.tutorials]
      case "faq":
        return [this.categoryMap.faq]
      case "applications":
        return [this.categoryMap.applications]
      case "lectures":
        return [this.categoryMap.lectures]
      case "docs":
        return [this.categoryMap.docs]
      case "blog":
        return [this.categoryMap.blog]
      case "website":
        return [this.categoryMap.website]
      default:
        return [this.categoryMap.tutorials, this.categoryMap.faq, this.categoryMap.applications, this.categoryMap.lectures, this.categoryMap.docs, this.categoryMap.blog, this.categoryMap.website];
        // return [['category:Tutorial'],['category:FAQ']];
    }
  }

  isElementInViewport = (element, parentElement = window.document) => {
    const parentRect = parentElement[0].getBoundingClientRect();
    const elementRect = element[0].getBoundingClientRect();
    const elementCenterX = (elementRect.left + elementRect.right) / 2;
    const elementCenterY = (elementRect.top + elementRect.bottom) / 2;
    return (
      elementCenterX >= parentRect.left &&
      elementCenterX <= parentRect.right &&
      elementCenterY >= parentRect.top &&
      elementCenterY <= parentRect.bottom
    );
  }

  moveDownResult = () => {
    if (this.initial) return
    const parentNode = this.suggestionsDom.parent();
    const height = $(this.suggestionsDom).height();
    parentNode.css("margin-bottom", `${height}px`)
  }

  resetResult = () => {
    const parentNode = this.suggestionsDom.parent();
    parentNode.css("margin-bottom", '0')
  }

  closeSelectDropdown = () => {
    this.suggestionsDom.hide();
    this.focusIndex = -1;
    this.resetResult();
  }

  openSelectDropdown = () => {
    this.suggestionsDom.show();
    this.moveDownResult()
  }

  scrollIfNeeded = (item) => {
    if (!item) return;
    const dropdownHeight = this.suggestionsDom.height();
    const itemHeight = item.outerHeight();
    const itemTop = item.position().top;
    const itemBottom = itemTop + itemHeight;
    const scrollTop = this.suggestionsDom.scrollTop();

    if (itemTop < 0) {
      // 需要向上滚动
      this.suggestionsDom.scrollTop(scrollTop + itemTop - 16);
    } else if (itemBottom > dropdownHeight) {
      // 需要向下滚动
      this.suggestionsDom.scrollTop(scrollTop + itemBottom - dropdownHeight);
    }
  }

  blurSuggestion = (element) => {
    $(element)?.removeClass('focus');
  }

  focusSuggestion = (i, autoScroll = true) => {
    if (!this.suggestionsDom || this.suggestionsDom.is(":hidden")) return
    const optionsDom = $(this.suggestionsDom).children()
    const maxItemNumber = optionsDom.length;
    const prevFocusIndex = this.focusIndex

    if (i <= 0) {
      this.focusIndex = i;
    } else if (i >= maxItemNumber) {
      this.focusIndex = maxItemNumber - 1;
    } else {
      this.focusIndex = i;
    }
    if (this.focusIndex !== prevFocusIndex) {
      const prevFocusItem = optionsDom.eq(prevFocusIndex);
      this.blurSuggestion(prevFocusItem);
    }

    const focusItem = optionsDom.eq(this.focusIndex);
    focusItem.addClass('focus');
    if (autoScroll){
      this.scrollIfNeeded(focusItem);
    }
  }

  getCategoryLink = (breadcrumbs, category, url) => {
    if (category === this.categoryMap.docs) {
      return {
        href: "https://docs.flexcompute.com/projects/tidy3d/en/latest/",
        target: "_blank"
      }
    } else if (!breadcrumbs.length) {
      return {
        href: url
      }
    }
    const filterQueryParams = (urlString, i) => {
      if (urlString && !urlString.startsWith("https://")) {
        urlString = 'https://www.flexcompute.com' + urlString
      }
      const url = new URL(urlString);
      if (url.search.length > 0 || url.hash.length > 0) {
        i += 1
        return filterQueryParams(breadcrumbs[breadcrumbs.length - i].url, i)
      }
      return urlString
    }
    return {
      href: filterQueryParams(breadcrumbs[breadcrumbs.length - 1].url, 1)
    }
  }

  searchEngineSetUp = () => {
    const {algoliasearch, instantsearch} = window;
    if (!algoliasearch || !instantsearch) return;
    const searchClient = algoliasearch(this.appId, this.apiKey);
    this.search = instantsearch({
      indexName: this.indexName,
      searchClient,
      stalledSearchDelay: 200,
      showLoadingIndicator: true,
      initialUiState: {
        [this.indexName]: this.initialRouteState
      },
      searchFunction:(helper) => {
        if (!this.categoryDom) {
          this.categoryDom = this.getCategoryDom()
        }
        if (!this.hitsDom) {
          this.hitsDom = this.getHitsDom()
        }
        if (!this.initial) {
          helper.search();
          this.visibleCategoryDom(this.categoryDom)
          this.visibleCategoryDom(this.hitsDom)
          this.searchPanelPositionStart()
          this.searchPanelAutoHeight()
        } else {
          this.initial = this.query.length === 0;
          this.hiddenCategoryDom(this.categoryDom, '20px')
          this.hiddenCategoryDom(this.hitsDom, false)
        }
      },
      routing: {
        stateMapping: {
          stateToRoute: (uiState) => {
            const indexUiState = uiState[this.indexName];
            return {
              q: this.query || '',
              category: this.category,
              product: this.product,
              page: indexUiState.page,
            }
          },
          routeToState: (routeState) => {
            this.query = this.query || routeState.q || ""
            this.category = this.category || routeState.category || "All"
            const facets = this.setFacetRefinement(this.category)
            return {
              [this.indexName]: {
                query: this.query,
                page: routeState.page,
                refinementList: {
                  category: facets,
                },
              },
            };
          },
        },
      },
      future: {preserveSharedStateOnUnmount: true},
    });

    this.suggestions = instantsearch({
      indexName: this.suggestionIndexName,
      searchClient,
      insights: true,
    })

    const renderATag = (name, url) => {
      if (!url) return `<span>${name}</span>`
      if (url && !url.startsWith("https://")) {
        url = 'https://www.flexcompute.com' + url
      }
      let target = "_self"
      if (!url.includes("www.flexcompute.com")) {
        target = "_blank"
      }
      return `<a target="${target}" href="${url}" class="color-dark-gray-10 color-primary-hover">${name}</a>`
    }

    const renderBreadcrumbs = (breadcrumbs, name, url) => {
      if (!breadcrumbs || !breadcrumbs.length) {
        if (!url.includes("www.flexcompute.com")) {
          return ""
        }
        return renderATag(name, url)
      }
      // if (breadcrumbs[breadcrumbs.length - 1].url && url !== breadcrumbs[breadcrumbs.length - 1].url) {
      //   breadcrumbsHTML += ` / ` + renderATag(name, url)
      // }
      return breadcrumbs
        .filter((item, index) => item.url !== url || index < breadcrumbs.length - 1)
        .map((breadcrumb, index) => {
          return renderATag(breadcrumb.name, breadcrumb.url)
        }).join(` / `)
    }

    const renderSearchBox = (renderOptions, isFirstRender) => {
      const {query, refine, clear, isSearchStalled, widgetParams} = renderOptions;

      if (isFirstRender) {
        const container = widgetParams.container;
        const input = container.querySelector('#__pg_search_search-box_input');
        const closeIcon = $(container).find('.jam-close-circle-f')
        // input.focus()
        input.addEventListener('input', event => {
          if (!this.inputted){
            this.inputted = true
          }
          this.focusIndex = -1;
          this.suggestionsDom.scrollTop(0);
          this.query = event.target.value;
          this.initial = this.initial && this.query.length === 0
          this.handleQuery();
          this.handleSuggestionQuery()
          // refine(event.target.value);
          this.toggleCloseIcon(closeIcon);
        });
        $(input).on('click', e=>{
          if (!e.originalEvent.isTrusted) return;
          this.searchPanelPositionStart();
          if (this.initial && this.query.length === 0) {
            this.searchPanelFixedHeight();
          }
          if (this.suggestionsDom.is(":hidden")) {
            this.handleSuggestionQuery();
            container.classList.add("box-shadow")
            this.openSelectDropdown();
            // this.focusSuggestion(this.focusIndex)
          }
          this.toggleCloseIcon(closeIcon)
        })
        $(input).keydown(event => {
          if (!this.suggestionsDom || this.suggestionsDom.is(":hidden")) return;
          if (event.key === "ArrowUp") {
            this.focusSuggestion(this.focusIndex - 1)
            event.preventDefault();
          }else if (event.key === "ArrowDown" || event.key === 'Tab') {
            this.focusSuggestion(this.focusIndex + 1)
            event.preventDefault();
          }else if (event.key === "Enter" || event.key === "Return"){
            this.suggestionsDom.parent().removeClass("box-shadow");
            if (this.focusIndex >= 0 && this.focusIndex < this.suggestionsDom.children().length) {
              this.query = this.suggestionsDom.children().eq(this.focusIndex).text();
              this.handleSuggestionQuery();
              this.handleQuery();
              event.preventDefault();
            }
            $(input).blur();
            this.closeSelectDropdown()
          }
        })
        this.suggestionsDom = $(container).find('.select-items')
        $(input).blur(e=>{
          this.inputted = false
          this.initial && this.query.length === 0 && this.searchPanelPositionCenter()
        })

        $(document).on("mousedown", e => {
          const target = $(e.target);
          if (!target.closest(container).length && !this.suggestionsDom.is(":hidden")) {
            container.classList.remove("box-shadow")
            this.closeSelectDropdown();
          }
        });

        $(input).change(e => {
          this.toggleCloseIcon(closeIcon)
        })

        $(closeIcon).click(event => {
          this.query = "";
          $(input).val('');
          this.handleQuery();
          this.handleSuggestionQuery();
          // refine(event.target.value);
          this.toggleCloseIcon(closeIcon);
        })
      }

      widgetParams.container.querySelector('input').value = query;
    };
    // create custom widget
    const customSearchBox = instantsearch.connectors.connectSearchBox(
      renderSearchBox
    );
    const renderHits = (renderOptions, isFirstRender) => {
      const {hits, widgetParams} = renderOptions;
      widgetParams.container.innerHTML = hits.length > 0 ? `
       <div class="row row-gap-24">
       ${hits.map(item => {
        let name = instantsearch.highlight({attribute: 'name', hit: item})
        if (!name) {
          name = instantsearch.highlight({attribute: 'title', hit: item})
        }
        const description = instantsearch.snippet({attribute: 'content', hit: item})
        const url = item.url
        let target = "_self"
        if (!url.includes("www.flexcompute.com")) {
          target = "_blank"
        }
        const breadcrumbs = item.breadcrumbs ?? []
        const {href, target: categoryTarget = "_self"} = this.getCategoryLink(breadcrumbs, item.category, url);
        return `
          <div class="col-12 col-lg-6">
            <div class="d-flex justify-content-between">
              <h3 class="font-size-18 line-height-22 font-weight-500 color-dark-3 pr-16 mb-8 d-flex align-items-start column-gap-8" style="flex: 1">
                <span class="line-height-20">&bull;</span>
                <a class="color-dark-3 color-primary-hover higher-display-ellipsis ellipsis-line-2" href="${url}" target="${target}">
                ${name}
                </a>
              </h3>
              <a href="${href}" target="${categoryTarget}" class="d-inline-block color-primary-hover category-box">${item.category}</a>
            </div>
            <p class="line-height-22 font-size-14 pl-16 pr-16 color-dark-gray higher-display-ellipsis ellipsis-line-3 mb-0" style="word-break: break-all">${description}</p>
          </div>
       `
      }).join('')}
      </div>
      ` : `There are no results for this query.`
    }
    const customHits = instantsearch.connectors.connectHits(renderHits);

    const renderPagination = (renderOptions, isFirstRender) => {
      const {
        currentRefinement,
        nbPages,
        nbHits,
        isFirstPage,
        isLastPage,
        refine,
        createURL,
        widgetParams
      } = renderOptions;
      const container = widgetParams.container
      let count = nbHits
      if (this.category.toLowerCase() === 'all'){
        count = this.count || nbHits
      }
      container.innerHTML = nbHits > 0 ? `
        <div class="d-flex justify-content-end align-items-center column-gap-8">
          <span style="color:#7A7977">${count} results</span>
          <div class="search-pagination">
            <a 
              class="${isFirstPage ? 'disabled' : ''}" 
              href="${createURL(currentRefinement - 1)}"
              data-value="${currentRefinement - 1}">
              <i class="jam jam-arrow-left color-dark-gray"></i></a>
            <a 
              class="${isLastPage ? 'disabled' : ''}" 
              href="${createURL(currentRefinement + 1)}"
              data-value="${currentRefinement + 1}">
              <i class="jam jam-arrow-right color-dark-gray"></i></a>
          </div>
          <span style="color: #7A7977">
            ${currentRefinement + 1} - ${nbPages}
          </span>
        </div>
      ` : '';
      [...container.querySelectorAll('a')].forEach(element => {
        element.addEventListener('click', event => {
          event.preventDefault();
          const nextPage = event.currentTarget.dataset.value
          if (nextPage >= 0 && nextPage < nbPages) {
            refine(nextPage)
          }
        });
      });
    };

    const customPagination = instantsearch.connectors.connectPagination(
      renderPagination
    );

    const virtualRefinementList = instantsearch.connectors.connectRefinementList(
      (renderOptions, isFirstRender) => {
        if (!isFirstRender) {
          const tabBody = document.querySelector(`div.tab-body[data-tab-name=${this.product.toLowerCase()}]`)
          if (!tabBody) return null;
          this.categories.forEach(category => {
            let nums = 0
            const facets = this.setFacetRefinement(category)
            const spanDom = tabBody.querySelector(`span.custom-radio[data-tag-value=${category}]`)
            if (facets.length === 1 && category.toLowerCase() !== 'all') {
              const {count = 0} = renderOptions.items.find(item => item.value === facets[0]) ?? {}
              nums = count
            }
            if (facets.length === 7 && category.toLowerCase() === 'all') {
              nums = renderOptions.items.reduce((acc, cur) => {
                if (facets.includes(cur.value)){
                  acc += cur.count
                }
                return acc
              }, 0)
            }
            if (nums > 999) {
              nums = '999+'
            }
            if (spanDom) {
              spanDom.setAttribute('data-result-count', `${nums}`)
              spanDom.innerHTML = `${category} (${nums})`
            }
          })
        }
        return null
      }
    );

    const virtualSuggestionRefinementList = instantsearch.connectors.connectRefinementList(() => null);

    const autocomplete = instantsearch.connectors.connectAutocomplete(
      ({indices, refine, widgetParams}, isFirstRendering) => {
        // container: search box
        const {container, onSelectChange} = widgetParams;

        const parentNode = container.parent();
        if (isFirstRendering) {
          const _self = this
          parentNode.append('<div class="select-items" style="display: none"></div>');
          const select = parentNode.find('.select-items')
          select.on("click", "div", function () {
            onSelectChange($(this).text());
            parentNode.removeClass("box-shadow")
            _self.closeSelectDropdown();
          });
          $(select).on({
            mouseenter: function() {
              // 判断当前 Item 是否处于可视范围
              if (_self.isElementInViewport($(this), select)){
                const prevFocusItem = $(select).children().eq(_self.focusIndex);
                _self.blurSuggestion(prevFocusItem)
                _self.focusIndex = Number($(this).attr("data-option-index"))
                _self.focusSuggestion(_self.focusIndex, false)
              }
            },
            mouseleave: function() {
              // _self.blurSuggestion($(this))
            }
          }, '.item')
          return;
        }
        const select = parentNode.find('.select-items')
        select.empty();
        let includeContent = false
        indices.forEach(index => {
          index.results.hits.forEach((hit, index) => {
            includeContent = true
            select.append(`<div class="item color-dark-3" data-option-index="${index}" data-select-value="${hit.query}">${hit.query}</div>`)
          });
        });
        if (!includeContent) {
          this.closeSelectDropdown();
        } else if (this.inputted && includeContent){
          this.openSelectDropdown()
        }
        // this.focusSuggestion(this.focusIndex)
      }
    );

    this.search.addWidgets([
      customSearchBox({
        container: document.querySelector('#search-box'),
      }),
      customHits({
        container: document.querySelector(`#${this.hitsContainerId}`),
      }),

      virtualRefinementList({
        attribute: 'category',
        operator: 'or'
      }),
      customPagination({
        container: document.querySelector(`#${this.hitsContainerId}-pagination`),
      }),
    ]);

    this.suggestions.addWidgets([
      virtualSuggestionRefinementList({
        attribute: 'category',
      }),
      autocomplete({
        container: $('#__pg_search_search-box_input'),
        onSelectChange: (query) => {
          this.query = query;
          this.initial = this.initial && this.query.length === 0
          this.handleSuggestionQuery();
          this.handleQuery();
        },
      }),
    ])

    // TODO
    this.suggestions.start();
    this.search.start();
    // init route parameter
    this.initialRoute();
  }

  /**
   * closeIcon: $('i.jam-close-circle-f')
   */
  toggleCloseIcon = (closeIcon) => {
    if (!closeIcon) return
    if (!this.query.length && !closeIcon.is(":hidden")) {
      closeIcon.hide();
    } else if (this.query.length > 0 && closeIcon.is(":hidden")) {
      closeIcon.show()
    }
  }

  hideElement = (element) => {
    if (element.classList.contains('d-block')) {
      element.classList.remove('d-block')
      element.classList.add('d-none')
    }
  }
  displayElement = (element) => {
    if (element.classList.contains('d-none')) {
      element.classList.add('d-block')
      element.classList.remove('d-none')
    }
  }
  setSelected = (element) => {
    if (!element.classList.contains("selected")) {
      element.classList.add("selected")
    }
  }
  removeSelected = (element) => {
    if (element.classList.contains('selected')) {
      element.classList.remove("selected")
    }
  }
  resetChildrenElements = (parentElement) => {
    if (!parentElement) return
    for (let i = 0; i < parentElement.childNodes.length; i++) {
      const element = parentElement.childNodes[i]
      if (element.nodeType === Node.ELEMENT_NODE) {
        this.removeSelected(element)
      }
    }
  }
  onCategoryChange = (event) => {
    const target = event.target
    const preCategory = this.category
    const category = target.getAttribute('data-tag-value')
    if (!category) return
    this.category = category;
    this.setFilterUiState(preCategory)
    const eventTarget = event.currentTarget;
    if (target && eventTarget && category) {
      this.selectCategoryTag(target, eventTarget, category)
    }
  }
  selectCategoryTag = (target, element, category) => {
    this.resetChildrenElements(element)
    this.setSelected(target)
    this.changeCategoryVisible(category)
  }
  onProductChange = (event) => {
    const target = event.currentTarget
    const preCategory = this.category
    const product = target.getAttribute('data-tab-name')
    if (!product) return
    this.product = product;
    this.setFilterUiState(preCategory)
    const tabHeader = target.parentElement;
    if (target && tabHeader && product) {
      this.selectProductTab(target, tabHeader, product)
    }
  }
  selectProductTab = (target, element, product) => {
    this.resetChildrenElements(element)
    this.setSelected(target)
    const tabContainer = element.nextElementSibling
    this.resetChildrenElements(tabContainer)
    const triggerTabBody = tabContainer.querySelector(`div[data-tab-name='${product}']`)
    this.setSelected(triggerTabBody)
    this.changeHitsVisible(product)
  }
  changeHitsVisible = (product) => {
    const hitsTarget = document.querySelector("#hits")
    if (!hitsTarget) return
    const productTarget = hitsTarget.querySelector(`div[data-product-name="${product}"]`)
    if (!productTarget || productTarget.classList.contains('d-black')) return;
    const childrenNodes = hitsTarget.childNodes
    for (let i = 0; i < childrenNodes.length; i++) {
      const element = childrenNodes[i]
      if (element.nodeType === Node.ELEMENT_NODE && element.classList.contains('d-block')) {
        this.hideElement(element)
      }
    }
    this.displayElement(productTarget)
  }
  changeCategoryVisible = (category) => {
    const hitsTarget = document.querySelector("#hits")
    if (!hitsTarget) return
    const productTarget = hitsTarget.querySelector(`div[data-product-name="${this.product}"]`)
    if (!productTarget) return;
    const childrenNodes = productTarget.childNodes
    if (category === 'All') {
      for (let i = 0; i < childrenNodes.length; i++) {
        const element = childrenNodes[i]
        if (element.nodeType === Node.ELEMENT_NODE && element.classList.contains('d-none')) {
          this.displayElement(element)
        }
      }
    } else {
      const _category = category.toLowerCase().split(" ").join('-')
      const categoryTarget = productTarget.querySelector(`div[data-category-name="${this.product.toLowerCase()}-${_category}"]`)
      for (let i = 0; i < childrenNodes.length; i++) {
        const element = childrenNodes[i]
        if (element.nodeType === Node.ELEMENT_NODE && element.classList.contains('d-block')) {
          this.hideElement(element)
        }
      }
      this.displayElement(categoryTarget)
    }
  }
  getURLOptions = () => {
    const urlParams = location.search.substring(1).split("&");
    if (!urlParams.length || !urlParams[0]) return
    const urlOption = {}
    urlParams.forEach(e => {
      const [key, value] = e.split("=");
      urlOption[key] = decodeURIComponent(value)
    })
    return urlOption
  }

  initialRoute = () => {
    const urlOption = this.getURLOptions();
    if (!this.query && window.location.search) {
      window.history.replaceState({}, '', window.location.href.split(window.location.search).join(''));
      // window.location.href = window.location.href.split(window.location.search).join('')
      return;
    }
    if (!urlOption && this.query) {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set('q', '');
      currentUrl.searchParams.set('product', this.product);
      currentUrl.searchParams.set('category', this.category);
      window.history.replaceState({}, '', currentUrl.href);
    } else if (urlOption) {
      const tabs = document.querySelector('.search-engine-tabs')
      if (!tabs) return
      this.product = urlOption.product
      const tabHeader = tabs.querySelector('.headers')
      const target = tabHeader.querySelector(`div[data-tab-name="${this.product}"]`)
      this.selectProductTab(target, tabHeader, this.product)
      this.category = urlOption.category
      const tabBody = tabs.querySelector('.body');
      const selectedTabContainer = tabBody.querySelector(`div[data-tab-name="${this.product}"]`)
      const eventTarget = selectedTabContainer.querySelector('div.category-selector')
      const categoryTarget = eventTarget.querySelector(`span[data-tag-value="${this.category}"]`)
      categoryTarget.click();
      this.selectCategoryTag(categoryTarget, eventTarget, this.category)
    }
  }

  handleQuery = () => {
    const facets = this.setFacetRefinement(this.category)
    this.search.helper
      .setQuery(this.query)
      .removeDisjunctiveFacetRefinement('category');
    if (facets) {
      facets.forEach(facet=>{
        this.search.helper
          .addDisjunctiveFacetRefinement('category', [facet])
      })
    }
    this.search.helper.search();
  }

  handleSuggestionQuery = () => {
    const facets = this.setFacetRefinement(this.category)
    this.suggestions.helper
      .setQuery(this.query)
      .removeDisjunctiveFacetRefinement('category');
    if (facets) {
      facets.forEach(facet=>{
        this.suggestions.helper
          .addDisjunctiveFacetRefinement('category', [facet])
      })

    }
    this.suggestions.helper.search()
  }

  setFilterUiState = (preCategory) => {
    this.handleQuery()
    this.handleSuggestionQuery()
  }

  hiddenCategoryDom = (element, minHeight = '0px') => {
    if (element){
      $(element).css('visibility', 'hidden')
      !!minHeight && $(element).css('height', minHeight)
    }
  }

  visibleCategoryDom = (element) => {
    if (element){
      $(element).css('visibility', 'visible')
      $(element).css('height', 'auto')
    }
  }

  searchPanelPositionStart = () => {
    const searchPanel = document.querySelector('.search-panel')
    if (searchPanel && !searchPanel.classList.contains("search-panel-position-start")) {
      searchPanel.classList.remove("search-panel-position-center")
      searchPanel.classList.add("search-panel-position-start")
    }
  }

  searchPanelFixedHeight = () => {
    const searchPanel = document.querySelector('.search-panel')
    if (searchPanel && !searchPanel.classList.contains("fixed-height")) {
      searchPanel.classList.remove("auto-height")
      searchPanel.classList.add("fixed-height")
    }
  }

  searchPanelPositionCenter = () => {
    const searchPanel = document.querySelector('.search-panel')
    if (searchPanel && !searchPanel.classList.contains("search-panel-position-center")) {
      searchPanel.classList.remove("search-panel-position-start")
      searchPanel.classList.add("search-panel-position-center")
    }
  }

  searchPanelAutoHeight = () => {
    const searchPanel = document.querySelector('.search-panel')
    if (searchPanel && !searchPanel.classList.contains("auto-height")) {
      searchPanel.classList.remove("fixed-height")
      searchPanel.classList.add("auto-height")
    }
  }

}

const $searchEngine = new SearchEngine()

document.addEventListener('DOMContentLoaded', e => {
  $searchEngine.searchEngineSetUp()
})
