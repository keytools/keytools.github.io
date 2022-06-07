(()=>{"use strict";const t=function(){function t(t,n,e,o){void 0===e&&(e=""),void 0===o&&(o=""),this.name=t,this.url=n,this.gradientText=e,this.tag=o}return t.getTools=function(){var n=[];return n.push(new t("Color Picker","/color-picker/")),n.push(new t("Password Generator","/password-generator/")),n.push(new t("Quote Generator","/quote-generator/")),n.push(new t("Turbo Typing","/turbo-typing/")),n.push(new t("QR Code Generator","/qr-code-generator/")),n.push(new t("Random Text Generator","/random-text-generator/")),n.push(new t("Hash Generator","/hash-generator/")),n.push(new t("Spinner Wheel","/spinner-wheel/")),n.push(new t("Case Convertor","/case-convertor/","","NEW")),n},t.getToolsExceptCurrentTool=function(){var n=window.location.pathname.replace(".html","");return t.getTools().filter((function(t){return t.url!=n}))},t}();var n,e=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),s=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return s},o=function(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(e(arguments[n]));return t},r=function(){function t(){}return t.prototype.insertHtml=function(t,n){this.preInsertHtml(),this._containerId=this.generateId(),this.addContainerDiv()?t.insertAdjacentHTML(n,'<div id="'+this._containerId+'"}">'+this.toHtml()+"</div>"):t.insertAdjacentHTML(n,this.toHtml()),this.postInsertHtml()},t.prototype.update=function(){document.getElementById(this.getContainerId()).innerHTML=this.toHtml(),this.postInsertHtml()},t.prototype.preDestroy=function(){},t.prototype.preInsertHtml=function(){},t.prototype.stopPropagation=function(t){t.stopPropagation()},t.prototype.dispatchCustomEvent=function(t,n){void 0===n&&(n={}),document.dispatchEvent(new CustomEvent(t,{detail:n}))},t.prototype.addCustomEventListener=function(t,n){document.addEventListener(t,n)},t.prototype.delayCallback=function(t,n){var e=null;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(e),e=setTimeout(t.bind.apply(t,o([this],r)),n||0)}},t.prototype.generateId=function(){return"_"+Math.random().toString(36).substr(2,9)},t.prototype.getComponentName=function(){return this.constructor.name},t.prototype.addContainerDiv=function(){return!0},t.prototype.isDarkTheme=function(){return document.body.classList.contains("dark")},t.prototype.getContainerId=function(){return this._containerId},t.prototype.setContainerId=function(t){this._containerId=t},t.prototype.hide=function(){document.getElementById(this.getContainerId()).classList.add("hide")},t.prototype.show=function(){document.getElementById(this.getContainerId()).classList.remove("hide")},t}(),i=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),s=function(t){function n(n){var e=t.call(this)||this;return e.tool=n,e}return i(n,t),n.prototype.preInsertHtml=function(){},n.prototype.toHtml=function(){return'\n      <a class="tool-summary-square-container" href="'+this.tool.url+'">\n        <span class="gradient-text gradient-font">'+this.getToolGradientText()+'</span>\n        <span class="name">'+this.tool.name+"</span>\n        "+this.getTag()+"\n      </a>\n    "},n.prototype.postInsertHtml=function(){},n.prototype.getTag=function(){return this.tool.tag?'<span class="tag">'+this.tool.tag+"</span>":""},n.prototype.getToolGradientText=function(){return this.tool.gradientText?this.tool.gradientText:this.tool.name[0]},n}(r),a=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),c=function(t){function n(n,e,o){void 0===e&&(e=""),void 0===o&&(o="0deg");var r=t.call(this)||this;return r._icon=n,r._title=e,r._rotate=o,r.callbacks=[],r}return a(n,t),n.prototype.preInsertHtml=function(){this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <button class="icon-button '+this._cssClass+'" id="'+this.buttonId+'" title="'+this._title+'">\n        <span class="iconify" data-icon="'+this._icon+'" data-rotate="'+this._rotate+'"></span>\n      </button>\n    '},n.prototype.postInsertHtml=function(){this.button=document.getElementById(this.buttonId),this.button.addEventListener("click",this.handleClickEvent.bind(this))},n.prototype.onClick=function(t){this.callbacks.push(t)},n.prototype.triggerClick=function(){this.handleClickEvent(new Event(null))},n.prototype.show=function(){this.button.classList.remove("hide")},n.prototype.hide=function(){this.button.classList.add("hide")},n.prototype.isHidden=function(){return this.button.classList.contains("hide")},n.prototype.focus=function(){this.button.focus()},n.prototype.title=function(t){return this._title=t,this},n.prototype.cssClass=function(t){return this._cssClass=t,this},n.prototype.handleClickEvent=function(t){t.stopPropagation(),t.preventDefault(),this.callbacks.forEach((function(t){return t()}))},n}(r),u=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),l="dark",p=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return u(n,t),n.prototype.preInsertHtml=function(){this.changeToDarkThemeButtonDomElement=new c("bx:bx-moon","Toggle Theme"),this.changeToLightThemeButtonDomElement=new c("heroicons-solid:sun","Toggle Theme"),this.changeToDarkThemeButtonDomElement.preInsertHtml(),this.changeToLightThemeButtonDomElement.preInsertHtml()},n.prototype.toHtml=function(){return"\n      "+this.changeToDarkThemeButtonDomElement.toHtml()+"\n      "+this.changeToLightThemeButtonDomElement.toHtml()+"\n    "},n.prototype.postInsertHtml=function(){this.changeToDarkThemeButtonDomElement.postInsertHtml(),this.changeToLightThemeButtonDomElement.postInsertHtml(),this.changeToDarkThemeButtonDomElement.onClick(this.handleToggleThemeClickEvent.bind(this)),this.changeToLightThemeButtonDomElement.onClick(this.handleToggleThemeClickEvent.bind(this)),this.updateInnerHTML()},n.prototype.updateInnerHTML=function(){this.changeToDarkThemeButtonDomElement.hide(),this.changeToLightThemeButtonDomElement.hide(),G.isDarkTheme()?this.changeToLightThemeButtonDomElement.show():this.changeToDarkThemeButtonDomElement.show()},n.prototype.handleToggleThemeClickEvent=function(){G.toggleBodyClass(l),this.dispatchCustomEvent("change-theme-event"),this.updateInnerHTML(),this.changeToDarkThemeButtonDomElement.focus(),this.changeToLightThemeButtonDomElement.focus()},n}(r),h="cookies-consentement-already-shown-local-storage-key-v1.0";const d=function(){function t(){}return t.isAlreadyShown=function(){return"true"==(localStorage.getItem(h)||"false")},t.isNotAlreadyShown=function(){return!t.isAlreadyShown()},t.setAlreadyShown=function(){localStorage.setItem(h,"true")},t}();var f=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),m=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return f(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.buttonId=this.generateId()},n.prototype.toHtml=function(){return'\n      <div id="'+this.containerId+'" class="cookies-consentement-container">\n        <div class="cookies-consentement-msg">\n          <span class="iconify" data-icon="ant-design:info-circle-outlined"></span>\n          <p>We use Cookies and Local Storage to improve your experience on our website. To find out more, read our <a href="/privacy-policy" target="_blank">Privacy policy</a></p>\n        </div>\n        <button id="'+this.buttonId+'">Got it</button> \n      </div>\n    '},n.prototype.postInsertHtml=function(){var t=this;this.container=document.getElementById(this.containerId),this.button=document.getElementById(this.buttonId),setTimeout((function(){d.isAlreadyShown()?t.container.classList.add("hide"):t.container.classList.add("active")}),2e3),this.button.addEventListener("click",this.handleButtonClickEvent.bind(this))},n.prototype.handleButtonClickEvent=function(){this.container.classList.remove("active"),d.setAlreadyShown()},n}(r),y=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),g=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return y(n,t),n.prototype.preInsertHtml=function(){},n.prototype.toHtml=function(){return'\n      <footer>\n        <a class="logo" href=\'/\' target="_blank">\n          <img src=\'/logo.svg\' alt=\'logo\' />\n          <span>Key Tools</span>\n        </a>\n        <div class="links">\n          <a href="/contact" target="_blank">Contact</a>\n          <span>|</span>\n          <a href="/privacy-policy" target="_blank">Privacy Policy</a>\n        </div>\n        <p class="all-right-reserved">© 2022 KeyTools. All rights reserved</p>\n      </footer>\n    '},n.prototype.postInsertHtml=function(){},n}(r),v=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),I=function(t){function n(n){void 0===n&&(n=!0);var e=t.call(this)||this;return e.withMenu=n,e.toggleMenuIcon=new c("system-uicons:menu-hamburger").title("Toggle menu").cssClass("toggle-menu-icon"),e}return v(n,t),n.prototype.preInsertHtml=function(){this.toolsSearchInput=new F,this.toggleMenuIcon.preInsertHtml(),this.toolsSearchInput.preInsertHtml()},n.prototype.toHtml=function(){return"\n      <div class='left'>\n        <div class=\"toggle-menu-icon-and-logo-container\">\n          "+this.toggleMenuIcon.toHtml()+"\n          <a class=\"logo\" href='/'>\n            <img src='/logo.svg' alt='logo' />\n            <span>Key Tools</span>\n          </a>\n        </div>\n        "+this.toolsSearchInput.toHtml()+"\n      </div>\n    "},n.prototype.postInsertHtml=function(){this.toggleMenuIcon.postInsertHtml(),this.toolsSearchInput.postInsertHtml(),this.toggleMenuIcon.onClick((function(){return G.toggleBodyClass("hide-menu")})),this.withMenu||(this.toggleMenuIcon.hide(),this.toolsSearchInput.hide())},n.prototype.addContainerDiv=function(){return!1},n}(r),_=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),C=function(t){function n(n){void 0===n&&(n=!0);var e=t.call(this)||this;return e.navbarLeft=new I(n),e.changeThemeIcon=new p,e}return _(n,t),n.prototype.preInsertHtml=function(){this.navbarLeft.preInsertHtml(),this.changeThemeIcon.preInsertHtml()},n.prototype.toHtml=function(){return'\n      <nav class="'+this.getNavCssClass()+'">\n        '+this.navbarLeft.toHtml()+"\n        <div class='right'>\n          "+this.getAdditionalRightComponents()+"\n          "+this.changeThemeIcon.toHtml()+"\n        </div>\n      </nav>\n    "},n.prototype.postInsertHtml=function(){this.navbarLeft.postInsertHtml(),this.changeThemeIcon.postInsertHtml()},n.prototype.addContainerDiv=function(){return!1},n.prototype.getAdditionalRightComponents=function(){return""},n.prototype.getNavCssClass=function(){return""},n}(r),H=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),b=function(t){function n(n){var e=t.call(this)||this;return e.menuItem=n,e}return H(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId()},n.prototype.toHtml=function(){return'\n      <a id="'+this.containerId+'" class="menu-item-container" href="'+this.menuItem.url+'">\n        <i class="'+this.menuItem.gradientText+' gradient-font"></i>\n        <span class="name">'+this.menuItem.name+"</span>\n      </a>\n  "},n.prototype.postInsertHtml=function(){if("/coming-soon.html"!=window.location.pathname){var t=this.menuItem.url.replace(".html","");window.location.pathname.replace(".html","").indexOf(t)>=0&&(this.container=document.getElementById(this.containerId),this.container.classList.add("selected"))}},n}(r),w=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),s=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return s},T=function(){function t(){}return t.equals=function(t,n){return JSON.stringify(t)==JSON.stringify(n)},t.notEquals=function(n,e){return!t.equals(n,e)},t.shuffle=function(t){for(var n,e,o=t.length;0!=o;)e=Math.floor(Math.random()*o),o--,n=w([t[e],t[o]],2),t[o]=n[0],t[e]=n[1];return t},t}(),E=function(){function t(t,n,e){this.name=t,this.url=n,this.gradientText=e}return t.fromToolSummary=function(n){return new t(n.name,n.url,n.gradientText)},t}(),L=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),O="tools-search-input-clear-event",B=function(n){function e(){var e=n.call(this)||this;return e.privacyPolicy=new b(new E("Privacy Policy","fas fa-user-secret","/privacy-policy")),e.contact=new b(new E("Contact","far fa-envelope","/contact")),e.tools=t.getTools(),e.toolsComponents=e.tools.map((function(t){return new b(t)})),e}return L(e,n),e.prototype.preInsertHtml=function(){this.toolsContainerId=this.generateId(),this.searchMessageContainerId=this.generateId(),this.emptySearchMessageId=this.generateId(),this.clearButtonId=this.generateId(),this.toolsComponents.map((function(t){return t.preInsertHtml()})),this.privacyPolicy.preInsertHtml(),this.contact.preInsertHtml()},e.prototype.toHtml=function(){return'\n      <div class="menu-with-collapse-button-container">\n        <div class="menu-container">\n          <div id="'+this.searchMessageContainerId+'" class="search-result hidden">\n            <div class="search-result-header">\n              <span>Search Result</span>\n              <button id="'+this.clearButtonId+'">Clear</button>\n            </div>\n            <span id="'+this.emptySearchMessageId+'" class="empty-search-result">\n              No results\n            </span>\n          </div>\n          <div id="'+this.toolsContainerId+'">\n            '+this.toolsComponents.map((function(t){return t.toHtml()})).join("")+'\n          </div>\n          <div class="menu-separator"></div>\n          '+this.privacyPolicy.toHtml()+"\n          "+this.contact.toHtml()+"\n        </div>\n      </div>\n    "},e.prototype.postInsertHtml=function(){var t=this;this.privacyPolicy.postInsertHtml(),this.contact.postInsertHtml(),this.toolsContainer=document.getElementById(this.toolsContainerId),this.searchMessageContainer=document.getElementById(this.searchMessageContainerId),this.emptySearchMessage=document.getElementById(this.emptySearchMessageId),this.clearButton=document.getElementById(this.clearButtonId),this.toolsComponents.map((function(t){return t.postInsertHtml()})),this.clearButton.addEventListener("click",(function(){return t.dispatchCustomEvent(O)})),this.addCustomEventListener(K,this.handleToolSearchInputChangeEvent.bind(this))},e.prototype.addContainerDiv=function(){return!1},e.prototype.handleToolSearchInputChangeEvent=function(n){var e=n.detail.toLowerCase(),o=t.getTools().filter((function(t){return t.name.toLowerCase().indexOf(e)>-1}));T.notEquals(this.tools,o)&&(this.tools=o,this.toolsComponents=this.tools.map((function(t){return new b(t)})),this.toolsComponents.forEach((function(t){return t.preInsertHtml()})),this.toolsContainer.innerHTML=this.toolsComponents.map((function(t){return t.toHtml()})).join(""),this.toolsComponents.forEach((function(t){return t.postInsertHtml()}))),""==e?this.searchMessageContainer.classList.add("hidden"):(this.searchMessageContainer.classList.remove("hidden"),this.emptySearchMessage.classList.add("hidden"),0==this.tools.length&&this.emptySearchMessage.classList.remove("hidden"))},e}(r),S=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),k=function(t){function n(n){var e=t.call(this)||this;return e.tool=n,e}return S(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId()},n.prototype.toHtml=function(){return'\n      <a id="'+this.containerId+'" class="related-tools-item-container" href="'+this.tool.url+'" target="_blanc">\n        <span class="gradient-text gradient-font">'+this.getToolGradientText()+'</span>\n        <span class="name">'+this.tool.name+"</span>\n        "+this.getTag()+"\n      </a>\n  "},n.prototype.postInsertHtml=function(){this.container=document.getElementById(this.containerId)},n.prototype.getTag=function(){return this.tool.tag?'<span class="tag">'+this.tool.tag+"</span>":""},n.prototype.getToolGradientText=function(){return this.tool.gradientText?this.tool.gradientText:this.tool.name[0]},n}(r),P=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),x=function(n){function e(){var e=n.call(this)||this;return e.tools=T.shuffle(t.getToolsExceptCurrentTool()).slice(0,6),e.toolsComponents=e.tools.map((function(t){return new k(t)})),e.toolsContainerId=e.generateId(),e}return P(e,n),e.prototype.preInsertHtml=function(){this.toolsComponents.map((function(t){return t.preInsertHtml()}))},e.prototype.toHtml=function(){return'\n      <div id="'+this.toolsContainerId+'" class="main-section related-articles-main-section">\n        <h2>Related tools</h2>\n        <div class="related-tools-container">\n          '+this.toolsComponents.map((function(t){return t.toHtml()})).join("")+'\n        </div>\n        <a href="/" class="more-tools-button">More Tools<span class="iconify" data-icon="bi:arrow-right"></span></a>\n      </div>\n    '},e.prototype.postInsertHtml=function(){this.toolsContainer=document.getElementById(this.toolsContainerId),this.toolsComponents.map((function(t){return t.postInsertHtml()}))},e.prototype.addContainerDiv=function(){return!1},e}(r),j=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),D=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return j(n,t),n.prototype.preInsertHtml=function(){},n.prototype.toHtml=function(){return'\n      <div class="ads-container">\n      </div>\n    '},n.prototype.postInsertHtml=function(){},n.prototype.addContainerDiv=function(){return!1},n}(r),M=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),A=function(n){function e(){var e=n.call(this)||this;return e.tools=T.shuffle(t.getToolsExceptCurrentTool()).slice(0,8),e.toolsComponents=e.tools.map((function(t){return new k(t)})),e.toolsContainerId=e.generateId(),e}return M(e,n),e.prototype.preInsertHtml=function(){this.toolsComponents.map((function(t){return t.preInsertHtml()}))},e.prototype.toHtml=function(){return'\n      <div id="'+this.toolsContainerId+'" class="related-tools-sidebar-container">\n        <h2>Related tools</h2>\n        <div class="related-tools-sidebar">\n          '+this.toolsComponents.map((function(t){return t.toHtml()})).join("")+'\n        </div>\n        <a href="/" class="more-tools-button">More Tools<span class="iconify" data-icon="bi:arrow-right"></span></a>\n      </div>\n    '},e.prototype.postInsertHtml=function(){this.toolsContainer=document.getElementById(this.toolsContainerId),this.toolsComponents.map((function(t){return t.postInsertHtml()}))},e.prototype.addContainerDiv=function(){return!1},e}(r),q=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),N=function(t){function n(n){var e=t.call(this)||this;return e.containerId=n,e.expandButton=new c("eva:expand-outline","Expand Tool").cssClass("expand-button"),e.reduceButton=new c("akar-icons:reduce","Expand Tool").cssClass("reduce-button"),e}return q(n,t),n.prototype.preInsertHtml=function(){this.expandButton.preInsertHtml(),this.reduceButton.preInsertHtml()},n.prototype.toHtml=function(){return"\n      "+this.expandButton.toHtml()+"\n      "+this.reduceButton.toHtml()+"\n    \n    "},n.prototype.postInsertHtml=function(){var t=this;this.expandButton.postInsertHtml(),this.reduceButton.postInsertHtml(),this.reduceButton.hide();var n=document.querySelector(".page-container"),e=document.getElementById(this.containerId);e.style.position="relative",this.expandButton.onClick((function(){n.classList.add("expanded-tool-page"),e.classList.add("expanded-tool"),t.expandButton.hide(),t.reduceButton.show(),t.dispatchCustomEvent("EXPAND_TOOL")})),this.reduceButton.onClick((function(){n.classList.remove("expanded-tool-page"),e.classList.remove("expanded-tool"),t.reduceButton.hide(),t.expandButton.show(),t.dispatchCustomEvent("REDUCE_TOOL")}))},n}(r),R="body-class-list-local-storage-key-v1.0";const G=function(){function t(){}return t.hideLoader=function(){var t=(new Date).getTime()-window.startTime;setTimeout((function(){document.querySelector(".loader").classList.add("hidden"),document.querySelector(".page-container").classList.remove("on-loading")}),1300-t>0?1300-t:0)},t.insertBySelector=function(t,n,e){void 0===e&&(e="beforeend"),t.insertHtml(document.querySelector(n),e)},t.insertById=function(t,n,e){void 0===e&&(e="beforeend"),t.insertHtml(document.getElementById(n),e)},t.insertNavbar=function(t){t.insertHtml(document.body,"afterbegin")},t.insertBasicNavbarWithMenu=function(){new C(!0).insertHtml(document.body,"afterbegin")},t.insertBasicNavbarWithoutMenu=function(){new C(!1).insertHtml(document.body,"afterbegin")},t.insertMenu=function(){(new B).insertHtml(document.querySelector(".page-container"),"afterbegin")},t.insertAds=function(){(new D).insertHtml(document.querySelector(".page-container"),"beforeend")},t.insertTool=function(t,n,e){if(void 0===n&&(n="afterbegin"),void 0===e&&(e=!0),t.insertHtml(document.querySelector(".main-container"),n),e){var o=t.getContainerId();new N(o).insertHtml(document.querySelector("#"+o),"afterbegin")}},t.insertRelatedTools=function(){(new x).insertHtml(document.querySelector("#description"),"afterend")},t.insertRelatedToolsSidebar=function(){(new A).insertHtml(document.querySelector(".page-container"),"beforeend"),(new x).insertHtml(document.querySelector("#description"),"afterend")},t.insertFooter=function(){(new g).insertHtml(document.body,"beforeend")},t.insertCookiesConsentement=function(){(new m).insertHtml(document.body,"beforeend")},t.isDarkTheme=function(){return(localStorage.getItem(R)||document.body.classList.value).indexOf(l)>=0},t.toggleBodyClass=function(t){document.body.classList.toggle(t),localStorage.setItem(R,document.body.classList.value)},t.addBodyClass=function(t){document.body.classList.add(t),localStorage.setItem(R,document.body.classList.value)},t.removeBodyClass=function(t){document.body.classList.remove(t),localStorage.setItem(R,document.body.classList.value)},t.resetBodyClassList=function(){document.body.classList.value=localStorage.getItem(R)||""},t.isHomePage=function(){return"/"==window.location.pathname},t.ifHomePage=function(t){"/"==window.location.pathname&&t()},t.ifNotHomePage=function(t){"/"!=window.location.pathname&&t()},t}();var W=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),K="tools-search-input-change-event",F=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.classList="",n}return W(n,t),n.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.inputId=this.generateId()},n.prototype.toHtml=function(){return'\n    <div id="'+this.containerId+'" class="tools-search-input-container '+this.classList+'">\n      <span class="iconify" data-icon="fe:search" data-rotate="90deg"></span>\n      <input id="'+this.inputId+'" type="text" placeholder="Search..." value=""/>\n    </div>\n  '},n.prototype.postInsertHtml=function(){this.container=document.getElementById(this.containerId),this.input=document.getElementById(this.inputId),this.input.addEventListener("focus",this.handleInputFocusEvent.bind(this)),this.input.addEventListener("blur",this.handleInputBlurEvent.bind(this)),this.input.addEventListener("keydown",this.handleInputKeydownEvent.bind(this)),this.input.addEventListener("keyup",this.handleInputKeyupEvent.bind(this)),this.addCustomEventListener(O,this.handleToolSearchInputClearEvent.bind(this))},n.prototype.hide=function(){this.container.classList.add("hidden")},n.prototype.handleInputFocusEvent=function(){this.container.classList.add("focus")},n.prototype.handleInputBlurEvent=function(){this.container.classList.remove("focus")},n.prototype.handleInputKeydownEvent=function(t){t.stopPropagation()},n.prototype.handleInputKeyupEvent=function(t){t.stopPropagation(),this.dispatchCustomEvent(K,this.input.value),""!=this.input.value&&G.removeBodyClass("hide-menu")},n.prototype.handleToolSearchInputClearEvent=function(){this.input.value="",this.dispatchCustomEvent(K,this.input.value)},n.prototype.addClassList=function(t){return this.classList+=t,this},n}(r),J=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),Q=function(n){function e(){var e=n.call(this)||this;return e.tools=t.getTools(),e.toolsComponents=e.tools.map((function(t){return new s(t)})),e.search=new F,e.toolsContainerId=e.generateId(),e}return J(e,n),e.prototype.preInsertHtml=function(){this.toolsComponents.map((function(t){return t.preInsertHtml()})),this.search.preInsertHtml()},e.prototype.toHtml=function(){return'\n      <div class="search-container">\n        '+this.search.toHtml()+'\n      </div>\n      <div id="'+this.toolsContainerId+'" class="tools-summary-mosaic-container">\n        '+this.toolsComponents.map((function(t){return t.toHtml()})).join("")+"\n      </div>\n    "},e.prototype.postInsertHtml=function(){this.toolsContainer=document.getElementById(this.toolsContainerId),this.toolsComponents.map((function(t){return t.postInsertHtml()})),this.search.postInsertHtml(),this.updateWidth(),this.addCustomEventListener(K,this.handleToolSearchInputChangeEvent.bind(this))},e.prototype.handleToolSearchInputChangeEvent=function(n){var e=n.detail.toLowerCase(),o=t.getTools().filter((function(t){return t.name.toLowerCase().indexOf(e)>-1}));T.notEquals(this.tools,o)&&(this.tools=o,this.toolsComponents=this.tools.map((function(t){return new s(t)})),this.toolsComponents.forEach((function(t){return t.preInsertHtml()})),this.toolsContainer.innerHTML=this.toolsComponents.map((function(t){return t.toHtml()})).join(""),this.toolsComponents.forEach((function(t){return t.postInsertHtml()})))},e.prototype.updateWidth=function(){var t=document.querySelector(".tool-summary-square-container").getBoundingClientRect().width;document.querySelectorAll(".tool-summary-square-container").forEach((function(n){console.log(t),n.style.width=t+"px"}))},e}(r);G.resetBodyClassList(),G.insertBasicNavbarWithoutMenu(),G.insertTool(new Q,"beforeend",!1),G.insertFooter(),G.insertCookiesConsentement(),G.hideLoader()})();