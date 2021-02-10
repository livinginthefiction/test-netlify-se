// window.onload = function () {

    $.getJSON("https://www.symbioenergy.co.uk/backend/index.php/api/business/slider", function(json) {
        var savingText = json.response.slider.sliderData.sliderBgText; 
        var titles = json.response.slider.sliderData.sliderTitleText;
        var but = json.response.slider.sliderData.sliderButtonText;
        var butlink = json.response.slider.sliderData.sliderButtonLink;
        var imgImage = json.response.slider.sliderData.sliderLink;

        var a = savingText.length-1;

  
    var slidersContainer = document.querySelector('.sliders-container');

    // Initializing the numbers slider
    // var savingText = [
    //     'Save £600',
    //     'Save £1000',
    //     'Save £600',
    //     'Save £600'
    // ];

    var msNumbers = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--numbers',
        range: [0, a],
        rangeContent: function (i) {
          //  return '0' + i;
          return savingText[i];
        },
        style: {
            transform: [{scale: [0.4, 1]}],
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the titles slider
    // var titles = [
    //     'Are you buring money on high electricity bills.',
    //     'The ability to adapt to change.',
    //     'Join the Revolution!',
    //     'Paying high electricity bills!'
    // ];
    var msTitles = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--titles',
        range: [0, a],
        rangeContent: function (i) {
            return '<h3>'+ titles[i] +'</h3>';
        },
        vertical: true,
        reverse: true,
        style: {
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the links slider
    var msLinks = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--links',
        range: [0, a],
        rangeContent: function (i) {
            // return '<a class="ms-slide__link">View Case</a>'+
            return '<a class="glow font-size-1pt2rem" href="'+butlink[i]+'">'+ but[i] +'</a>';

        },
        vertical: true,
        interactive: false
    });

    // Get pagination items
    var pagination = document.querySelector('.pagination');
    var paginationItems = [].slice.call(pagination.children);

    // var imgImage = [
    //     'images/slider-img/cash-1.gif',
    //     'images/slider-img/business-2.jpg',
    //     'images/slider-img/dual-fuel.png',
    //     'images/slider-img/home-slider-1.jpg'
    // ];

    // Initializing the images slider
    var msImages = new MomentumSlider({
        // Element to append the slider
        el: slidersContainer,
        // CSS class to reference the slider
        cssClass: 'ms--images',
        // Generate the 4 slides required
        range: [0, a],
        rangeContent: function (a) {
            //return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
            return '<div class="ms-slide__image-container"><img src='+imgImage[a]+' alt="" class="ms-slide__image" /></div>';
        },
        // Syncronize the other sliders
        sync: [msNumbers, msTitles, msLinks],
        // Styles to interpolate as we move the slider
        style: {
            '.ms-slide__image': {
                transform: [{scale: [1.5, 1]}]
            }
        },
        // Update pagination if slider change
        change: function(newIndex, oldIndex) {
            if (typeof oldIndex !== 'undefined') {
                paginationItems[oldIndex].classList.remove('pagination__item--active');
            }
            paginationItems[newIndex].classList.add('pagination__item--active');
        }
    });

    // Select corresponding slider item when a pagination button is clicked
    pagination.addEventListener('click', function(e) {
        if (e.target.matches('.pagination__button')) {
            var index = paginationItems.indexOf(e.target.parentNode);
            msImages.select(index);
        }
    });
// }

});