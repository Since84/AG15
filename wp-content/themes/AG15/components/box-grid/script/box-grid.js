// Peek Slider JS

(function($){
	
	var PeekSlider = Backbone.View.extend({
		el: '.peek-slider',

		defaults: {
			speed: 500,
			slide_class: ".slide"
		},

		events: {
			'click .next-button': 'goNext'
			,'click .prev-button': 'goPrev'
			// ,'peekPaged': 'p[ag'
		},

		initialize: function(){
			this.createGallery();
		}
		,createGallery: function(){
			this.defaults.active = $(this.defaults.slide_class).first();
			this.defaults.active.addClass('active');

			this.defaults.next 	= this.defaults.active.next();
			this.defaults.next2	= this.defaults.next.next();
			this.defaults.next.addClass('next');
			this.defaults.next2.addClass('next-next');

			this.defaults.prev 	= $(this.defaults.slide_class).last();
			this.defaults.prev2 = this.defaults.prev.prev();
			this.defaults.prev.addClass('prev');
			this.defaults.prev2.addClass('prev-prev');
		}
		,goNext: function(){
			//Strip Classes
			this.defaults.next2.removeClass('next-next');
			this.defaults.next.removeClass('next');	
			this.defaults.active.removeClass('active');
			this.defaults.prev.removeClass('prev');
			this.defaults.prev2.removeClass('prev-prev');

			// Reassign Positions
			this.defaults.prev2 	= this.defaults.prev;
			this.defaults.prev 		= this.defaults.active;
			this.defaults.active 	= this.defaults.next;
			this.defaults.next 		= this.defaults.next2;
			this.defaults.next2 	= this.defaults.next.next().length != 0
										? this.defaults.next.next() 
										: $(this.defaults.slide_class).first();
				
			// Add Classes
			this.defaults.next2.addClass('next-next');
			this.defaults.next.addClass('next');	
			this.defaults.active.addClass('active');
			this.defaults.prev.addClass('prev');
			this.defaults.prev2.addClass('prev-prev');

		}
		,goPrev: function(){
			this.defaults.prev2.removeClass('prev-prev');
			this.defaults.prev.removeClass('prev');	
			this.defaults.active.removeClass('active');
			this.defaults.next.removeClass('next');
			this.defaults.next2.removeClass('next-next');

			// Reassign Positions
			this.defaults.next2 	= this.defaults.next;
			this.defaults.next 		= this.defaults.active;
			this.defaults.active 	= this.defaults.prev;
			this.defaults.prev 		= this.defaults.prev2;
			this.defaults.prev2 	= this.defaults.prev.prev().length != 0
										? this.defaults.prev.prev() 
										: $(this.defaults.slide_class).last();
				
			// Add Classes
			this.defaults.next2.addClass('next-next');
			this.defaults.next.addClass('next');	
			this.defaults.active.addClass('active');
			this.defaults.prev.addClass('prev');
			this.defaults.prev2.addClass('prev-prev');
		}

	});

	$(document).ready(function(){
			var Slider = new PeekSlider;
	})

})(jQuery);