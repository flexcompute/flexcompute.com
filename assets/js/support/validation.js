function zf_ValidateAndSubmit(){return!!zf_CheckMandatory()&&(!!zf_ValidCheck()&&(isSalesIQIntegrationEnabled&&zf_addDataToSalesIQ(),!0))}function zf_CheckMandatory(){for(i=0;i<zf_MandArray.length;i++){var e=document.forms.form[zf_MandArray[i]];if(e)if(null!=e.nodeName)if("OBJECT"==e.nodeName){if(!zf_MandatoryCheckSignature(e))return zf_ShowErrorMsg(zf_MandArray[i]),!1}else{if(0==e.value.replace(/^\s+|\s+$/g,"").length)return e.type,e.focus(),zf_ShowErrorMsg(zf_MandArray[i]),!1;if("SELECT"==e.nodeName){if("-Select-"==e.options[e.selectedIndex].value)return e.focus(),zf_ShowErrorMsg(zf_MandArray[i]),!1}else if(("checkbox"==e.type||"radio"==e.type)&&0==e.checked)return e.focus(),zf_ShowErrorMsg(zf_MandArray[i]),!1}else{for(var r=0,t=e,n=0;n<t.length;n++)!0===t[n].checked&&r++;if(0==r)return t[0].focus(),zf_ShowErrorMsg(zf_MandArray[i]),!1}}return!0}function zf_ValidCheck(){var e=!0;for(ind=0;ind<zf_FieldArray.length;ind++){var r=document.forms.form[zf_FieldArray[ind]];if(r&&null!=r.nodeName){var t=r.getAttribute("checktype");if("c2"==t){if(!zf_ValidateNumber(r))return e=!1,r.focus(),zf_ShowErrorMsg(zf_FieldArray[ind]),!1}else if("c3"==t){if(!zf_ValidateCurrency(r)||!zf_ValidateDecimalLength(r,10))return e=!1,r.focus(),zf_ShowErrorMsg(zf_FieldArray[ind]),!1}else if("c4"==t){if(!zf_ValidateDateFormat(r))return e=!1,r.focus(),zf_ShowErrorMsg(zf_FieldArray[ind]),!1}else if("c5"==t){if(!zf_ValidateEmailID(r))return e=!1,r.focus(),zf_ShowErrorMsg(zf_FieldArray[ind]),!1}else if("c6"==t){if(!zf_ValidateLiveUrl(r))return e=!1,r.focus(),zf_ShowErrorMsg(zf_FieldArray[ind]),!1}else if("c7"==t){if(!zf_ValidatePhone(r))return e=!1,r.focus(),zf_ShowErrorMsg(zf_FieldArray[ind]),!1}else"c8"==t&&zf_ValidateSignature(r)}}return e}function zf_ShowErrorMsg(e){var r;for(errInd=0;errInd<zf_FieldArray.length;errInd++)r=zf_FieldArray[errInd].split("_")[0],document.getElementById(r+"_error").style.display="none";var t=e.split("_")[0];document.getElementById(t+"_error").style.display="block"}function zf_ValidateNumber(e){var r=e.value.replace(/^\s+|\s+$/g,"");if(null!=r&&""==!r){var t,n=!0;if("-"==r.charAt(0)&&1==r.length)return!1;for(i=0;i<r.length&&1==n;i++){if("-"==(t=r.charAt(i))&&0!=i)return!1;-1=="-0123456789".indexOf(t)&&(n=!1)}return n}return!0}function zf_ValidateDateFormat(e){var r=e.value.replace(/^\s+|\s+$/g,"");return""==r||zf_DateRegex.test(r)}function zf_ValidateCurrency(e){var r=e.value.replace(/^\s+|\s+$/g,"");if("-"==r.charAt(0)&&(r=r.substring(1,r.length)),null!=r&&""==!r){var t,n=!0;for(i=0;i<r.length&&1==n;i++)t=r.charAt(i),-1=="0123456789.".indexOf(t)&&(n=!1);return n}return!0}function zf_ValidateDecimalLength(e,r){var t=e.value;return!(t.indexOf(".")>=0)||!(t.substring(t.indexOf(".")+1).length>r)}function zf_ValidateEmailID(e){var r=0,t=e.value;if(null!=t&&""==!t){var n=t.split(",");for(i=0;i<n.length;i++){/^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/.test(n[i].replace(/^\s+|\s+$/g,""))||(r=1)}return 0==r}return!0}function zf_ValidateLiveUrl(e){var r=e.value;if(null!=r&&""!==(r=r.replace(/^\s+|\s+$/g,"")))return new RegExp("^((((h|H)(t|T)|(f|F))(t|T)(p|P)((s|S)?)://[-.\\w]*)|(((w|W){3}\\.)[-.\\w]+))(/?)([-\\w.?,:'/\\\\+=&;%$#@()!~]*)?$").test(r);return!0}function zf_ValidatePhone(e){var r=/^[+]{0,1}[()0-9-. ]+$/,t=/^[0-9]+$/,n=/^[0-9]+$/,a=/^[+][0-9]{1,4}$/,i=parseInt(e.getAttribute("phoneFormat")),f=e.value.replace(/^\s+|\s+$/g,""),l=!0;if(1===i){if("code"==e.getAttribute("valType")){if(""!=f&&!a.test(f))return!1}else{var u=r;if("2"==e.getAttribute("phoneFormatType")&&(u=t),""!=f&&!u.test(f))return l=!1}return l}if(2===i){var o=e.getAttribute("maxlength");return l=!(""==f||!n.test(f)||f.length!=o)||""==f}}function zf_ValidateSignature(e){var r=e.getAttribute("compname"),t=document.getElementById("drawingCanvas-"+r),n=zf_IsSignaturePresent(e,r,t),a=document.getElementById("hiddenSignInput-"+r);return a.value=n?t.toDataURL():"",n}function zf_MandatoryCheckSignature(e){var r=e.getAttribute("compname");return zf_IsSignaturePresent(e,r,document.getElementById("drawingCanvas-"+r))}function zf_IsSignaturePresent(e,r,t){for(var n=t.getContext("2d"),a=t.width,i=t.height,f=n.getImageData(0,0,a,i),l=f.data.length,u=!1,o=0;o<l;o++)if(f.data[o]){if(f.data[o]){u=!0;break}}else u=!1;return u}function zf_FocusNext(e,r){if(9!=r.keyCode&&16!=r.keyCode&&!(r.keyCode>=37&&r.keyCode<=40)){var t=e.getAttribute("compname"),n=e.getAttribute("name");n==t+"_countrycode"?3==e.value.length&&document.getElementsByName(t+"_first")[0].focus():n==t+"_first"&&3==e.value.length&&document.getElementsByName(t+"_second")[0].focus()}}
