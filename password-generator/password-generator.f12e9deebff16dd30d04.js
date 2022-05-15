(()=>{"use strict";var t,n=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),s=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return s},e=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(n(arguments[e]));return t},o=function(){function t(){}return t.prototype.insertHtml=function(t,n){this.preInsertHtml(),this._containerId=this.generateId(),this.addContainerDiv()?t.insertAdjacentHTML(n,'<div id="'+this._containerId+'"}">'+this.toHtml()+"</div>"):t.insertAdjacentHTML(n,this.toHtml()),this.postInsertHtml()},t.prototype.update=function(){document.getElementById(this._containerId).innerHTML=this.toHtml()},t.prototype.preDestroy=function(){},t.prototype.preInsertHtml=function(){},t.prototype.stopPropagation=function(t){t.stopPropagation()},t.prototype.dispatchCustomEvent=function(t,n){void 0===n&&(n={}),document.dispatchEvent(new CustomEvent(t,{detail:n}))},t.prototype.addCustomEventListener=function(t,n){document.addEventListener(t,n)},t.prototype.delayCallback=function(t,n){var o=null;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(o),o=setTimeout(t.bind.apply(t,e([this],r)),n||0)}},t.prototype.generateId=function(){return"_"+Math.random().toString(36).substr(2,9)},t.prototype.getComponentName=function(){return this.constructor.name},t.prototype.addContainerDiv=function(){return!0},t}(),r=(t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)},function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=function(t){function n(n,e,o){void 0===e&&(e=""),void 0===o&&(o="0deg");var r=t.call(this)||this;return r._icon=n,r._title=e,r._rotate=o,r.callbacks=[],r}return r(n,t),n.prototype.preInsertHtml=function(){this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <button class="icon-button '+this._cssClass+'" id="'+this.buttonId+'" title="'+this._title+'">\n        <span class="iconify" data-icon="'+this._icon+'" data-rotate="'+this._rotate+'"></span>\n      </button>\n    '},n.prototype.postInsertHtml=function(){this.button=document.getElementById(this.buttonId),this.button.addEventListener("click",this.handleClickEvent.bind(this))},n.prototype.onClick=function(t){this.callbacks.push(t)},n.prototype.triggerClick=function(){this.handleClickEvent(new Event(null))},n.prototype.show=function(){this.button.classList.remove("hide")},n.prototype.hide=function(){this.button.classList.add("hide")},n.prototype.isHidden=function(){return this.button.classList.contains("hide")},n.prototype.focus=function(){this.button.focus()},n.prototype.title=function(t){return this._title=t,this},n.prototype.cssClass=function(t){return this._cssClass=t,this},n.prototype.handleClickEvent=function(t){t.stopPropagation(),this.callbacks.forEach((function(t){return t()}))},n}(o),s=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),a="dark",c=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return s(n,t),n.prototype.preInsertHtml=function(){this.changeToDarkThemeButtonDomElement=new i("bx:bx-moon","Toggle Theme"),this.changeToLightThemeButtonDomElement=new i("heroicons-solid:sun","Toggle Theme"),this.changeToDarkThemeButtonDomElement.preInsertHtml(),this.changeToLightThemeButtonDomElement.preInsertHtml()},n.prototype.toHtml=function(){return"\n      "+this.changeToDarkThemeButtonDomElement.toHtml()+"\n      "+this.changeToLightThemeButtonDomElement.toHtml()+"\n    "},n.prototype.postInsertHtml=function(){this.changeToDarkThemeButtonDomElement.postInsertHtml(),this.changeToLightThemeButtonDomElement.postInsertHtml(),this.changeToDarkThemeButtonDomElement.onClick(this.handleToggleThemeClickEvent.bind(this)),this.changeToLightThemeButtonDomElement.onClick(this.handleToggleThemeClickEvent.bind(this)),this.updateInnerHTML()},n.prototype.updateInnerHTML=function(){this.changeToDarkThemeButtonDomElement.hide(),this.changeToLightThemeButtonDomElement.hide(),D.isDarkTheme()?this.changeToLightThemeButtonDomElement.show():this.changeToDarkThemeButtonDomElement.show()},n.prototype.handleToggleThemeClickEvent=function(){D.toggleBodyClass(a),this.dispatchCustomEvent("change-theme-event"),this.updateInnerHTML(),this.changeToDarkThemeButtonDomElement.focus(),this.changeToLightThemeButtonDomElement.focus()},n}(o),u="cookies-consentement-already-shown-local-storage-key-v1.0";const l=function(){function t(){}return t.isAlreadyShown=function(){return"true"==(localStorage.getItem(u)||"false")},t.isNotAlreadyShown=function(){return!t.isAlreadyShown()},t.setAlreadyShown=function(){localStorage.setItem(u,"true")},t}();var p=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),h=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return p(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <div id="'+this.containerId+'" class="cookies-consentement-container">\n        <div class="cookies-consentement-msg">\n          <span class="iconify" data-icon="ant-design:info-circle-outlined"></span>\n          <p>We use Cookies and Local Storage to improve your experience on our website. To find out more, read our <a href="/privacy-policy" target="_blank">Privacy policy</a></p>\n        </div>\n        <button id="'+this.buttonId+'">Got it</button> \n      </div>\n    '},n.prototype.postInsertHtml=function(){var t=this;this.container=document.getElementById(this.containerId),this.button=document.getElementById(this.buttonId),setTimeout((function(){l.isAlreadyShown()?t.container.classList.add("hide"):t.container.classList.add("active")}),2e3),this.button.addEventListener("click",this.handleButtonClickEvent.bind(this))},n.prototype.handleButtonClickEvent=function(){this.container.classList.remove("active"),l.setAlreadyShown()},n}(o),d=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),f=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return d(n,t),n.prototype.preInsertHtml=function(){},n.prototype.toHtml=function(){return'\n      <footer>\n        <a class="logo" href=\'/\' target="_blank">\n          <img src=\'/logo.svg\' alt=\'logo\' />\n          <span>Key Tools</span>\n        </a>\n        <div class="links">\n          <a href="/contact" target="_blank">Contact</a>\n          <span>|</span>\n          <a href="/privacy-policy" target="_blank">Privacy Policy</a>\n        </div>\n        <p class="all-right-reserved">© 2022 KeyTools. All rights reserved</p>\n      </footer>\n    '},n.prototype.postInsertHtml=function(){},n}(o),m=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),y=function(t){function n(n){var e=t.call(this)||this;return e.menuItem=n,e}return m(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId()},n.prototype.toHtml=function(){return'\n      <a id="'+this.containerId+'" class="menu-item-container" href="'+this.menuItem.url+'">\n        <i class="'+this.menuItem.icon+' gradient-font"></i>\n        <span class="name">'+this.menuItem.name+"</span>\n      </a>\n  "},n.prototype.postInsertHtml=function(){if("/coming-soon.html"!=window.location.pathname){var t=this.menuItem.url.replace(".html","");window.location.pathname.replace(".html","").indexOf(t)>=0&&(this.container=document.getElementById(this.containerId),this.container.classList.add("selected"))}},n}(o);const g=function(){function t(t,n,e){this.name=t,this.icon=n,this.url=e}return t.getTools=function(){var n=[];return n.push(new t("Color Picker","fas fa-fill-drip","/color-picker")),n.push(new t("Password Generator","fas fa-key","/password-generator")),n.push(new t("Quote Generator","fas fa-quote-left","/quote-generator")),n.push(new t("Turbo Typing","far fa-keyboard","/turbo-typing")),n.push(new t("QR Code Generator","fas fa-qrcode","/qr-code-generator")),n.push(new t("Random Text Generator","fas fa-paragraph","/random-text-generator")),n.push(new t("Hash Generator","fab fa-slack-hash","/hash-generator")),n.push(new t("Free Musics","fas fa-music","/free-musics")),n},t}();var v=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),s=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return s},I=function(){function t(){}return t.equals=function(t,n){return JSON.stringify(t)==JSON.stringify(n)},t.notEquals=function(n,e){return!t.equals(n,e)},t.shuffle=function(t){for(var n,e,o=t.length;0!=o;)e=Math.floor(Math.random()*o),o--,n=v([t[e],t[o]],2),t[o]=n[0],t[e]=n[1];return t},t}(),b=function(){function t(t,n,e){this.name=t,this.icon=n,this.url=e}return t.fromToolSummary=function(n){return new t(n.name,n.icon,n.url)},t}(),_=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),w="tools-search-input-clear-event",H=function(t){function n(){var n=t.call(this)||this;return n.privacyPolicy=new y(new b("Privacy Policy","fas fa-user-secret","/privacy-policy")),n.contact=new y(new b("Contact","far fa-envelope","/contact")),n.tools=g.getTools(),n.toolsComponents=n.tools.map((function(t){return new y(t)})),n}return _(n,t),n.prototype.preInsertHtml=function(){this.toolsContainerId=this.generateId(),this.searchMessageContainerId=this.generateId(),this.emptySearchMessageId=this.generateId(),this.clearButtonId=this.generateId(),this.toolsComponents.map((function(t){return t.preInsertHtml()})),this.privacyPolicy.preInsertHtml(),this.contact.preInsertHtml()},n.prototype.toHtml=function(){return'\n      <div class="menu-with-collapse-button-container">\n        <div class="menu-container">\n          <div id="'+this.searchMessageContainerId+'" class="search-result hidden">\n            <div class="search-result-header">\n              <span>Search Result</span>\n              <button id="'+this.clearButtonId+'">Clear</button>\n            </div>\n            <span id="'+this.emptySearchMessageId+'" class="empty-search-result">\n              No results\n            </span>\n          </div>\n          <div id="'+this.toolsContainerId+'">\n            '+this.toolsComponents.map((function(t){return t.toHtml()})).join("")+'\n          </div>\n          <div class="menu-separator"></div>\n          '+this.privacyPolicy.toHtml()+"\n          "+this.contact.toHtml()+"\n        </div>\n      </div>\n    "},n.prototype.postInsertHtml=function(){var t=this;this.privacyPolicy.postInsertHtml(),this.contact.postInsertHtml(),this.toolsContainer=document.getElementById(this.toolsContainerId),this.searchMessageContainer=document.getElementById(this.searchMessageContainerId),this.emptySearchMessage=document.getElementById(this.emptySearchMessageId),this.clearButton=document.getElementById(this.clearButtonId),this.toolsComponents.map((function(t){return t.postInsertHtml()})),this.clearButton.addEventListener("click",(function(){return t.dispatchCustomEvent(w)})),this.addCustomEventListener(E,this.handleToolSearchInputChangeEvent.bind(this))},n.prototype.addContainerDiv=function(){return!1},n.prototype.handleToolSearchInputChangeEvent=function(t){var n=t.detail.toLowerCase(),e=g.getTools().filter((function(t){return t.name.toLowerCase().indexOf(n)>-1}));I.notEquals(this.tools,e)&&(this.tools=e,this.toolsComponents=this.tools.map((function(t){return new y(t)})),this.toolsComponents.forEach((function(t){return t.preInsertHtml()})),this.toolsContainer.innerHTML=this.toolsComponents.map((function(t){return t.toHtml()})).join(""),this.toolsComponents.forEach((function(t){return t.postInsertHtml()}))),""==n?this.searchMessageContainer.classList.add("hidden"):(this.searchMessageContainer.classList.remove("hidden"),this.emptySearchMessage.classList.add("hidden"),0==this.tools.length&&this.emptySearchMessage.classList.remove("hidden"))},n}(o),C=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),E="tools-search-input-change-event",T=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.classList="",n}return C(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.inputId=this.generateId()},n.prototype.toHtml=function(){return'\n    <div id="'+this.containerId+'" class="tools-search-input-container '+this.classList+'">\n      <span class="iconify" data-icon="fe:search" data-rotate="90deg"></span>\n      <input id="'+this.inputId+'" type="text" placeholder="Search..." value=""/>\n    </div>\n  '},n.prototype.postInsertHtml=function(){this.container=document.getElementById(this.containerId),this.input=document.getElementById(this.inputId),this.input.addEventListener("focus",this.handleInputFocusEvent.bind(this)),this.input.addEventListener("blur",this.handleInputBlurEvent.bind(this)),this.input.addEventListener("keydown",this.handleInputKeydownEvent.bind(this)),this.input.addEventListener("keyup",this.handleInputKeyupEvent.bind(this)),this.addCustomEventListener(w,this.handleToolSearchInputClearEvent.bind(this))},n.prototype.hide=function(){this.container.classList.add("hidden")},n.prototype.handleInputFocusEvent=function(){this.container.classList.add("focus")},n.prototype.handleInputBlurEvent=function(){this.container.classList.remove("focus")},n.prototype.handleInputKeydownEvent=function(t){t.stopPropagation()},n.prototype.handleInputKeyupEvent=function(t){t.stopPropagation(),this.dispatchCustomEvent(E,this.input.value),""!=this.input.value&&D.removeBodyClass("hide-menu")},n.prototype.handleToolSearchInputClearEvent=function(){this.input.value="",this.dispatchCustomEvent(E,this.input.value)},n.prototype.addClassList=function(t){return this.classList+=t,this},n}(o),O=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),L=function(t){function n(n){void 0===n&&(n=!0);var e=t.call(this)||this;return e.withMenu=n,e.toggleMenuIcon=new i("system-uicons:menu-hamburger").title("Toggle menu").cssClass("toggle-menu-icon"),e}return O(n,t),n.prototype.preInsertHtml=function(){this.toolsSearchInput=new T,this.toggleMenuIcon.preInsertHtml(),this.toolsSearchInput.preInsertHtml()},n.prototype.toHtml=function(){return"\n      <div class='left'>\n        <div class=\"toggle-menu-icon-and-logo-container\">\n          "+this.toggleMenuIcon.toHtml()+"\n          <a class=\"logo\" href='/'>\n            <img src='/logo.svg' alt='logo' />\n            <span>Key Tools</span>\n          </a>\n        </div>\n        "+this.toolsSearchInput.toHtml()+"\n      </div>\n    "},n.prototype.postInsertHtml=function(){this.toggleMenuIcon.postInsertHtml(),this.toolsSearchInput.postInsertHtml(),this.toggleMenuIcon.onClick((function(){return D.toggleBodyClass("hide-menu")})),this.withMenu||(this.toggleMenuIcon.hide(),this.toolsSearchInput.hide())},n.prototype.addContainerDiv=function(){return!1},n}(o),P=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),k=function(t){function n(n){void 0===n&&(n=!0);var e=t.call(this)||this;return e.navbarLeft=new L(n),e.changeThemeIcon=new c,e}return P(n,t),n.prototype.preInsertHtml=function(){this.navbarLeft.preInsertHtml(),this.changeThemeIcon.preInsertHtml()},n.prototype.toHtml=function(){return'\n      <nav class="'+this.getNavCssClass()+'">\n        '+this.navbarLeft.toHtml()+"\n        <div class='right'>\n          "+this.getAdditionalRightComponents()+"\n          "+this.changeThemeIcon.toHtml()+"\n        </div>\n      </nav>\n    "},n.prototype.postInsertHtml=function(){this.navbarLeft.postInsertHtml(),this.changeThemeIcon.postInsertHtml()},n.prototype.addContainerDiv=function(){return!1},n.prototype.getAdditionalRightComponents=function(){return""},n.prototype.getNavCssClass=function(){return""},n}(o),B=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),S=function(t){function n(n){var e=t.call(this)||this;return e.tool=n,e}return B(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId()},n.prototype.toHtml=function(){return'\n      <a id="'+this.containerId+'" class="related-tools-item-container" href="'+this.tool.url+'" target="_blanc">\n        <i class="'+this.tool.icon+' gradient-font"></i>\n        <span class="name">'+this.tool.name+"</span>\n      </a>\n  "},n.prototype.postInsertHtml=function(){this.container=document.getElementById(this.containerId)},n}(o),j=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),M=function(t){function n(){var n=t.call(this)||this;return n.tools=I.shuffle(g.getTools()).slice(0,6),n.toolsComponents=n.tools.map((function(t){return new S(t)})),n.toolsContainerId=n.generateId(),n}return j(n,t),n.prototype.preInsertHtml=function(){this.toolsComponents.map((function(t){return t.preInsertHtml()}))},n.prototype.toHtml=function(){return'\n      <div id="'+this.toolsContainerId+'" class="main-section related-articles-main-section">\n        <h2>Related tools</h2>\n        <div class="related-tools-container">\n          '+this.toolsComponents.map((function(t){return t.toHtml()})).join("")+'\n        </div>\n        <a href="/" class="more-tools-button">More Tools<span class="iconify" data-icon="bi:arrow-right"></span></a>\n      </div>\n    '},n.prototype.postInsertHtml=function(){this.toolsContainer=document.getElementById(this.toolsContainerId),this.toolsComponents.map((function(t){return t.postInsertHtml()}))},n}(o),A="body-class-list-local-storage-key-v1.0";const D=function(){function t(){}return t.hideLoader=function(){var t=(new Date).getTime()-window.startTime;setTimeout((function(){document.querySelector(".loader").classList.add("hidden"),document.querySelector(".page-container").classList.remove("on-loading")}),1300-t>0?1300-t:0)},t.insertBySelector=function(t,n,e){void 0===e&&(e="beforeend"),t.insertHtml(document.querySelector(n),e)},t.insertById=function(t,n,e){void 0===e&&(e="beforeend"),t.insertHtml(document.getElementById(n),e)},t.insertNavbar=function(t){t.insertHtml(document.body,"afterbegin")},t.insertBasicNavbarWithMenu=function(){new k(!0).insertHtml(document.body,"afterbegin")},t.insertBasicNavbarWithoutMenu=function(){new k(!1).insertHtml(document.body,"afterbegin")},t.insertMenu=function(){(new H).insertHtml(document.querySelector(".page-container"),"afterbegin")},t.insertTool=function(t,n){void 0===n&&(n="afterbegin"),t.insertHtml(document.querySelector(".main-container"),n)},t.insertRelatedTools=function(){(new M).insertHtml(document.querySelector("#description"),"afterend")},t.insertFooter=function(){(new f).insertHtml(document.body,"beforeend")},t.insertCookiesConsentement=function(){(new h).insertHtml(document.body,"beforeend")},t.isDarkTheme=function(){return(localStorage.getItem(A)||document.body.classList.value).indexOf(a)>=0},t.toggleBodyClass=function(t){document.body.classList.toggle(t),localStorage.setItem(A,document.body.classList.value)},t.addBodyClass=function(t){document.body.classList.add(t),localStorage.setItem(A,document.body.classList.value)},t.removeBodyClass=function(t){document.body.classList.remove(t),localStorage.setItem(A,document.body.classList.value)},t.resetBodyClassList=function(){document.body.classList.value=localStorage.getItem(A)||""},t.isHomePage=function(){return"/"==window.location.pathname},t.ifHomePage=function(t){"/"==window.location.pathname&&t()},t.ifNotHomePage=function(t){"/"!=window.location.pathname&&t()},t}();var x=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const N=function(t){function n(n,e){var o=t.call(this)||this;return o.name=n,o.description=e,o}return x(n,t),n.prototype.toHtml=function(){return'\n      <div class="tool-header-container">\n        <h1 class="gradient-font">'+this.name+"</h1>\n        <h2>"+this.description+"</h2>\n      </div>\n    "},n.prototype.postInsertHtml=function(){},n}(o);var U,q=function(){function t(){}return t.fancyCopy=function(t){var n=t.innerText;if("Copied!"!=n){var e=document.createElement("textarea");e.value=t.dataset.copy,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),t.innerText="Copied!";var o=t.style.fontFamily;setTimeout((function(){t.innerText=n,t.style.fontFamily=o}),1500)}},t.copy=function(t,n){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),n.classList.remove("hidden"),setTimeout((function(){n.classList.add("hidden")}),1500)},t}(),G=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),R=function(t){function n(n){var e=t.call(this)||this;return e.options=n,e.containerId=e.generateId(),e.passwordId=e.generateId(),e.copyButton=new i("bx:copy","Copy Password"),e.generateButton=new i("si-glyph:arrow-reload","Generate Password"),e.options.setGeneratedPassword(e),e}return G(n,t),n.prototype.preInsertHtml=function(){this.copyButton.preInsertHtml(),this.generateButton.preInsertHtml(),this.generateButton.cssClass("generate-button-icon")},n.prototype.toHtml=function(){return'\n      <div id="'+this.containerId+'" class="password-generator-generated-password-container" title="Copy Password">\n        <span id="'+this.passwordId+'" class="password"></span>\n        '+this.copyButton.toHtml()+"\n        "+this.generateButton.toHtml()+"\n      </div>\n    "},n.prototype.postInsertHtml=function(){var t=this;this.password=document.getElementById(this.passwordId),this.container=document.getElementById(this.containerId),this.copyButton.postInsertHtml(),this.generateButton.postInsertHtml(),this.copyButton.onClick((function(){return q.fancyCopy(t.password)})),this.container.addEventListener("click",(function(){return q.fancyCopy(t.password)})),this.generateButton.onClick((function(){return t.generate()})),setTimeout((function(){return t.generate()}))},n.prototype.generate=function(){var t=this.options.getOptions(),n=[];t.includeLowercase&&n.push("abcdefghijklmnopqrstuvwxyz"),t.includeUppercase&&n.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t.includeNumbers&&n.push("0123456789"),t.includeSymbols&&n.push("@#$%&*()-+=^");for(var e,o="",r=0;r<=t.length;r++){for(var i=n[Math.floor(Math.random()*n.length)],s=i[Math.floor(Math.random()*i.length)];e==s;)s=i[Math.floor(Math.random()*i.length)];o+=s,e=s}this.password.innerHTML=o,this.password.dataset.copy=o},n}(o),V=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),F=function(t){function n(n){var e=t.call(this)||this;return e.value=n,e.callbacks=[],e}return V(n,t),n.prototype.preInsertHtml=function(){this.inputId=this.generateId()},n.prototype.toHtml=function(){return'\n      <label class="switch-container">\n        <input id="'+this.inputId+'" type="checkbox">\n        <span class="switch-slider"></span>\n      </label>\n    '},n.prototype.postInsertHtml=function(){this.input=document.getElementById(this.inputId),this.input.checked=this.value,this.input.addEventListener("change",this.handleChangeEvent.bind(this))},n.prototype.reset=function(t){this.input.checked=t},n.prototype.toggle=function(){this.input.checked=!this.input.checked,this.handleChangeEvent()},n.prototype.onUpdate=function(t){this.callbacks.push(t)},n.prototype.getValue=function(){return this.input.checked},n.prototype.handleChangeEvent=function(){var t=this;this.callbacks.forEach((function(n){return n(t.input.checked)}))},n}(o),K=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),W=function(t){function n(n,e){var o=t.call(this)||this;return o.label=n,o.value=e,o.containerId=o.generateId(),o.switch=new F(e),o}return K(n,t),n.prototype.preInsertHtml=function(){this.switch.preInsertHtml()},n.prototype.toHtml=function(){return'\n      <div id="'+this.containerId+'" class="password-generator-boolean-option-container">\n        <span class="label">'+this.label+"</span>\n        "+this.switch.toHtml()+"\n      </div>\n    "},n.prototype.postInsertHtml=function(){this.switch.postInsertHtml(),this.container=document.getElementById(this.containerId),this.container.addEventListener("click",this.handleClickEvent.bind(this))},n.prototype.onUpdate=function(t){this.switch.onUpdate(t)},n.prototype.getValue=function(){return this.switch.getValue()},n.prototype.handleClickEvent=function(t){t.stopPropagation(),this.switch.toggle()},n}(o),Y=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),J=function(t){function n(n){var e=t.call(this)||this;return e.input=n,e.callbacks=[],e}return Y(n,t),n.prototype.preInsertHtml=function(){this.sliderId=this.generateId()},n.prototype.toHtml=function(){return'\n      <div class="slider-container">\n        <input title="'+this.input.title+'" type="range" min="'+this.input.min+'" max="'+this.input.max+'" value="'+this.input.value+'" class="slider" id="'+this.sliderId+'">\n      </div>\n    '},n.prototype.postInsertHtml=function(){this.slider=document.getElementById(this.sliderId),this.slider.oninput=this._onInput.bind(this),this._update(this.input.value)},n.prototype.onInput=function(t){this.callbacks.push(t)},n.prototype._onInput=function(t){var n=t.target.value;this._update(n),this.callbacks.forEach((function(t){return t(n)}))},n.prototype._update=function(t){var n=this.input.min,e=this.input.max;this.slider.style.backgroundSize=100*(t-n)/(e-n)+"% 100%"},n}(o),Q=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),z=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.value=20,n.slider=new J({min:5,max:30,value:n.value,title:""}),n.lengthId=n.generateId(),n}return Q(n,t),n.prototype.preInsertHtml=function(){this.slider.preInsertHtml()},n.prototype.toHtml=function(){return'\n      <div class="password-generator-length-container">\n        <p class="label">LENGTH: <span id="'+this.lengthId+'"></span></p>\n        <div class="password-generator-length">\n          <span>5</span>\n          '+this.slider.toHtml()+"\n          <span>30</span>\n        </div>\n      </div>\n    "},n.prototype.postInsertHtml=function(){this.slider.postInsertHtml(),this.length=document.getElementById(this.lengthId),this.length.innerHTML=""+this.value,this.slider.onInput(this.handleSliderChange.bind(this))},n.prototype.handleSliderChange=function(t){this.value=t,this.length.innerHTML=""+t},n.prototype.onChange=function(t){this.slider.onInput(t)},n.prototype.getValue=function(){return this.value},n}(o),X=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),Z=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.length=new z,n.includeUppercase=new W("Include Uppercase",!0),n.includeLowercase=new W("Include Lowercase",!0),n.includeNumbers=new W("Include Numbers",!0),n.includeSymbols=new W("Include Symbols",!0),n}return X(n,t),n.prototype.preInsertHtml=function(){this.length.preInsertHtml(),this.includeUppercase.preInsertHtml(),this.includeLowercase.preInsertHtml(),this.includeNumbers.preInsertHtml(),this.includeSymbols.preInsertHtml()},n.prototype.toHtml=function(){return'\n      <div class="password-generator-options-container">\n        '+this.length.toHtml()+'\n        <p class="label">SETTINGS</p>\n        <div class="password-generator-boolean-options-container">\n          '+this.includeUppercase.toHtml()+"\n          "+this.includeLowercase.toHtml()+"\n          "+this.includeNumbers.toHtml()+"\n          "+this.includeSymbols.toHtml()+"\n        </div>\n      </div>\n    "},n.prototype.postInsertHtml=function(){var t=this;this.length.postInsertHtml(),this.includeUppercase.postInsertHtml(),this.includeLowercase.postInsertHtml(),this.includeNumbers.postInsertHtml(),this.includeSymbols.postInsertHtml(),this.length.onChange((function(){return t.generatedPassword.generate()})),this.includeUppercase.onUpdate((function(){return t.generatedPassword.generate()})),this.includeLowercase.onUpdate((function(){return t.generatedPassword.generate()})),this.includeNumbers.onUpdate((function(){return t.generatedPassword.generate()})),this.includeSymbols.onUpdate((function(){return t.generatedPassword.generate()}))},n.prototype.getOptions=function(){return{length:this.length.getValue(),includeUppercase:this.includeUppercase.getValue(),includeLowercase:this.includeLowercase.getValue(),includeNumbers:this.includeNumbers.getValue(),includeSymbols:this.includeSymbols.getValue()}},n.prototype.setGeneratedPassword=function(t){this.generatedPassword=t},n}(o),$=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();!function(t){t.PRIMARY="primary",t.SECONDARY="secondary"}(U||(U={}));var tt=function(t){function n(n,e,o){void 0===e&&(e=U.PRIMARY),void 0===o&&(o="button");var r=t.call(this)||this;return r.label=n,r.style=e,r.type=o,r.callbacks=[],r}return $(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <span id="'+this.containerId+'" class="button-container">\n        <button id="'+this.buttonId+'" class="'+this.style+'" type="'+this.type+'">'+this.label+"</button>\n      </span>\n    "},n.prototype.postInsertHtml=function(){document.getElementById(this.buttonId).addEventListener("click",this.handleClickEvent.bind(this))},n.prototype.onClick=function(t){this.callbacks.push(t)},n.prototype.handleClickEvent=function(){this.callbacks.forEach((function(t){return t()}))},n}(o),nt=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),et=function(t){function n(n){var e=t.call(this)||this;return e.generatedPassword=n,e.button=new tt("Generate Password"),e}return nt(n,t),n.prototype.preInsertHtml=function(){this.button.preInsertHtml()},n.prototype.toHtml=function(){return'\n      <div class="password-generator-button-container">\n        '+this.button.toHtml()+"\n      </div>\n    "},n.prototype.postInsertHtml=function(){var t=this;this.button.postInsertHtml(),this.button.onClick((function(){t.generatedPassword.generate()}))},n}(o),ot=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),rt=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.header=new N("Password Generator","Online tool to generate strong and secure password difficult to crack."),n}return ot(n,t),n.prototype.preInsertHtml=function(){this.options=new Z,this.generatedPassword=new R(this.options),this.button=new et(this.generatedPassword),this.header.preInsertHtml(),this.generatedPassword.preInsertHtml(),this.options.preInsertHtml(),this.button.preInsertHtml()},n.prototype.toHtml=function(){return'\n      <div class="main-section">\n        <div class="password-generator-tool-section">\n          '+this.header.toHtml()+"\n          "+this.generatedPassword.toHtml()+"\n          "+this.options.toHtml()+"\n          "+this.button.toHtml()+"\n        </div>\n      </div>\n    "},n.prototype.postInsertHtml=function(){this.header.postInsertHtml(),this.generatedPassword.postInsertHtml(),this.options.postInsertHtml(),this.button.postInsertHtml()},n}(o);D.resetBodyClassList(),D.insertBasicNavbarWithoutMenu(),D.insertRelatedTools(),D.insertTool(new rt),D.insertFooter(),D.insertCookiesConsentement(),D.hideLoader()})();