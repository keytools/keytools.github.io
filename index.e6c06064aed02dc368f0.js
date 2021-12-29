(()=>{"use strict";const t=function(){function t(t,n,e){this.name=t,this.icon=n,this.url=e}return t.getTools=function(){var n=[];return n.push(new t("Improve Typing Skills","clarity:keyboard-line","/improve-typing-skills")),n.push(new t("Color Picker","ant-design:bg-colors-outlined","/color-picker")),n.push(new t("JSON Converter","mdi:code-json","/json-converter")),n.push(new t("Image Converter","bi:card-image","/image-converter")),n.push(new t("Regex Tester","file-icons:regex","/regex-tester")),n.push(new t("Password Generator","ic:baseline-password","/password-generator")),n.push(new t("Random Text Generator","bi:body-text","/random-text-generator")),n.push(new t("UUID Generator","mdi:identifier","/uuid-generator")),n.push(new t("Hash Generator","eva:hash-outline","/hash-generator")),n.push(new t("Cookies Policy Generator","fluent:cookies-24-regular","/cookies-policy-generator")),n.push(new t("Free Images","bi:images","/free-images")),n.push(new t("Free Musics","ic:outline-library-music","/free-musics")),n},t}();var n,e=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var o=Array(t),r=0;for(n=0;n<e;n++)for(var i=arguments[n],s=0,a=i.length;s<a;s++,r++)o[r]=i[s];return o},o=function(){function t(){}return t.prototype.insertHtml=function(t,n){this.preInsertHtml(),this._containerId=this.generateId(),this.addContainerDiv()?t.insertAdjacentHTML(n,'<div id="'+this._containerId+'"}">'+this.toHtml()+"</div>"):t.insertAdjacentHTML(n,this.toHtml()),this.postInsertHtml()},t.prototype.update=function(){document.getElementById(this._containerId).innerHTML=this.toHtml()},t.prototype.preDestroy=function(){},t.prototype.stopPropagation=function(t){t.stopPropagation()},t.prototype.dispatchCustomEvent=function(t,n){void 0===n&&(n={}),document.dispatchEvent(new CustomEvent(t,{detail:n}))},t.prototype.addCustomEventListener=function(t,n){document.addEventListener(t,n)},t.prototype.delayCallback=function(t,n){var o=null;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(o),o=setTimeout(t.bind.apply(t,e([this],r)),n||0)}},t.prototype.generateId=function(){return"_"+Math.random().toString(36).substr(2,9)},t.prototype.getComponentName=function(){return this.constructor.name},t.prototype.addContainerDiv=function(){return!0},t}(),r=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=function(t){function n(n){var e=t.call(this)||this;return e.summary=n,e}return r(n,t),n.prototype.preInsertHtml=function(){},n.prototype.toHtml=function(){return'\n      <a class="tool-summary-square-container" href="'+this.summary.url+'">\n        <span class="iconify" data-icon="'+this.summary.icon+'"></span>\n        <span class="name">'+this.summary.name+"</span>\n      </a>\n    "},n.prototype.postInsertHtml=function(){},n}(o),s=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),a=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return s(n,t),n.prototype.preInsertHtml=function(){this._getComponents().forEach((function(t){return t.preInsertHtml()}))},n.prototype.toHtml=function(){return"\n      "+this.getContainerBeginTag()+"\n      "+this._getComponents().map((function(t){return t.toHtml()})).join("")+"\n      "+this.getContainerEndTag()+"\n    "},n.prototype.postInsertHtml=function(){this._getComponents().forEach((function(t){return t.postInsertHtml()}))},n.prototype._getComponents=function(){return this.componentsArray||(this.componentsArray=this.getComponents()),this.componentsArray},n}(o),c=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),u=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return c(e,n),e.prototype.getComponents=function(){return t.getTools().map((function(t){return new i(t)}))},e.prototype.getContainerBeginTag=function(){return'<div class="tools-summary-mosaic-container">'},e.prototype.getContainerEndTag=function(){return"</div>"},e}(a),p=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),l=function(t){function n(n,e,o){void 0===o&&(o="0deg");var r=t.call(this)||this;return r.icon=n,r.title=e,r.rotate=o,r.callbacks=[],r}return p(n,t),n.prototype.preInsertHtml=function(){this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <button class="icon-button" id="'+this.buttonId+'" title="'+this.title+'">\n        <span class="iconify" data-icon="'+this.icon+'" data-rotate="'+this.rotate+'"></span>\n      </button>\n    '},n.prototype.postInsertHtml=function(){this.button=document.getElementById(this.buttonId),this.button.addEventListener("click",this.handleClickEvent.bind(this))},n.prototype.onClick=function(t){this.callbacks.push(t)},n.prototype.show=function(){this.button.classList.remove("hide")},n.prototype.hide=function(){this.button.classList.add("hide")},n.prototype.focus=function(){this.button.focus()},n.prototype.handleClickEvent=function(t){this.callbacks.forEach((function(t){return t()}))},n}(o),h=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),d="dark",f=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return h(n,t),n.prototype.preInsertHtml=function(){this.changeToDarkThemeButtonDomElement=new l("bx:bx-moon","Toggle Theme"),this.changeToLightThemeButtonDomElement=new l("heroicons-solid:sun","Toggle Theme"),this.changeToDarkThemeButtonDomElement.preInsertHtml(),this.changeToLightThemeButtonDomElement.preInsertHtml()},n.prototype.toHtml=function(){return"\n      "+this.changeToDarkThemeButtonDomElement.toHtml()+"\n      "+this.changeToLightThemeButtonDomElement.toHtml()+"\n    "},n.prototype.postInsertHtml=function(){this.changeToDarkThemeButtonDomElement.postInsertHtml(),this.changeToLightThemeButtonDomElement.postInsertHtml(),this.changeToDarkThemeButtonDomElement.onClick(this.handleToggleThemeClickEvent.bind(this)),this.changeToLightThemeButtonDomElement.onClick(this.handleToggleThemeClickEvent.bind(this)),this.updateInnerHTML()},n.prototype.updateInnerHTML=function(){this.changeToDarkThemeButtonDomElement.hide(),this.changeToLightThemeButtonDomElement.hide(),J.isDarkTheme()?this.changeToLightThemeButtonDomElement.show():this.changeToDarkThemeButtonDomElement.show()},n.prototype.handleToggleThemeClickEvent=function(){J.toggleBodyClass(d),this.dispatchCustomEvent("change-theme-event"),this.updateInnerHTML(),this.changeToDarkThemeButtonDomElement.focus(),this.changeToLightThemeButtonDomElement.focus()},n}(o),m="cookies-consentement-already-shown-local-storage-key-v1.0";const y=function(){function t(){}return t.isAlreadyShown=function(){return"true"==(localStorage.getItem(m)||"false")},t.isNotAlreadyShown=function(){return!t.isAlreadyShown()},t.setAlreadyShown=function(){localStorage.setItem(m,"true")},t}();var g,v=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),I=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return v(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <div id="'+this.containerId+'" class="cookies-consentement-container">\n        <div class="cookies-consentement-msg">\n          <span class="iconify" data-icon="ant-design:info-circle-outlined"></span>\n          <p>We use cookies and local storage to improve your experience on our website and for advertising. To find out more, read our <a href="/cookies-and-localstorage-policy.html" target="_blank">Cookies and Local Storage policy</a></p>\n        </div>\n        <button id="'+this.buttonId+'">Got it</button> \n      </div>\n    '},n.prototype.postInsertHtml=function(){var t=this;this.container=document.getElementById(this.containerId),this.button=document.getElementById(this.buttonId),setTimeout((function(){y.isAlreadyShown()?t.container.classList.add("hide"):t.container.classList.add("active")}),2e3),this.button.addEventListener("click",this.handleButtonClickEvent.bind(this))},n.prototype.handleButtonClickEvent=function(){this.container.classList.remove("active"),y.setAlreadyShown()},n}(o),b=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),_=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return b(n,t),n.prototype.preInsertHtml=function(){},n.prototype.toHtml=function(){return"\n      <footer>\n        <p>© 2021 myonlinetools.github.io   </p>\n      </footer>\n    "},n.prototype.postInsertHtml=function(){},n}(o),H=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),w=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return H(n,t),n.prototype.preInsertHtml=function(){},n.prototype.toHtml=function(){return"\n      <div class='left'>\n        <a class=\"logo\" href='/'>\n          <img src='/logo.png' alt='logo' />\n          <span>My Tools</span>\n        </a>\n      </div>\n    "},n.prototype.postInsertHtml=function(){},n.prototype.addContainerDiv=function(){return!1},n}(o),E=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();!function(t){t.PRIMARY="primary",t.SECONDARY="secondary"}(g||(g={}));var k=function(t){function n(n,e,o){void 0===e&&(e=g.PRIMARY),void 0===o&&(o="button");var r=t.call(this)||this;return r.label=n,r.style=e,r.type=o,r.callbacks=[],r}return E(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <span id="'+this.containerId+'" class="button-container">\n        <button id="'+this.buttonId+'" class="'+this.style+'" type="'+this.type+'">'+this.label+"</button>\n      </span>\n    "},n.prototype.postInsertHtml=function(){document.getElementById(this.buttonId).addEventListener("click",this.handleClickEvent.bind(this))},n.prototype.onClick=function(t){this.callbacks.push(t)},n.prototype.handleClickEvent=function(){this.callbacks.forEach((function(t){return t()}))},n}(o),C=function(){function t(){this.container=document.createElement("div"),this.container.classList.add("toast-container"),document.body.appendChild(this.container)}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.prototype.info=function(t){this.container.classList.remove("error","warn","info"),this.container.classList.add("info"),this.show(t)},t.prototype.warn=function(t){this.container.classList.remove("error","warn","info"),this.container.classList.add("warn"),this.show(t)},t.prototype.error=function(t){this.container.classList.remove("error","warn","info"),this.container.classList.add("error"),this.show(t)},t.prototype.show=function(t){this.container.innerHTML=t,this.container.style.right="2rem",setTimeout(this.hide.bind(this),4e3)},t.prototype.hide=function(){this.container.style.right="-30rem"},t.instance=null,t}(),O=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),T=function(t){function n(n){var e=t.call(this)||this;return e.value=n,e.validators=[],e.callbacks=[],e}return O(n,t),n.prototype.preInsertHtml=function(){this.inputId=this.generateId(),this.containerId=this.generateId(),this.errorMessageId=this.generateId()},n.prototype.toHtml=function(){return'\n      <span id="'+this.containerId+'" class="input-container">\n        <input id="'+this.inputId+'" class="input" type="text" value="'+this.value+'"/>\n        <span id="'+this.errorMessageId+'" class="input-error-message"></span>\n      </span>\n    '},n.prototype.postInsertHtml=function(){this.input=document.getElementById(this.inputId),this.container=document.getElementById(this.containerId),this.errorMessage=document.getElementById(this.errorMessageId),this.input.addEventListener("change",this.onInputChange.bind(this)),this.input.addEventListener("keyup",this.onInputKeyUp.bind(this))},n.prototype.reset=function(t){this.input.value=t},n.prototype.blur=function(){this.input.blur()},n.prototype.focus=function(){this.input.focus()},n.prototype.onValidate=function(t){this.validators.push(t)},n.prototype.onUpdate=function(t){this.callbacks.push(t)},n.prototype.isNotValid=function(){return this.container.classList.contains("error")||!this.getValue()},n.prototype.getValue=function(){return this.input.value},n.prototype.dispatchChangeEvent=function(){this.input.dispatchEvent(new Event("change"))},n.prototype.onInputChange=function(){var t=this;try{this.validators.forEach((function(n){return n(t.input.value)})),this.container.classList.remove("error")}catch(t){return this.container.classList.add("error"),void(this.errorMessage.innerHTML=t.message)}this.callbacks.forEach((function(n){return n(t.input.value)}))},n.prototype.onInputKeyUp=function(){var t=this;try{this.validators.forEach((function(n){return n(t.input.value)})),this.container.classList.remove("error")}catch(t){return this.container.classList.add("error"),void(this.errorMessage.innerHTML=t.message)}},n}(o),L=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),B=function(t){function n(n,e,o,r){void 0===o&&(o=!0),void 0===r&&(r=Number.MAX_VALUE);var i=t.call(this,e)||this;return i.label=n,i.mandatory=o,i.maxLength=r,i}return L(n,t),n.prototype.toHtml=function(){return'\n      <span class="input-label">\n        '+this.label+"\n        "+(this.mandatory?'<span class="input-label-mandatory">*</span>':"")+"\n      </span>\n      "+t.prototype.toHtml.call(this)+"\n    "},n.prototype.postInsertHtml=function(){var n=this;t.prototype.postInsertHtml.call(this),this.mandatory&&this.onValidate((function(t){if(!t)throw new Error("Required")})),this.onValidate((function(t){if(t&&t.length>n.maxLength)throw new Error("Max length exceeded: "+n.maxLength+" characters")}))},n}(T),A=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),P=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.callbacks=[],n}return A(n,t),n.prototype.preInsertHtml=function(){this.closeButton=new l("clarity:window-close-line","close"),this.closeButton.preInsertHtml(),this.containerId=this.generateId(),this.sidePanelId=this.generateId(),this.backgroundId=this.generateId()},n.prototype.toHtml=function(){return'\n      <div id="'+this.containerId+'" class="container">\n        <div class="side-panel-container '+this.getSidePanelCssClass()+'">\n          <div id="'+this.sidePanelId+'" class="side-panel">\n            <div class="side-panel-header">\n              <h2 class="side-panel-title">'+this.getTitle()+"</h2>\n              "+this.closeButton.toHtml()+"\n            </div>\n            "+this.getBody()+'\n          </div>\n        </div>\n        <div id="'+this.backgroundId+'" class="side-panel-background">\n        </div>\n      </div>\n    '},n.prototype.postInsertHtml=function(){this.container=document.getElementById(this.containerId),this.background=document.getElementById(this.backgroundId),this.sidePanel=document.getElementById(this.sidePanelId),this.background.addEventListener("click",this.handleSidePanelBackgroundClickEvent.bind(this)),this.container.addEventListener("keydown",this.handleKeyDownEvent.bind(this)),this.closeButton.postInsertHtml(),this.closeButton.onClick(this.handleCloseIconClickEvent.bind(this));var t=this.container.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]');this.firstFocusableElement=t[0],this.lastFocusableElement=t[t.length-1]},n.prototype.onClose=function(t){this.callbacks.push(t)},n.prototype.open=function(){this.focusedElementBeforeOpen=document.activeElement,this.sidePanel.style.display="flex",this.container.classList.add("active"),this.dispatchCustomEvent("open-side-panel-event")},n.prototype.close=function(){var t=this;this.focusedElementBeforeOpen.focus(),this.container.classList.remove("active"),this.dispatchCustomEvent("close-side-panel-event"),this.callbacks.forEach((function(t){return t()})),setTimeout((function(){return t.sidePanel.style.display="none"}),500)},n.prototype.isClosed=function(){return this.container.classList.contains("hide")},n.prototype.handleCloseIconClickEvent=function(){this.close()},n.prototype.handleKeyDownEvent=function(t){this.isClosed()||(27==t.keyCode&&this.close(),9==t.keyCode&&(t.shiftKey?document.activeElement===this.firstFocusableElement&&(t.preventDefault(),this.lastFocusableElement.focus()):document.activeElement===this.lastFocusableElement&&(t.preventDefault(),this.firstFocusableElement.focus())))},n.prototype.handleSidePanelBackgroundClickEvent=function(t){-1==t.composedPath().indexOf(this.sidePanel)&&this.close()},n}(o),x=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),j=function(t){function n(n,e,o){void 0===e&&(e="100%"),void 0===o&&(o="10rem");var r=t.call(this)||this;return r.validators=[],r.callbacks=[],r.input={value:n,cssWidth:e,cssHeight:o},r}return x(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.textAreaId=this.generateId(),this.errorMessageId=this.generateId()},n.prototype.toHtml=function(){return'\n      <span id="'+this.containerId+'" class="textarea-container">\n        <textarea id="'+this.textAreaId+'" class="textarea" style="width: '+this.input.cssWidth+"; max-width: "+this.input.cssWidth+"; height: "+this.input.cssHeight+'" >'+this.input.value+'</textarea>\n        <span id="'+this.errorMessageId+'" class="textarea-error-message"></span>\n      </span>\n    '},n.prototype.postInsertHtml=function(){this.textArea=document.getElementById(this.textAreaId),this.container=document.getElementById(this.containerId),this.errorMessage=document.getElementById(this.errorMessageId),this.textArea.addEventListener("change",this.onTextAreaChange.bind(this)),this.textArea.addEventListener("keyup",this.onTextAreaKeyUp.bind(this))},n.prototype.reset=function(t){void 0===t&&(t=""),this.textArea.value=t},n.prototype.blur=function(){this.textArea.blur()},n.prototype.focus=function(){this.textArea.focus()},n.prototype.onValidate=function(t){this.validators.push(t)},n.prototype.onUpdate=function(t){this.callbacks.push(t)},n.prototype.getValue=function(){return this.textArea.value},n.prototype.setErrorMessage=function(t){this.container.classList.add("error"),this.errorMessage.innerHTML=t},n.prototype.isNotValid=function(){return this.container.classList.contains("error")||!this.getValue()},n.prototype.isEmpty=function(){return!this.getValue()},n.prototype.dispatchChangeEvent=function(){this.textArea.dispatchEvent(new Event("change"))},n.prototype.onTextAreaChange=function(){var t=this;try{this.validators.forEach((function(n){return n(t.textArea.value)})),this.container.classList.remove("error")}catch(t){return this.container.classList.add("error"),void(this.errorMessage.innerHTML=t.message)}this.callbacks.forEach((function(n){return n(t.textArea.value)}))},n.prototype.onTextAreaKeyUp=function(){var t=this;try{this.validators.forEach((function(n){return n(t.textArea.value)})),this.container.classList.remove("error")}catch(t){return this.container.classList.add("error"),void(this.errorMessage.innerHTML=t.message)}},n}(o),M=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),D=function(t){function n(n,e,o,r,i,s){void 0===o&&(o=!0),void 0===r&&(r=Number.MAX_VALUE),void 0===i&&(i="100%"),void 0===s&&(s="10rem");var a=t.call(this,e,i,s)||this;return a.label=n,a.mandatory=o,a.maxLength=r,a}return M(n,t),n.prototype.toHtml=function(){return'\n    <span class="textarea-label">\n      '+this.label+"\n      "+(this.mandatory?'<span class="textarea-label-mandatory">*</span>':"")+"\n    </span>\n      "+t.prototype.toHtml.call(this)+"\n    "},n.prototype.postInsertHtml=function(){var n=this;t.prototype.postInsertHtml.call(this),this.mandatory&&this.onValidate((function(t){if(!t)throw new Error("Required")})),this.onValidate((function(t){if(t&&t.length>n.maxLength)throw new Error("Max length exceeded: "+n.maxLength+" characters")}))},n}(j),S=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),V=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.emailInput=new B("Email","",!0,100),n.messageInput=new D("Message","",!0,500,"100%","25rem"),n.submitButton=new k("Submit",g.PRIMARY,"submit"),n.cancelButton=new k("Cancel",g.SECONDARY),n.httpClient=new XMLHttpRequest,n.toastClient=C.getInstance(),n}return S(n,t),n.prototype.getTitle=function(){return"Your feedback"},n.prototype.getBody=function(){return'\n      <form class="feedback-form">\n        <div class="feedback-form-inputs">\n          <div class="email-input">'+this.emailInput.toHtml()+'</div>\n          <div class="message-input">'+this.messageInput.toHtml()+'</div>\n        </div>\n        <div class="feedback-form-buttons">\n          '+this.cancelButton.toHtml()+"\n          "+this.submitButton.toHtml()+"\n        </div>\n      </form>\n    "},n.prototype.getSidePanelCssClass=function(){return"feedback-form-side-panel"},n.prototype.preInsertHtml=function(){t.prototype.preInsertHtml.call(this),this.emailInput.preInsertHtml(),this.messageInput.preInsertHtml(),this.submitButton.preInsertHtml(),this.cancelButton.preInsertHtml()},n.prototype.postInsertHtml=function(){t.prototype.postInsertHtml.call(this),this.emailInput.postInsertHtml(),this.messageInput.postInsertHtml(),this.emailInput.onValidate(this.validateEmail.bind(this)),this.submitButton.postInsertHtml(),this.cancelButton.postInsertHtml(),this.cancelButton.onClick(this.close.bind(this)),this.submitButton.onClick(this.handleSubmitButtonClickEvent.bind(this))},n.prototype.open=function(){t.prototype.open.call(this),this.emailInput.focus()},n.prototype.validateEmail=function(t){if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()))throw Error("Not valid email")},n.prototype.handleSubmitButtonClickEvent=function(){var t=this;if(this.emailInput.isNotValid()||this.messageInput.isNotValid())return this.emailInput.dispatchChangeEvent(),void this.messageInput.dispatchChangeEvent();var n={email:this.emailInput.getValue(),message:this.messageInput.getValue()};this.httpClient.open("POST","https://app.99inbound.com/api/e/JeIE6Bmh",!0),this.httpClient.setRequestHeader("Content-Type","application/json;charset=UTF-8"),this.httpClient.send(JSON.stringify(n)),this.close(),setTimeout((function(){return t.toastClient.info("Thank you for your feedback!")}),500)},n}(P),N=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),F=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.feedbackIcon=new l("ant-design:message-outlined","Your feedback helps us help you better!"),n.feedbackForm=new V,n}return N(n,t),n.prototype.preInsertHtml=function(){this.feedbackIcon.preInsertHtml(),this.feedbackForm.preInsertHtml()},n.prototype.toHtml=function(){return"\n      "+this.feedbackIcon.toHtml()+"\n      "+this.feedbackForm.toHtml()+"\n    "},n.prototype.postInsertHtml=function(){var t=this;this.feedbackIcon.postInsertHtml(),this.feedbackForm.postInsertHtml(),this.feedbackIcon.onClick((function(){return t.feedbackForm.open()}))},n}(o),R=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),U=function(t){function n(){var n=t.call(this)||this;return n.navbarLeft=new w,n.changeThemeIcon=new f,n.feedbackIcon=new F,n}return R(n,t),n.prototype.preInsertHtml=function(){this.navbarLeft.preInsertHtml(),this.changeThemeIcon.preInsertHtml(),this.feedbackIcon.preInsertHtml()},n.prototype.toHtml=function(){return'\n      <nav class="'+this.getNavCssClass()+'">\n        '+this.navbarLeft.toHtml()+"\n        <div class='right'>\n          "+this.getAdditionalRightComponents()+"\n          "+this.feedbackIcon.toHtml()+"\n          "+this.changeThemeIcon.toHtml()+"\n        </div>\n      </nav>\n    "},n.prototype.postInsertHtml=function(){this.navbarLeft.postInsertHtml(),this.changeThemeIcon.postInsertHtml(),this.feedbackIcon.postInsertHtml()},n.prototype.addContainerDiv=function(){return!1},n.prototype.getAdditionalRightComponents=function(){return""},n.prototype.getNavCssClass=function(){return""},n}(o),q=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),K=function(t){function n(n){var e=t.call(this)||this;return e.toolSummary=n,e}return q(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId()},n.prototype.toHtml=function(){return'\n      <a id="'+this.containerId+'" class="tool-summary-menu-item-container" href="'+this.toolSummary.url+'" title="'+this.toolSummary.name+'">\n        <span class="iconify" data-icon="'+this.toolSummary.icon+'"></span>\n        <span class="name">'+this.toolSummary.name+"</span>\n      </a>\n  "},n.prototype.postInsertHtml=function(){if("/coming-soon.html"!=window.location.pathname){var t=this.toolSummary.url.replace(".html","");window.location.pathname.replace(".html","").indexOf(t)>=0&&(this.container=document.getElementById(this.containerId),this.container.classList.add("selected"))}},n}(o),Y=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),G=function(n){function e(){var t=null!==n&&n.apply(this,arguments)||this;return t.components=t.getComponents(),t}return Y(e,n),e.prototype.preInsertHtml=function(){this.collapseMenuButtonId=this.generateId(),this.components.map((function(t){return t.preInsertHtml()}))},e.prototype.toHtml=function(){return'\n      <div class="tools-summary-menu-with-collapse-button-container">\n        <div class="tools-summary-menu-container">\n          '+this.components.map((function(t){return t.toHtml()})).join("")+'\n        </div>\n        <div id="'+this.collapseMenuButtonId+'" class="collapse-menu">\n          <span class="iconify left-arrow" data-icon="fluent:chevron-double-left-16-filled"></span>\n          <span class="iconify right-arrow" data-icon="fluent:chevron-double-right-16-filled" title="Uncollapse Menu"></span>\n          <p>Collapse Menu</p>\n        </div>\n      </div>\n    '},e.prototype.postInsertHtml=function(){var t=this;this.collapseMenuButton=document.getElementById(this.collapseMenuButtonId),this.components.map((function(t){return t.postInsertHtml()})),this.collapseMenuButton.addEventListener("click",(function(){return t.collapseMenu()}))},e.prototype.addContainerDiv=function(){return!1},e.prototype.collapseMenu=function(){J.toggleBodyClass("big-menu")},e.prototype.getComponents=function(){return t.getTools().map((function(t){return new K(t)}))},e}(o),W="body-class-list-local-storage-key-v1.0";const J=function(){function t(){}return t.insertBySelector=function(t,n,e){void 0===e&&(e="beforeend"),t.insertHtml(document.querySelector(n),e)},t.insertById=function(t,n,e){void 0===e&&(e="beforeend"),t.insertHtml(document.getElementById(n),e)},t.insertNavbar=function(t){void 0===t&&(t=new U),t.insertHtml(document.body,"afterbegin")},t.insertMenu=function(){(new G).insertHtml(document.querySelector(".page-container"),"afterbegin")},t.insertTool=function(t){t.insertHtml(document.querySelector(".main-container"),"afterbegin")},t.insertFooter=function(){(new _).insertHtml(document.getElementById("bottom"),"beforeend")},t.insertCookiesConsentement=function(){(new I).insertHtml(document.body,"beforeend")},t.isDarkTheme=function(){return(localStorage.getItem(W)||document.body.classList.value).indexOf(d)>=0},t.toggleBodyClass=function(t){document.body.classList.toggle(t),localStorage.setItem(W,document.body.classList.value)},t.resetBodyClassList=function(){document.body.classList.value=localStorage.getItem(W)||""},t}();var X=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),z=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return X(n,t),n.prototype.getNavCssClass=function(){return"index-page"},n}(U);J.resetBodyClassList(),J.insertNavbar(new z),J.insertById(new u,"main"),J.insertFooter(),J.insertCookiesConsentement()})();