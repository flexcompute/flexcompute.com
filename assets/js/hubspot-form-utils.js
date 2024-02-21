export function FileListItems(files) {
  const b = new ClipboardEvent("").clipboardData || new DataTransfer();
  for (let i = 0, len = files.length; i < len; i++) b.items.add(files[i]);
  return b.files;
}

export const HbsptUtils = {
  testFun: () => "Imported successfully",
  isImageFile: (file) => file.type.startsWith("image/"),
  optimizeFileSize: (number) => {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  },
  compareDates: (date1, date2) => {
    const timestamp1 = new Date(date1).getTime();
    const timestamp2 = new Date(date2).getTime();
    // 比较时间戳
    if (timestamp1 < timestamp2) {
      return -1; // date1 在 date2 之前
    } else if (timestamp1 > timestamp2) {
      return 1;  // date1 在 date2 之后
    } else {
      return 0;  // 两个日期相同
    }
  },
  /**
   * num > 0: greater than the current number of days
   * num = 0: current date
   * num < 0: less than the current number of days
   * eg: num = 2; current_date = 2023-10-29; return:  2023-10-31
   *     num = -2; current_date = 2023-10-29; return:  2023-10-27
   */
  getDefaultDate: (num) => {
    const currentData = new Date();
    currentData.setDate(new Date().getDate() + num);
    const year = currentData.getFullYear();
    const month = ('0' + (currentData.getMonth() + 1)).slice(-2);
    const day = ('0' + currentData.getDate()).slice(-2);
    return year + '-' + month + '-' + day;
  },
  setValidationFailureMsg: (fieldElement, msg = "") => {
    const $element = $(fieldElement)
    const removeMsg = () => {
      $element.removeClass("invalid error");
      $element.parent().find(".form-error-message").remove();
    }
    const isExist = () => $element.hasClass("form-error-message") && $element.find(".form-error-message").text() === msg;
    const addMsg = () => {
      if (isExist()) return
      $element.addClass("invalid error");
      const error = document.createElement('div')
      error.setAttribute('class', 'form-error-message')
      error.innerText = msg;
      $element.parent().append(error)
    }
    if (!msg) {
      removeMsg();
    } else if (msg && !isExist()) {
      removeMsg();
      addMsg();
    } else {
      addMsg();
    }
  },
  setInputMaxLength: (form, fields) => {
    fields.forEach(item => {
      const {name, length} = item
      let control = $(form).find(`input[name=${name}]`);
      if (!control.length){
        control = $(form).find(`textarea[name=${name}]`)
      }
      control.prop("maxlength", length)
    })
  },
  addDateValueChange: (element, callback) => {
    const observer = new MutationObserver(function (mutationsList) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
          callback(element.value)
        }
      }
    });
    observer.observe(element, {attributes: true});
  },
  filePreview: (file, remove) => {
    const previewItem = document.createElement("div")
    previewItem.setAttribute('class', "preview-item");
    if (file.tips) {
      previewItem.classList.add('invalid-file')
    }
    let name = file.name;
    if (name.length > 30) {
      name = name.slice(0, 27) + '...'
    }
    const fileSize = HbsptUtils.optimizeFileSize(file.size)
    if (!HbsptUtils.isImageFile(file)) {
      previewItem.innerHTML = `
        <div class="info font-size-14">
          <span title="${file.name}">${name}</span>
          <span>(${fileSize})</span>
        </div>
      `
    } else {
      previewItem.innerHTML = `
          <div class="image-content">
            <img src="${URL.createObjectURL(file)}" alt="">
            <div class="info color-dark-4">
              <span class="d-inline-block text-truncate">
                ${name}
              </span>
              <span class="d-inline-block text-truncate">${fileSize}</span>
            </div>
          </div>
        `
    }
    const closeIcon = document.createElement('i')
    closeIcon.setAttribute('class', 'jam jam-close font-size-14 close')
    closeIcon.addEventListener('click', e => {
      const _previewItem = e.target.parentNode
      _previewItem.parentNode.removeChild(_previewItem)
      remove();
    })
    previewItem.append(closeIcon)
    if (file.tips){
      const tipsDom = document.createElement("span")
      tipsDom.setAttribute('class', 'invalid-file-tips')
      tipsDom.innerHTML = file.tips
      previewItem.append(tipsDom)
    }
    return previewItem
  },
  removeLoading: () => {
    const loadingElement = document.querySelector('#hs-form-initialize.spinning');
    if (loadingElement){
      loadingElement.parentNode.removeChild(loadingElement)
    }
  },
  setSubmitLoading: (submitBtn) => {
    submitBtn.setAttribute('disabled', 'true')
    submitBtn.parentNode.style = "position: relative";
    const span = document.createElement('span');
    span.setAttribute("class", "hs-form-submit-loading");
    span.innerHTML = '<i class="icofont-spinner"></i>';
    submitBtn.parentNode.append(span)
  },
  getURLOptions:() => {
    const urlParams = location.search.substring(1).split("&");
    const urlOption = {}
    urlParams.forEach(e=>{
      const [key,value] = e.split("=");
      urlOption[key] = value
    })
    return urlOption
  },
  setSubmittedDate:(form)=>{
    if (!form) return
    const submittedControl = $(form).find("input[name='submitted']");
    if (!submittedControl.length) return;
    const currentDate = new Date().toUTCString();
    submittedControl.val(currentDate).change()
  }
};

