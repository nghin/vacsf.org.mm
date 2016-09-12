// asynchronously load fonts
WebFontConfig = {
  google: {
    families: ['PT Serif:400,400italic,700', 'PT Sans Narrow:400,700']
  }
};

(function(d) {
  var wf = d.createElement('script'), s = d.scripts[0];
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  s.parentNode.insertBefore(wf, s);
})(document);


$(document).ready(function(){

  $("body").addClass("js");

  // toggle overlay navigation
  $('.overlay__menu-trigger').on('click', function(){
    // in Firefox transitions break when parent overflow is changed, so we need to wait for the end of the transition to give the body an overflow hidden
    if( $('.overlay__menu').hasClass('is--visible') ) {
      $('.overlay__menu').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
      $('#screen').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    }
    else {
      $('.overlay__menu').addClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
      $('#screen').addClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    }
  });

  // close overlay navigation on button click
  $('.overlay__menu-close, #screen').on('click', function(){
    $('.overlay__menu').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    $('#screen').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
  });

  // open/close overlay navigation on focus
  $('.overlay__menu-item a').on('focus', function(){
    $('.overlay__menu').addClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    $('#screen').addClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
  });
  $('.overlay__menu-close').on('focus', function(){
    $('.overlay__menu').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    $('#screen').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
  });

  // close menu on [esc]
  $(document).on('keydown', function(e){
    if ( e.keyCode === 27 ) { // ESC key
      $('.overlay__menu').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
      $('#screen').removeClass('is--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    }
  });


  // move table of contents from post body to sidebar
  $(".post__body .js-toc").hide().appendTo($(".toc--sidebar")).fadeIn(400);


  // sticky sidebar
  $(".sticky").Stickyfill();


  // FitVids init
  $("#main").fitVids();


  // smooth scroll init
  $("a").smoothScroll({offset: -20});


  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");


  // Magnific-Popup options
	$('.image-popup').magnificPopup({
		disableOn: function() {
			if( $(window).width() < 500 ) {
				return false;
			}
			return true;
		},
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
		},
		removalDelay: 500, // Delay in milliseconds before popup is removed
		// Class that is added to body when popup is open.
		// make it unique to apply your CSS animations just to this exact popup
		mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});


  // lazy load settings
  $("img.load").show().lazyload({
  	effect: "fadeIn",
  	skip_invisible: false
  });


  // Bigfoot footnotes
  $.bigfoot();


  // home page auto typing
  $("#js-home-typed").typed({
    strings: ["<span class='glitch__title'>Hello^250 my name is&nbsp;Mî̽̿ͫc͑̔̃͂h͂̽ͤ̊ͭͣa͛̓̍̓el̓͌̂̀̆&nbsp;Rͩͤ͂̄o̾̽̈́͆ͨ̚s͋̌̊̐e. ^500</span> <span class='br'></span> I am just another boring, ^250 tattooed, ^250 time traveling designer from Buffalo New York.^500 <span class='br'></span> I enjoy eating chicken wings, ^500 <a href='paperfaces/'>sketching on an iPad</a>, ^500 and playing Xbox.^500 <span class='br'></span> Here you will find a collection of <a href='articles/'>my writing</a>, ^750 <a href='mastering-paper/'>Paper by FiftyThree tutorials</a>, ^750 and other <a href='work/'>creative endeavors</a>."],
    contentType: "html",
    startDelay: 0,
    backDelay: 3000,
    callback: function(){
      glitch_secondary();
    }
  });

  // 404 page auto typing
  $("#js-404-typed").typed({
    strings: ["<span class='glitch__title'>Your Pixels are on Another&nbsp;Canvas ^500</span> <span class='br'></span> Sorry, but the page you were trying to view has moved or does not exist -- perhaps you can <a href='../sitemap/' title='Made Mistakes sitemap'>find it here</a> or by searching below."],
    contentType: "html",
    startDelay: 0,
    backDelay: 3000,
    callback: function(){
      glitch_secondary();
    }
  });

  // reveal secondary container at auto typing completion
  function glitch_secondary(){
    $(".typed__secondary").css("opacity", "1");
  }

});


// Static comments
(function ($) {
  var $comments = $('.js-comments');

  $('#comment-form').submit(function () {
    var form = this;

    $(form).addClass('disabled');
    $('#comment-form-submit').html('<svg class="icon spin"><use xlink:href="#icon-loading"></use></svg> Loading...');

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        $('#comment-form-submit').html('Submitted');
        $('.post__comments-form .js-notice').removeClass('notice--danger').addClass('notice--success');
        showAlert('<strong>Thanks for your comment!</strong> It will show on the site once it has been approved.');
      },
      error: function (err) {
        console.log(err);
        $('#comment-form-submit').html('Submit Comment');
        $('.post__comments-form .js-notice').removeClass('notice--success').addClass('notice--danger');
        showAlert('<strong>Sorry, there was an error with your submission.</strong> Please make sure all required fields have been completed and try again.');
        $(form).removeClass('disabled');
      }
    });

    return false;
  });

  function showAlert(message) {
    $('.post__comments-form .js-notice').removeClass('hidden');
    $('.post__comments-form .js-notice-text').html(message);
  }
})(jQuery);
