   /*Canvas get quote button*/
  
  // const LiquidButton = class LiquidButton {
  //   constructor(button) {
  //     const { width, height } = button.getBoundingClientRect();
  //     const buttonStyles = window.getComputedStyle(button);
  //     console.log()
  //     const options = button.dataset || {};
  
  //     this.font = `${buttonStyles['font-size']} ${buttonStyles['font-family']}`;
  //     console.log(this.font);
  //     this.tension = options.tension || 0.4;
  //     this.width = width;
  //     this.height = height;
  //     this.margin = options.margin || 50;
  //     // assume the padding it the same all around
  //     this.padding = parseFloat(buttonStyles.paddingRight);
  //     this.hoverFactor = options.hoverFactor || 0.5;
  //     this.gap = options.gap || 5;
  //     this.debug = options.debug || false;
  //     this.forceFactor = options.forceFactor || 0.2;
  //     // this.color1 = options.color1 || '#36DFE7';
  //     // this.color2 = options.color2 || '#8F17E1';
  //     // this.color3 = options.color3 || '#E509E6';
  //     // this.color1 = options.color1 || '#ffc600';
  //     // this.color2 = options.color2 || '#8F17E1';
  //     // this.color3 = options.color3 || '#E509E6';
  //     this.color1 = options.color1 || '#F44E3A';
  //     this.color2 = options.color2 || '#4572D3';
  //     this.color3 = options.color3 || '#041a72';
  //     this.textColor = buttonStyles.color || '#FFFFFF';
  //     this.layers = [{
  //       points: [],
  //       viscosity: 0.5,
  //       mouseForce: 100,
  //       forceLimit: 2,
  //     }, {
  //       points: [],
  //       viscosity: 0.8,
  //       mouseForce: 150,
  //       forceLimit: 3,
  //     }];
  //     this.text = button.textContent;
  //     this.canvas = options.canvas || document.createElement('canvas');
  //     this.context = this.canvas.getContext('2d');
  //     // this.wrapperElement = options.wrapperElement || document.body;
  //     // if (!this.canvas.parentElement) {
  //     //   this.wrapperElement.append(this.canvas);
  //     // }
  //     button.append(this.canvas)
  //     this.touches = [];
  //     this.noise = options.noise || 0;
  //     button.addEventListener('mousemove', this.mousemove);
  //     button.addEventListener('mouseout', this.mouseout);
  //     this.initOrigins();
  //     this.animate();
  //     this.restingFace();
  //   }
  
  //   restingFace() {
  //     // force a mouse move on each button
  //     this.mousemove({ offsetX: Math.random() * this.width, offsetY: 1 })
  //   }
  
  //   get mousemove() {
  //     return (e) => {
  //       this.touches = [{
  //         x: e.offsetX,
  //         y: e.offsetY,
  //         z: 0,
  //         force: 1,
  //       }];
  //     };
  //   }
  
  //   get mouseout() {
  //     return (e) => {
  //       this.touches = [];
  //       this.restingFace();
  //     };
  //   }
  
  //   get raf() {
  //     return this.__raf || (this.__raf = (
  //       window.requestAnimationFrame ||
  //       window.webkitRequestAnimationFrame ||
  //       window.mozRequestAnimationFrame ||
  //       function (callback) { setTimeout(callback, 10) }
  //     ).bind(window));
  //   }
  
  //   distance(p1, p2) {
  //     return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  //   }
  
  //   update() {
  //     for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
  //       const layer = this.layers[layerIndex];
  //       const points = layer.points;
  //       for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
  //         const point = points[pointIndex];
  //         const dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;
  //         const dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;
  //         const d = Math.sqrt(dx * dx + dy * dy);
  //         const f = d * this.forceFactor;
  //         point.vx += f * ((dx / d) || 0);
  //         point.vy += f * ((dy / d) || 0);
  //         for (let touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
  //           const touch = this.touches[touchIndex];
  //           let mouseForce = layer.mouseForce;
  //           if (
  //             touch.x > this.margin &&
  //             touch.x < this.margin + this.width &&
  //             touch.y > this.margin &&
  //             touch.y < this.margin + this.height
  //           ) {
  //             mouseForce *= -this.hoverFactor;
  //           }
  //           const mx = point.x - touch.x;
  //           const my = point.y - touch.y;
  //           const md = Math.sqrt(mx * mx + my * my);
  //           const mf = Math.max(-layer.forceLimit, Math.min(layer.forceLimit, (mouseForce * touch.force) / md));
  //           point.vx += mf * ((mx / md) || 0);
  //           point.vy += mf * ((my / md) || 0);
  //         }
  //         point.vx *= layer.viscosity;
  //         point.vy *= layer.viscosity;
  //         point.x += point.vx;
  //         point.y += point.vy;
  //       }
  //       for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
  //         const prev = points[(pointIndex + points.length - 1) % points.length];
  //         const point = points[pointIndex];
  //         const next = points[(pointIndex + points.length + 1) % points.length];
  //         const dPrev = this.distance(point, prev);
  //         const dNext = this.distance(point, next);
  
  //         const line = {
  //           x: next.x - prev.x,
  //           y: next.y - prev.y,
  //         };
  //         const dLine = Math.sqrt(line.x * line.x + line.y * line.y);
  
  //         point.cPrev = {
  //           x: point.x - (line.x / dLine) * dPrev * this.tension,
  //           y: point.y - (line.y / dLine) * dPrev * this.tension,
  //         };
  //         point.cNext = {
  //           x: point.x + (line.x / dLine) * dNext * this.tension,
  //           y: point.y + (line.y / dLine) * dNext * this.tension,
  //         };
  //       }
  //     }
  //   }
  
  //   animate() {
  //     this.raf(() => {
  //       this.update();
  //       this.draw();
  //       this.animate();
  //     });
  //   }
  
  //   draw() {
  //     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //     for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
  //       const layer = this.layers[layerIndex];
  //       if (layerIndex === 1) {
  //         if (this.touches.length > 0) {
  //           const gx = this.touches[0].x;
  //           const gy = this.touches[0].y;
  //           layer.color = this.context.createRadialGradient(gx, gy, this.height * 2, gx, gy, 0);
  //           layer.color.addColorStop(0, this.color2);
  //           layer.color.addColorStop(1, this.color3);
  //         } else {
  //           layer.color = this.color2;
  //         }
  //       } else {
  //         layer.color = this.color1;
  //       }
  //       const points = layer.points;
  //       this.context.fillStyle = layer.color;
  
  //       this.context.beginPath();
  //       this.context.moveTo(points[0].x, points[0].y);
  //       for (let pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
  //         this.context.bezierCurveTo(
  //           points[(pointIndex + 0) % points.length].cNext.x,
  //           points[(pointIndex + 0) % points.length].cNext.y,
  //           points[(pointIndex + 1) % points.length].cPrev.x,
  //           points[(pointIndex + 1) % points.length].cPrev.y,
  //           points[(pointIndex + 1) % points.length].x,
  //           points[(pointIndex + 1) % points.length].y
  //         );
  //       }
  //       this.context.fill();
  //     }
  //     this.context.fillStyle = this.textColor;
  //     // this.context.font = '100 ' + (this.height - this.padding * 2) + 'px ' + this.fontFamily;
  //     this.context.font = this.font;
  //     this.context.textAlign = 'center';
  //     this.context.textBaseline = 'middle';
  //     this.context.text
  //     // this.context.fillText(this.text, this.canvas.width / 2, this.canvas.height / 2, this.width - this.padding);
  //     if (this.debug) {
  //       this.drawDebug();
  //     }
  //   }
  
  //   drawDebug() {
  //     this.context.fillStyle = 'rgba(255, 255, 255, 0.8)';
  //     this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  //     for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
  //       const layer = this.layers[layerIndex];
  //       const points = layer.points;
  //       for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
  //         if (layerIndex === 0) {
  //           this.context.fillStyle = this.color1;
  //         } else {
  //           this.context.fillStyle = this.color2;
  //         }
  //         const point = points[pointIndex];
  //         this.context.fillRect(point.x, point.y, 1, 1);
  //         this.context.fillStyle = '#000';
  //         this.context.fillRect(point.cPrev.x, point.cPrev.y, 1, 1);
  //         this.context.fillRect(point.cNext.x, point.cNext.y, 1, 1);
  //         this.context.strokeStyle = 'rgba(0, 0, 0, 0.33)';
  //         this.context.strokeWidth = 0.5;
  //         this.context.beginPath();
  //         this.context.moveTo(point.cPrev.x, point.cPrev.y);
  //         this.context.lineTo(point.cNext.x, point.cNext.y);
  //         this.context.stroke();
  //       }
  //     }
  //   }
  
  //   createPoint(x, y) {
  //     return {
  //       x: x,
  //       y: y,
  //       ox: x,
  //       oy: y,
  //       vx: 0,
  //       vy: 0,
  //     };
  //   }
  
  //   initOrigins() {
  //     this.canvas.width = this.width + this.margin * 2;
  //     this.canvas.height = this.height + this.margin * 2;
  //     for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
  //       const layer = this.layers[layerIndex];
  //       const points = [];
  //       for (let x = ~~(this.height / 2); x < this.width - ~~(this.height / 2); x += this.gap) {
  //         points.push(this.createPoint(
  //           x + this.margin,
  //           this.margin
  //         ));
  //       }
  //       for (let alpha = ~~(this.height * 1.25); alpha >= 0; alpha -= this.gap) {
  //         const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
  //         points.push(this.createPoint(
  //           Math.sin(angle) * this.height / 2 + this.margin + this.width - this.height / 2,
  //           Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
  //         ));
  //       }
  //       for (let x = this.width - ~~(this.height / 2) - 1; x >= ~~(this.height / 2); x -= this.gap) {
  //         points.push(this.createPoint(
  //           x + this.margin,
  //           this.margin + this.height
  //         ));
  //       }
  //       for (let alpha = 0; alpha <= ~~(this.height * 1.25); alpha += this.gap) {
  //         const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
  //         points.push(this.createPoint(
  //           (this.height - Math.sin(angle) * this.height / 2) + this.margin - this.height / 2,
  //           Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
  //         ));
  //       }
  //       layer.points = points;
  //     }
  //   }
  // }
  
  // const buttons = document.querySelectorAll('.buttonCanvas');
  
  // buttons.forEach(button => {
  //   button.liquidButton = new LiquidButton(button);
  // })
  


  /*blog */

{
    const lineEq = (y2, y1, x2, x1, currentVal) => {
        // y = mx + b 
        var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
        return m * currentVal + b;
    };

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

    const setRange = (obj) => {
        for(let k in obj) {
            if( obj[k] == undefined ) {
                obj[k] = [0,0];
            }
            else if( typeof obj[k] === 'number' ) {
                obj[k] = [-1*obj[k],obj[k]];
            }
        }
    };

    // from http://www.quirksmode.org/js/events_properties.html#position
	const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
		if (!e) e = window.event;
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return { x : posx, y : posy }
	};
    
    class Item {
		constructor(el, options) {
            this.DOM = {el: el};

            this.options = {   
                image: {
                    translation : {x: -10, y: -10, z: 0},
                    rotation : {x: 0, y: 0, z: 0}
                },
                title: {
                    translation : {x: 20, y: 10, z: 0}
                },
                text: {
                    translation : {x: 20, y: 50, z: 0},
                    rotation : {x: 0, y: 0, z: -20}
                },
                deco: {
                    translation : {x: -20, y: 0, z: 0},
                    rotation : {x: 0, y: 0, z: 3}
                },
                shadow: {
                    translation : {x: 30, y: 20, z: 0},
                    rotation : {x: 0, y: 0, z: -2},
                    reverseAnimation : {duration: 2, ease: 'Back.easeOut'}
                },
                content: {
                    translation : {x: 5, y: 3, z: 0}
                }
            };
            Object.assign(this.options, options);

            this.DOM.animatable = {};
            this.DOM.animatable.image = this.DOM.el.querySelector('.box__img');
            this.DOM.animatable.title = this.DOM.el.querySelector('.box__title');
            this.DOM.animatable.text = this.DOM.el.querySelector('.box__text');
            this.DOM.animatable.deco = this.DOM.el.querySelector('.box__deco');
            this.DOM.animatable.shadow = this.DOM.el.querySelector('.box__shadow');
            this.DOM.animatable.content = this.DOM.el.querySelector('.box__content');
            
            this.initEvents();
        }
        initEvents() { 
            let enter = false;
            this.mouseenterFn = () => {
                if ( enter ) {
                    enter = false;
                };
                clearTimeout(this.mousetime);
                this.mousetime = setTimeout(() => enter = true, 40);
            };
            this.mousemoveFn = ev => requestAnimationFrame(() => {
                if ( !enter ) return;
                this.tilt(ev);
            });
            this.mouseleaveFn = (ev) => requestAnimationFrame(() => {
                if ( !enter || !allowTilt ) return;
                enter = false;
                clearTimeout(this.mousetime);

                for (let key in this.DOM.animatable ) {
                    if( this.DOM.animatable[key] == undefined || this.options[key] == undefined ) {continue;}
                    TweenMax.to(this.DOM.animatable[key],
                        this.options[key].reverseAnimation != undefined ? this.options[key].reverseAnimation.duration || 0 : 1.5, {
                        ease: this.options[key].reverseAnimation != undefined ? this.options[key].reverseAnimation.ease || 'Power2.easeOut' : 'Power2.easeOut',
                        x: 0,
                        y: 0,
                        z: 0,
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0
                    });
                }
            });
            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
        }
        tilt(ev) {
            if ( !allowTilt ) return;
            const mousepos = getMousePos(ev);
            // Document scrolls.
            const docScrolls = {
                left : document.body.scrollLeft + document.documentElement.scrollLeft, 
                top : document.body.scrollTop + document.documentElement.scrollTop
            };
            const bounds = this.DOM.el.getBoundingClientRect();
            // Mouse position relative to the main element (this.DOM.el).
            const relmousepos = { 
                x : mousepos.x - bounds.left - docScrolls.left, 
                y : mousepos.y - bounds.top - docScrolls.top 
            };
            
            // Movement settings for the animatable elements.
            for (let key in this.DOM.animatable) {
                if ( this.DOM.animatable[key] == undefined || this.options[key] == undefined ) {
                    continue;
                }
                
                let t = this.options[key] != undefined ? this.options[key].translation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
                    r = this.options[key] != undefined ? this.options[key].rotation || {x:0,y:0,z:0} : {x:0,y:0,z:0};

                setRange(t);
                setRange(r);
                
                const transforms = {
                    translation : {
                        x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
                        y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0],
                        z: (t.z[1]-t.z[0])/bounds.height*relmousepos.y + t.z[0],
                    },
                    rotation : {
                        x: (r.x[1]-r.x[0])/bounds.height*relmousepos.y + r.x[0],
                        y: (r.y[1]-r.y[0])/bounds.width*relmousepos.x + r.y[0],
                        z: (r.z[1]-r.z[0])/bounds.width*relmousepos.x + r.z[0]
                    }
                };

                TweenMax.to(this.DOM.animatable[key], 1.5, {
                    ease: 'Power1.easeOut',
                    x: transforms.translation.x,
                    y: transforms.translation.y,
                    z: transforms.translation.z,
                    rotationX: transforms.rotation.x,
                    rotationY: transforms.rotation.y,
                    rotationZ: transforms.rotation.z
                });
            }
        }
    }

    // class Overlay {
    //     constructor() {
    //         this.DOM = {el: document.querySelector('.overlay')};
    //         this.DOM.reveal = this.DOM.el.querySelector('.overlay__reveal');
    //         this.DOM.items = this.DOM.el.querySelectorAll('.overlay__item');
    //         this.DOM.close = this.DOM.el.querySelector('.overlay__close');
    //     } 
    //     show(contentItem) {
    //         this.contentItem = contentItem;
    //         this.DOM.el.classList.add('overlay--open');
    //         // show revealer
    //         TweenMax.to(this.DOM.reveal, .5, {
    //             ease: 'Power1.easeInOut',
    //             x: '0%',
    //             onComplete: () => {
    //                 // hide scroll
    //                 document.body.classList.add('preview-open');
    //                 // show preview
    //                 this.revealItem(contentItem);
    //                 // hide revealer
    //                 TweenMax.to(this.DOM.reveal, .5, {
    //                     delay: 0.2,
    //                     ease: 'Power3.easeOut',
    //                     x: '-100%'
    //                 });

    //                 this.DOM.close.style.opacity = 1;
    //             }
    //         });
    //     }
    //     revealItem() {
    //         this.contentItem.style.opacity = 1;

    //         let itemElems = [];
    //         itemElems.push(this.contentItem.querySelector('.box__shadow'));
    //         itemElems.push(this.contentItem.querySelector('.box__img'));
    //         itemElems.push(this.contentItem.querySelector('.box__title'));
    //         itemElems.push(this.contentItem.querySelector('.box__text'));
    //         itemElems.push(this.contentItem.querySelector('.box__deco'));
    //         itemElems.push(this.contentItem.querySelector('.overlay__content'));
            
    //         for (let el of itemElems) {
    //             if ( el == null ) continue;
    //             const bounds = el.getBoundingClientRect();
    //             const win = {width: window.innerWidth, height: window.innerHeight};
    //             TweenMax.to(el, lineEq(0.8, 1.2, win.width, 0, Math.abs(bounds.left+bounds.width - win.width)), {
    //                 ease: 'Expo.easeOut',
    //                 delay: 0.2,
    //                 startAt: {
    //                     x: `${lineEq(0, 800, win.width, 0, Math.abs(bounds.left+bounds.width - win.width))}`,
    //                     y: `${lineEq(-100, 100, win.height, 0, Math.abs(bounds.top+bounds.height - win.height))}`,
    //                     rotationZ: `${lineEq(5, 30, 0, win.width, Math.abs(bounds.left+bounds.width - win.width))}`
    //                 },
    //                 x: 0,
    //                 y: 0,
    //                 rotationZ: 0
    //             });
    //         }
    //     }
    //     hide() {
    //         this.DOM.el.classList.remove('overlay--open');

    //         // show revealer
    //         TweenMax.to(this.DOM.reveal, .5, {
    //             //delay: 0.15,
    //             ease: 'Power3.easeOut',
    //             x: '0%',
    //             onComplete: () => {
    //                 this.DOM.close.style.opacity = 0;
    //                 // show scroll
    //                 document.body.classList.remove('preview-open');
    //                 // hide preview
    //                 this.contentItem.style.opacity = 0;
    //                 // hide revealer
    //                 TweenMax.to(this.DOM.reveal, .5, {
    //                     delay: 0,
    //                     ease: 'Power3.easeOut',
    //                     x: '100%'
    //                 });
    //             }
    //         });
    //     }
    // }

    // class Grid {
    //     constructor(el) {
    //         this.DOM = {el: el};
    //         this.items = [];
    //         Array.from(this.DOM.el.querySelectorAll('a.grid__item')).forEach((item) => {
    //             const itemObj = new Item(item);
    //             this.items.push(itemObj);
    //             if ( !item.classList.contains('grid__item--noclick') ) {
    //                 itemObj.DOM.el.addEventListener('click', (ev) => {
    //                     ev.preventDefault();
    //                     this.openItem(document.querySelector(item.getAttribute('href')));
    //                 });
    //             }
    //         });

    //         this.overlay = new Overlay();
    //         this.overlay.DOM.close.addEventListener('click', () => this.closeItem());
    //     }
    //     openItem(contentItem) {
    //         if ( this.isPreviewOpen ) return;
    //         this.isPreviewOpen = true;
    //         allowTilt = false;
    //         this.overlay.show(contentItem);
    //         // "explode" grid..
    //         for (let item of this.items) {
    //             for (let key in item.DOM.animatable) {
    //                 const el = item.DOM.animatable[key];
    //                 if ( el ) {
    //                     const bounds = el.getBoundingClientRect();
                        
    //                     let x;
    //                     let y;
    //                     const win = {width: window.innerWidth, height: window.innerHeight};

    //                     if ( bounds.top + bounds.height/2 < win.height/2 - win.height*.1 ) {
    //                         //x = getRandomInt(-250,-50);
    //                         //y = getRandomInt(20,100)*-1;
    //                         x = -1*lineEq(20, 600, 0, win.width, Math.abs(bounds.left+bounds.width - win.width));
    //                         y = -1*lineEq(20, 600, 0, win.width, Math.abs(bounds.left+bounds.width - win.width));
    //                     }
    //                     else if ( bounds.top + bounds.height/2 > win.height/2 + win.height*.1 ) {
    //                         //x = getRandomInt(-250,-50);
    //                         //y = getRandomInt(20,100);
    //                         x = -1*lineEq(20, 600, 0, win.width, Math.abs(bounds.left+bounds.width - win.width));
    //                         y = lineEq(20, 600, 0, win.width, Math.abs(bounds.left+bounds.width - win.width))
    //                     }
    //                     else {
    //                         //x = getRandomInt(300,700)*-1;
    //                         x = -1*lineEq(10, 700, 0, win.width, Math.abs(bounds.left+bounds.width - win.width));
    //                         y = getRandomInt(-25,25);
    //                     }
                        
    //                     TweenMax.to(el, 0.4, {
    //                         ease: 'Power3.easeOut',
    //                         delay: lineEq(0, 0.3, 0, win.width, Math.abs(bounds.left+bounds.width - win.width)),
    //                         x: x,
    //                         y: y,
    //                         rotationZ: getRandomInt(-10,10),
    //                         opacity: 0
    //                     }); 
    //                 }
    //             }
    //         }
    //     }
    //     closeItem() {
    //         if ( !this.isPreviewOpen ) return;
    //         this.isPreviewOpen = false;
    //         this.overlay.hide();
            
    //         for (let item of this.items) {
    //             for (let key in item.DOM.animatable) {
    //                 const el = item.DOM.animatable[key];
    //                 if ( el ) {
    //                     const bounds = el.getBoundingClientRect();
    //                     const win = {width: window.innerWidth};
    //                     TweenMax.to(el, 0.6, {
    //                         ease: 'Expo.easeOut',
    //                         delay: .55 + lineEq(0, 0.2, 0, win.width, Math.abs(bounds.left+bounds.width - win.width)),
    //                         x: 0,
    //                         y: 0,
    //                         rotationZ: 0,
    //                         opacity: 1
    //                     }); 
    //                 }
    //             }
    //         }

    //         allowTilt = true;
    //     }
    // }

    let allowTilt = true;
    // new Grid(document.querySelector('.grid'));

    // Preload all the images in the page..
    // imagesLoaded(document.querySelectorAll('.box__img'), () => document.body.classList.remove('loading'));
}


/*Show Blog */
// $('#showBlog').change(function(){
//   var val = $(this).val();
//   $('.grid__item').hide();
//   $('.grid__item[data-name="' + val + '"]').show();

//   if(val == 'All'){
//     $('.grid__item').show();
//   }
// });