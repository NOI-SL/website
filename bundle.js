(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=3)})([function(a,b){'use strict';/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class c{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(a={}){this.adapter_=a}init(){}destroy(){}}b.a=c},function(){'use strict';/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */},function(a,b,c){'use strict';function d(a){const b=a.document,c=b.createElement('div');c.className='mdc-ripple-surface--test-edge-var-bug',b.body.appendChild(c);const d=a.getComputedStyle(c),e=null!==d&&'solid'===d.borderTopStyle;return c.remove(),e}function e(a,b=!1){let c=i;if('boolean'==typeof i&&!b)return c;const e=a.CSS&&'function'==typeof a.CSS.supports;if(e){const e=a.CSS.supports('--css-vars','yes'),f=a.CSS.supports('(--css-vars: yes)')&&a.CSS.supports('color','#00000000');return c=!!(e||f)&&!d(a),b||(i=c),c}}function f(a=window,b=!1){if(j===void 0||b){let b=!1;try{a.document.addEventListener('test',null,{get passive(){b=!0}})}catch(a){}j=b}return!!j&&{passive:!0}}function g(a){return['webkitMatchesSelector','msMatchesSelector','matches'].filter((b)=>b in a).pop()}function h(a,b,c){const{x:d,y:e}=b,f=d+c.left,g=e+c.top;let h,i;return'touchstart'===a.type?(h=a.changedTouches[0].pageX-f,i=a.changedTouches[0].pageY-g):(h=a.pageX-f,i=a.pageY-g),{x:h,y:i}}Object.defineProperty(b,'__esModule',{value:!0}),c.d(b,'supportsCssVariables',function(){return e}),c.d(b,'applyPassive',function(){return f}),c.d(b,'getMatchesProperty',function(){return g}),c.d(b,'getNormalizedEventCoords',function(){return h});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */let i,j},function(a,b,c){c(4),a.exports=c(5)},function(a,b,c){a.exports=c.p+'bundle.css'},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(6),e=new d.MDCRipple(document.querySelector('.foo-button'))},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),c.d(b,'MDCRipple',function(){return h}),c.d(b,'RippleCapableSurface',function(){return i});var d=c(7),e=c(1),f=c(8),g=c(2);c.d(b,'MDCRippleFoundation',function(){return f.a}),c.d(b,'util',function(){return g});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class h extends d.a{constructor(...a){super(...a),this.disabled=!1,this.unbounded_}static attachTo(a,{isUnbounded:b=void 0}={}){const c=new h(a);return void 0!==b&&(c.unbounded=b),c}static createAdapter(a){const b=g.getMatchesProperty(HTMLElement.prototype);return{browserSupportsCssVars:()=>g.supportsCssVariables(window),isUnbounded:()=>a.unbounded,isSurfaceActive:()=>a.root_[b](':active'),isSurfaceDisabled:()=>a.disabled,addClass:(b)=>a.root_.classList.add(b),removeClass:(b)=>a.root_.classList.remove(b),containsEventTarget:(b)=>a.root_.contains(b),registerInteractionHandler:(b,c)=>a.root_.addEventListener(b,c,g.applyPassive()),deregisterInteractionHandler:(b,c)=>a.root_.removeEventListener(b,c,g.applyPassive()),registerDocumentInteractionHandler:(a,b)=>document.documentElement.addEventListener(a,b,g.applyPassive()),deregisterDocumentInteractionHandler:(a,b)=>document.documentElement.removeEventListener(a,b,g.applyPassive()),registerResizeHandler:(a)=>window.addEventListener('resize',a),deregisterResizeHandler:(a)=>window.removeEventListener('resize',a),updateCssVariable:(b,c)=>a.root_.style.setProperty(b,c),computeBoundingRect:()=>a.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(a){this.unbounded_=!!a,this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new f.a(h.createAdapter(this))}initialSyncWithDOM(){this.unbounded='mdcRippleIsUnbounded'in this.root_.dataset}}class i{}i.prototype.root_,i.prototype.unbounded,i.prototype.disabled},function(a,b,c){'use strict';var d=c(0);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class e{static attachTo(a){return new e(a,new d.a())}constructor(a,b=void 0,...c){this.root_=a,this.initialize(...c),this.foundation_=b===void 0?this.getDefaultFoundation():b,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error('Subclasses must override getDefaultFoundation to return a properly configured foundation class')}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(a,b){this.root_.addEventListener(a,b)}unlisten(a,b){this.root_.removeEventListener(a,b)}emit(a,b,c=!1){let d;'function'==typeof CustomEvent?d=new CustomEvent(a,{detail:b,bubbles:c}):(d=document.createEvent('CustomEvent'),d.initCustomEvent(a,c,!1,b)),this.root_.dispatchEvent(d)}}b.a=e},function(a,b,c){'use strict';var d=c(0),e=c(1),f=c(9),g=c(2);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const h=['touchstart','pointerdown','mousedown','keydown'],i=['touchend','pointerup','mouseup'];let j=[];class k extends d.a{static get cssClasses(){return f.a}static get strings(){return f.c}static get numbers(){return f.b}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(a){super(Object.assign(k.defaultAdapter,a)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(a)=>this.activate_(a),this.deactivateHandler_=(a)=>this.deactivate_(a),this.focusHandler_=()=>this.handleFocus(),this.blurHandler_=()=>this.handleBlur(),this.resizeHandler_=()=>this.layout(),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()},this.previousActivationEvent_=null}supportsPressRipple_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}init(){const a=this.supportsPressRipple_();if(this.registerRootHandlers_(a),a){const{ROOT:a,UNBOUNDED:b}=k.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(a),this.adapter_.isUnbounded()&&(this.adapter_.addClass(b),this.layoutInternal_())})}}destroy(){if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(k.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(k.cssClasses.FG_DEACTIVATION));const{ROOT:a,UNBOUNDED:b}=k.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(a),this.adapter_.removeClass(b),this.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}registerRootHandlers_(a){a&&(h.forEach((a)=>{this.adapter_.registerInteractionHandler(a,this.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler('focus',this.focusHandler_),this.adapter_.registerInteractionHandler('blur',this.blurHandler_)}registerDeactivationHandlers_(a){'keydown'===a.type?this.adapter_.registerInteractionHandler('keyup',this.deactivateHandler_):i.forEach((a)=>{this.adapter_.registerDocumentInteractionHandler(a,this.deactivateHandler_)})}deregisterRootHandlers_(){h.forEach((a)=>{this.adapter_.deregisterInteractionHandler(a,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler('focus',this.focusHandler_),this.adapter_.deregisterInteractionHandler('blur',this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler('keyup',this.deactivateHandler_),i.forEach((a)=>{this.adapter_.deregisterDocumentInteractionHandler(a,this.deactivateHandler_)})}removeCssVars_(){const{strings:a}=k;Object.keys(a).forEach((b)=>{0===b.indexOf('VAR_')&&this.adapter_.updateCssVariable(a[b],null)})}activate_(a){if(this.adapter_.isSurfaceDisabled())return;const b=this.activationState_;if(!b.isActivated){const c=this.previousActivationEvent_,d=c&&a&&c.type!==a.type;if(!d){b.isActivated=!0,b.isProgrammatic=null===a,b.activationEvent=a,b.wasActivatedByPointer=!b.isProgrammatic&&('mousedown'===a.type||'touchstart'===a.type||'pointerdown'===a.type);const c=a&&0<j.length&&j.some((a)=>this.adapter_.containsEventTarget(a));return c?void this.resetActivationState_():void(a&&(j.push(a.target),this.registerDeactivationHandlers_(a)),b.wasElementMadeActive=this.checkElementMadeActive_(a),b.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{j=[],b.wasElementMadeActive||' '!==a.key&&32!==a.keyCode||(b.wasElementMadeActive=this.checkElementMadeActive_(a),b.wasElementMadeActive&&this.animateActivation_()),b.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())}))}}}checkElementMadeActive_(a){return!(a&&'keydown'===a.type)||this.adapter_.isSurfaceActive()}activate(a=null){this.activate_(a)}animateActivation_(){const{VAR_FG_TRANSLATE_START:a,VAR_FG_TRANSLATE_END:b}=k.strings,{FG_DEACTIVATION:c,FG_ACTIVATION:d}=k.cssClasses,{DEACTIVATION_TIMEOUT_MS:e}=k.numbers;this.layoutInternal_();let f='',g='';if(!this.adapter_.isUnbounded()){const{startPoint:a,endPoint:b}=this.getFgTranslationCoordinates_();f=`${a.x}px, ${a.y}px`,g=`${b.x}px, ${b.y}px`}this.adapter_.updateCssVariable(a,f),this.adapter_.updateCssVariable(b,g),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(c),this.adapter_.computeBoundingRect(),this.adapter_.addClass(d),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),e)}getFgTranslationCoordinates_(){const{activationEvent:a,wasActivatedByPointer:b}=this.activationState_;let c;c=b?Object(g.getNormalizedEventCoords)(a,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2},c={x:c.x-this.initialSize_/2,y:c.y-this.initialSize_/2};const d={x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2};return{startPoint:c,endPoint:d}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:a}=k.cssClasses,{hasDeactivationUXRun:b,isActivated:c}=this.activationState_;(b||!c)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(a),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(a)},f.b.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:a}=k.cssClasses;this.adapter_.removeClass(a),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=null,k.numbers.TAP_DELAY_MS)}deactivate_(a){const b=this.activationState_;if(!b.isActivated)return;const c=Object.assign({},b);if(b.isProgrammatic){requestAnimationFrame(()=>this.animateDeactivation_(null,c)),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(a,c),this.resetActivationState_()})}deactivate(a=null){this.deactivate_(a)}animateDeactivation_(a,{wasActivatedByPointer:b,wasElementMadeActive:c}){(b||c)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const a=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?a:(()=>{var a=Math.pow;const b=Math.sqrt(a(this.frame_.width,2)+a(this.frame_.height,2));return b+k.numbers.PADDING})(),this.initialSize_=a*k.numbers.INITIAL_ORIGIN_SCALE,this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){var a=Math.round;const{VAR_FG_SIZE:b,VAR_LEFT:c,VAR_TOP:d,VAR_FG_SCALE:e}=k.strings;this.adapter_.updateCssVariable(b,`${this.initialSize_}px`),this.adapter_.updateCssVariable(e,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:a(this.frame_.width/2-this.initialSize_/2),top:a(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(c,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(d,`${this.unboundedCoords_.top}px`))}setUnbounded(a){const{UNBOUNDED:b}=k.cssClasses;a?this.adapter_.addClass(b):this.adapter_.removeClass(b)}handleFocus(){requestAnimationFrame(()=>this.adapter_.addClass(k.cssClasses.BG_FOCUSED))}handleBlur(){requestAnimationFrame(()=>this.adapter_.removeClass(k.cssClasses.BG_FOCUSED))}}b.a=k},function(a,b,c){'use strict';c.d(b,'a',function(){return d}),c.d(b,'c',function(){return e}),c.d(b,'b',function(){return f});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const d={ROOT:'mdc-ripple-upgraded',UNBOUNDED:'mdc-ripple-upgraded--unbounded',BG_FOCUSED:'mdc-ripple-upgraded--background-focused',FG_ACTIVATION:'mdc-ripple-upgraded--foreground-activation',FG_DEACTIVATION:'mdc-ripple-upgraded--foreground-deactivation'},e={VAR_LEFT:'--mdc-ripple-left',VAR_TOP:'--mdc-ripple-top',VAR_FG_SIZE:'--mdc-ripple-fg-size',VAR_FG_SCALE:'--mdc-ripple-fg-scale',VAR_FG_TRANSLATE_START:'--mdc-ripple-fg-translate-start',VAR_FG_TRANSLATE_END:'--mdc-ripple-fg-translate-end'},f={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300}}]);