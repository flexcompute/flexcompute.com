function handleChangeLogClickForMore(id){
  const MAX_HEIGHT = 588
  const handleElement = document.querySelector(`#${id}`);
  const maskElement = document.querySelector(`#${id}-mask`);
  if (!handleElement || !maskElement) return;
  const clientHeight = handleElement.clientHeight;
  const scrollHeight = handleElement.scrollHeight;
  const parentElement = maskElement.parentElement;
  if (clientHeight < MAX_HEIGHT){
    return
  }
  if (clientHeight === MAX_HEIGHT && scrollHeight > clientHeight) {
    handleElement.style.height = `${scrollHeight - 40}px`;
    maskElement.style.display = 'none';
    parentElement.style.top="0";
  } else {
    handleElement.style.height = `${MAX_HEIGHT}px`
    maskElement.style.display = 'block';
    parentElement.style.top="-100px";
  }
}

function checkScrollHeight(id){
  const MAX_HEIGHT = 588
  const handleElement = document.querySelector(`#${id}`);
  const maskElement = document.querySelector(`#${id}-mask`);
  if (!handleElement || !maskElement) return;
  const clientHeight = handleElement.clientHeight;
  const scrollHeight = handleElement.scrollHeight;
  if (scrollHeight <= MAX_HEIGHT){
    handleElement.style.height = `${clientHeight + 20}px`
    maskElement.style.display = 'none';
  }else {
    handleElement.style.height = `${MAX_HEIGHT}px`
    maskElement.style.display = 'block';
  }
}

function initialMask(){
  const ids = [
    'tidy3d-change-logs',
    'tidy3d-web-client-change-logs',
    'flow360-change-logs',
    'flow360-web-client-change-logs'
  ]
  ids.forEach(id=>{
    checkScrollHeight(id)
  })
}
(function(){
  document.addEventListener("DOMContentLoaded", function () {
    const releaseElements = document.querySelectorAll('.stop-propagation')
    if (releaseElements){
      for (let i = 0; i< releaseElements.length; i ++) {
        const element = releaseElements[i]
        if (element){
          element.addEventListener('click',e=>{
            e.stopPropagation()
          })
        }
      }
    }
    initialMask()
  })
})()
