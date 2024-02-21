const copied = (function (){
  const resetElementTooltips = (element) => {
    $(element).tooltip('dispose').tooltip({
      template: '<div class="tooltip copy-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    })
  }

  const canBeDisplay = element => {
    const opacityElement = $(element).css('opacity');
    const isHover = $(element).attr('data-hover-state');
    if (Number(opacityElement) === 1 && isHover === 'true'){
      $(element).tooltip('show');
    }else {
      $(element).tooltip('hide');
    }
  }

  const setCopied = (element) => {
    if (!element.classList.contains('copied')){
      element.classList.add('copied')
      element.setAttribute('title', 'Copied!')
      resetElementTooltips(element)
      canBeDisplay(element)
    }
  }
  const resetCopy = (element) => {
    if (element.classList.contains('copied')){
      element.classList.remove('copied')
      element.setAttribute('title', 'Copy')
      resetElementTooltips(element)
      canBeDisplay(element)
    }
  }
  const onCopy = (event) => {
    event.stopPropagation();
    // copybtn
    const triggerElement = event.currentTarget
    const parent = event.currentTarget.parentElement;
    const codeFigure = parent?.getElementsByClassName('highlight')[0];
    if (codeFigure){
      const range = document.createRange();
      range.selectNode(codeFigure);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      // Copy the selected text to the clipboard
      document.execCommand('copy');
      // Clean up the selection
      selection.removeAllRanges();
      setCopied(triggerElement);
      setTimeout(()=>{resetCopy(triggerElement)}, 1000);
    }
  }

  const initialTooltips = () => {
    $(document).ready(function(){
      $('.tooltip').tooltip({
        template: '<div class="tooltip copy-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
      })
    });
  }
  initialTooltips()

  const onMouseEnter = (event) => {
    const target = event.target
    target.setAttribute('data-hover-state', 'true')
  }
  const onMouseLeave = (event) =>{
    const target = event.target
    target.setAttribute('data-hover-state', 'false')
  }
  return {
    onCopy,
    onMouseEnter,
    onMouseLeave
  }
})()
