(()=>{"use strict";var t,n=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var o=Array(t),i=0;for(n=0;n<e;n++)for(var r=arguments[n],s=0,a=r.length;s<a;s++,i++)o[i]=r[s];return o},e=function(){function t(){}return t.prototype.insertHtml=function(t,n){this.preInsertHtml(),this._containerId=this.generateId(),this.addContainerDiv()?t.insertAdjacentHTML(n,'<div id="'+this._containerId+'"}">'+this.toHtml()+"</div>"):t.insertAdjacentHTML(n,this.toHtml()),this.postInsertHtml()},t.prototype.update=function(){document.getElementById(this._containerId).innerHTML=this.toHtml()},t.prototype.preDestroy=function(){},t.prototype.preInsertHtml=function(){},t.prototype.stopPropagation=function(t){t.stopPropagation()},t.prototype.dispatchCustomEvent=function(t,n){void 0===n&&(n={}),document.dispatchEvent(new CustomEvent(t,{detail:n}))},t.prototype.addCustomEventListener=function(t,n){document.addEventListener(t,n)},t.prototype.delayCallback=function(t,e){var o=null;return function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(o),o=setTimeout(t.bind.apply(t,n([this],i)),e||0)}},t.prototype.generateId=function(){return"_"+Math.random().toString(36).substr(2,9)},t.prototype.getComponentName=function(){return this.constructor.name},t.prototype.addContainerDiv=function(){return!0},t}(),o=(t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)},function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=function(t){function n(n,e,o){void 0===e&&(e=""),void 0===o&&(o="0deg");var i=t.call(this)||this;return i._icon=n,i._title=e,i._rotate=o,i.callbacks=[],i}return o(n,t),n.prototype.preInsertHtml=function(){this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <button class="icon-button '+this._cssClass+'" id="'+this.buttonId+'" title="'+this._title+'">\n        <span class="iconify" data-icon="'+this._icon+'" data-rotate="'+this._rotate+'"></span>\n      </button>\n    '},n.prototype.postInsertHtml=function(){this.button=document.getElementById(this.buttonId),this.button.addEventListener("click",this.handleClickEvent.bind(this))},n.prototype.onClick=function(t){this.callbacks.push(t)},n.prototype.show=function(){this.button.classList.remove("hide")},n.prototype.hide=function(){this.button.classList.add("hide")},n.prototype.focus=function(){this.button.focus()},n.prototype.title=function(t){return this._title=t,this},n.prototype.cssClass=function(t){return this._cssClass=t,this},n.prototype.handleClickEvent=function(t){this.callbacks.forEach((function(t){return t()}))},n}(e),r=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),s="dark",a=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r(n,t),n.prototype.preInsertHtml=function(){this.changeToDarkThemeButtonDomElement=new i("bx:bx-moon","Toggle Theme"),this.changeToLightThemeButtonDomElement=new i("heroicons-solid:sun","Toggle Theme"),this.changeToDarkThemeButtonDomElement.preInsertHtml(),this.changeToLightThemeButtonDomElement.preInsertHtml()},n.prototype.toHtml=function(){return"\n      "+this.changeToDarkThemeButtonDomElement.toHtml()+"\n      "+this.changeToLightThemeButtonDomElement.toHtml()+"\n    "},n.prototype.postInsertHtml=function(){this.changeToDarkThemeButtonDomElement.postInsertHtml(),this.changeToLightThemeButtonDomElement.postInsertHtml(),this.changeToDarkThemeButtonDomElement.onClick(this.handleToggleThemeClickEvent.bind(this)),this.changeToLightThemeButtonDomElement.onClick(this.handleToggleThemeClickEvent.bind(this)),this.updateInnerHTML()},n.prototype.updateInnerHTML=function(){this.changeToDarkThemeButtonDomElement.hide(),this.changeToLightThemeButtonDomElement.hide(),q.isDarkTheme()?this.changeToLightThemeButtonDomElement.show():this.changeToDarkThemeButtonDomElement.show()},n.prototype.handleToggleThemeClickEvent=function(){q.toggleBodyClass(s),this.dispatchCustomEvent("change-theme-event"),this.updateInnerHTML(),this.changeToDarkThemeButtonDomElement.focus(),this.changeToLightThemeButtonDomElement.focus()},n}(e),c="cookies-consentement-already-shown-local-storage-key-v1.0";const u=function(){function t(){}return t.isAlreadyShown=function(){return"true"==(localStorage.getItem(c)||"false")},t.isNotAlreadyShown=function(){return!t.isAlreadyShown()},t.setAlreadyShown=function(){localStorage.setItem(c,"true")},t}();var l,p=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),h=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return p(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <div id="'+this.containerId+'" class="cookies-consentement-container">\n        <div class="cookies-consentement-msg">\n          <span class="iconify" data-icon="ant-design:info-circle-outlined"></span>\n          <p>We use Cookies and Local Storage to improve your experience on our website. To find out more, read our <a href="/cookies-and-localstorage-policy.html" target="_blank">Cookies and Local Storage policy</a></p>\n        </div>\n        <button id="'+this.buttonId+'">Got it</button> \n      </div>\n    '},n.prototype.postInsertHtml=function(){var t=this;this.container=document.getElementById(this.containerId),this.button=document.getElementById(this.buttonId),setTimeout((function(){u.isAlreadyShown()?t.container.classList.add("hide"):t.container.classList.add("active")}),2e3),this.button.addEventListener("click",this.handleButtonClickEvent.bind(this))},n.prototype.handleButtonClickEvent=function(){this.container.classList.remove("active"),u.setAlreadyShown()},n}(e),d=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),f=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return d(n,t),n.prototype.preInsertHtml=function(){},n.prototype.toHtml=function(){return"\n      <footer>\n        <p>© 2021 myonlinetools.github.io   </p>\n      </footer>\n    "},n.prototype.postInsertHtml=function(){},n}(e),m=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),y=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.toggleMenuIcon=new i("system-uicons:menu-hamburger").title("Toggle menu").cssClass("toggle-menu-icon"),n}return m(n,t),n.prototype.preInsertHtml=function(){this.toggleMenuIcon.preInsertHtml()},n.prototype.toHtml=function(){return"\n      <div class='left'>\n        "+this.toggleMenuIcon.toHtml()+"\n        <a class=\"logo\" href='/'>\n          <img src='/logo.png' alt='logo' />\n          <span>My Tools</span>\n        </a>\n      </div>\n    "},n.prototype.postInsertHtml=function(){var t=this;this.toggleMenuIcon.postInsertHtml(),this.toggleMenuIcon.onClick((function(){return q.toggleBodyClass("big-menu")})),q.ifHomePage((function(){return t.toggleMenuIcon.hide()}))},n.prototype.addContainerDiv=function(){return!1},n}(e),g=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();!function(t){t.PRIMARY="primary",t.SECONDARY="secondary"}(l||(l={}));var v=function(t){function n(n,e,o){void 0===e&&(e=l.PRIMARY),void 0===o&&(o="button");var i=t.call(this)||this;return i.label=n,i.style=e,i.type=o,i.callbacks=[],i}return g(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <span id="'+this.containerId+'" class="button-container">\n        <button id="'+this.buttonId+'" class="'+this.style+'" type="'+this.type+'">'+this.label+"</button>\n      </span>\n    "},n.prototype.postInsertHtml=function(){document.getElementById(this.buttonId).addEventListener("click",this.handleClickEvent.bind(this))},n.prototype.onClick=function(t){this.callbacks.push(t)},n.prototype.handleClickEvent=function(){this.callbacks.forEach((function(t){return t()}))},n}(e),I=function(){function t(){this.container=document.createElement("div"),this.container.classList.add("toast-container"),document.body.appendChild(this.container)}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.prototype.info=function(t){this.container.classList.remove("error","warn","info"),this.container.classList.add("info"),this.show(t)},t.prototype.warn=function(t){this.container.classList.remove("error","warn","info"),this.container.classList.add("warn"),this.show(t)},t.prototype.error=function(t){this.container.classList.remove("error","warn","info"),this.container.classList.add("error"),this.show(t)},t.prototype.show=function(t){this.container.innerHTML=t,this.container.style.right="2rem",setTimeout(this.hide.bind(this),4e3)},t.prototype.hide=function(){this.container.style.right="-30rem"},t.instance=null,t}(),b=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),_=function(t){function n(n){var e=t.call(this)||this;return e.value=n,e.validators=[],e.callbacks=[],e}return b(n,t),n.prototype.preInsertHtml=function(){this.inputId=this.generateId(),this.containerId=this.generateId(),this.errorMessageId=this.generateId()},n.prototype.toHtml=function(){return'\n      <span id="'+this.containerId+'" class="input-container">\n        <input id="'+this.inputId+'" class="input" type="text" value="'+this.value+'"/>\n        <span id="'+this.errorMessageId+'" class="input-error-message"></span>\n      </span>\n    '},n.prototype.postInsertHtml=function(){this.input=document.getElementById(this.inputId),this.container=document.getElementById(this.containerId),this.errorMessage=document.getElementById(this.errorMessageId),this.input.addEventListener("change",this.onInputChange.bind(this)),this.input.addEventListener("keyup",this.onInputKeyUp.bind(this))},n.prototype.reset=function(t){this.input.value=t},n.prototype.blur=function(){this.input.blur()},n.prototype.focus=function(){this.input.focus()},n.prototype.onValidate=function(t){this.validators.push(t)},n.prototype.onUpdate=function(t){this.callbacks.push(t)},n.prototype.isNotValid=function(){return this.container.classList.contains("error")||!this.getValue()},n.prototype.getValue=function(){return this.input.value},n.prototype.dispatchChangeEvent=function(){this.input.dispatchEvent(new Event("change"))},n.prototype.onInputChange=function(){var t=this;try{this.validators.forEach((function(n){return n(t.input.value)})),this.container.classList.remove("error")}catch(t){return this.container.classList.add("error"),void(this.errorMessage.innerHTML=t.message)}this.callbacks.forEach((function(n){return n(t.input.value)}))},n.prototype.onInputKeyUp=function(){var t=this;try{this.validators.forEach((function(n){return n(t.input.value)})),this.container.classList.remove("error")}catch(t){return this.container.classList.add("error"),void(this.errorMessage.innerHTML=t.message)}},n}(e),H=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),w=function(t){function n(n,e,o,i){void 0===o&&(o=!0),void 0===i&&(i=Number.MAX_VALUE);var r=t.call(this,e)||this;return r.label=n,r.mandatory=o,r.maxLength=i,r}return H(n,t),n.prototype.toHtml=function(){return'\n      <span class="input-label">\n        '+this.label+"\n        "+(this.mandatory?'<span class="input-label-mandatory">*</span>':"")+"\n      </span>\n      "+t.prototype.toHtml.call(this)+"\n    "},n.prototype.postInsertHtml=function(){var n=this;t.prototype.postInsertHtml.call(this),this.mandatory&&this.onValidate((function(t){if(!t)throw new Error("Required")})),this.onValidate((function(t){if(t&&t.length>n.maxLength)throw new Error("Max length exceeded: "+n.maxLength+" characters")}))},n}(_),E=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),k=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.callbacks=[],n}return E(n,t),n.prototype.preInsertHtml=function(){this.closeButton=new i("clarity:window-close-line","close"),this.closeButton.preInsertHtml(),this.containerId=this.generateId(),this.sidePanelId=this.generateId(),this.backgroundId=this.generateId()},n.prototype.toHtml=function(){return'\n      <div id="'+this.containerId+'" class="container">\n        <div class="side-panel-container '+this.getSidePanelCssClass()+'">\n          <div id="'+this.sidePanelId+'" class="side-panel">\n            <div class="side-panel-header">\n              <h2 class="side-panel-title">'+this.getTitle()+"</h2>\n              "+this.closeButton.toHtml()+"\n            </div>\n            "+this.getBody()+'\n          </div>\n        </div>\n        <div id="'+this.backgroundId+'" class="side-panel-background">\n        </div>\n      </div>\n    '},n.prototype.postInsertHtml=function(){this.container=document.getElementById(this.containerId),this.background=document.getElementById(this.backgroundId),this.sidePanel=document.getElementById(this.sidePanelId),this.background.addEventListener("click",this.handleSidePanelBackgroundClickEvent.bind(this)),this.container.addEventListener("keydown",this.handleKeyDownEvent.bind(this)),this.closeButton.postInsertHtml(),this.closeButton.onClick(this.handleCloseIconClickEvent.bind(this));var t=this.container.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]');this.firstFocusableElement=t[0],this.lastFocusableElement=t[t.length-1]},n.prototype.onClose=function(t){this.callbacks.push(t)},n.prototype.open=function(){this.focusedElementBeforeOpen=document.activeElement,this.sidePanel.style.display="flex",this.container.classList.add("active"),this.dispatchCustomEvent("open-side-panel-event")},n.prototype.close=function(){var t=this;this.focusedElementBeforeOpen.focus(),this.container.classList.remove("active"),this.dispatchCustomEvent("close-side-panel-event"),this.callbacks.forEach((function(t){return t()})),setTimeout((function(){return t.sidePanel.style.display="none"}),500)},n.prototype.isClosed=function(){return this.container.classList.contains("hide")},n.prototype.handleCloseIconClickEvent=function(){this.close()},n.prototype.handleKeyDownEvent=function(t){this.isClosed()||(27==t.keyCode&&this.close(),9==t.keyCode&&(t.shiftKey?document.activeElement===this.firstFocusableElement&&(t.preventDefault(),this.lastFocusableElement.focus()):document.activeElement===this.lastFocusableElement&&(t.preventDefault(),this.firstFocusableElement.focus())))},n.prototype.handleSidePanelBackgroundClickEvent=function(t){-1==t.composedPath().indexOf(this.sidePanel)&&this.close()},n}(e),C=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),L=function(t){function n(n,e,o){void 0===e&&(e="100%"),void 0===o&&(o="10rem");var i=t.call(this)||this;return i.validators=[],i.callbacks=[],i.input={value:n,cssWidth:e,cssHeight:o},i}return C(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.textAreaId=this.generateId(),this.errorMessageId=this.generateId()},n.prototype.toHtml=function(){return'\n      <span id="'+this.containerId+'" class="textarea-container">\n        <textarea id="'+this.textAreaId+'" class="textarea" style="width: '+this.input.cssWidth+"; max-width: "+this.input.cssWidth+"; height: "+this.input.cssHeight+'" >'+this.input.value+'</textarea>\n        <span id="'+this.errorMessageId+'" class="textarea-error-message"></span>\n      </span>\n    '},n.prototype.postInsertHtml=function(){this.textArea=document.getElementById(this.textAreaId),this.container=document.getElementById(this.containerId),this.errorMessage=document.getElementById(this.errorMessageId),this.textArea.addEventListener("change",this.onTextAreaChange.bind(this)),this.textArea.addEventListener("keyup",this.onTextAreaKeyUp.bind(this))},n.prototype.reset=function(t){void 0===t&&(t=""),this.textArea.value=t},n.prototype.blur=function(){this.textArea.blur()},n.prototype.focus=function(){this.textArea.focus()},n.prototype.onValidate=function(t){this.validators.push(t)},n.prototype.onUpdate=function(t){this.callbacks.push(t)},n.prototype.getValue=function(){return this.textArea.value},n.prototype.setErrorMessage=function(t){this.container.classList.add("error"),this.errorMessage.innerHTML=t},n.prototype.isNotValid=function(){return this.container.classList.contains("error")||!this.getValue()},n.prototype.isEmpty=function(){return!this.getValue()},n.prototype.dispatchChangeEvent=function(){this.textArea.dispatchEvent(new Event("change"))},n.prototype.onTextAreaChange=function(){var t=this;try{this.validators.forEach((function(n){return n(t.textArea.value)})),this.container.classList.remove("error")}catch(t){return this.container.classList.add("error"),void(this.errorMessage.innerHTML=t.message)}this.callbacks.forEach((function(n){return n(t.textArea.value)}))},n.prototype.onTextAreaKeyUp=function(){var t=this;try{this.validators.forEach((function(n){return n(t.textArea.value)})),this.container.classList.remove("error")}catch(t){return this.container.classList.add("error"),void(this.errorMessage.innerHTML=t.message)}},n}(e),T=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),B=function(t){function n(n,e,o,i,r,s){void 0===o&&(o=!0),void 0===i&&(i=Number.MAX_VALUE),void 0===r&&(r="100%"),void 0===s&&(s="10rem");var a=t.call(this,e,r,s)||this;return a.label=n,a.mandatory=o,a.maxLength=i,a}return T(n,t),n.prototype.toHtml=function(){return'\n    <span class="textarea-label">\n      '+this.label+"\n      "+(this.mandatory?'<span class="textarea-label-mandatory">*</span>':"")+"\n    </span>\n      "+t.prototype.toHtml.call(this)+"\n    "},n.prototype.postInsertHtml=function(){var n=this;t.prototype.postInsertHtml.call(this),this.mandatory&&this.onValidate((function(t){if(!t)throw new Error("Required")})),this.onValidate((function(t){if(t&&t.length>n.maxLength)throw new Error("Max length exceeded: "+n.maxLength+" characters")}))},n}(L),O=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),A=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.emailInput=new w("Email","",!0,100),n.messageInput=new B("Message","",!0,500,"100%","25rem"),n.submitButton=new v("Submit",l.PRIMARY,"submit"),n.cancelButton=new v("Cancel",l.SECONDARY),n.httpClient=new XMLHttpRequest,n.toastClient=I.getInstance(),n}return O(n,t),n.prototype.getTitle=function(){return"Your feedback"},n.prototype.getBody=function(){return'\n      <form class="feedback-form">\n        <div class="feedback-form-inputs">\n          <div class="email-input">'+this.emailInput.toHtml()+'</div>\n          <div class="message-input">'+this.messageInput.toHtml()+'</div>\n        </div>\n        <div class="feedback-form-buttons">\n          '+this.cancelButton.toHtml()+"\n          "+this.submitButton.toHtml()+"\n        </div>\n      </form>\n    "},n.prototype.getSidePanelCssClass=function(){return"feedback-form-side-panel"},n.prototype.preInsertHtml=function(){t.prototype.preInsertHtml.call(this),this.emailInput.preInsertHtml(),this.messageInput.preInsertHtml(),this.submitButton.preInsertHtml(),this.cancelButton.preInsertHtml()},n.prototype.postInsertHtml=function(){t.prototype.postInsertHtml.call(this),this.emailInput.postInsertHtml(),this.messageInput.postInsertHtml(),this.emailInput.onValidate(this.validateEmail.bind(this)),this.submitButton.postInsertHtml(),this.cancelButton.postInsertHtml(),this.cancelButton.onClick(this.close.bind(this)),this.submitButton.onClick(this.handleSubmitButtonClickEvent.bind(this))},n.prototype.open=function(){t.prototype.open.call(this),this.emailInput.focus()},n.prototype.validateEmail=function(t){if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()))throw Error("Not valid email")},n.prototype.handleSubmitButtonClickEvent=function(){var t=this;if(this.emailInput.isNotValid()||this.messageInput.isNotValid())return this.emailInput.dispatchChangeEvent(),void this.messageInput.dispatchChangeEvent();var n={email:this.emailInput.getValue(),message:this.messageInput.getValue()};this.httpClient.open("POST","https://app.99inbound.com/api/e/JeIE6Bmh",!0),this.httpClient.setRequestHeader("Content-Type","application/json;charset=UTF-8"),this.httpClient.send(JSON.stringify(n)),this.close(),setTimeout((function(){return t.toastClient.info("Thank you for your feedback!")}),500)},n}(k),P=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),M=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.feedbackIcon=new i("ep:chat-line-square","Your feedback helps us help you better!"),n.feedbackForm=new A,n}return P(n,t),n.prototype.preInsertHtml=function(){this.feedbackIcon.preInsertHtml(),this.feedbackForm.preInsertHtml()},n.prototype.toHtml=function(){return"\n      "+this.feedbackIcon.toHtml()+"\n      "+this.feedbackForm.toHtml()+"\n    "},n.prototype.postInsertHtml=function(){var t=this;this.feedbackIcon.postInsertHtml(),this.feedbackForm.postInsertHtml(),this.feedbackIcon.onClick((function(){return t.feedbackForm.open()}))},n}(e),x=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),S=function(t){function n(){var n=t.call(this)||this;return n.navbarLeft=new y,n.changeThemeIcon=new a,n.feedbackIcon=new M,n}return x(n,t),n.prototype.preInsertHtml=function(){this.navbarLeft.preInsertHtml(),this.changeThemeIcon.preInsertHtml(),this.feedbackIcon.preInsertHtml()},n.prototype.toHtml=function(){return'\n      <nav class="'+this.getNavCssClass()+'">\n        '+this.navbarLeft.toHtml()+"\n        <div class='right'>\n          "+this.getAdditionalRightComponents()+"\n          "+this.feedbackIcon.toHtml()+"\n          "+this.changeThemeIcon.toHtml()+"\n        </div>\n      </nav>\n    "},n.prototype.postInsertHtml=function(){this.navbarLeft.postInsertHtml(),this.changeThemeIcon.postInsertHtml(),this.feedbackIcon.postInsertHtml()},n.prototype.addContainerDiv=function(){return!1},n.prototype.getAdditionalRightComponents=function(){return""},n.prototype.getNavCssClass=function(){return""},n}(e),D=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),j=function(t){function n(n){var e=t.call(this)||this;return e.toolSummary=n,e}return D(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId()},n.prototype.toHtml=function(){return'\n      <a id="'+this.containerId+'" class="tool-summary-menu-item-container" href="'+this.toolSummary.url+'">\n        <span class="iconify" data-icon="'+this.toolSummary.icon+'"></span>\n        <span class="name">'+this.toolSummary.name+"</span>\n      </a>\n  "},n.prototype.postInsertHtml=function(){if("/coming-soon.html"!=window.location.pathname){var t=this.toolSummary.url.replace(".html","");window.location.pathname.replace(".html","").indexOf(t)>=0&&(this.container=document.getElementById(this.containerId),this.container.classList.add("selected"))}},n}(e);const V=function(){function t(t,n,e){this.name=t,this.icon=n,this.url=e}return t.getTools=function(){var n=[];return n.push(new t("Touch Typing Training","clarity:keyboard-line","/touch-typing-training")),n.push(new t("Color Picker","ant-design:bg-colors-outlined","/color-picker")),n.push(new t("JSON Converter","mdi:code-json","/json-converter")),n.push(new t("Image Converter","bi:card-image","/image-converter")),n.push(new t("Regex Tester","file-icons:regex","/regex-tester")),n.push(new t("Password Generator","ic:baseline-password","/password-generator")),n.push(new t("Random Text Generator","bi:body-text","/random-text-generator")),n.push(new t("UUID Generator","mdi:identifier","/uuid-generator")),n.push(new t("Hash Generator","eva:hash-outline","/hash-generator")),n.push(new t("Cookies Policy Generator","fluent:cookies-24-regular","/cookies-policy-generator")),n.push(new t("Free Images","bi:images","/free-images")),n.push(new t("Free Musics","ic:outline-library-music","/free-musics")),n},t}();var N=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),R=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.components=n.getComponents(),n}return N(n,t),n.prototype.preInsertHtml=function(){this.hideMenuButtonId=this.generateId(),this.components.map((function(t){return t.preInsertHtml()}))},n.prototype.toHtml=function(){return'\n      <div class="tools-summary-menu-with-collapse-button-container">\n        <div class="tools-summary-menu-container">\n          '+this.components.map((function(t){return t.toHtml()})).join("")+'\n        </div>\n        <div id="'+this.hideMenuButtonId+'" class="hide-menu-button">\n          <span class="iconify" data-icon="fluent:chevron-double-left-16-filled"></span>\n          <p>Collapse Menu</p>\n        </div>\n      </div>\n    '},n.prototype.postInsertHtml=function(){this.hideMenuButton=document.getElementById(this.hideMenuButtonId),this.components.map((function(t){return t.postInsertHtml()})),this.hideMenuButton.addEventListener("click",(function(){return q.removeBodyClass("big-menu")}))},n.prototype.addContainerDiv=function(){return!1},n.prototype.getComponents=function(){return V.getTools().map((function(t){return new j(t)}))},n}(e),F="body-class-list-local-storage-key-v1.0";const q=function(){function t(){}return t.hideLoader=function(t){var n=(new Date).getMilliseconds()-t,e=2e3-n>0?2e3-n:0;console.log(e),setTimeout((function(){document.querySelector(".loader").classList.add("hidden"),document.querySelector(".page-container").classList.remove("onloading")}),e)},t.startLoading=function(){document.querySelector(".page-container").classList.add("onloading")},t.insertBySelector=function(t,n,e){void 0===e&&(e="beforeend"),t.insertHtml(document.querySelector(n),e)},t.insertById=function(t,n,e){void 0===e&&(e="beforeend"),t.insertHtml(document.getElementById(n),e)},t.insertNavbar=function(t){void 0===t&&(t=new S),t.insertHtml(document.body,"afterbegin")},t.insertMenu=function(){(new R).insertHtml(document.querySelector(".page-container"),"afterbegin")},t.insertTool=function(t){t.insertHtml(document.querySelector(".main-container"),"afterbegin")},t.insertFooter=function(){(new f).insertHtml(document.getElementById("bottom"),"beforeend")},t.insertCookiesConsentement=function(){(new h).insertHtml(document.body,"beforeend")},t.isDarkTheme=function(){return(localStorage.getItem(F)||document.body.classList.value).indexOf(s)>=0},t.toggleBodyClass=function(t){document.body.classList.toggle(t),localStorage.setItem(F,document.body.classList.value)},t.addBodyClass=function(t){document.body.classList.add(t),localStorage.setItem(F,document.body.classList.value)},t.removeBodyClass=function(t){document.body.classList.remove(t),localStorage.setItem(F,document.body.classList.value)},t.resetBodyClassList=function(){document.body.classList.value=localStorage.getItem(F)||"big-menu"},t.isHomePage=function(){return"/"==window.location.pathname},t.ifHomePage=function(t){"/"==window.location.pathname&&t()},t}();var U=(new Date).getMilliseconds();q.resetBodyClassList(),q.insertNavbar(),q.insertMenu(),q.insertCookiesConsentement(),q.hideLoader(U)})();