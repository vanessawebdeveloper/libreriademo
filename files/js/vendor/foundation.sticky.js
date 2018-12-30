(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==='object'&&typeof module==='object')
module.exports=factory(require("./foundation.core"),require("./foundation.core.plugin"),require("./foundation.core.utils"),require("./foundation.util.mediaQuery"),require("./foundation.util.motion"),require("jquery"));else if(typeof define==='function'&&define.amd)
define(["./foundation.core","./foundation.core.plugin","./foundation.core.utils","./foundation.util.mediaQuery","./foundation.util.motion","jquery"],factory);else if(typeof exports==='object')
exports["foundation.sticky"]=factory(require("./foundation.core"),require("./foundation.core.plugin"),require("./foundation.core.utils"),require("./foundation.util.mediaQuery"),require("./foundation.util.motion"),require("jquery"));else
root["__FOUNDATION_EXTERNAL__"]=root["__FOUNDATION_EXTERNAL__"]||{},root["__FOUNDATION_EXTERNAL__"]["foundation.sticky"]=factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"],root["__FOUNDATION_EXTERNAL__"]["foundation.core"],root["__FOUNDATION_EXTERNAL__"]["foundation.core"],root["__FOUNDATION_EXTERNAL__"]["foundation.util.mediaQuery"],root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"],root["jQuery"]);})(window,function(__WEBPACK_EXTERNAL_MODULE__foundation_core__,__WEBPACK_EXTERNAL_MODULE__foundation_core_plugin__,__WEBPACK_EXTERNAL_MODULE__foundation_core_utils__,__WEBPACK_EXTERNAL_MODULE__foundation_util_mediaQuery__,__WEBPACK_EXTERNAL_MODULE__foundation_util_motion__,__WEBPACK_EXTERNAL_MODULE_jquery__){return(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=17);})
({"./foundation.core":/*!****************************************************************************************************************************************************************!*\
!*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core","commonjs":"./foundation.core","commonjs2":"./foundation.core"} ***!
\****************************************************************************************************************************************************************//*!no static exports found*/(function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__foundation_core__;}),"./foundation.core.plugin":/*!*************************************************************************************************************************************************************************************!*\
!*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core.plugin","commonjs":"./foundation.core.plugin","commonjs2":"./foundation.core.plugin"} ***!
\*************************************************************************************************************************************************************************************//*!no static exports found*/(function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__foundation_core_plugin__;}),"./foundation.core.utils":/*!**********************************************************************************************************************************************************************************!*\
!*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core.utils","commonjs":"./foundation.core.utils","commonjs2":"./foundation.core.utils"} ***!
\**********************************************************************************************************************************************************************************//*!no static exports found*/(function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__foundation_core_utils__;}),"./foundation.util.mediaQuery":/*!************************************************************************************************************************************************************************************************************!*\
!*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.mediaQuery"],"amd":"./foundation.util.mediaQuery","commonjs":"./foundation.util.mediaQuery","commonjs2":"./foundation.util.mediaQuery"} ***!
\************************************************************************************************************************************************************************************************************//*!no static exports found*/(function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__foundation_util_mediaQuery__;}),"./foundation.util.motion":/*!********************************************************************************************************************************************************************************************!*\
!*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.motion"],"amd":"./foundation.util.motion","commonjs":"./foundation.util.motion","commonjs2":"./foundation.util.motion"} ***!
\********************************************************************************************************************************************************************************************//*!no static exports found*/(function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__foundation_util_motion__;}),"./js/entries/plugins/foundation.sticky.js":/*!*************************************************!*\
!*** ./js/entries/plugins/foundation.sticky.js ***!
\*************************************************//*!exports provided: Foundation, Sticky*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _foundation_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!./foundation.core*/"./foundation.core");var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__.d(__webpack_exports__,"Foundation",function(){return _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"];});var _foundation_sticky__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*!../../foundation.sticky*/"./js/foundation.sticky.js");__webpack_require__.d(__webpack_exports__,"Sticky",function(){return _foundation_sticky__WEBPACK_IMPORTED_MODULE_1__["Sticky"];});_foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_sticky__WEBPACK_IMPORTED_MODULE_1__["Sticky"],'Sticky');}),"./js/foundation.sticky.js":/*!*********************************!*\
!*** ./js/foundation.sticky.js ***!
\*********************************//*!exports provided: Sticky*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"Sticky",function(){return Sticky;});var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!jquery*/"jquery");var jquery__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*!./foundation.core.utils*/"./foundation.core.utils");var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__);var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*!./foundation.util.mediaQuery*/"./foundation.util.mediaQuery");var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__);var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*!./foundation.core.plugin*/"./foundation.core.plugin");var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__);var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*!./foundation.util.triggers*/"./js/foundation.util.triggers.js");function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}
function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}
function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}
function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}
function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}
var Sticky=function(_Plugin){_inherits(Sticky,_Plugin);function Sticky(){_classCallCheck(this,Sticky);return _possibleConstructorReturn(this,_getPrototypeOf(Sticky).apply(this,arguments));}
_createClass(Sticky,[{key:"_setup",value:function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({},Sticky.defaults,this.$element.data(),options);this.className='Sticky';_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);this._init();}},{key:"_init",value:function _init(){_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();var $parent=this.$element.parent('[data-sticky-container]'),id=this.$element[0].id||Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6,'sticky'),_this=this;if($parent.length){this.$container=$parent;}else{this.wasWrapped=true;this.$element.wrap(this.options.container);this.$container=this.$element.parent();}
this.$container.addClass(this.options.containerClass);this.$element.addClass(this.options.stickyClass).attr({'data-resize':id,'data-mutate':id});if(this.options.anchor!==''){jquery__WEBPACK_IMPORTED_MODULE_0___default()('#'+_this.options.anchor).attr({'data-mutate':id});}
this.scrollCount=this.options.checkEvery;this.isStuck=false;this.onLoadListener=Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window),function(){_this.containerHeight=_this.$element.css("display")=="none"?0:_this.$element[0].getBoundingClientRect().height;_this.$container.css('height',_this.containerHeight);_this.elemHeight=_this.containerHeight;if(_this.options.anchor!==''){_this.$anchor=jquery__WEBPACK_IMPORTED_MODULE_0___default()('#'+_this.options.anchor);}else{_this._parsePoints();}
_this._setSizes(function(){var scroll=window.pageYOffset;_this._calc(false,scroll);if(!_this.isStuck){_this._removeSticky(scroll>=_this.topPoint?false:true);}});_this._events(id.split('-').reverse().join('-'));});}},{key:"_parsePoints",value:function _parsePoints(){var top=this.options.topAnchor==""?1:this.options.topAnchor,btm=this.options.btmAnchor==""?document.documentElement.scrollHeight:this.options.btmAnchor,pts=[top,btm],breaks={};for(var i=0,len=pts.length;i<len&&pts[i];i++){var pt;if(typeof pts[i]==='number'){pt=pts[i];}else{var place=pts[i].split(':'),anchor=jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(place[0]));pt=anchor.offset().top;if(place[1]&&place[1].toLowerCase()==='bottom'){pt+=anchor[0].getBoundingClientRect().height;}}
breaks[i]=pt;}
this.points=breaks;return;}},{key:"_events",value:function _events(id){var _this=this,scrollListener=this.scrollListener="scroll.zf.".concat(id);if(this.isOn){return;}
if(this.canStick){this.isOn=true;jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener).on(scrollListener,function(e){if(_this.scrollCount===0){_this.scrollCount=_this.options.checkEvery;_this._setSizes(function(){_this._calc(false,window.pageYOffset);});}else{_this.scrollCount--;_this._calc(false,window.pageYOffset);}});}
this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger',function(e,el){_this._eventsHandler(id);});this.$element.on('mutateme.zf.trigger',function(e,el){_this._eventsHandler(id);});if(this.$anchor){this.$anchor.on('mutateme.zf.trigger',function(e,el){_this._eventsHandler(id);});}}},{key:"_eventsHandler",value:function _eventsHandler(id){var _this=this,scrollListener=this.scrollListener="scroll.zf.".concat(id);_this._setSizes(function(){_this._calc(false);if(_this.canStick){if(!_this.isOn){_this._events(id);}}else if(_this.isOn){_this._pauseListeners(scrollListener);}});}},{key:"_pauseListeners",value:function _pauseListeners(scrollListener){this.isOn=false;jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener);this.$element.trigger('pause.zf.sticky');}},{key:"_calc",value:function _calc(checkSizes,scroll){if(checkSizes){this._setSizes();}
if(!this.canStick){if(this.isStuck){this._removeSticky(true);}
return false;}
if(!scroll){scroll=window.pageYOffset;}
if(scroll>=this.topPoint){if(scroll<=this.bottomPoint){if(!this.isStuck){this._setSticky();}}else{if(this.isStuck){this._removeSticky(false);}}}else{if(this.isStuck){this._removeSticky(true);}}}},{key:"_setSticky",value:function _setSticky(){var _this=this,stickTo=this.options.stickTo,mrgn=stickTo==='top'?'marginTop':'marginBottom',notStuckTo=stickTo==='top'?'bottom':'top',css={};css[mrgn]="".concat(this.options[mrgn],"em");css[stickTo]=0;css[notStuckTo]='auto';this.isStuck=true;this.$element.removeClass("is-anchored is-at-".concat(notStuckTo)).addClass("is-stuck is-at-".concat(stickTo)).css(css).trigger("sticky.zf.stuckto:".concat(stickTo));this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){_this._setSizes();});}},{key:"_removeSticky",value:function _removeSticky(isTop){var stickTo=this.options.stickTo,stickToTop=stickTo==='top',css={},anchorPt=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,mrgn=stickToTop?'marginTop':'marginBottom',notStuckTo=stickToTop?'bottom':'top',topOrBottom=isTop?'top':'bottom';css[mrgn]=0;css['bottom']='auto';if(isTop){css['top']=0;}else{css['top']=anchorPt;}
this.isStuck=false;this.$element.removeClass("is-stuck is-at-".concat(stickTo)).addClass("is-anchored is-at-".concat(topOrBottom)).css(css).trigger("sticky.zf.unstuckfrom:".concat(topOrBottom));}},{key:"_setSizes",value:function _setSizes(cb){this.canStick=_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"].is(this.options.stickyOn);if(!this.canStick){if(cb&&typeof cb==='function'){cb();}}
var _this=this,newElemWidth=this.$container[0].getBoundingClientRect().width,comp=window.getComputedStyle(this.$container[0]),pdngl=parseInt(comp['padding-left'],10),pdngr=parseInt(comp['padding-right'],10);if(this.$anchor&&this.$anchor.length){this.anchorHeight=this.$anchor[0].getBoundingClientRect().height;}else{this._parsePoints();}
this.$element.css({'max-width':"".concat(newElemWidth-pdngl-pdngr,"px")});var newContainerHeight=this.$element[0].getBoundingClientRect().height||this.containerHeight;if(this.$element.css("display")=="none"){newContainerHeight=0;}
this.containerHeight=newContainerHeight;this.$container.css({height:newContainerHeight});this.elemHeight=newContainerHeight;if(!this.isStuck){if(this.$element.hasClass('is-at-bottom')){var anchorPt=(this.points?this.points[1]-this.$container.offset().top:this.anchorHeight)-this.elemHeight;this.$element.css('top',anchorPt);}}
this._setBreakPoints(newContainerHeight,function(){if(cb&&typeof cb==='function'){cb();}});}},{key:"_setBreakPoints",value:function _setBreakPoints(elemHeight,cb){if(!this.canStick){if(cb&&typeof cb==='function'){cb();}else{return false;}}
var mTop=emCalc(this.options.marginTop),mBtm=emCalc(this.options.marginBottom),topPoint=this.points?this.points[0]:this.$anchor.offset().top,bottomPoint=this.points?this.points[1]:topPoint+this.anchorHeight,winHeight=window.innerHeight;if(this.options.stickTo==='top'){topPoint-=mTop;bottomPoint-=elemHeight+mTop;}else if(this.options.stickTo==='bottom'){topPoint-=winHeight-(elemHeight+mBtm);bottomPoint-=winHeight-mBtm;}else{}
this.topPoint=topPoint;this.bottomPoint=bottomPoint;if(cb&&typeof cb==='function'){cb();}}},{key:"_destroy",value:function _destroy(){this._removeSticky(true);this.$element.removeClass("".concat(this.options.stickyClass," is-anchored is-at-top")).css({height:'',top:'',bottom:'','max-width':''}).off('resizeme.zf.trigger').off('mutateme.zf.trigger');if(this.$anchor&&this.$anchor.length){this.$anchor.off('change.zf.sticky');}
if(this.scrollListener)jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.scrollListener);if(this.onLoadListener)jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);if(this.wasWrapped){this.$element.unwrap();}else{this.$container.removeClass(this.options.containerClass).css({height:''});}}}]);return Sticky;}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);Sticky.defaults={container:'<div data-sticky-container></div>',stickTo:'top',anchor:'',topAnchor:'',btmAnchor:'',marginTop:1,marginBottom:1,stickyOn:'medium',stickyClass:'sticky',containerClass:'sticky-container',checkEvery:-1};function emCalc(em){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*em;}}),"./js/foundation.util.triggers.js":/*!****************************************!*\
!*** ./js/foundation.util.triggers.js ***!
\****************************************//*!exports provided: Triggers*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"Triggers",function(){return Triggers;});var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!jquery*/"jquery");var jquery__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*!./foundation.core.utils*/"./foundation.core.utils");var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__);var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*!./foundation.util.motion*/"./foundation.util.motion");var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__);function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}
var MutationObserver=function(){var prefixes=['WebKit','Moz','O','Ms',''];for(var i=0;i<prefixes.length;i++){if("".concat(prefixes[i],"MutationObserver")in window){return window["".concat(prefixes[i],"MutationObserver")];}}
return false;}();var triggers=function triggers(el,type){el.data(type).split(' ').forEach(function(id){jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id))[type==='close'?'trigger':'triggerHandler']("".concat(type,".zf.trigger"),[el]);});};var Triggers={Listeners:{Basic:{},Global:{}},Initializers:{}};Triggers.Listeners.Basic={openListener:function openListener(){triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),'open');},closeListener:function closeListener(){var id=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('close');if(id){triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),'close');}else{jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('close.zf.trigger');}},toggleListener:function toggleListener(){var id=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');if(id){triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),'toggle');}else{jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('toggle.zf.trigger');}},closeableListener:function closeableListener(e){e.stopPropagation();var animation=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable');if(animation!==''){_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),animation,function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('closed.zf');});}else{jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut().trigger('closed.zf');}},toggleFocusListener:function toggleFocusListener(){var id=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle-focus');jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id)).triggerHandler('toggle.zf.trigger',[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)]);}};Triggers.Initializers.addOpenListener=function($elem){$elem.off('click.zf.trigger',Triggers.Listeners.Basic.openListener);$elem.on('click.zf.trigger','[data-open]',Triggers.Listeners.Basic.openListener);};Triggers.Initializers.addCloseListener=function($elem){$elem.off('click.zf.trigger',Triggers.Listeners.Basic.closeListener);$elem.on('click.zf.trigger','[data-close]',Triggers.Listeners.Basic.closeListener);};Triggers.Initializers.addToggleListener=function($elem){$elem.off('click.zf.trigger',Triggers.Listeners.Basic.toggleListener);$elem.on('click.zf.trigger','[data-toggle]',Triggers.Listeners.Basic.toggleListener);};Triggers.Initializers.addCloseableListener=function($elem){$elem.off('close.zf.trigger',Triggers.Listeners.Basic.closeableListener);$elem.on('close.zf.trigger','[data-closeable], [data-closable]',Triggers.Listeners.Basic.closeableListener);};Triggers.Initializers.addToggleFocusListener=function($elem){$elem.off('focus.zf.trigger blur.zf.trigger',Triggers.Listeners.Basic.toggleFocusListener);$elem.on('focus.zf.trigger blur.zf.trigger','[data-toggle-focus]',Triggers.Listeners.Basic.toggleFocusListener);};Triggers.Listeners.Global={resizeListener:function resizeListener($nodes){if(!MutationObserver){$nodes.each(function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('resizeme.zf.trigger');});}
$nodes.attr('data-events',"resize");},scrollListener:function scrollListener($nodes){if(!MutationObserver){$nodes.each(function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('scrollme.zf.trigger');});}
$nodes.attr('data-events',"scroll");},closeMeListener:function closeMeListener(e,pluginId){var plugin=e.namespace.split('.')[0];var plugins=jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-".concat(plugin,"]")).not("[data-yeti-box=\"".concat(pluginId,"\"]"));plugins.each(function(){var _this=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);_this.triggerHandler('close.zf.trigger',[_this]);});}};Triggers.Initializers.addClosemeListener=function(pluginName){var yetiBoxes=jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-yeti-box]'),plugNames=['dropdown','tooltip','reveal'];if(pluginName){if(typeof pluginName==='string'){plugNames.push(pluginName);}else if(_typeof(pluginName)==='object'&&typeof pluginName[0]==='string'){plugNames.concat(pluginName);}else{console.error('Plugin names must be strings');}}
if(yetiBoxes.length){var listeners=plugNames.map(function(name){return "closeme.zf.".concat(name);}).join(' ');jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(listeners).on(listeners,Triggers.Listeners.Global.closeMeListener);}};function debounceGlobalListener(debounce,trigger,listener){var timer,args=Array.prototype.slice.call(arguments,3);jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(trigger).on(trigger,function(e){if(timer){clearTimeout(timer);}
timer=setTimeout(function(){listener.apply(null,args);},debounce||10);});}
Triggers.Initializers.addResizeListener=function(debounce){var $nodes=jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-resize]');if($nodes.length){debounceGlobalListener(debounce,'resize.zf.trigger',Triggers.Listeners.Global.resizeListener,$nodes);}};Triggers.Initializers.addScrollListener=function(debounce){var $nodes=jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll]');if($nodes.length){debounceGlobalListener(debounce,'scroll.zf.trigger',Triggers.Listeners.Global.scrollListener,$nodes);}};Triggers.Initializers.addMutationEventsListener=function($elem){if(!MutationObserver){return false;}
var $nodes=$elem.find('[data-resize], [data-scroll], [data-mutate]');var listeningElementsMutation=function listeningElementsMutation(mutationRecordsList){var $target=jquery__WEBPACK_IMPORTED_MODULE_0___default()(mutationRecordsList[0].target);switch(mutationRecordsList[0].type){case "attributes":if($target.attr("data-events")==="scroll"&&mutationRecordsList[0].attributeName==="data-events"){$target.triggerHandler('scrollme.zf.trigger',[$target,window.pageYOffset]);}
if($target.attr("data-events")==="resize"&&mutationRecordsList[0].attributeName==="data-events"){$target.triggerHandler('resizeme.zf.trigger',[$target]);}
if(mutationRecordsList[0].attributeName==="style"){$target.closest("[data-mutate]").attr("data-events","mutate");$target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger',[$target.closest("[data-mutate]")]);}
break;case "childList":$target.closest("[data-mutate]").attr("data-events","mutate");$target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger',[$target.closest("[data-mutate]")]);break;default:return false;}};if($nodes.length){for(var i=0;i<=$nodes.length-1;i++){var elementObserver=new MutationObserver(listeningElementsMutation);elementObserver.observe($nodes[i],{attributes:true,childList:true,characterData:false,subtree:true,attributeFilter:["data-events","style"]});}}};Triggers.Initializers.addSimpleListeners=function(){var $document=jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);Triggers.Initializers.addOpenListener($document);Triggers.Initializers.addCloseListener($document);Triggers.Initializers.addToggleListener($document);Triggers.Initializers.addCloseableListener($document);Triggers.Initializers.addToggleFocusListener($document);};Triggers.Initializers.addGlobalListeners=function(){var $document=jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);Triggers.Initializers.addMutationEventsListener($document);Triggers.Initializers.addResizeListener();Triggers.Initializers.addScrollListener();Triggers.Initializers.addClosemeListener();};Triggers.init=function($,Foundation){Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])($(window),function(){if($.triggersInitialized!==true){Triggers.Initializers.addSimpleListeners();Triggers.Initializers.addGlobalListeners();$.triggersInitialized=true;}});if(Foundation){Foundation.Triggers=Triggers;Foundation.IHearYou=Triggers.Initializers.addGlobalListeners;}};}),17:/*!*******************************************************!*\
!*** multi ./js/entries/plugins/foundation.sticky.js ***!
\*******************************************************//*!no static exports found*/(function(module,exports,__webpack_require__){module.exports=__webpack_require__(/*!/Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.sticky.js*/"./js/entries/plugins/foundation.sticky.js");}),"jquery":/*!********************************************************************************************!*\
!*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
\********************************************************************************************//*!no static exports found*/(function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_jquery__;})});});