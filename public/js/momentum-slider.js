!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):t.MomentumSlider=i()}(this,function(){"use strict";function t(t){this.o=o({},this.defaults,t),this.initHtml(),this.initValues(),this.initEvents(),this.updateClassnames()}window.addEventListener("touchmove",function(){}),t.prototype={defaults:{el:".ms-container",cssClass:"",vertical:!1,multiplier:1,bounceCoefficient:.3,bounceMax:100,loop:0,interactive:!0,reverse:!1,currentIndex:0},initHtml:function(){if(this.msContainer=i.str(this.o.el)?document.querySelector(this.o.el):this.o.el,this.o.range){for(var t='<div class="ms-container '+this.o.cssClass+'"><ul class="ms-track">',e=this.o.range[0];e<=this.o.range[1];e++)t+=i.fnc(this.o.rangeContent)?n(this.o.rangeContent(e)):n(e);t+="</ul></div>";var s=document.createElement("div");s.innerHTML=t,this.msContainer.appendChild(s.firstChild),this.msContainer=this.msContainer.lastChild}if(this.msContainer.classList.add("ms-container--"+(this.o.vertical?"vertical":"horizontal")),this.o.reverse&&this.msContainer.classList.add("ms-container--reverse"),this.msTrack=this.msContainer.children[0],this.msSlides=this.msTrack.children,this.step=this.o.vertical?this.msSlides[0].scrollHeight:this.msSlides[0].scrollWidth,this.sliderLength=this.msSlides.length,this.o.loop){var r,o,h;for(h=document.createDocumentFragment(),r=this.o.loop,o=this.sliderLength-r;r--;)h.appendChild(this.msSlides[o++].cloneNode(!0));for(this.msTrack.insertBefore(h,this.msTrack.firstChild),h=document.createDocumentFragment(),o=r=this.o.loop;r--;)h.appendChild(this.msSlides[o++].cloneNode(!0));this.msTrack.appendChild(h),this.sliderLength+=2*this.o.loop}this.sliderWidth=this.sliderLength*this.step},initValues:function(){this.boundMin=this.o.reverse?0:-this.step*(this.sliderLength-1),this.boundMax=this.o.reverse?this.step*(this.sliderLength-1):0,this.targetPosition=this.targetPosition||0,this.ticking=!1,this.enabled=!0,this.pointerActive=!1,this.pointerMoved=!1,this.trackingPoints=[],this.msTrack.style[this.o.vertical?"height":"width"]=this.sliderWidth+"px",this.currentIndex=(this.currentIndex||this.o.currentIndex)+this.o.loop,this.updateSlider(void 0,!0),this.renderTarget();for(var t=this.sliderLength;t--;)this.setStyle(t,this.currentIndex==t?0:-1)},initEvents:function(){this.o.interactive&&(this.msContainer.addEventListener("touchstart",this.onDown.bind(this)),this.msContainer.addEventListener("mousedown",this.onDown.bind(this)),document.addEventListener("touchmove",this.onMove.bind(this),!!h()&&{passive:!1}),document.addEventListener("touchend",this.onUp.bind(this)),document.addEventListener("touchcancel",this.stopTracking.bind(this)),document.addEventListener("mousemove",this.onMove.bind(this),!!h()&&{passive:!1}),document.addEventListener("mouseup",this.onUp.bind(this)),this.o.prevEl&&(this.prevEl=i.str(this.o.prevEl)?document.querySelector(this.o.prevEl):this.o.prevEl,this.prevEl.addEventListener("click",this.prev.bind(this))),this.o.nextEl&&(this.nextEl=i.str(this.o.nextEl)?document.querySelector(this.o.nextEl):this.o.nextEl,this.nextEl.addEventListener("click",this.next.bind(this)))),window.addEventListener("resize",this.onResize.bind(this))},prev:function(){this.enabled&&this.updateSlider(Math.round(this.targetPosition/this.step)*this.step+(this.o.reverse?-this.step:this.step))},next:function(){this.enabled&&this.updateSlider(Math.round(this.targetPosition/this.step)*this.step+(this.o.reverse?this.step:-this.step))},select:function(t){this.enabled&&this.updateSlider((t+this.o.loop)*(this.o.reverse?this.step:-this.step))},setStyleToNode:function(t,i,e,s){if(i){var n="";for(var r in i)"."==r[0]?this.setStyleToNode(t.querySelector(r),i[r],e,s):"transform"==r?i[r].forEach(function(t){for(var i in t)n+=i+"("+d(t[i],e,s),"rotate"==i?n+="deg":"translateX"!=i&&"translateY"!=i&&"translateZ"!=i||(n+="px"),n+=") "}):n=d(i[r],e,s),t.style[r]=n}},setStyle:function(t,e,s){this.setStyleToNode(this.msSlides[t],this.o.style,e,s),i.fnc(this.o.customStyles)&&this.o.customStyles(t,e,s)},renderTarget:function(){if(this.o.sync)for(var t,e=this.o.sync.length;e--;)(t=this.o.sync[e]).targetPosition=(t.o.reverse?-1:1)*this.targetPosition/this.sliderWidth*t.sliderWidth,t.renderTarget();var n=this.o.loop*this.step,r=this.sliderWidth-2*n;if(this.o.loop)if(-this.targetPosition<n)for(;-this.targetPosition<n;)this.targetPosition-=r;else if(-this.targetPosition>=n+r)for(;-this.targetPosition>=n+r;)this.targetPosition+=r;var o=(this.o.reverse?1:-1)*this.targetPosition/this.step;this.onChangeCurrentIndex(Math.round(o));var h=Math.floor(o),a=Math.ceil(o),d=o-h,c=o-a;i.und(this.lowerIndex)||this.lowerIndex==h||this.lowerIndex==a||this.setStyle(this.lowerIndex,1,!0),i.und(this.higherIndex)||this.higherIndex==h||this.higherIndex==a||this.setStyle(this.higherIndex,-1),h>=0&&h<this.sliderLength&&(this.setStyle(h,d,!0),this.lowerIndex=h),a>=0&&a<this.sliderLength&&(this.setStyle(a,c),this.higherIndex=a);var l="translate"+(this.o.vertical?"Y":"X")+"("+this.targetPosition+"px)";this.msTrack.style[s]=l},onDown:function(t){if(this.enabled&&!this.pointerActive){var i=a(t);this.pointerActive=!0,this.pointerId=i.id,this.pointerLastX=this.pointerCurrentX=i.x,this.pointerLastY=this.pointerCurrentY=i.y,this.trackingPoints=[],this.addTrackingPoint(this.pointerLastX,this.pointerLastY),this.animateInstance&&this.animateInstance.stop()}},onMove:function(t){if(this.enabled&&this.pointerActive){var i=a(t);if(i.id===this.pointerId){this.pointerCurrentX=i.x,this.pointerCurrentY=i.y;var e=this.pointerMoved;if(!this.pointerMoved){var s=Math.abs(Math.abs(this.pointerCurrentX)-Math.abs(this.pointerLastX))<Math.abs(Math.abs(this.pointerCurrentY)-Math.abs(this.pointerLastY));(this.o.vertical&&s||!this.o.vertical&&!s)&&(e=!0)}e?(t.preventDefault(),this.pointerMoved=!0,this.addTrackingPoint(this.pointerLastX,this.pointerLastY),this.requestTick()):this.stopTracking(-1)}}},onUp:function(t){if(this.enabled&&this.pointerActive&&a(t).id===this.pointerId){var i=t.target;if(this.msTrack.contains(i))for(;!i.matches(".ms-slide, .ms-track");)i=i.parentNode;var e=Array.prototype.indexOf.call(this.msSlides,i);this.pointerMoved||-1!==e&&(this.currentIndex=e,this.updateSlider()),this.stopTracking(e)}},onResize:function(){},stopTracking:function(t){this.pointerActive=!1,(this.pointerMoved||-1===t)&&(this.pointerMoved=!1,this.addTrackingPoint(this.pointerLastX,this.pointerLastY),this.startDecelAnim())},addTrackingPoint:function(t,i){for(var e=Date.now();this.trackingPoints.length>0&&!(e-this.trackingPoints[0].time<=100);)this.trackingPoints.shift();this.trackingPoints.push({x:t,y:i,time:e})},updateAndRender:function(){var t,i=this.o.vertical?this.pointerCurrentY-this.pointerLastY:this.pointerCurrentX-this.pointerLastX;if(this.targetPosition+=i*this.o.multiplier,this.o.bounceCoefficient){var e=this.checkBounds();0!==e&&(this.targetPosition-=i*(t=e,5e-6*Math.pow(t,2)+1e-4*t+.55)*this.o.multiplier)}else this.checkBounds(!0);this.renderTarget(),this.pointerLastX=this.pointerCurrentX,this.pointerLastY=this.pointerCurrentY,this.ticking=!1},requestTick:function(){this.ticking||requestAnimationFrame(this.updateAndRender.bind(this)),this.ticking=!0},checkBounds:function(t){var i=0;return void 0!==this.boundMin&&this.targetPosition<this.boundMin?i=this.boundMin-this.targetPosition:void 0!==this.boundMax&&this.targetPosition>this.boundMax&&(i=this.boundMax-this.targetPosition),t&&0!==i&&(this.targetPosition=i>0?this.boundMin:this.boundMax),i},startDecelAnim:function(){var t=this.trackingPoints[0],i=this.trackingPoints[this.trackingPoints.length-1],e=this.o.vertical?i.y-t.y:i.x-t.x,s=(i.time-t.time)/15/this.o.multiplier;this.decVel=e/s||0;var n=this.targetPosition+12*this.decVel,r=n%this.step;n-=r,Math.abs(r)>this.step/2&&(n+=(r>0?1:-1)*this.step),this.updateSlider(n)},fixCurrentIndex:function(){this.o.loop&&(this.currentIndex<this.o.loop?this.currentIndex=this.sliderLength-this.o.loop+(this.currentIndex-this.o.loop):this.currentIndex>this.sliderLength-this.o.loop-1&&(this.currentIndex=this.currentIndex+2*this.o.loop-this.sliderLength))},updateSlider:function(t,e){i.und(t)?t=(this.o.reverse?1:-1)*this.currentIndex*this.step:this.currentIndex=(this.o.reverse?1:-1)*t/this.step,this.fixCurrentIndex(),t!==this.targetPosition&&(this.updateClassnames(),this.animateTarget(t,e))},updateClassnames:function(){this.prevEl&&(0===this.currentIndex?this.prevEl.classList.add("ms-first"):this.prevEl.classList.remove("ms-first")),this.nextEl&&(this.currentIndex===this.sliderLength-1?this.nextEl.classList.add("ms-last"):this.nextEl.classList.remove("ms-last"))},animateTarget:function(t,e,s){this.animateInstance&&this.animateInstance.stop();var n=this,r=this.targetPosition,o=t;this.animateInstance=function(t,e,s){if(e){var n=performance.now(),r=null,o=!1,h=function(a){var d=(a-n)/e;d<0&&(d=0),d>1&&(d=1),i.fnc(s)&&(d=s(d)),t(d),1===d||o||(r=requestAnimationFrame(h))};return r=requestAnimationFrame(h),new function(){this.stop=function(){r&&cancelAnimationFrame(r),o=!0}}}t(1)}(function(t){n.targetPosition=o>r?r+(o-r)*t:r-(r-o)*t;var i=n.o.reverse?0:-(n.sliderLength-1)*n.step,e=n.o.reverse?(n.sliderLength-1)*n.step:0;!s&&!n.o.loop&&n.o.bounceCoefficient&&(n.targetPosition>e&&n.targetPosition>e+Math.min((o-e)*n.o.bounceCoefficient,n.o.bounceMax)||n.targetPosition<i&&n.targetPosition<i-Math.min(-(o-i)*n.o.bounceCoefficient,n.o.bounceMax))?(n.animateInstance.stop(),n.animateTarget(n.targetPosition<i?i:e,!1,!0),n.currentIndex=n.targetPosition<i?0:n.sliderLength-1):n.renderTarget()},e?0:500,function(t){return t*(2-t)})},onChangeCurrentIndex:function(t){var e=this.o.loop?t-this.o.loop:t;e=e===this.sliderLength-2*this.o.loop?0:e,i.fnc(this.o.change)&&e!==this.lastCurrentIndex&&(this.o.change(e,this.lastCurrentIndex),this.lastCurrentIndex=e)},getCurrentIndex:function(){return this.o.loop?this.currentIndex-this.o.loop:this.currentIndex},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1}};var i={arr:function(t){return Array.isArray(t)},str:function(t){return"string"==typeof t},und:function(t){return void 0===t},fnc:function(t){return"function"==typeof t}};var e="transform",s=function(t,i){if(i in t.style)return getComputedStyle(t).getPropertyValue(i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}(document.body,e)?e:"-webkit-"+e;function n(t){return'<li class="ms-slide">'+t+"</li>"}function r(t,e){for(var s in e)t[s]=i.arr(e[s])?e[s].slice(0):e[s];return t}function o(t){t||(t={});for(var i=1;i<arguments.length;i++)r(t,arguments[i]);return t}function h(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,i)}catch(t){}return h=function(){return t},t}function a(t){if("touchmove"===t.type||"touchstart"===t.type||"touchend"===t.type){var i=t.targetTouches[0]||t.changedTouches[0];return{x:i.clientX,y:i.clientY,id:i.identifier}}return{x:t.clientX,y:t.clientY,id:null}}function d(t,i,e){var s=t[0],n=t[1],r=t[2]||s,o=e?n-s:n-r;return e?n-o*i:n+o*i}return o(t,{extend:o,transformProperty:s,getCurrentValue:d})});