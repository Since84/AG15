// Peek Slider JS

(function($){
	
	TileBrowser = Backbone.View.extend({
		el: '.tile-browser',

		defaults: {
			tileEl: ".tile-container"
			,linked: false
			,detail: true
		},

		events: {
			'click .filter' : 'doFilter'
			,'click .fullscreen' : 'toggleFullscreen'
			,'click .filter.active' : 'openMobileNav'
			,'click nav.open .filter.active' : 'closeMobileNav'
		},

		initialize: function(el, options){
			this.setOptions(el, options);
			var self = this;

			self.initIsotope();
			$(window).on('resize', function(){ self.reLayoutIsotope() });
			$('body').on('peekPaged', function(){ self.reLayoutIsotope() });
			
			if( $('.tile-control-bar').length ){

				var navTop = $('.tile-control-bar').offset().top;
				$(window).on ('scroll', function(){
					if( $(window).scrollTop() >= navTop ){
						$('.tile-browser').addClass('fixed');
					}else{
						$('.tile-browser').removeClass('fixed');
					}
				});

			}
		},
		setOptions: function(el, options){
			this.el = el ? el : this.el;
			
			if( options )
				for (var attr in options) { this.defaults[attr] = options[attr]; }
		},
		initIsotope: function(){
			$(this.defaults.tileEl).isotope({
				itemSelector: 	".box"
				,layoutMode: 	"masonry"
			})
		},
		reLayoutIsotope: function(el){
			$(this.defaults.tileEl).isotope('reLayout');
		},
		doFilter: function(e){
			var target = $(e.currentTarget).data('filter');
			var elem = ( target == "*" ) 
						? target
						: '.' + target;
			$(this.defaults.tileEl).isotope({filter:elem})

			$(e.currentTarget).addClass('active')
					.siblings().removeClass('active');

			$(e.currentTarget).parents('nav').removeClass('open');

		},
		toggleFullscreen: function(){
			var self = this;
			$('body').toggleClass('fullscreen-browser');
			setTimeout(function(){
				$(self.defaults.tileEl).isotope('reLayout');
				$('.tile-browser').toggleClass('fullscreen');
			}, 500);
		},
		openMobileNav: function(e){
			var navElem = $(e.currentTarget).parents('nav');
			navElem.addClass('open');
		},
		closeMobileNav: function(e){
			var navElem = $(e.currentTarget).parents('nav');
			navElem.removeClass('open');			
		}
	});

})(jQuery);