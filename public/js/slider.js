$.getJSON("https://www.symbioenergy.co.uk/backend/index.php/api/home/slider",function(e){var t=e.response.slider.sliderData.sliderBgText,s=e.response.slider.sliderData.sliderTitleText,i=e.response.slider.sliderData.sliderButtonText,r=e.response.slider.sliderData.sliderButtonLink,a=e.response.slider.sliderData.sliderLink,n=t.length-1,o=document.querySelector(".sliders-container"),l=new MomentumSlider({el:o,cssClass:"ms--numbers",range:[0,n],rangeContent:function(e){return t[e]},style:{transform:[{scale:[.4,1]}],opacity:[0,1]},interactive:!1}),d=new MomentumSlider({el:o,cssClass:"ms--titles",range:[0,n],rangeContent:function(e){return"<h3>"+s[e]+"</h3>"},vertical:!0,reverse:!0,style:{opacity:[0,1]},interactive:!1}),c=new MomentumSlider({el:o,cssClass:"ms--links",range:[0,n],rangeContent:function(e){return '<a class="glow font-size-1pt2rem" href="'+r[e]+'">'+ i[e] +'</a>';},vertical:!0,interactive:!1}),g=document.querySelector(".pagination"),p=[].slice.call(g.children),f=new MomentumSlider({el:o,cssClass:"ms--images",range:[0,n],rangeContent:function(e){return'<div class="ms-slide__image-container"><img src='+a[e]+' alt="" class="ms-slide__image" /></div>'},sync:[l,d,c],style:{".ms-slide__image":{transform:[{scale:[1.5,1]}]}},change:function(e,t){void 0!==t&&p[t].classList.remove("pagination__item--active"),p[e].classList.add("pagination__item--active")}});g.addEventListener("click",function(e){if(e.target.matches(".pagination__button")){var t=p.indexOf(e.target.parentNode);f.select(t)}})});