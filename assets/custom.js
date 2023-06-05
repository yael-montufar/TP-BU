$('.exercises-banner__dot > a').click(function (e) {
    e.preventDefault();
    $(this).next('.exercises-banner__modal').addClass('open');
    $(this).find('.svg').addClass('active');
    $(this).find('.exercises-banner__label').css('display', 'none');
});
$('.modal-close').click(function (e) {
    e.preventDefault();
    $('.exercises-banner__modal').removeClass('open');
    $('.exercises-banner__dot > a svg').removeClass('active');
    $('.exercises-banner__label').css('display', 'block');

});
setTimeout(function(){
    $(document).mouseup(function (e) {
        if($('.exercises-banner__modal').hasClass('open')) {
            var div = $('#exercises-banner__modal-click');
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $('.exercises-banner__modal').removeClass('open');
                $('.exercises-banner__dot > a svg').removeClass('active');
                $('.exercises-banner__label').css('display', 'block');
            }
        }
    });
});

setTimeout(function(){
	[].forEach.call(document.getElementsByClassName('iframe-lightbox-link'), function (el) {
    	// eslint-disable-next-line
    	el.lightbox = new IframeLightbox(el);
	});
}, 3000);

setTimeout(function () {
  if ($('.exercises-box').length > 0) {
    var allItems = $('.exercises__tile');

    var allItemsWithAccesories = $(
      ".exercises__tile[data-with-accesories='true']",
    );
    var allItemsWithoutAccesories = $(
      ".exercises__tile[data-without-accesories='true']",
    );
    var allItemsCategoryNeck = $(
      ".exercises__tile[data-category-neck='true']",
    );
    var allItemsCategoryShoulders = $(
      ".exercises__tile[data-category-shoulders='true']",
    );
    var allItemsCategoryLowerBack = $(
      ".exercises__tile[data-category-lower-back='true']",
    );
    var activityTrengthening = $(
      ".exercises__tile[data-activity-trengthening='true']",
    );
    var activityStretching = $(
      ".exercises__tile[data-activity-stretching='true']",
    );

    if ($('.filters').length > 0) {
      // all count for group
      $('.filters').find("[data-count='gr-1-cnt-1']").html(allItems.length);
      $('.exercises-status__count i').html(allItems.length)
      $('.filters').find("[data-count='gr-2-cnt-1']").html(allItemsCategoryNeck.length + allItemsCategoryShoulders.length + allItemsCategoryLowerBack.length);
      $('.filters').find("[data-count='gr-3-cnt-1']").html(activityTrengthening.length + activityStretching.length);

      // count items
      $('.filters')
        .find("[data-count='gr-1-cnt-2']")
        .html(allItemsWithAccesories.length);
      $('.filters')
        .find("[data-count='gr-1-cnt-3']")
        .html(allItemsWithoutAccesories.length);
      $('.filters')
        .find("[data-count='gr-2-cnt-2']")
        .html(allItemsCategoryNeck.length);
      $('.filters')
        .find("[data-count='gr-2-cnt-3']")
        .html(allItemsCategoryShoulders.length);
      $('.filters')
        .find("[data-count='gr-2-cnt-4']")
        .html(allItemsCategoryLowerBack.length);
      $('.filters')
        .find("[data-count='gr-3-cnt-2']")
        .html(activityTrengthening.length);
      $('.filters')
        .find("[data-count='gr-3-cnt-3']")
        .html(activityStretching.length);

      $(document).on(
          'click',
          '#filter-reset',
          function (event) {
            $('.filters__item--checkbox').each(function (index, element) {
              $(this).find('input:checkbox').prop('checked', false)
            });

            $('.exercises__tile').each(function (index, elem) {
              $(this).addClass('show');
            });

            $('.exercises-status__list').empty();

            $( `<li class="exercises-status__item">All</li>`).appendTo(".exercises-status__list");
            $('.exercises-status__count i').html(allItems.length)
      });

      $(document).on(
        'click',
        '.filters__item--checkbox input',
        function (event) {
          

          allChecked(this, 'AllGr1');
          allChecked(this, 'AllGr2');
          allChecked(this, 'AllGr3');

          $(this).parent().parent().find('input').each(function (index, elem) {
            if (!$(elem).is(':checked')) {
              $(this).parent().parent().find('input:first').prop('checked', false);
            }
          })

          enableFilters();
        },
      );

      function allChecked(input, handle) {
        if ($(input).parent().data('handle') == handle) {
          if ($(input).is(':checked')) {
            $(input).parent().parent().find('input:checkbox').prop('checked', true);
          } else {
            $(input).parent().parent().find('input:checkbox').prop('checked', false);
          }
        }
      }
    }
  }

  if ($('.exercises-banner').length > 0) {
    if ($('.filters').length > 0) {
      $(document).on(
        'click',
        '.active-filter-on',
        function (event) {
          var them = this;

          $('.filters__item--checkbox').each(function (index, element) {
            $(this).find('input:checkbox').prop('checked', false)

            if ($(this).data('handle') === $(them).data('handle')) {
              $(this).find('input:checkbox').prop('checked', true);

              enableFilters();
            }
          });
        });
    }
  }

  function enableFilters(params) {
    var availabilityGlobalArr = [];
    var availabilityArr = [];
    var availabilityStatusArr = [];
    var countShow = 0;

    $('.filters__item--checkbox').each(function (index, element) {
      if ($(this).find('input').is(':checked')) {
        var thisParam = $(this).data('handle');
        var textCheck = $(this).find('label').text().trim();

        if (thisParam == 'AllGr1' || thisParam == 'withAccesories' || thisParam == 'withoutAccesories') {
          availabilityGlobalArr.push(thisParam);
        } else {
          availabilityArr.push(thisParam);
        }

        if (textCheck !== 'All') {
          availabilityStatusArr.push(textCheck);
        }
      }
    });

    $('.exercises__tile').each(function (index, elem) {
      $(this).removeClass('show');

      availabilityArr.forEach(element => {
        if ($(this).data(element)) {
          $(this).addClass('show');

          if (availabilityGlobalArr.length > 0) {
            $(this).removeClass('show');

            availabilityGlobalArr.forEach(element => {
              if ($(this).data(element)) {
                $(this).addClass('show');
              }
            });
          }
        }
      });

      availabilityGlobalArr.forEach(element => {
        if ($(this).data(element)) {
          $(this).addClass('show');

          if (availabilityArr.length > 0) {
            $(this).removeClass('show');

            availabilityArr.forEach(element => {
              if ($(this).data(element)) {
                $(this).addClass('show');
              }
            });
          }
        }
      });

      if (availabilityGlobalArr.length === 0 && availabilityArr.length === 0 ) {
        $(this).addClass('show');
      }
    });

    if (availabilityStatusArr.length > 0) {
      $('.exercises-status').addClass('show');
      $('.exercises-status__list').empty();

      availabilityStatusArr.forEach(element => {
        $( `<li class="exercises-status__item">${element}</li>`).appendTo(".exercises-status__list");
      });

      $('.exercises__tile').each(function (index, elem) {
        if ($(this).hasClass('show')) {
          countShow++;
        }
      });

      $('.exercises-status__count i').html(countShow)
    } else {
      $('.exercises-status__list').empty();

      $( `<li class="exercises-status__item">All</li>`).appendTo(".exercises-status__list");
      $('.exercises-status__count i').html(allItems.length)
    }
  }
});

$('.exercises__mobile-filters > a').click(function (e) {
    e.preventDefault();
    $('.exercises__sidebar').addClass('sidebar-active');
    $('html, body').addClass('bodyoff');
});
$('.filters__title-box > svg').click(function () {
    $('.exercises__sidebar').removeClass('sidebar-active');
    $('html, body').removeClass('bodyoff');
});
$('.exercises__filters-buttons-second').click(function (e) {
    e.preventDefault();
    $('.exercises__sidebar').removeClass('sidebar-active');
    $('html, body').removeClass('bodyoff');
});


$('.js-exercises-recommendations-slider').flickity({
    // options
    cellSelector: '.carousel-cell',
    cellAlign: 'left',
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    groupCells: 1
});

/**
 * JDEVM Scripts
 */
// var sticky = document.querySelector('.sticky');

// console.log('======================');
// console.log('__sticky.offsetTop: ', sticky.offsetTop);
// console.log('__sticky.offsetBottom: ', sticky.offsetTop + sticky.offsetHeight);
// console.log('======================');

// window.onscroll = function() {
//   var defaultClass = sticky.className;
//   var enabled = (defaultClass.indexOf(' active') === -1) 
//     ? defaultClass + ' active' 
//     : defaultClass;
//   var disabled = defaultClass.replaceAll(' active', '');
//   var max = document.documentElement.scrollTop + 700;
//   var min = max + sticky.offsetHeight;

//   if ( 
//     sticky.offsetTop < max ||
//     sticky.offsetTop > min
//   ) {
//     console.log('ENABLED');
//     sticky.setAttribute("class", enabled);
//   } else {
//     console.log('DISABLED');
//     sticky.setAttribute("class", disabled);
//   }
// }