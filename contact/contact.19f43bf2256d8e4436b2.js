(()=>{"use strict";var t,n=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),s=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return s},e=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(n(arguments[e]));return t},o=function(){function t(){this._containerId=this.generateId()}return t.prototype.insertHtml=function(t,n){this.preInsertHtml(),this.addContainerDiv()?t.insertAdjacentHTML(n,'<div id="'+this._containerId+'"}">'+this.toHtml()+"</div>"):t.insertAdjacentHTML(n,this.toHtml()),this.postInsertHtml()},t.prototype.update=function(){document.getElementById(this.getContainerId()).innerHTML=this.toHtml(),this.postInsertHtml()},t.prototype.preDestroy=function(){},t.prototype.preInsertHtml=function(){},t.prototype.stopPropagation=function(t){t.stopPropagation()},t.prototype.dispatchCustomEvent=function(t,n){void 0===n&&(n={}),document.dispatchEvent(new CustomEvent(t,{detail:n}))},t.prototype.addCustomEventListener=function(t,n){document.addEventListener(t,n)},t.prototype.delayCallback=function(t,n){var o=null;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(o),o=setTimeout(t.bind.apply(t,e([this],r)),n||0)}},t.prototype.generateId=function(){return"_"+Math.random().toString(36).substr(2,9)},t.prototype.getComponentName=function(){return this.constructor.name},t.prototype.addContainerDiv=function(){return!0},t.prototype.isDarkTheme=function(){return document.body.classList.contains("dark")},t.prototype.getContainerId=function(){return this._containerId},t.prototype.getContainer=function(){return document.getElementById(this._containerId)},t.prototype.setContainerId=function(t){this._containerId=t},t.prototype.hide=function(){document.getElementById(this.getContainerId()).classList.add("hide")},t.prototype.show=function(){document.getElementById(this.getContainerId()).classList.remove("hide")},t}(),r=(t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)},function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=function(t){function n(n,e,o){void 0===e&&(e=""),void 0===o&&(o="0deg");var r=t.call(this)||this;return r._icon=n,r._title=e,r._rotate=o,r.callbacks=[],r}return r(n,t),n.prototype.preInsertHtml=function(){this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <button class="icon-button '+this._cssClass+'" id="'+this.buttonId+'" title="'+this._title+'">\n        <span class="iconify" data-icon="'+this._icon+'" data-rotate="'+this._rotate+'"></span>\n      </button>\n    '},n.prototype.postInsertHtml=function(){this.button=document.getElementById(this.buttonId),this.button.addEventListener("click",this.handleClickEvent.bind(this))},n.prototype.onClick=function(t){this.callbacks.push(t)},n.prototype.triggerClick=function(){this.handleClickEvent(new Event(null))},n.prototype.show=function(){this.button.classList.remove("hide")},n.prototype.hide=function(){this.button.classList.add("hide")},n.prototype.isHidden=function(){return this.button.classList.contains("hide")},n.prototype.focus=function(){this.button.focus()},n.prototype.title=function(t){return this._title=t,this},n.prototype.cssClass=function(t){return this._cssClass=t,this},n.prototype.handleClickEvent=function(t){t.stopPropagation(),t.preventDefault(),this.callbacks.forEach((function(t){return t()}))},n}(o),s=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),c="dark",a=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return s(n,t),n.prototype.preInsertHtml=function(){this.changeToDarkThemeButtonDomElement=new i("bx:bx-moon","Toggle Theme"),this.changeToLightThemeButtonDomElement=new i("heroicons-solid:sun","Toggle Theme"),this.changeToDarkThemeButtonDomElement.preInsertHtml(),this.changeToLightThemeButtonDomElement.preInsertHtml()},n.prototype.toHtml=function(){return"\n      "+this.changeToDarkThemeButtonDomElement.toHtml()+"\n      "+this.changeToLightThemeButtonDomElement.toHtml()+"\n    "},n.prototype.postInsertHtml=function(){this.changeToDarkThemeButtonDomElement.postInsertHtml(),this.changeToLightThemeButtonDomElement.postInsertHtml(),this.changeToDarkThemeButtonDomElement.onClick(this.handleToggleThemeClickEvent.bind(this)),this.changeToLightThemeButtonDomElement.onClick(this.handleToggleThemeClickEvent.bind(this)),this.updateInnerHTML()},n.prototype.updateInnerHTML=function(){this.changeToDarkThemeButtonDomElement.hide(),this.changeToLightThemeButtonDomElement.hide(),Z.isDarkTheme()?this.changeToLightThemeButtonDomElement.show():this.changeToDarkThemeButtonDomElement.show()},n.prototype.handleToggleThemeClickEvent=function(){Z.toggleBodyClass(c),this.dispatchCustomEvent("change-theme-event"),this.updateInnerHTML(),this.changeToDarkThemeButtonDomElement.focus(),this.changeToLightThemeButtonDomElement.focus()},n}(o),u="cookies-consentement-already-shown-local-storage-key-v1.0";const l=function(){function t(){}return t.isAlreadyShown=function(){return"true"==(localStorage.getItem(u)||"false")},t.isNotAlreadyShown=function(){return!t.isAlreadyShown()},t.setAlreadyShown=function(){localStorage.setItem(u,"true")},t}();var h=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),p=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return h(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <div id="'+this.containerId+'" class="cookies-consentement-container">\n        <div class="cookies-consentement-msg">\n          <span class="iconify" data-icon="ant-design:info-circle-outlined"></span>\n          <p>We use Cookies and Local Storage to improve your experience on our website. To find out more, read our <a href="/privacy-policy" target="_blank">Privacy policy</a></p>\n        </div>\n        <button id="'+this.buttonId+'">Got it</button> \n      </div>\n    '},n.prototype.postInsertHtml=function(){var t=this;this.container=document.getElementById(this.containerId),this.button=document.getElementById(this.buttonId),setTimeout((function(){l.isAlreadyShown()?t.container.classList.add("hide"):t.container.classList.add("active")}),2e3),this.button.addEventListener("click",this.handleButtonClickEvent.bind(this))},n.prototype.handleButtonClickEvent=function(){this.container.classList.remove("active"),l.setAlreadyShown()},n}(o),d=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),m=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return d(n,t),n.prototype.preInsertHtml=function(){},n.prototype.toHtml=function(){return'\n      <footer>\n        <a class="logo" href=\'/\' target="_blank">\n          <img src=\'/logo.svg\' alt=\'logo\' />\n          <span>Key Tools</span>\n        </a>\n        <div class="links">\n          <a href="/contact" target="_blank">Contact</a>\n          <span>|</span>\n          <a href="/privacy-policy" target="_blank">Privacy Policy</a>\n        </div>\n        <p class="all-right-reserved">© 2022 KeyTools. All rights reserved</p>\n      </footer>\n    '},n.prototype.postInsertHtml=function(){},n}(o),f=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),v=function(t){function n(n){var e=t.call(this)||this;return e.menuItem=n,e}return f(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId()},n.prototype.toHtml=function(){return'\n      <a id="'+this.containerId+'" class="menu-item-container" href="'+this.menuItem.url+'">\n        <i class="'+this.menuItem.icon+' gradient-font"></i>\n        <span class="name">'+this.menuItem.name+"</span>\n      </a>\n  "},n.prototype.postInsertHtml=function(){if("/coming-soon.html"!=window.location.pathname){var t=this.menuItem.url.replace(".html","");window.location.pathname.replace(".html","").indexOf(t)>=0&&(this.container=document.getElementById(this.containerId),this.container.classList.add("selected"))}},n}(o);const y=function(){function t(t,n){this._name=t,this._url=n,this._svgIcon=null,this._tag=""}return t.getTools=function(){var n=[];return n.push(new t("Color Picker","/color-picker/").fontAwesomeIconName("fas fa-fill-drip")),n.push(new t("Password Generator","/password-generator/").fontAwesomeIconName("fas fa-key")),n.push(new t("Quote Generator","/quote-generator/").fontAwesomeIconName("fas fa-quote-left")),n.push(new t("Turbo Typing","/turbo-typing/").fontAwesomeIconName("far fa-keyboard")),n.push(new t("QR Code Generator","/qr-code-generator/").svgIcon('<svg xmlns="http://www.w3.org/2000/svg" class="gradient-svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M5 11h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2zm0-6h4v4H5V5zm0 16h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2zm0-6h4v4H5v-4zm8-10v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2zm6 4h-4V5h4v4zm2 11.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5zm-8-7v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5zm3.5 1.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5zM13 17.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5zm2.5 3.5h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5zm2-2h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5zm1-6h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5zm1 4h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5z"/></svg>')),n.push(new t("Random Text Generator","/random-text-generator/").svgIcon('<svg xmlns="http://www.w3.org/2000/svg" class="gradient-svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19 7H5a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2Zm-4 4H5a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Zm4 4H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Zm-4 4H5a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"/></svg>')),n.push(new t("Hash Generator","/hash-generator/").svgIcon('<svg xmlns="http://www.w3.org/2000/svg" class="gradient-svg" aria-hidden="true" role="img" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path d="M416 127.1h-58.23l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L292.9 127.1h-95.1l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L132.9 127.1H64c-17.67 0-32 14.33-32 32c0 18.6 14.33 32 32 32h58.23l-21.33 128H32c-17.67 0-32 14.33-32 32s14.33 31.1 32 31.1h58.23l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C108.5 479.9 110.3 480 112 480c15.36 0 28.92-11.09 31.53-26.73L155.07 384h95.12l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83c1.799.33 3.599.43 5.299.43c15.36 0 28.92-11.09 31.53-26.73L315.07 384H384c17.67 0 32-14.33 32-31.1c0-17.67-14.33-32-32-32h-58.23l21.33-128H416c17.67 0 32-14.32 32-31.1c0-19.5-14.3-34.7-32-34.7zm-155.1 192h-95.1l21.3-128h95.12l-21.32 128z"/></svg>')),n.push(new t("Spinner Wheel","/spinner-wheel/").svgIcon('<svg xmlns="http://www.w3.org/2000/svg" class="gradient-svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill-rule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0Zm2.904-4.284A5.649 5.649 0 0 1 7.1 1.84v4.693L3.781 3.216Zm-.565.565A5.649 5.649 0 0 0 1.84 7.1h4.693L3.216 3.781ZM6.534 7.9H1.841a5.649 5.649 0 0 0 1.375 3.319L6.534 7.9Zm-2.753 3.884A5.65 5.65 0 0 0 7.1 13.16V8.466l-3.319 3.318ZM7.9 8.466v4.693a5.65 5.65 0 0 0 3.318-1.375L7.9 8.466Zm3.884 2.752A5.648 5.648 0 0 0 13.16 7.9H8.466l3.318 3.318ZM8.466 7.1h4.693a5.65 5.65 0 0 0-1.375-3.319L8.466 7.1Zm2.753-3.884A5.649 5.649 0 0 0 7.9 1.84v4.693l3.319-3.318Z" clip-rule="evenodd"/></svg>')),n.push(new t("Case Convertor","/case-convertor/").svgIcon('<svg xmlns="http://www.w3.org/2000/svg" class="gradient-svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path d="M5.704 2.74a.75.75 0 0 0-1.408 0l-3.5 9.5a.75.75 0 0 0 1.408.52l.924-2.51h3.744l.924 2.51a.75.75 0 1 0 1.408-.52l-3.5-9.5Zm.615 6.01H3.681l1.32-3.58l1.318 3.58Zm4.181-6.5a.75.75 0 0 1 .75.75v4.294A2.24 2.24 0 0 1 12.354 7c1.438 0 2.604 1.4 2.604 3.125c0 1.726-1.166 3.125-2.604 3.125c-.438 0-.851-.13-1.214-.36a.75.75 0 0 1-1.39-.39V3a.75.75 0 0 1 .75-.75Zm.75 7.875c0 1.165.739 1.625 1.104 1.625c.366 0 1.104-.46 1.104-1.625S12.72 8.5 12.354 8.5c-.365 0-1.104.46-1.104 1.625Z"/></svg>')),n.push(new t("YouTube Thumbnail","/youtube-thumbnail/").svgIcon('<svg xmlns="http://www.w3.org/2000/svg" class="gradient-svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M960 509.2c0-2.2 0-4.7-.1-7.6c-.1-8.1-.3-17.2-.5-26.9c-.8-27.9-2.2-55.7-4.4-81.9c-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2c-37.1-1.4-76.8-2.3-116.5-2.8c-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4c-39.7.5-79.4 1.4-116.5 2.8c-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9c-.3 9.7-.4 18.8-.5 26.9c0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6c.1 8.1.3 17.2.5 26.9c.8 27.9 2.2 55.7 4.4 81.9c3 36.1 7.4 66.2 13.4 88.8c12.8 47.9 50.4 85.7 98.3 98.5c28.2 7.6 83.7 12.3 161.7 15.2c37.1 1.4 76.8 2.3 116.5 2.8c13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4c39.7-.5 79.4-1.4 116.5-2.8c78-3 133.5-7.7 161.7-15.2c47.9-12.8 85.5-50.5 98.3-98.5c6.1-22.6 10.4-52.7 13.4-88.8c2.2-26.2 3.6-54 4.4-81.9c.3-9.7.4-18.8.5-26.9c0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1c-.1 7.8-.3 16.4-.5 25.7c-.7 26.6-2.1 53.2-4.2 77.9c-2.7 32.2-6.5 58.6-11.2 76.3c-6.2 23.1-24.4 41.4-47.4 47.5c-21 5.6-73.9 10.1-145.8 12.8c-36.4 1.4-75.6 2.3-114.7 2.8c-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8c-71.9-2.8-124.9-7.2-145.8-12.8c-23-6.2-41.2-24.4-47.4-47.5c-4.7-17.7-8.5-44.1-11.2-76.3c-2.1-24.7-3.4-51.3-4.2-77.9c-.3-9.3-.4-18-.5-25.7c0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1c.1-7.8.3-16.4.5-25.7c.7-26.6 2.1-53.2 4.2-77.9c2.7-32.2 6.5-58.6 11.2-76.3c6.2-23.1 24.4-41.4 47.4-47.5c21-5.6 73.9-10.1 145.8-12.8c36.4-1.4 75.6-2.3 114.7-2.8c13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8c71.9 2.8 124.9 7.2 145.8 12.8c23 6.2 41.2 24.4 47.4 47.5c4.7 17.7 8.5 44.1 11.2 76.3c2.1 24.7 3.4 51.3 4.2 77.9c.3 9.3.4 18 .5 25.7c0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135l-232-133z"/></svg>')),n.push(new t("Color Mixer","/color-mixer/").svgIcon('<svg xmlns="http://www.w3.org/2000/svg" class="gradient-svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.003a7 7 0 0 0-7 7v.43c.09 1.51 1.91 1.79 3 .7a1.87 1.87 0 0 1 2.64 2.64c-1.1 1.16-.79 3.07.8 3.2h.6a7 7 0 1 0 0-14l-.04.03zm0 13h-.52a.58.58 0 0 1-.36-.14a.56.56 0 0 1-.15-.3a1.24 1.24 0 0 1 .35-1.08a2.87 2.87 0 0 0 0-4a2.87 2.87 0 0 0-4.06 0a1 1 0 0 1-.9.34a.41.41 0 0 1-.22-.12a.42.42 0 0 1-.1-.29v-.37a6 6 0 1 1 6 6l-.04-.04zM9 3.997a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm3 7.007a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm-7-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm7-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0zM13 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" clip-rule="evenodd"/></svg>')),n.push(new t("CSS Gradient Generator","/css-gradient-generator/").svgIcon('<svg xmlns="http://www.w3.org/2000/svg" class="gradient-svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M11 9h2v2h-2V9zm-2 2h2v2H9v-2zm4 0h2v2h-2v-2zm2-2h2v2h-2V9zM7 9h2v2H7V9zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"/></svg>').tag("NEW")),n},t.prototype.fontAwesomeIconName=function(t){return this._fontAwesomeIconName=t,this},t.prototype.svgIcon=function(t){return this._svgIcon=t,this},t.prototype.tag=function(t){return this._tag=t,this},t.prototype.getName=function(){return this._name},t.prototype.getUrl=function(){return this._url},t.prototype.getFontAwesomeIconName=function(){return this._fontAwesomeIconName},t.prototype.getSvgIcon=function(){return this._svgIcon},t.prototype.getTag=function(){return this._tag},t.getToolsExceptCurrentTool=function(){var n=window.location.pathname.replace(".html","");return t.getTools().filter((function(t){return t._url!=n}))},t}();var g=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),s=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return s},I=function(){function t(){}return t.equals=function(t,n){return JSON.stringify(t)==JSON.stringify(n)},t.notEquals=function(n,e){return!t.equals(n,e)},t.shuffle=function(t){for(var n,e,o=t.length;0!=o;)e=Math.floor(Math.random()*o),o--,n=g([t[e],t[o]],2),t[o]=n[0],t[e]=n[1];return t},t}(),w=function(){function t(t,n,e){this.name=t,this.icon=n,this.url=e}return t.fromToolSummary=function(n){return new t(n.getName(),n.getFontAwesomeIconName(),n.getUrl())},t}(),_=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),H="tools-search-input-clear-event",b=function(t){function n(){var n=t.call(this)||this;return n.privacyPolicy=new v(new w("Privacy Policy","fas fa-user-secret","/privacy-policy")),n.contact=new v(new w("Contact","far fa-envelope","/contact")),n.tools=y.getTools(),n.toolsComponents=n.tools.map((function(t){return new v(w.fromToolSummary(t))})),n}return _(n,t),n.prototype.preInsertHtml=function(){this.toolsContainerId=this.generateId(),this.searchMessageContainerId=this.generateId(),this.emptySearchMessageId=this.generateId(),this.clearButtonId=this.generateId(),this.toolsComponents.map((function(t){return t.preInsertHtml()})),this.privacyPolicy.preInsertHtml(),this.contact.preInsertHtml()},n.prototype.toHtml=function(){return'\n      <div class="menu-with-collapse-button-container">\n        <div class="menu-container">\n          <div id="'+this.searchMessageContainerId+'" class="search-result hidden">\n            <div class="search-result-header">\n              <span>Search Result</span>\n              <button id="'+this.clearButtonId+'">Clear</button>\n            </div>\n            <span id="'+this.emptySearchMessageId+'" class="empty-search-result">\n              No results\n            </span>\n          </div>\n          <div id="'+this.toolsContainerId+'">\n            '+this.toolsComponents.map((function(t){return t.toHtml()})).join("")+'\n          </div>\n          <div class="menu-separator"></div>\n          '+this.privacyPolicy.toHtml()+"\n          "+this.contact.toHtml()+"\n        </div>\n      </div>\n    "},n.prototype.postInsertHtml=function(){var t=this;this.privacyPolicy.postInsertHtml(),this.contact.postInsertHtml(),this.toolsContainer=document.getElementById(this.toolsContainerId),this.searchMessageContainer=document.getElementById(this.searchMessageContainerId),this.emptySearchMessage=document.getElementById(this.emptySearchMessageId),this.clearButton=document.getElementById(this.clearButtonId),this.toolsComponents.map((function(t){return t.postInsertHtml()})),this.clearButton.addEventListener("click",(function(){return t.dispatchCustomEvent(H)})),this.addCustomEventListener(T,this.handleToolSearchInputChangeEvent.bind(this))},n.prototype.addContainerDiv=function(){return!1},n.prototype.handleToolSearchInputChangeEvent=function(t){var n=t.detail.toLowerCase(),e=y.getTools().filter((function(t){return t.getName().toLowerCase().indexOf(n)>-1}));I.notEquals(this.tools,e)&&(this.tools=e,this.toolsComponents=this.tools.map((function(t){return new v(w.fromToolSummary(t))})),this.toolsComponents.forEach((function(t){return t.preInsertHtml()})),this.toolsContainer.innerHTML=this.toolsComponents.map((function(t){return t.toHtml()})).join(""),this.toolsComponents.forEach((function(t){return t.postInsertHtml()}))),""==n?this.searchMessageContainer.classList.add("hidden"):(this.searchMessageContainer.classList.remove("hidden"),this.emptySearchMessage.classList.add("hidden"),0==this.tools.length&&this.emptySearchMessage.classList.remove("hidden"))},n}(o),C=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),T="tools-search-input-change-event",E=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.classList="",n}return C(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.inputId=this.generateId()},n.prototype.toHtml=function(){return'\n    <div id="'+this.containerId+'" class="tools-search-input-container '+this.classList+'">\n      <span class="iconify" data-icon="fe:search" data-rotate="90deg"></span>\n      <input id="'+this.inputId+'" type="text" placeholder="Search..." value=""/>\n    </div>\n  '},n.prototype.postInsertHtml=function(){this.container=document.getElementById(this.containerId),this.input=document.getElementById(this.inputId),this.input.addEventListener("focus",this.handleInputFocusEvent.bind(this)),this.input.addEventListener("blur",this.handleInputBlurEvent.bind(this)),this.input.addEventListener("keydown",this.handleInputKeydownEvent.bind(this)),this.input.addEventListener("keyup",this.handleInputKeyupEvent.bind(this)),this.addCustomEventListener(H,this.handleToolSearchInputClearEvent.bind(this))},n.prototype.hide=function(){this.container.classList.add("hidden")},n.prototype.handleInputFocusEvent=function(){this.container.classList.add("focus")},n.prototype.handleInputBlurEvent=function(){this.container.classList.remove("focus")},n.prototype.handleInputKeydownEvent=function(t){t.stopPropagation()},n.prototype.handleInputKeyupEvent=function(t){t.stopPropagation(),this.dispatchCustomEvent(T,this.input.value),""!=this.input.value&&Z.removeBodyClass("hide-menu")},n.prototype.handleToolSearchInputClearEvent=function(){this.input.value="",this.dispatchCustomEvent(T,this.input.value)},n.prototype.addClassList=function(t){return this.classList+=t,this},n}(o),L=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),B=function(t){function n(n){void 0===n&&(n=!0);var e=t.call(this)||this;return e.withMenu=n,e.toggleMenuIcon=new i("system-uicons:menu-hamburger").title("Toggle menu").cssClass("toggle-menu-icon"),e}return L(n,t),n.prototype.preInsertHtml=function(){this.toolsSearchInput=new E,this.toggleMenuIcon.preInsertHtml(),this.toolsSearchInput.preInsertHtml()},n.prototype.toHtml=function(){return"\n      <div class='left'>\n        <div class=\"toggle-menu-icon-and-logo-container\">\n          "+this.toggleMenuIcon.toHtml()+"\n          <a class=\"logo\" href='/'>\n            <img src='/logo.svg' alt='logo' />\n            <span>Key Tools</span>\n          </a>\n        </div>\n        "+this.toolsSearchInput.toHtml()+"\n      </div>\n    "},n.prototype.postInsertHtml=function(){this.toggleMenuIcon.postInsertHtml(),this.toolsSearchInput.postInsertHtml(),this.toggleMenuIcon.onClick((function(){return Z.toggleBodyClass("hide-menu")})),this.withMenu||(this.toggleMenuIcon.hide(),this.toolsSearchInput.hide())},n.prototype.addContainerDiv=function(){return!1},n}(o),M=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),O=function(t){function n(n){void 0===n&&(n=!0);var e=t.call(this)||this;return e.navbarLeft=new B(n),e.changeThemeIcon=new a,e}return M(n,t),n.prototype.preInsertHtml=function(){this.navbarLeft.preInsertHtml(),this.changeThemeIcon.preInsertHtml()},n.prototype.toHtml=function(){return'\n      <nav class="'+this.getNavCssClass()+'">\n        '+this.navbarLeft.toHtml()+"\n        <div class='right'>\n          "+this.getAdditionalRightComponents()+"\n          "+this.changeThemeIcon.toHtml()+"\n        </div>\n      </nav>\n    "},n.prototype.postInsertHtml=function(){this.navbarLeft.postInsertHtml(),this.changeThemeIcon.postInsertHtml()},n.prototype.addContainerDiv=function(){return!1},n.prototype.getAdditionalRightComponents=function(){return""},n.prototype.getNavCssClass=function(){return""},n}(o),S=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),k=function(t){function n(n){var e=t.call(this)||this;return e.tool=n,e}return S(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId()},n.prototype.toHtml=function(){return'\n      <a id="'+this.containerId+'" class="related-tools-item-container" href="'+this.tool.getUrl()+'">\n        '+(this.tool.getFontAwesomeIconName()?'<i class="'+this.tool.getFontAwesomeIconName()+' gradient-font"></i>':"")+"\n        "+(this.tool.getSvgIcon()?this.tool.getSvgIcon():"")+'\n        <span class="name">'+this.tool.getName()+"</span>\n        "+this.getTag()+"\n      </a>\n  "},n.prototype.postInsertHtml=function(){this.container=document.getElementById(this.containerId)},n.prototype.getTag=function(){return this.tool.getTag()?'<span class="tag">'+this.tool.getTag()+"</span>":""},n}(o),x=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),A=function(t){function n(){var n=t.call(this)||this;return n.tools=I.shuffle(y.getToolsExceptCurrentTool()).slice(0,6),n.toolsComponents=n.tools.map((function(t){return new k(t)})),n.toolsContainerId=n.generateId(),n}return x(n,t),n.prototype.preInsertHtml=function(){this.toolsComponents.map((function(t){return t.preInsertHtml()}))},n.prototype.toHtml=function(){return'\n      <div id="'+this.toolsContainerId+'" class="main-section related-articles-main-section">\n        <h2>Related tools</h2>\n        <div class="related-tools-container">\n          '+this.toolsComponents.map((function(t){return t.toHtml()})).join("")+'\n        </div>\n        <a href="/" class="more-tools-button">More Tools<span class="iconify" data-icon="bi:arrow-right"></span></a>\n      </div>\n    '},n.prototype.postInsertHtml=function(){this.toolsContainer=document.getElementById(this.toolsContainerId),this.toolsComponents.map((function(t){return t.postInsertHtml()}))},n.prototype.addContainerDiv=function(){return!1},n}(o),P=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),D=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return P(n,t),n.prototype.preInsertHtml=function(){},n.prototype.toHtml=function(){return'\n      <div class="ads-container">\n      </div>\n    '},n.prototype.postInsertHtml=function(){},n.prototype.addContainerDiv=function(){return!1},n}(o),z=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),j=function(t){function n(){var n=t.call(this)||this;return n.tools=I.shuffle(y.getToolsExceptCurrentTool()).slice(0,8),n.toolsComponents=n.tools.map((function(t){return new k(t)})),n.toolsContainerId=n.generateId(),n}return z(n,t),n.prototype.preInsertHtml=function(){this.toolsComponents.map((function(t){return t.preInsertHtml()}))},n.prototype.toHtml=function(){return'\n      <div id="'+this.toolsContainerId+'" class="related-tools-sidebar-container">\n        <h2>Related tools</h2>\n        <div class="related-tools-sidebar">\n          '+this.toolsComponents.map((function(t){return t.toHtml()})).join("")+'\n        </div>\n        <a href="/" class="more-tools-button">More Tools<span class="iconify" data-icon="bi:arrow-right"></span></a>\n      </div>\n    '},n.prototype.postInsertHtml=function(){this.toolsContainer=document.getElementById(this.toolsContainerId),this.toolsComponents.map((function(t){return t.postInsertHtml()}))},n.prototype.addContainerDiv=function(){return!1},n}(o),N=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),q=function(t){function n(n){var e=t.call(this)||this;return e.containerId=n,e.expandButton=new i("eva:expand-outline","Expand Tool").cssClass("expand-button"),e.reduceButton=new i("akar-icons:reduce","Expand Tool").cssClass("reduce-button"),e}return N(n,t),n.prototype.preInsertHtml=function(){this.expandButton.preInsertHtml(),this.reduceButton.preInsertHtml()},n.prototype.toHtml=function(){return"\n      "+this.expandButton.toHtml()+"\n      "+this.reduceButton.toHtml()+"\n    \n    "},n.prototype.postInsertHtml=function(){var t=this;this.expandButton.postInsertHtml(),this.reduceButton.postInsertHtml(),this.reduceButton.hide();var n=document.querySelector(".page-container"),e=document.getElementById(this.containerId);e.style.position="relative",this.expandButton.onClick((function(){n.classList.add("expanded-tool-page"),e.classList.add("expanded-tool"),t.expandButton.hide(),t.reduceButton.show(),t.dispatchCustomEvent("EXPAND_TOOL")})),this.reduceButton.onClick((function(){n.classList.remove("expanded-tool-page"),e.classList.remove("expanded-tool"),t.reduceButton.hide(),t.expandButton.show(),t.dispatchCustomEvent("REDUCE_TOOL")}))},n}(o),R="body-class-list-local-storage-key-v1.0";const Z=function(){function t(){}return t.hideLoader=function(){var t=(new Date).getTime()-window.startTime;setTimeout((function(){document.querySelector(".loader").classList.add("hidden"),document.querySelector(".page-container").classList.remove("on-loading")}),1300-t>0?1300-t:0)},t.insertBySelector=function(t,n,e){void 0===e&&(e="beforeend"),t.insertHtml(document.querySelector(n),e)},t.insertById=function(t,n,e){void 0===e&&(e="beforeend"),t.insertHtml(document.getElementById(n),e)},t.insertNavbar=function(t){t.insertHtml(document.body,"afterbegin")},t.insertBasicNavbarWithMenu=function(){new O(!0).insertHtml(document.body,"afterbegin")},t.insertBasicNavbarWithoutMenu=function(){new O(!1).insertHtml(document.body,"afterbegin")},t.insertMenu=function(){(new b).insertHtml(document.querySelector(".page-container"),"afterbegin")},t.insertAds=function(){(new D).insertHtml(document.querySelector(".page-container"),"beforeend")},t.insertTool=function(t,n,e){if(void 0===n&&(n="afterbegin"),void 0===e&&(e=!0),t.insertHtml(document.querySelector(".main-container"),n),e){var o=t.getContainerId();new q(o).insertHtml(document.querySelector("#"+o),"afterbegin")}},t.insertRelatedTools=function(){(new A).insertHtml(document.querySelector("#description"),"afterend")},t.insertRelatedToolsSidebar=function(){(new j).insertHtml(document.querySelector(".page-container"),"beforeend"),(new A).insertHtml(document.querySelector("#description"),"afterend")},t.insertFooter=function(){(new m).insertHtml(document.body,"beforeend")},t.insertCookiesConsentement=function(){(new p).insertHtml(document.body,"beforeend")},t.isDarkTheme=function(){return(localStorage.getItem(R)||document.body.classList.value).indexOf(c)>=0},t.toggleBodyClass=function(t){document.body.classList.toggle(t),localStorage.setItem(R,document.body.classList.value)},t.addBodyClass=function(t){document.body.classList.add(t),localStorage.setItem(R,document.body.classList.value)},t.removeBodyClass=function(t){document.body.classList.remove(t),localStorage.setItem(R,document.body.classList.value)},t.resetBodyClassList=function(){document.body.classList.value=localStorage.getItem(R)||""},t.isHomePage=function(){return"/"==window.location.pathname},t.ifHomePage=function(t){"/"==window.location.pathname&&t()},t.ifNotHomePage=function(t){"/"!=window.location.pathname&&t()},t}();var V=function(){function t(){this.container=document.createElement("div"),this.container.classList.add("toast-container"),document.body.appendChild(this.container)}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.prototype.info=function(t){this.container.classList.remove("error","warn","info"),this.container.classList.add("info"),this.show(t)},t.prototype.warn=function(t){this.container.classList.remove("error","warn","info"),this.container.classList.add("warn"),this.show(t)},t.prototype.error=function(t){this.container.classList.remove("error","warn","info"),this.container.classList.add("error"),this.show(t)},t.prototype.show=function(t){this.container.innerHTML=t,this.container.style.right="2rem",setTimeout(this.hide.bind(this),4e3)},t.prototype.hide=function(){this.container.style.right="-30rem"},t.instance=null,t}();Z.resetBodyClassList(),Z.insertBasicNavbarWithoutMenu(),Z.insertFooter(),Z.insertCookiesConsentement(),Z.hideLoader();var F=V.getInstance(),Y=new XMLHttpRequest,G=document.querySelector(".contact-form"),K=document.querySelector(".email"),W=document.querySelector(".message");G.addEventListener("submit",(function(t){t.preventDefault();var n=K.value,e=W.value;!function(t){if(!t)throw F.error("Email is mandatory"),Error("Email is mandatory");if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()))throw F.error("Please enter a valid email"),Error("Not valid email")}(n),function(t){if(!t)throw F.error("Message is mandatory"),Error("Message is mandatory")}(e),Y.open("POST","https://app.99inbound.com/api/e/JeIE6Bmh",!0),Y.setRequestHeader("Content-Type","application/json;charset=UTF-8"),Y.send(JSON.stringify({email:n,message:e})),F.info("Thank you for your message!"),K.value="",W.value=""}))})();