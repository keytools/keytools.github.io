(()=>{"use strict";var t={3731:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FORMATS=e.FORMAT_PLAIN=e.FORMAT_HTML=void 0;var n="html";e.FORMAT_HTML=n;var o="plain";e.FORMAT_PLAIN=o;var r=[n,o];e.FORMATS=r},8670:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.LINE_ENDINGS=void 0,e.LINE_ENDINGS={POSIX:"\n",WIN32:"\r\n"}},3003:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SUPPORTED_PLATFORMS=void 0,e.SUPPORTED_PLATFORMS={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"}},8749:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.WORDS=void 0,e.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]},3380:(t,e,n)=>{Object.defineProperty(e,"Ap",{enumerable:!0,get:function(){return r.default}});n(8749);var o,r=(o=n(7935))&&o.__esModule?o:{default:o}},7935:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,r=n(3731),i=n(8670),s=(o=n(9140))&&o.__esModule?o:{default:o},a=n(5270);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.FORMAT_PLAIN,o=arguments.length>2?arguments[2]:void 0;if(u(this,t),l(this,"generator",void 0),l(this,"format",void 0),l(this,"suffix",void 0),-1===r.FORMATS.indexOf(n.toLowerCase()))throw new Error("".concat(n," is an invalid format. Please use ").concat(r.FORMATS.join(" or "),"."));this.format=n.toLowerCase(),this.suffix=o,this.generator=new s.default(e)}var e,n;return e=t,(n=[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,a.isReactNative)()&&(0,a.isNode)()&&(0,a.isWindows)()?i.LINE_ENDINGS.WIN32:i.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(t){return this.format===r.FORMAT_HTML?"<p>".concat(t,"</p>"):t}},{key:"formatStrings",value:function(t){var e=this;return t.map((function(t){return e.formatString(t)}))}},{key:"generateWords",value:function(t){return this.formatString(this.generator.generateRandomWords(t))}},{key:"generateSentences",value:function(t){return this.formatString(this.generator.generateRandomParagraph(t))}},{key:"generateParagraphs",value:function(t){var e=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,a.makeArrayOfStrings)(t,e)).join(this.getLineEnding())}}])&&c(e.prototype,n),t}();e.default=p},9140:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(8749),r=n(5270);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.sentencesPerParagraph,r=void 0===n?{max:7,min:3}:n,s=e.wordsPerSentence,u=void 0===s?{max:15,min:5}:s,c=e.random,l=(e.seed,e.words),p=void 0===l?o.WORDS:l;if(i(this,t),a(this,"sentencesPerParagraph",void 0),a(this,"wordsPerSentence",void 0),a(this,"random",void 0),a(this,"words",void 0),r.min>r.max)throw new Error("Minimum number of sentences per paragraph (".concat(r.min,") cannot exceed maximum (").concat(r.max,")."));if(u.min>u.max)throw new Error("Minimum number of words per sentence (".concat(u.min,") cannot exceed maximum (").concat(u.max,")."));this.sentencesPerParagraph=r,this.words=p,this.wordsPerSentence=u,this.random=c||Math.random}var e,n;return e=t,(n=[{key:"generateRandomInteger",value:function(t,e){return Math.floor(this.random()*(e-t+1)+t)}},{key:"generateRandomWords",value:function(t){var e=this,n=this.wordsPerSentence,o=n.min,i=n.max,s=t||this.generateRandomInteger(o,i);return(0,r.makeArrayOfLength)(s).reduce((function(t,n){return"".concat(e.pluckRandomWord()," ").concat(t)}),"").trim()}},{key:"generateRandomSentence",value:function(t){return"".concat((0,r.capitalize)(this.generateRandomWords(t)),".")}},{key:"generateRandomParagraph",value:function(t){var e=this,n=this.sentencesPerParagraph,o=n.min,i=n.max,s=t||this.generateRandomInteger(o,i);return(0,r.makeArrayOfLength)(s).reduce((function(t,n){return"".concat(e.generateRandomSentence()," ").concat(t)}),"").trim()}},{key:"pluckRandomWord",value:function(){var t=this.words.length-1,e=this.generateRandomInteger(0,t);return this.words[e]}}])&&s(e.prototype,n),t}();e.default=u},9569:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=function(t){var e=t.trim();return e.charAt(0).toUpperCase()+e.slice(1)}},5270:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"capitalize",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"isNode",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"isReactNative",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"isWindows",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"makeArrayOfLength",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"makeArrayOfStrings",{enumerable:!0,get:function(){return u.default}});var o=c(n(9569)),r=c(n(9984)),i=c(n(3097)),s=c(n(4606)),a=c(n(2318)),u=c(n(490));function c(t){return t&&t.__esModule?t:{default:t}}},9984:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=function(){return!!t.exports}},3097:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=function(){return"undefined"!=typeof navigator&&"ReactNative"===navigator.product}},4606:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(3003);e.default=function(){return"undefined"!=typeof process&&process.platform===o.SUPPORTED_PLATFORMS.WIN32}},2318:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.apply(null,Array(t)).map((function(t,e){return e}))}},490:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(5270);e.default=function(t,e){return(0,o.makeArrayOfLength)(t).map((function(){return e()}))}}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}(()=>{var t,e=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return s},o=function(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(e(arguments[n]));return t},r=function(){function t(){}return t.prototype.insertHtml=function(t,e){this.preInsertHtml(),this._containerId=this.generateId(),this.addContainerDiv()?t.insertAdjacentHTML(e,'<div id="'+this._containerId+'"}">'+this.toHtml()+"</div>"):t.insertAdjacentHTML(e,this.toHtml()),this.postInsertHtml()},t.prototype.update=function(){document.getElementById(this._containerId).innerHTML=this.toHtml()},t.prototype.preDestroy=function(){},t.prototype.preInsertHtml=function(){},t.prototype.stopPropagation=function(t){t.stopPropagation()},t.prototype.dispatchCustomEvent=function(t,e){void 0===e&&(e={}),document.dispatchEvent(new CustomEvent(t,{detail:e}))},t.prototype.addCustomEventListener=function(t,e){document.addEventListener(t,e)},t.prototype.delayCallback=function(t,e){var n=null;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout(t.bind.apply(t,o([this],r)),e||0)}},t.prototype.generateId=function(){return"_"+Math.random().toString(36).substr(2,9)},t.prototype.getComponentName=function(){return this.constructor.name},t.prototype.addContainerDiv=function(){return!0},t}(),i=(t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)},function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),s=function(t){function e(e,n,o){void 0===n&&(n=""),void 0===o&&(o="0deg");var r=t.call(this)||this;return r._icon=e,r._title=n,r._rotate=o,r.callbacks=[],r}return i(e,t),e.prototype.preInsertHtml=function(){this.buttonId=this.generateId()},e.prototype.toHtml=function(){return'\n      <button class="icon-button '+this._cssClass+'" id="'+this.buttonId+'" title="'+this._title+'">\n        <span class="iconify" data-icon="'+this._icon+'" data-rotate="'+this._rotate+'"></span>\n      </button>\n    '},e.prototype.postInsertHtml=function(){this.button=document.getElementById(this.buttonId),this.button.addEventListener("click",this.handleClickEvent.bind(this))},e.prototype.onClick=function(t){this.callbacks.push(t)},e.prototype.triggerClick=function(){this.handleClickEvent(new Event(null))},e.prototype.show=function(){this.button.classList.remove("hide")},e.prototype.hide=function(){this.button.classList.add("hide")},e.prototype.isHidden=function(){return this.button.classList.contains("hide")},e.prototype.focus=function(){this.button.focus()},e.prototype.title=function(t){return this._title=t,this},e.prototype.cssClass=function(t){return this._cssClass=t,this},e.prototype.handleClickEvent=function(t){t.stopPropagation(),this.callbacks.forEach((function(t){return t()}))},e}(r),a=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),u="dark",c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.preInsertHtml=function(){this.changeToDarkThemeButtonDomElement=new s("bx:bx-moon","Toggle Theme"),this.changeToLightThemeButtonDomElement=new s("heroicons-solid:sun","Toggle Theme"),this.changeToDarkThemeButtonDomElement.preInsertHtml(),this.changeToLightThemeButtonDomElement.preInsertHtml()},e.prototype.toHtml=function(){return"\n      "+this.changeToDarkThemeButtonDomElement.toHtml()+"\n      "+this.changeToLightThemeButtonDomElement.toHtml()+"\n    "},e.prototype.postInsertHtml=function(){this.changeToDarkThemeButtonDomElement.postInsertHtml(),this.changeToLightThemeButtonDomElement.postInsertHtml(),this.changeToDarkThemeButtonDomElement.onClick(this.handleToggleThemeClickEvent.bind(this)),this.changeToLightThemeButtonDomElement.onClick(this.handleToggleThemeClickEvent.bind(this)),this.updateInnerHTML()},e.prototype.updateInnerHTML=function(){this.changeToDarkThemeButtonDomElement.hide(),this.changeToLightThemeButtonDomElement.hide(),M.isDarkTheme()?this.changeToLightThemeButtonDomElement.show():this.changeToDarkThemeButtonDomElement.show()},e.prototype.handleToggleThemeClickEvent=function(){M.toggleBodyClass(u),this.dispatchCustomEvent("change-theme-event"),this.updateInnerHTML(),this.changeToDarkThemeButtonDomElement.focus(),this.changeToLightThemeButtonDomElement.focus()},e}(r),l="cookies-consentement-already-shown-local-storage-key-v1.0";const p=function(){function t(){}return t.isAlreadyShown=function(){return"true"==(localStorage.getItem(l)||"false")},t.isNotAlreadyShown=function(){return!t.isAlreadyShown()},t.setAlreadyShown=function(){localStorage.setItem(l,"true")},t}();var h=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.buttonId=this.generateId()},e.prototype.toHtml=function(){return'\n      <div id="'+this.containerId+'" class="cookies-consentement-container">\n        <div class="cookies-consentement-msg">\n          <span class="iconify" data-icon="ant-design:info-circle-outlined"></span>\n          <p>We use Cookies and Local Storage to improve your experience on our website. To find out more, read our <a href="/privacy-policy" target="_blank">Privacy policy</a></p>\n        </div>\n        <button id="'+this.buttonId+'">Got it</button> \n      </div>\n    '},e.prototype.postInsertHtml=function(){var t=this;this.container=document.getElementById(this.containerId),this.button=document.getElementById(this.buttonId),setTimeout((function(){p.isAlreadyShown()?t.container.classList.add("hide"):t.container.classList.add("active")}),2e3),this.button.addEventListener("click",this.handleButtonClickEvent.bind(this))},e.prototype.handleButtonClickEvent=function(){this.container.classList.remove("active"),p.setAlreadyShown()},e}(r),f=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f(e,t),e.prototype.preInsertHtml=function(){},e.prototype.toHtml=function(){return"\n      <footer>\n        <p>© 2021 myonlinetools.github.io   </p>\n      </footer>\n    "},e.prototype.postInsertHtml=function(){},e}(r),y=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),v=function(t){function e(e){var n=t.call(this)||this;return n.menuItem=e,n}return y(e,t),e.prototype.preInsertHtml=function(){this.containerId=this.generateId()},e.prototype.toHtml=function(){return'\n      <a id="'+this.containerId+'" class="menu-item-container" href="'+this.menuItem.url+'">\n        <i class="'+this.menuItem.icon+' gradient-font"></i>\n        <span class="name">'+this.menuItem.name+"</span>\n      </a>\n  "},e.prototype.postInsertHtml=function(){if("/coming-soon.html"!=window.location.pathname){var t=this.menuItem.url.replace(".html","");window.location.pathname.replace(".html","").indexOf(t)>=0&&(this.container=document.getElementById(this.containerId),this.container.classList.add("selected"))}},e}(r);const g=function(){function t(t,e,n){this.name=t,this.icon=e,this.url=n}return t.getTools=function(){var e=[];return e.push(new t("Color Picker","fas fa-fill-drip","/color-picker")),e.push(new t("Password Generator","fas fa-key","/password-generator")),e.push(new t("Turbo Typing","far fa-keyboard","/turbo-typing")),e.push(new t("QR Code Generator","fas fa-qrcode","/qr-code-generator")),e.push(new t("Random Text Generator","fas fa-paragraph","/random-text-generator")),e.push(new t("Hash Generator","fab fa-slack-hash","/hash-generator")),e.push(new t("Quote Generator","fas fa-quote-left","/quote-generator")),e.push(new t("Free Musics","fas fa-music","/free-musics")),e},t}();var I=function(){function t(){}return t.equals=function(t,e){return JSON.stringify(t)==JSON.stringify(e)},t.notEquals=function(e,n){return!t.equals(e,n)},t}(),b=function(){function t(t,e,n){this.name=t,this.icon=e,this.url=n}return t.fromToolSummary=function(e){return new t(e.name,e.icon,e.url)},t}(),_=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),w="tools-search-input-clear-event",E=function(t){function e(){var e=t.call(this)||this;return e.privacyPolicy=new v(new b("Privacy Policy","fas fa-user-secret","/privacy-policy")),e.contact=new v(new b("Contact","far fa-envelope","/contact")),e.tools=g.getTools(),e.toolsComponents=e.tools.map((function(t){return new v(t)})),e}return _(e,t),e.prototype.preInsertHtml=function(){this.toolsContainerId=this.generateId(),this.searchMessageContainerId=this.generateId(),this.emptySearchMessageId=this.generateId(),this.clearButtonId=this.generateId(),this.toolsComponents.map((function(t){return t.preInsertHtml()})),this.privacyPolicy.preInsertHtml(),this.contact.preInsertHtml()},e.prototype.toHtml=function(){return'\n      <div class="menu-with-collapse-button-container">\n        <div class="menu-container">\n          <div id="'+this.searchMessageContainerId+'" class="search-result hidden">\n            <div class="search-result-header">\n              <span>Search Result</span>\n              <button id="'+this.clearButtonId+'">Clear</button>\n            </div>\n            <span id="'+this.emptySearchMessageId+'" class="empty-search-result">\n              No results\n            </span>\n          </div>\n          <div id="'+this.toolsContainerId+'">\n            '+this.toolsComponents.map((function(t){return t.toHtml()})).join("")+'\n          </div>\n          <div class="menu-separator"></div>\n          '+this.privacyPolicy.toHtml()+"\n          "+this.contact.toHtml()+"\n        </div>\n      </div>\n    "},e.prototype.postInsertHtml=function(){var t=this;this.privacyPolicy.postInsertHtml(),this.contact.postInsertHtml(),this.toolsContainer=document.getElementById(this.toolsContainerId),this.searchMessageContainer=document.getElementById(this.searchMessageContainerId),this.emptySearchMessage=document.getElementById(this.emptySearchMessageId),this.clearButton=document.getElementById(this.clearButtonId),this.toolsComponents.map((function(t){return t.postInsertHtml()})),this.clearButton.addEventListener("click",(function(){return t.dispatchCustomEvent(w)})),this.addCustomEventListener(O,this.handleToolSearchInputChangeEvent.bind(this))},e.prototype.addContainerDiv=function(){return!1},e.prototype.handleToolSearchInputChangeEvent=function(t){var e=t.detail.toLowerCase(),n=g.getTools().filter((function(t){return t.name.toLowerCase().indexOf(e)>-1}));I.notEquals(this.tools,n)&&(this.tools=n,this.toolsComponents=this.tools.map((function(t){return new v(t)})),this.toolsComponents.forEach((function(t){return t.preInsertHtml()})),this.toolsContainer.innerHTML=this.toolsComponents.map((function(t){return t.toHtml()})).join(""),this.toolsComponents.forEach((function(t){return t.postInsertHtml()}))),""==e?this.searchMessageContainer.classList.add("hidden"):(this.searchMessageContainer.classList.remove("hidden"),this.emptySearchMessage.classList.add("hidden"),0==this.tools.length&&this.emptySearchMessage.classList.remove("hidden"))},e}(r),H=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),O="tools-search-input-change-event",T=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.classList="",e}return H(e,t),e.prototype.preInsertHtml=function(){this.containerId=this.generateId(),this.inputId=this.generateId()},e.prototype.toHtml=function(){return'\n    <div id="'+this.containerId+'" class="tools-search-input-container '+this.classList+'">\n      <span class="iconify" data-icon="fe:search" data-rotate="90deg"></span>\n      <input id="'+this.inputId+'" type="text" placeholder="Search..." value=""/>\n    </div>\n  '},e.prototype.postInsertHtml=function(){this.container=document.getElementById(this.containerId),this.input=document.getElementById(this.inputId),this.input.addEventListener("focus",this.handleInputFocusEvent.bind(this)),this.input.addEventListener("blur",this.handleInputBlurEvent.bind(this)),this.input.addEventListener("keydown",this.handleInputKeydownEvent.bind(this)),this.input.addEventListener("keyup",this.handleInputKeyupEvent.bind(this)),this.addCustomEventListener(w,this.handleToolSearchInputClearEvent.bind(this))},e.prototype.hide=function(){this.container.classList.add("hidden")},e.prototype.handleInputFocusEvent=function(){this.container.classList.add("focus")},e.prototype.handleInputBlurEvent=function(){this.container.classList.remove("focus")},e.prototype.handleInputKeydownEvent=function(t){t.stopPropagation()},e.prototype.handleInputKeyupEvent=function(t){t.stopPropagation(),this.dispatchCustomEvent(O,this.input.value),""!=this.input.value&&M.removeBodyClass("hide-menu")},e.prototype.handleToolSearchInputClearEvent=function(){this.input.value="",this.dispatchCustomEvent(O,this.input.value)},e.prototype.addClassList=function(t){return this.classList+=t,this},e}(r),C=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),L=function(t){function e(e){void 0===e&&(e=!0);var n=t.call(this)||this;return n.withMenu=e,n.toggleMenuIcon=new s("system-uicons:menu-hamburger").title("Toggle menu").cssClass("toggle-menu-icon"),n}return C(e,t),e.prototype.preInsertHtml=function(){this.toolsSearchInput=new T,this.toggleMenuIcon.preInsertHtml(),this.toolsSearchInput.preInsertHtml()},e.prototype.toHtml=function(){return"\n      <div class='left'>\n        <div class=\"toggle-menu-icon-and-logo-container\">\n          "+this.toggleMenuIcon.toHtml()+"\n          <a class=\"logo\" href='/'>\n            <img src='/logo.svg' alt='logo' />\n            <span>Key Tools</span>\n          </a>\n        </div>\n        "+this.toolsSearchInput.toHtml()+"\n      </div>\n    "},e.prototype.postInsertHtml=function(){this.toggleMenuIcon.postInsertHtml(),this.toolsSearchInput.postInsertHtml(),this.toggleMenuIcon.onClick((function(){return M.toggleBodyClass("hide-menu")})),this.withMenu||(this.toggleMenuIcon.hide(),this.toolsSearchInput.hide())},e.prototype.addContainerDiv=function(){return!1},e}(r),P=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),S=function(t){function e(e){void 0===e&&(e=!0);var n=t.call(this)||this;return n.navbarLeft=new L(e),n.changeThemeIcon=new c,n}return P(e,t),e.prototype.preInsertHtml=function(){this.navbarLeft.preInsertHtml(),this.changeThemeIcon.preInsertHtml()},e.prototype.toHtml=function(){return'\n      <nav class="'+this.getNavCssClass()+'">\n        '+this.navbarLeft.toHtml()+"\n        <div class='right'>\n          "+this.getAdditionalRightComponents()+"\n          "+this.changeThemeIcon.toHtml()+"\n        </div>\n      </nav>\n    "},e.prototype.postInsertHtml=function(){this.navbarLeft.postInsertHtml(),this.changeThemeIcon.postInsertHtml()},e.prototype.addContainerDiv=function(){return!1},e.prototype.getAdditionalRightComponents=function(){return""},e.prototype.getNavCssClass=function(){return""},e}(r),k="body-class-list-local-storage-key-v1.0";const M=function(){function t(){}return t.hideLoader=function(){var t=(new Date).getTime()-window.startTime;setTimeout((function(){document.querySelector(".loader").classList.add("hidden"),document.querySelector(".page-container").classList.remove("on-loading")}),1300-t>0?1300-t:0)},t.insertBySelector=function(t,e,n){void 0===n&&(n="beforeend"),t.insertHtml(document.querySelector(e),n)},t.insertById=function(t,e,n){void 0===n&&(n="beforeend"),t.insertHtml(document.getElementById(e),n)},t.insertNavbar=function(t){t.insertHtml(document.body,"afterbegin")},t.insertBasicNavbarWithMenu=function(){new S(!0).insertHtml(document.body,"afterbegin")},t.insertBasicNavbarWithoutMenu=function(){new S(!1).insertHtml(document.body,"afterbegin")},t.insertMenu=function(){(new E).insertHtml(document.querySelector(".page-container"),"afterbegin")},t.insertTool=function(t,e){void 0===e&&(e="afterbegin"),t.insertHtml(document.querySelector(".main-container"),e)},t.insertFooter=function(){(new m).insertHtml(document.getElementById("bottom"),"beforeend")},t.insertCookiesConsentement=function(){(new d).insertHtml(document.body,"beforeend")},t.isDarkTheme=function(){return(localStorage.getItem(k)||document.body.classList.value).indexOf(u)>=0},t.toggleBodyClass=function(t){document.body.classList.toggle(t),localStorage.setItem(k,document.body.classList.value)},t.addBodyClass=function(t){document.body.classList.add(t),localStorage.setItem(k,document.body.classList.value)},t.removeBodyClass=function(t){document.body.classList.remove(t),localStorage.setItem(k,document.body.classList.value)},t.resetBodyClassList=function(){document.body.classList.value=localStorage.getItem(k)||""},t.isHomePage=function(){return"/"==window.location.pathname},t.ifHomePage=function(t){"/"==window.location.pathname&&t()},t.ifNotHomePage=function(t){"/"!=window.location.pathname&&t()},t}();var B=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const D=function(t){function e(e,n){var o=t.call(this)||this;return o.name=e,o.description=n,o}return B(e,t),e.prototype.toHtml=function(){return'\n      <div class="tool-header-container">\n        <h1 class="gradient-font">'+this.name+"</h1>\n        <h2>"+this.description+"</h2>\n      </div>\n    "},e.prototype.postInsertHtml=function(){},e}(r);var x=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),j=function(t){function e(e){var n=t.call(this)||this;return n.input=e,n.callbacks=[],n}return x(e,t),e.prototype.preInsertHtml=function(){this.selectId=this.generateId()},e.prototype.toHtml=function(){return'\n      <select id="'+this.selectId+'">\n        '+this.input.options.map((function(t){return'<option value="'+t.value+'">'+t.label+"</option>"})).join("")+"\n      </select>\n    "},e.prototype.postInsertHtml=function(){this.select=document.getElementById(this.selectId),this.updateInnerHTML(),this.select.addEventListener("change",this.handleSelectChangeEvent.bind(this))},e.prototype.handleSelectChangeEvent=function(t){this.input.selectedOptionValue=t.target.value,this.callbacks.forEach((function(e){return e(t.target.value)}))},e.prototype.reset=function(t){this.input=t,this.updateInnerHTML()},e.prototype.onUpdate=function(t){this.callbacks.push(t)},e.prototype.show=function(){0==this.input.options.length?this.hide():this.select.classList.remove("hide")},e.prototype.hide=function(){this.select.classList.add("hide")},e.prototype.focus=function(){this.select.focus()},e.prototype.blur=function(){this.select.blur()},e.prototype.updateInnerHTML=function(){var t=this;this.select.innerHTML=this.input.options.map((function(e){return'<option value="'+e.value+'" '+(t.input.selectedOptionValue===e.value?"selected":"")+">"+e.label+"</option>"})).join("")},e.prototype.getValue=function(){return this.input.selectedOptionValue},e}(r),A=function(){function t(){this.container=document.createElement("div"),this.container.classList.add("toast-container"),document.body.appendChild(this.container)}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.prototype.info=function(t){this.container.classList.remove("error","warn","info"),this.container.classList.add("info"),this.show(t)},t.prototype.warn=function(t){this.container.classList.remove("error","warn","info"),this.container.classList.add("warn"),this.show(t)},t.prototype.error=function(t){this.container.classList.remove("error","warn","info"),this.container.classList.add("error"),this.show(t)},t.prototype.show=function(t){this.container.innerHTML=t,this.container.style.right="2rem",setTimeout(this.hide.bind(this),4e3)},t.prototype.hide=function(){this.container.style.right="-30rem"},t.instance=null,t}(),R=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),N=function(t){function e(e,n){void 0===n&&(n=A.getInstance());var o=t.call(this)||this;return o.value=e,o.toastClient=n,o.callbacks=[],o.increaseButtonDomElementId=o.generateId(),o.decreaseButtonDomElementId=o.generateId(),o.valueInputDomElementId=o.generateId(),o.containerId=o.generateId(),o}return R(e,t),e.prototype.preInsertHtml=function(){},e.prototype.toHtml=function(){return'\n      <div id="'+this.containerId+'" class="increase-decrease-value-container">\n        <span id="'+this.decreaseButtonDomElementId+'" class="increase-value">-</span>\n        <input id="'+this.valueInputDomElementId+'" class="value" size="'+this.getInputSize()+'" value="'+this.value+'" />\n        <span id="'+this.increaseButtonDomElementId+'" class="decrease-value">+</span>\n      </div>\n    '},e.prototype.postInsertHtml=function(){var t=this;this.increaseButtonDomElement=document.getElementById(this.increaseButtonDomElementId),this.decreaseButtonDomElement=document.getElementById(this.decreaseButtonDomElementId),this.valueInputDomElement=document.getElementById(this.valueInputDomElementId),this.increaseButtonDomElement.addEventListener("click",(function(){return t.updateValue(1)})),this.decreaseButtonDomElement.addEventListener("click",(function(){return t.updateValue(-1)})),this.valueInputDomElement.addEventListener("change",this.handleValueInputChangeEvent.bind(this)),this.valueInputDomElement.addEventListener("keydown",this.handleValueInputKeyDownEvent.bind(this))},e.prototype.handleValueInputKeyDownEvent=function(t){13==t.keyCode&&this.valueInputDomElement.blur(),38==t.keyCode&&this.updateValue(1),40==t.keyCode&&this.updateValue(-1)},e.prototype.handleValueInputChangeEvent=function(){var t=this;if(!/^[0-9]+$/.test(this.valueInputDomElement.value))return this.toastClient.error("Only numeric values are accepted"),void(this.valueInputDomElement.value=""+this.value);this.value=parseInt(this.valueInputDomElement.value),this.valueInputDomElement.size=this.getInputSize(),this.callbacks.forEach((function(e){return e(t.value)}))},e.prototype.updateValue=function(t){var e=this;this.value+=t,this.valueInputDomElement.value=""+this.value,this.valueInputDomElement.size=this.getInputSize(),this.callbacks.forEach((function(t){return t(e.value)}))},e.prototype.onUpdate=function(t){this.callbacks.push(t)},e.prototype.getValue=function(){return this.value},e.prototype.getInputSize=function(){return new String(this.value).length},e}(r),W=n(3380);const F=function(){function t(){}return t.create=function(){return new W.Ap({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}})},t}();var V=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),q=F.create(),G="new-random-text-generated";const z=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=new j({options:[{label:"Paragraphs",value:"Paragraphs"},{label:"Sentences",value:"Sentences"},{label:"Words",value:"Words"}],selectedOptionValue:"Paragraphs"}),e.number=new N(2),e}return V(e,t),e.prototype.preInsertHtml=function(){this.type.preInsertHtml(),this.number.preInsertHtml(),this.buttonId=this.generateId()},e.prototype.toHtml=function(){return'\n      <div class="random-text-generator-input-container">\n        '+this.number.toHtml()+"\n        "+this.type.toHtml()+'\n        <button id="'+this.buttonId+'" class="primary">Generate</button>\n      </div>\n    '},e.prototype.postInsertHtml=function(){this.button=document.getElementById(this.buttonId),this.type.postInsertHtml(),this.number.postInsertHtml(),this.button.addEventListener("click",this.generateRandomText.bind(this)),this.type.onUpdate(this.generateRandomText.bind(this)),this.number.onUpdate(this.generateRandomText.bind(this)),setTimeout(this.generateRandomText.bind(this),0)},e.prototype.generateRandomText=function(){var t="";switch(this.type.getValue()){case"Paragraphs":t=q.generateParagraphs(this.number.getValue());break;case"Sentences":t=q.generateSentences(this.number.getValue());break;case"Words":t=q.generateWords(this.number.getValue())}this.dispatchCustomEvent(G,t)},e}(r);var U=function(){function t(){}return t.fancyCopy=function(t){var e=t.innerText;if("Copied!"!=e){var n=document.createElement("textarea");n.value=t.dataset.copy,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),t.innerText="Copied!";var o=t.style.fontFamily;t.style.fontFamily="Roboto",setTimeout((function(){t.innerText=e,t.style.fontFamily=o}),1500)}},t.copy=function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},t}(),K=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const X=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.copyButton=new s("ph:copy-fill","Copy random text"),e.toastClient=A.getInstance(),e}return K(e,t),e.prototype.preInsertHtml=function(){this.outputId=this.generateId(),this.copyButton.preInsertHtml()},e.prototype.toHtml=function(){return'\n      <div class="random-text-generator-output-container">\n        '+this.copyButton.toHtml()+'\n        <label>Generated Text</label>\n        <pre id="'+this.outputId+'">\n        </pre>\n      </div>\n    '},e.prototype.postInsertHtml=function(){this.copyButton.postInsertHtml(),this.output=document.getElementById(this.outputId),this.addCustomEventListener(G,this.handleNewRandomTextGenerated.bind(this)),this.copyButton.onClick(this.handleCopyButtonClickEvent.bind(this))},e.prototype.handleCopyButtonClickEvent=function(){U.copy(this.output.innerHTML),this.toastClient.info("Random text copied to clipboard")},e.prototype.handleNewRandomTextGenerated=function(t){var e=t.detail;e=e.replace(/\n/g,"\n\n"),this.output.innerHTML=e},e}(r);var J=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const Q=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.header=new D("Text Generator",'Online tool to generate random text using <a href="https://www.lipsum.com">Lorem Ipsum</a> library'),e.input=new z,e.output=new X,e}return J(e,t),e.prototype.preInsertHtml=function(){this.header.preInsertHtml(),this.input.preInsertHtml(),this.output.preInsertHtml()},e.prototype.toHtml=function(){return'\n      <div class="random-text-generator-tool-container main-section">\n        '+this.header.toHtml()+"\n        "+this.input.toHtml()+"\n        "+this.output.toHtml()+"\n      </div>\n    "},e.prototype.postInsertHtml=function(){this.header.postInsertHtml(),this.input.postInsertHtml(),this.output.postInsertHtml()},e}(r);M.resetBodyClassList(),M.insertBasicNavbarWithMenu(),M.insertMenu(),M.insertTool(new Q),M.insertCookiesConsentement(),M.hideLoader()})()})();