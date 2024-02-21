function handleDownload(link) {
  const download = (url) => {
    const elink = document.createElement('a')
    elink.href = url
    elink.download = ""
    elink.style.display = 'none'
    document.body.appendChild(elink)
    elink.click()
    setTimeout(() => {
      document.body.removeChild(elink)
    }, 5 * 1000)
  }
  if (link.indexOf("#&#") > -1) {
    const links = link.split("#&#");
    links.forEach(item => download(item))
  } else {
    download(link)
  }
}
