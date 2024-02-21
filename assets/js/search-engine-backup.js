const configuration = {
  flexcompute: {
    appId: 'QRS96ZDV0A',
    apiKey: "f1d4ed71566b575168f1510628e1a352",
    tutorials: {
      name: 'tutorials',
      indexName: 'crawler_tidy3d-tutorial',
      containerId: 'tidy3d-tutorials'
    },
    lectures: {
      name: 'lectures',
      indexName: 'crawler_tidy3d-lectures',
      containerId: 'tidy3d-lectures'
    },
    applications: {
      name: 'applications',
      indexName: 'crawler_tidy3d-applications',
      containerId: 'tidy3d-applications'
    },
    blog: {
      name: 'blog',
      indexName: 'crawler_blog',
      containerId: 'tidy3d-blog'
    },
    website: {
      name: 'website',
      indexName: 'crawler_website',
      containerId: 'tidy3d-website'
    },
  },
  tidy3dDoc: {
    appId: "A2UM7EVJOM",
    apiKey: "24831768391ee5a5db45b2d0f263ee40",
    indexName: "crawler_tidy3d-docs",
    containerId: 'tidy3d-docs',
    name: "docs"
  }
}

class SearchEngine {
  appId = configuration.flexcompute.appId
  apiKey = configuration.flexcompute.apiKey
  search = null
  docAppId = configuration.tidy3dDoc.appId
  docApiKey = configuration.tidy3dDoc.apiKey
  docSearch = null
  product = 'tidy3d'
  category = 'All'
  initialRouteState = {
    query: '',
    page: 1,
  }
  _all = 'all'
  flexcomputeConfiguration = configuration.flexcompute
  tidy3dDocConfiguration = configuration.tidy3dDoc
  query = ""

  transformCategory = (category) => {
    return category === 'All' ? '' : category
  }

  getIndexName = (category=this.category) => {
    switch (category.toLowerCase()){
      case this.flexcomputeConfiguration.applications.name:
        return this.flexcomputeConfiguration.applications.indexName
      case this.flexcomputeConfiguration.lectures.name:
        return this.flexcomputeConfiguration.lectures.indexName
      case this.flexcomputeConfiguration.tutorials.name:
        return this.flexcomputeConfiguration.tutorials.indexName
      case this.flexcomputeConfiguration.website.name:
        return this.flexcomputeConfiguration.website.indexName
      case this.flexcomputeConfiguration.blog.name:
        return this.flexcomputeConfiguration.blog.indexName
      case this.tidy3dDocConfiguration.name:
        return this.tidy3dDocConfiguration.indexName
      default:
        return this.flexcomputeConfiguration.applications.indexName
    }
  }

  getUiState = (category=this.category) => {
    if (!this.search || !this.docSearch) return
    const indexName = this.getIndexName(category)
    switch (category.toLowerCase()){
      case this.flexcomputeConfiguration.tutorials.name:
      case this.flexcomputeConfiguration.applications.name:
      case this.flexcomputeConfiguration.lectures.name:
      case this.flexcomputeConfiguration.blog.name:
      case this.flexcomputeConfiguration.website.name:
        return this.search.getUiState()[indexName]
      case this.tidy3dDocConfiguration.name:
        return this.docSearch.getUiState()[indexName]
      default:
        return this.search.getUiState()[indexName]
    }
  }

  searchEngineSetUp = () => {
    const {algoliasearch, instantsearch} = window;
    if (!algoliasearch || !instantsearch) return;
    const searchClient = algoliasearch(this.appId, this.apiKey);
    this.search = instantsearch({
      indexName: this.getIndexName(),
      searchClient,
      initialUiState: {
        [this.getIndexName()]: this.initialRouteState
      },
      routing: {
        stateMapping: {
          stateToRoute: (uiState) => {
            const indexName = this.getIndexName()
            const indexUiState = uiState[indexName];
            return {
              q: this.query || '',
              category: this.category,
              product: this.product,
              page: indexUiState.page,
            }
          },
          routeToState: (routeState) => {
            this.query = this.query || routeState.q || ""
            this.category = this.query || routeState.category || "All"
            const indexName = this.getIndexName(routeState.category || this.category)
            return {
              [indexName]: {
                query: this.query,
                page: routeState.page,
              },
            };
          },
        },
      },
      future: {preserveSharedStateOnUnmount: true},
    });

    const docSearchClient = algoliasearch(this.docAppId, this.docApiKey);
    this.docSearch = instantsearch({
      indexName: this.tidy3dDocConfiguration.indexName,
      searchClient: docSearchClient,
      initialUiState: {
        [this.tidy3dDocConfiguration.indexName]: this.initialRouteState
      },
      routing: {
        stateMapping: {
          stateToRoute: (uiState) => {
            const indexUiState = uiState[this.tidy3dDocConfiguration.indexName];
            return {
              q: this.query || '',
              category: this.category,
              product: this.product,
              page: indexUiState.page,
            }
          },
          routeToState: (routeState) => {
            return {
              [this.tidy3dDocConfiguration.indexName]: {
                query: routeState.q || '',
                refinementList: {
                  product: [routeState.product ?? this.product],
                },
                menu: {
                  category: this.transformCategory(routeState.category ?? this.category)
                },
                page: routeState.page,
              },
            };
          },
        },
      },
      future: {preserveSharedStateOnUnmount: true},
    });

    const renderATag = (name, url) => {
      if (!url) return `<span>${name}</span>`
      if (url && !url.startsWith("https://")){
        url += 'https://www.flexcompute.com' + url
      }
      let target = "_self"
      if (!url.includes("www.flexcompute.com")){
        target = "_blank"
      }
      return `<a target="${target}" href="${url}" class="color-dark-gray-10 color-primary-hover">${name}</a>`
    }

    const renderBreadcrumbs = (breadcrumbs, name, url) =>{
      if (!breadcrumbs || !breadcrumbs.length) return '';
      let breadcrumbsHTML = breadcrumbs.map((breadcrumb, index)=>{
        return renderATag(breadcrumb.name, breadcrumb.url)
      }).join(`<i class="jam jam-chevron-right"></i>`)

      if (breadcrumbs[breadcrumbs.length -1].url && url !== breadcrumbs[breadcrumbs.length -1].url){
        breadcrumbsHTML += `<i class="jam jam-chevron-right"></i>` + renderATag(name, url)
      }
      return breadcrumbsHTML
    }

    const renderSearchBox = (renderOptions, isFirstRender) => {
      const {query, refine, clear, isSearchStalled, widgetParams} = renderOptions;

      if (isFirstRender) {
        const container = widgetParams.container
        const input = container.querySelector('#__pg_search_search-box_input')
        input.focus()
        input.addEventListener('input', event => {
          this.query = event.target.value
          this.docSearch.helper.setQuery(this.query).search()
          this.search.helper.setQuery(this.query).search()
          // refine(event.target.value);
        });
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
        if (!url.includes("www.flexcompute.com")){
          target = "_blank"
        }
        const breadcrumbs = item.breadcrumbs ?? []
        return `
          <div class="col-12 col-lg-6 mb-24">
            <h3 class="font-size-20 font-weight-500 color-dark-3 pr-16 mb-8 d-flex align-items-start column-gap-8">
              <span class="line-height-20">&bull;</span>
              <a class="color-dark-3 color-primary-hover higher-display-ellipsis ellipsis-line-2" href="${url}" target="${target}">
              ${name}
              </a>
            </h3>
            <span class="d-flex pl-16 pr-16 font-size-14 justify-content-start align-items-center mb-8 color-dark-gray-10 higher-display-ellipsis ellipsis-line-2">
              ${renderBreadcrumbs(breadcrumbs, name, url)}
            </span>
            <p class="line-height-24 pl-16 pr-16 color-dark-gray mb-0" style="word-break: break-all">${description}</p>
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
      container.innerHTML = nbHits > 0 ? `
        <div class="d-flex justify-content-end align-items-center column-gap-8">
          <span style="color:#7A7977">${nbHits} results</span>
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

    this.search.addWidgets([
      customSearchBox({
        container: document.querySelector('#search-box'),
      }),
      customHits({
        container: document.querySelector(`#${this.flexcomputeConfiguration.applications.containerId}`),
      }),
      instantsearch.widgets.configure({
        hitsPerPage: 8,
      }),
      customPagination({
        container: document.querySelector(`#${this.flexcomputeConfiguration.applications.containerId}-pagination`),
      }),
      instantsearch.widgets
        .index({indexName: this.flexcomputeConfiguration.tutorials.indexName})
        .addWidgets([
          instantsearch.widgets.configure({
            hitsPerPage: 8,
          }),
          customHits({
            container: document.querySelector(`#${this.flexcomputeConfiguration.tutorials.containerId}`),
          }),
          customPagination({
            container: document.querySelector(`#${this.flexcomputeConfiguration.tutorials.containerId}-pagination`),
          }),
        ]),
      instantsearch.widgets
        .index({indexName: this.flexcomputeConfiguration.lectures.indexName})
        .addWidgets([
          instantsearch.widgets.configure({
            hitsPerPage: 8,
          }),
          customHits({
            container: document.querySelector(`#${this.flexcomputeConfiguration.lectures.containerId}`),
          }),
          customPagination({
            container: document.querySelector(`#${this.flexcomputeConfiguration.lectures.containerId}-pagination`),
          }),
        ]),
      instantsearch.widgets
        .index({indexName: this.flexcomputeConfiguration.blog.indexName})
        .addWidgets([
          instantsearch.widgets.configure({
            hitsPerPage: 8,
          }),
          customHits({
            container: document.querySelector(`#${this.flexcomputeConfiguration.blog.containerId}`),
          }),
          customPagination({
            container: document.querySelector(`#${this.flexcomputeConfiguration.blog.containerId}-pagination`),
          }),
        ]),
      instantsearch.widgets
        .index({indexName: this.flexcomputeConfiguration.website.indexName})
        .addWidgets([
          instantsearch.widgets.configure({
            hitsPerPage: 8,
          }),
          customHits({
            container: document.querySelector(`#${this.flexcomputeConfiguration.website.containerId}`),
          }),
          customPagination({
            container: document.querySelector(`#${this.flexcomputeConfiguration.website.containerId}-pagination`),
          }),
        ]),
    ]);

    this.docSearch.addWidgets([
      customSearchBox({
        container: document.querySelector('#search-box'),
      }),
      customHits({
        container: document.querySelector(`#${this.tidy3dDocConfiguration.containerId}`),
      }),
      instantsearch.widgets.configure({
        hitsPerPage: 8,
      }),
      customPagination({
        container: document.querySelector(`#${this.tidy3dDocConfiguration.containerId}-pagination`),
      }),
    ])

    this.search.start();
    this.docSearch.start();
    // init route parameter
    this.initialRoute();
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
    if (productTarget.classList.contains('d-black')) return;
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
    if (!urlOption) {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set('q', '');
      currentUrl.searchParams.set('product', this.product);
      currentUrl.searchParams.set('category', this.category);
      window.history.replaceState({}, '', currentUrl.href);
    } else {
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

  setFilterUiState = (preCategory) => {
    const triggerDocSearch = () => {
      const indexName = this.getIndexName()
      const currentUiState = this.search.getUiState()
      currentUiState[indexName] = {
        ...(currentUiState[indexName] ?? {}),
        query: this.query
      }
      this.docSearch.setUiState(currentUiState)
      this.docSearch.helper.setQuery(this.query).setPage(0).search()
    }
    const triggerSearch = () => {
      const indexName = this.getIndexName()
      const currentUiState = this.search.getUiState()
      currentUiState[indexName] = {
        ...(currentUiState[indexName] ?? {}),
        query: this.query
      }
      this.search.setUiState(currentUiState)
      this.search.helper.setQuery(this.query).setPage(0).search()
    }
    if (this.category.toLowerCase() === this.tidy3dDocConfiguration.name) {
      triggerDocSearch()
    } else if (this.category.toLowerCase() === this._all) {
      triggerDocSearch()
      triggerSearch()
    } else {
      triggerSearch()
    }
  }
}

const $searchEngine = new SearchEngine()

document.addEventListener('DOMContentLoaded', e => {
  $searchEngine.searchEngineSetUp()
})
